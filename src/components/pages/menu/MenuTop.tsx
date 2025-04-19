import CloseIcon from '@/components/ui/icons/CloseIcon';
import { useModalContext } from '@/context/SideBarContext';

export default function MenuTop() {
  const { setIsOpen } = useModalContext();
  return (
    <section className="px-6 pt-5">
      <nav className="flex justify-end">
        <button
          className="inline-flex items-center cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          <CloseIcon />
        </button>
      </nav>

      <article className="pt-5">
        <h2 className="text-2xl font-semibold font-body">Welcome !</h2>
        <p className="font-body text-xs font-medium text-black pt-3 pb-5">
          온라인 스토어에 오신 것을 환영합니다.
        </p>
      </article>

      <hr className="border-t border-[#DADADA] w-full" />
    </section>
  );
}
