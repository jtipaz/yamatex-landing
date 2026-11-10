import Image from "next/image";

export function YamatexLogo({ className = "" }: { className?: string }) {
  return <Image className={className} src="/images/brand/yamatex-logo-transparent.png" alt="Yamatex · Fábrica Textil" width={740} height={290} priority />;
}

