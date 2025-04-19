'use client';

import { useModalContext } from '@/context/SideBarContext';
import { CommonLayout } from '../layouts/CommonLayout';
import SearchInput from '../ui/inputs/SearchInput';
import CloseButton from '../ui/buttons/CloseButton';
import RecentSearchList from './RecentSearchList';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function SearchModal() {
  const { isSearchOpen, setIsSearchOpen } = useModalContext();
  const [recent, setRecent] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (isSearchOpen) {
      setRecent(getRecentSearches());
    }
  }, [isSearchOpen]);

  if (!isSearchOpen) return null;

  const getRecentSearches = () => {
    if (typeof window === 'undefined') return [];
    const stored = localStorage.getItem('recentSearches');
    return stored ? JSON.parse(stored) : [];
  };

  const updateRecentSearches = (updated: string[]) => {
    localStorage.setItem('recentSearches', JSON.stringify(updated));
  };

  const handleRemove = (term: string) => {
    const updated = getRecentSearches().filter((t: string) => t !== term);
    updateRecentSearches(updated);
    setRecent(updated);
  };

  const handleClearAll = () => {
    localStorage.removeItem('recentSearches');
    setRecent([]);
  };

  const handleItemClick = (term: string) => {
    let current = getRecentSearches().filter((t: string) => t !== term);
    current.unshift(term);

    if (current.length > 10) {
      current = current.slice(0, 10);
    }

    updateRecentSearches(current);
    setRecent(current);

    router.push(`/products?keyword=${encodeURIComponent(term)}`);
    setIsSearchOpen(false);
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const keyword = formData.get('keyword')?.toString().trim();
    if (!keyword) return;

    let current = getRecentSearches().filter((t: string) => t !== keyword);
    current.unshift(keyword);

    if (current.length > 10) {
      current = current.slice(0, 10);
    }

    updateRecentSearches(current);
    setRecent(current);

    router.push(`/products?keyword=${encodeURIComponent(keyword)}`);
    setIsSearchOpen(false);
  };

  return (
    <div
      className="fixed max-w-[var(--base-w)]
    z-[3000] w-full h-full bg-background
    border-r border-lightGray-5"
    >
      <CommonLayout.CommonHeader className="padded flex items-center gap-3.5">
        <SearchInput onSubmit={handleSearchSubmit} />
        <CloseButton onClick={() => setIsSearchOpen(false)} />
      </CommonLayout.CommonHeader>
      <div className="pt-14">
        <RecentSearchList
          items={recent}
          onClearAll={handleClearAll}
          onRemove={handleRemove}
          onItemClick={handleItemClick}
        />
      </div>
    </div>
  );
}
