/**
 * Example: License API Hooks
 *
 * This file demonstrates the recommended pattern for creating
 * reusable API hooks for any resource in your application.
 *
 * Follow this pattern for:
 * - User management APIs
 * - Dashboard data APIs
 * - Transaction APIs
 * - Category APIs
 * - Goals APIs
 * - Reports APIs
 * - And any other API endpoints
 */

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/api-client";

// ============================================================================
// TYPES - Define all request/response types for this resource
// ============================================================================

export interface License {
  id: string;
  name: string;
  expiryDate: string;
  status: "active" | "expired";
}

export interface CreateLicensePayload {
  name: string;
  expiryDate: string;
}

export interface UpdateLicensePayload {
  name?: string;
  expiryDate?: string;
}

// ============================================================================
// QUERY HOOKS - For GET requests (fetching data)
// ============================================================================

/**
 * Hook for fetching all licenses
 * Query Key: ["licenses"]
 * Endpoint: GET /licenses
 */
export const useGetLicenses = () => {
  return useQuery<License[]>({
    queryKey: ["licenses"],
    queryFn: () => apiRequest<License[]>("GET", "/licenses"),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

/**
 * Hook for fetching a single license by ID
 * Query Key: ["licenses", licenseId]
 * Endpoint: GET /licenses/:id
 */
export const useGetLicense = (licenseId: string) => {
  return useQuery<License>({
    queryKey: ["licenses", licenseId],
    queryFn: () => apiRequest<License>("GET", `/licenses/${licenseId}`),
    staleTime: 1000 * 60 * 5, // 5 minutes
    enabled: !!licenseId, // Only run if licenseId exists
  });
};

// ============================================================================
// MUTATION HOOKS - For POST, PUT, DELETE requests (modifying data)
// ============================================================================

/**
 * Hook for creating a new license
 * Endpoint: POST /licenses
 * Invalidates: ["licenses"] query
 */
export const useCreateLicense = () => {
  const queryClient = useQueryClient();

  return useMutation<License, Error, CreateLicensePayload>({
    mutationFn: (data) => apiRequest<License>("POST", "/licenses", data),
    onSuccess: () => {
      // Invalidate the licenses list to refetch fresh data
      queryClient.invalidateQueries({ queryKey: ["licenses"] });
    },
  });
};

/**
 * Hook for updating an existing license
 * Endpoint: PUT /licenses/:id
 * Invalidates: ["licenses"] and ["licenses", licenseId] queries
 */
export const useUpdateLicense = () => {
  const queryClient = useQueryClient();

  return useMutation<
    License,
    Error,
    { id: string; data: UpdateLicensePayload }
  >({
    mutationFn: ({ id, data }) =>
      apiRequest<License>("PUT", `/licenses/${id}`, data),
    onSuccess: (_, variables) => {
      // Invalidate both the list and the specific item
      queryClient.invalidateQueries({ queryKey: ["licenses"] });
      queryClient.invalidateQueries({ queryKey: ["licenses", variables.id] });
    },
  });
};

/**
 * Hook for deleting a license
 * Endpoint: DELETE /licenses/:id
 * Invalidates: ["licenses"] query
 */
export const useDeleteLicense = () => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, string>({
    mutationFn: (id) => apiRequest<void>("DELETE", `/licenses/${id}`),
    onSuccess: () => {
      // Invalidate the licenses list to remove deleted item
      queryClient.invalidateQueries({ queryKey: ["licenses"] });
    },
  });
};
