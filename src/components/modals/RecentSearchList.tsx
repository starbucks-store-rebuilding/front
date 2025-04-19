import CloseIcon from '../ui/icons/CloseIcon';

export default function RecentSearchList({
  items,
  onClearAll,
  onRemove,
  onItemClick,
}: {
  items: string[];
  onClearAll: () => void;
  onRemove: (term: string) => void;
  onItemClick: (term: string) => void;
}) {
  return (
    <>
      {items.length === 0 ? (
        <section className="font-sd-gothic text-lightGray-6 text-center py-32">
          최근 검색어가 없습니다.
        </section>
      ) : (
        <section className="p-6">
          <p className="text-xs text-lightGray-6 pb-4">최근 검색어</p>
          <ul className="grid grid-cols-2 gap-x-10 gap-y-3 pb-5">
            {items.map((term, idx) => (
              <li
                key={idx}
                className="flex items-center justify-between px-2 py-1 text-sm text-gray-800"
              >
                <button
                  className="truncate w-full text-left cursor-pointer"
                  onClick={() => onItemClick?.(term)}
                >
                  {term}
                </button>
                <button
                  type="button"
                  className="ml-2 cursor-pointer"
                  onClick={() => onRemove?.(term)}
                >
                  <CloseIcon size={16} />
                </button>
              </li>
            ))}
          </ul>
          <hr className="pb-2.5" />
          <div className="flex justify-end">
            <button
              className="text-xs cursor-pointer"
              type="button"
              onClick={onClearAll}
            >
              전체 삭제
            </button>
          </div>
        </section>
      )}
    </>
  );
}
