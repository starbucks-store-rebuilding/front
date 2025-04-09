export default function ProductItemSkeleton({ size }: { size: number }) {
  const style =
    size === 140
      ? { width: size, height: size }
      : { width: '100%', aspectRatio: '1 / 1' };

  return (
    <li className="flex flex-col gap-3 mb-12">
      <div
        className="relative bg-lightGray-5 rounded-sm animate-pulse"
        style={style}
      />

      <div className="flex flex-col gap-2">
        <div className="h-6 bg-lightGray-5 rounded-sm animate-pulse" />
      </div>

      <div className="relative flex flex-col gap-1">
        <div className="h-6 bg-lightGray-5 rounded-sm w-1/3 animate-pulse" />
        <div className="h-6 bg-lightGray-5 rounded-sm w-1/2 animate-pulse" />
        <div className="absolute bottom-0 right-0 h-6 w-10 bg-lightGray-5 rounded-sm animate-pulse" />
      </div>
    </li>
  );
}
