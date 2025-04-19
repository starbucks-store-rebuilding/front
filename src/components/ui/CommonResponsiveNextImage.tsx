import { cn } from '@/lib/utils';
import Image from 'next/image';

export function CommonResposiveNextImage({
  ImageUrl,
  description,
  className,
}: Readonly<{ ImageUrl: string; description: string; className?: string }>) {
  return (
    <Image
      src={ImageUrl}
      alt={description}
      sizes="100vw"
      style={{
        width: '100%',
        height: 'auto',
      }}
      width={500}
      height={300}
      priority
      className={cn('pointer-events-none select-none', className)}
    />
  );
}
