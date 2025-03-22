import Image from 'next/image';
import SearchIcon from '@/components/ui/icons/SearchIcon';
import CartIcon from '@/components/ui/icons/CartIcon';
import MenuIcon from '@/components/ui/icons/MenuIcon';
import Nav from './Nav';
import Link from 'next/link';

const Header = () => {
  const cartCount = 5;
  return (
    <header className="w-full bg-white shadow-md z-50">
      <div className="relative w-full px-4  py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/menu">
            <MenuIcon />
          </Link>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Image
            src="/images/logo.png"
            alt="Starbucks Logo"
            width={40}
            height={40}
          />
        </div>

        <div className="flex items-center space-x-3">
          <SearchIcon />

          <CartIcon size={32} cartCount={cartCount} />
        </div>
      </div>

      <Nav />
    </header>
  );
};

export default Header;
