import Link from 'next/link';

export default function ItemName({ id, name }: { id: string; name: string }) {
  return (
    <Link href={`product/${id}`} className="cursor-pointer" draggable="false">
      <p className="font-sd-gothic font-medium">{name}</p>
    </Link>
  );
}
