/**
 * Generic API Hook Factory
 *
 * This module provides factories for creating reusable React Query hooks.
 * Simplifies creation of queries and mutations with standardized error handling
 * and caching behavior.
 *
 * Usage Examples:
 *
 * // For Query (GET requests)
 * const useGetUsers = createQueryHook(
 *   ["users"],
 *   () => apiRequest<User[]>("GET", "/users")
 * );
 *
 * // For Mutation (POST, PUT, DELETE requests)
 * const useCreateUser = createMutationHook<CreateUserPayload, User>(
 *   async (data) => apiRequest<User>("POST", "/users", data),
 *   ["users"] // invalidate this query key on success
 * );
 */

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import type {
  UseQueryOptions,
  UseMutationOptions,
} from "@tanstack/react-query";

/**
 * Factory for creating Query hooks
 * @param queryKey - Cache key for the query
 * @param queryFn - Async function that fetches the data
 * @param options - Additional React Query options
 * @returns Custom hook for fetching data
 */
export const createQueryHook = <T>(
  queryKey: (string | number | object)[],
  queryFn: () => Promise<T>,
  options?: Omit<UseQueryOptions<T>, "queryKey" | "queryFn">,
) => {
  return (enabled = true) => {
    return useQuery<T>({
      queryKey,
      queryFn,
      enabled,
      ...options,
    });
  };
};

/**
 * Factory for creating Mutation hooks
 * @param mutationFn - Async function that performs the mutation
 * @param invalidateKeys - Query keys to invalidate on success
 * @param options - Additional React Query options
 * @returns Custom hook for mutation
 */
export const createMutationHook = <TData, TVariables = void>(
  mutationFn: (variables: TVariables) => Promise<TData>,
  invalidateKeys?: (string | number)[],
  options?: Omit<UseMutationOptions<TData, Error, TVariables>, "mutationFn">,
) => {
  return () => {
    const queryClient = useQueryClient();

    return useMutation<TData, Error, TVariables>({
      mutationFn,
      onSuccess: () => {
        if (invalidateKeys?.length) {
          invalidateKeys.forEach((key) => {
            queryClient.invalidateQueries({ queryKey: [key] });
          });
        }
      },
      ...options,
    });
  };
};
