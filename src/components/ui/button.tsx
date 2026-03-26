import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:ring-3 focus-visible:ring-ring/50 active:translate-y-px disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
        outline:
          "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost:
          "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        link: "text-primary underline-offset-4 hover:underline",
      },
      color: {
        default: "",
        primary: "",
        accent: "",
        success: "",
        warning: "",
        danger: "",
      },
      size: {
        default:
          "h-10 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
        icon: "size-8",
        "icon-xs":
          "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
        "icon-lg": "size-9",
      },
    },
    compoundVariants: [
      // Primary color
      {
        color: "primary",
        variant: "default",
        className:
          "bg-[#4F46E5] text-white hover:bg-[#4338CA] focus-visible:ring-[#4F46E5]/50 dark:hover:bg-[#5B5FFF]",
      },
      {
        color: "primary",
        variant: "outline",
        className:
          "border-[#4F46E5] text-[#4F46E5] hover:bg-[#4F46E5]/10 dark:border-[#5B5FFF] dark:text-[#5B5FFF]",
      },
      {
        color: "primary",
        variant: "secondary",
        className:
          "bg-[#4F46E5]/10 text-[#4F46E5] hover:bg-[#4F46E5]/20 dark:bg-[#5B5FFF]/20 dark:text-[#5B5FFF]",
      },
      {
        color: "primary",
        variant: "ghost",
        className:
          "text-[#4F46E5] hover:bg-[#4F46E5]/10 dark:text-[#5B5FFF] dark:hover:bg-[#5B5FFF]/10",
      },
      {
        color: "primary",
        variant: "link",
        className: "text-[#4F46E5] dark:text-[#5B5FFF]",
      },
      // Accent color
      {
        color: "accent",
        variant: "default",
        className:
          "bg-[#0EA5E9] text-white hover:bg-[#0284C7] focus-visible:ring-[#0EA5E9]/50 dark:hover:bg-[#06B6D4]",
      },
      {
        color: "accent",
        variant: "outline",
        className:
          "border-[#0EA5E9] text-[#0EA5E9] hover:bg-[#0EA5E9]/10 dark:border-[#06B6D4] dark:text-[#06B6D4]",
      },
      {
        color: "accent",
        variant: "secondary",
        className:
          "bg-[#0EA5E9]/10 text-[#0EA5E9] hover:bg-[#0EA5E9]/20 dark:bg-[#06B6D4]/20 dark:text-[#06B6D4]",
      },
      {
        color: "accent",
        variant: "ghost",
        className:
          "text-[#0EA5E9] hover:bg-[#0EA5E9]/10 dark:text-[#06B6D4] dark:hover:bg-[#06B6D4]/10",
      },
      {
        color: "accent",
        variant: "link",
        className: "text-[#0EA5E9] dark:text-[#06B6D4]",
      },
      // Success color
      {
        color: "success",
        variant: "default",
        className:
          "bg-[#10B981] text-white hover:bg-[#059669] focus-visible:ring-[#10B981]/50 dark:hover:bg-[#34D399]",
      },
      {
        color: "success",
        variant: "outline",
        className:
          "border-[#10B981] text-[#10B981] hover:bg-[#10B981]/10 dark:border-[#34D399] dark:text-[#34D399]",
      },
      {
        color: "success",
        variant: "secondary",
        className:
          "bg-[#10B981]/10 text-[#10B981] hover:bg-[#10B981]/20 dark:bg-[#34D399]/20 dark:text-[#34D399]",
      },
      {
        color: "success",
        variant: "ghost",
        className:
          "text-[#10B981] hover:bg-[#10B981]/10 dark:text-[#34D399] dark:hover:bg-[#34D399]/10",
      },
      {
        color: "success",
        variant: "link",
        className: "text-[#10B981] dark:text-[#34D399]",
      },
      // Warning color
      {
        color: "warning",
        variant: "default",
        className:
          "bg-[#F59E0B] text-white hover:bg-[#D97706] focus-visible:ring-[#F59E0B]/50 dark:hover:bg-[#FBBF24]",
      },
      {
        color: "warning",
        variant: "outline",
        className:
          "border-[#F59E0B] text-[#F59E0B] hover:bg-[#F59E0B]/10 dark:border-[#FBBF24] dark:text-[#FBBF24]",
      },
      {
        color: "warning",
        variant: "secondary",
        className:
          "bg-[#F59E0B]/10 text-[#F59E0B] hover:bg-[#F59E0B]/20 dark:bg-[#FBBF24]/20 dark:text-[#FBBF24]",
      },
      {
        color: "warning",
        variant: "ghost",
        className:
          "text-[#F59E0B] hover:bg-[#F59E0B]/10 dark:text-[#FBBF24] dark:hover:bg-[#FBBF24]/10",
      },
      {
        color: "warning",
        variant: "link",
        className: "text-[#F59E0B] dark:text-[#FBBF24]",
      },
      // Danger color
      {
        color: "danger",
        variant: "default",
        className:
          "bg-[#EF4444] text-white hover:bg-[#DC2626] focus-visible:ring-[#EF4444]/50 dark:hover:bg-[#F87171]",
      },
      {
        color: "danger",
        variant: "outline",
        className:
          "border-[#EF4444] text-[#EF4444] hover:bg-[#EF4444]/10 dark:border-[#F87171] dark:text-[#F87171]",
      },
      {
        color: "danger",
        variant: "secondary",
        className:
          "bg-[#EF4444]/10 text-[#EF4444] hover:bg-[#EF4444]/20 dark:bg-[#F87171]/20 dark:text-[#F87171]",
      },
      {
        color: "danger",
        variant: "ghost",
        className:
          "text-[#EF4444] hover:bg-[#EF4444]/10 dark:text-[#F87171] dark:hover:bg-[#F87171]/10",
      },
      {
        color: "danger",
        variant: "link",
        className: "text-[#EF4444] dark:text-[#F87171]",
      },
    ],
    defaultVariants: {
      variant: "default",
      color: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "default",
  color = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props &
  VariantProps<typeof buttonVariants> & {
    variant?:
      | "default"
      | "outline"
      | "secondary"
      | "ghost"
      | "destructive"
      | "link";
    color?: "default" | "primary" | "accent" | "success" | "warning" | "danger";
  }) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, color, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
