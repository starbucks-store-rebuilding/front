'use client';
import MenuSideBar from '@/components/pages/menu/MenuSideBar';
import CartButton from '@/components/ui/buttons/CartButton';
import LogoButton from '@/components/ui/buttons/LogoButton';
import MenuButton from '@/components/ui/buttons/MenuButton';
import SearchButton from '@/components/ui/buttons/SearchButton';
import React, { useEffect, useState } from 'react';
import { CommonLayout } from '../CommonLayout';
import { getAllCategories } from '@/actions/category-service';
import { CategoryMenuType } from '@/types/ResponseDataTypes';
import { useModalContext } from '@/context/SideBarContext';
import UserAuthButton from '@/components/ui/buttons/UserAuthButton';
import SearchModal from '@/components/modals/SearchModal';

export default function HeaderTop() {
  const { setIsOpen, setIsSearchOpen } = useModalContext();
  const [categoryMenus, setCategoryMenus] = useState<CategoryMenuType[]>([]);

  useEffect(() => {
    getAllCategories()
      .then((data) => {
        setCategoryMenus(data);
      })
      .catch((err) => {
        console.error('카테고리 불러오기 실패:', err);
      });
  }, []);

  return (
    <>
      <CommonLayout.CommonHeader>
        <ul className="flex justify-between ">
          <li className="py-3 px-4.5">
            <MenuButton onClick={() => setIsOpen(true)} />
          </li>
          <li>
            <LogoButton />
          </li>
          <li>
            <ul className="flex justify-end py-3 gap-2">
              <li>
                <SearchButton onClick={() => setIsSearchOpen(true)} />
              </li>
              <li>
                <CartButton />
              </li>
              <li className="pr-4.5">
                <UserAuthButton />
              </li>
            </ul>
          </li>
        </ul>
      </CommonLayout.CommonHeader>

      <MenuSideBar categories={categoryMenus} />
      <SearchModal />
    </>
  );
}
