"use client";
import { ReactNode } from "react";
import { useRouter } from '@/i18n/navigation';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
}

export default function Button({ children, className, variant = "primary", href }: ButtonProps) {
  const base = "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 cursor-pointer";
  const styles = {
    primary: "bg-primary text-white hover:opacity-90 focus-visible:ring-primary",
    secondary: "bg-secondary text-primary hover:opacity-90 focus-visible:ring-secondary",
    ghost: "bg-transparent text-primary border border-border hover:bg-black/5",
  } as const;
  const router = useRouter();

  const buttonClassName = `${base} ${styles[variant]} ${className}`;

  return <button className={buttonClassName} onClick={() => router.push(href || "/")}>{children}</button>;
}
