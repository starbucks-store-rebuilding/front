import SearchIcon from '@/components/ui/icons/SearchIcon';

export default function SearchButton({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} className="cursor-pointer">
      <SearchIcon />
    </button>
  );
}
