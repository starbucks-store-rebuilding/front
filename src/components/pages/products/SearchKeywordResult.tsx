export default function SearchKeywordResult({ keyword }: { keyword: string }) {
  return (
    <section className="padded py-4.5 border-b border-lightGray-8">
      <p className="text-[0.9375rem] font-sd-gothic">
        &quot;{keyword}&quot;의 검색결과
      </p>
    </section>
  );
}
