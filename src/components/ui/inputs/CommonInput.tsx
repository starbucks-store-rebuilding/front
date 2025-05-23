import { cn } from '@/lib/utils';

export default function CommonInput({
  className,
  type,
  ...props
}: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      className={cn(
        'block py-2.5 px-3 w-full text-lg text-foreground bg-transparent',
        'border-0 border-b-1 border-lightGray-4 appearance-none',
        'focus:outline-none focus:ring-0 focus:border-green peer',
        className
      )}
      {...props}
    />
  );
}
