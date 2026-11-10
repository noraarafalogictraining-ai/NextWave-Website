import { LockKeyhole } from "lucide-react";

/** "User with a lock" mark for the employee access link. */
export default function PortalIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <span aria-hidden className="relative inline-flex">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="10" cy="8" r="4" />
        <path d="M3 21v-1a7 7 0 0 1 9.5-6.5" />
      </svg>
      <LockKeyhole className="absolute -bottom-1 -right-1.5 h-2.5 w-2.5" strokeWidth={3} />
    </span>
  );
}
