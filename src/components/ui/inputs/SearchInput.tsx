import SearchIcon from '../icons/SearchIcon';

export default function SearchInput({
  onSubmit,
}: {
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <form onSubmit={onSubmit} className="flex items-center w-full mx-auto">
      <div className="relative w-full">
        <input
          type="text"
          name="keyword"
          className="bg-lightGray-2 text-sm rounded-sm block w-full p-2
        focus:outline-none pe-10"
          placeholder="검색어를 입력해주세요"
          required
          maxLength={25}
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-2
          cursor-pointer"
        >
          <SearchIcon />
        </button>
      </div>
    </form>
  );
}
