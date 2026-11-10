import Image from "next/image";
import Link from "next/link";
import onDark from "../../public/brand/nextwave-logo-ondark.png";
import onLight from "../../public/brand/nextwave-logo-onlight.png";

type Props = { variant?: "dark" | "light"; className?: string; priority?: boolean };

/** Official NextWave Digital logo (taken unchanged from the brand assets). */
export default function Logo({ variant = "light", className = "h-9 w-auto", priority }: Props) {
  return (
    <Link href="/" aria-label="NextWave Digital — home" className="inline-flex shrink-0 items-center">
      <Image
        src={variant === "dark" ? onDark : onLight}
        alt="NextWave Digital"
        className={className}
        priority={priority}
        sizes="200px"
      />
    </Link>
  );
}
