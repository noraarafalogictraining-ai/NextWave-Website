import Image from "next/image";
import Link from "next/link";
import onDark from "../../public/brand/nextwave-logo-ondark.png";

type Props = { className?: string; priority?: boolean };

/** Official NextWave Digital logo (unchanged brand asset). Links to Home. */
export default function Logo({ className = "h-9 w-auto", priority }: Props) {
  return (
    <Link href="/" aria-label="NextWave Digital — Home" className="inline-flex shrink-0 items-center">
      <Image src={onDark} alt="NextWave Digital" className={className} priority={priority} sizes="220px" />
    </Link>
  );
}
