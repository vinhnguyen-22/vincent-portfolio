'use client';
import { copyRightIcon, navbarData } from '@/assets';

interface NavbarProps {
  id: string;
}

const Navbar = ({ id }: NavbarProps) => {
  return (
    <div className="w-[70px] h-full fixed left-0 top-0 flex flex-col justify-between border-r border-gray-200 px-4 py-10 xl:py-6 z-10">
      <a href="#home">
        <span className="text-3xl font-semibold text-red-400">V</span>.
        <span className="block w-min rotate-90 origin-bottom text-[12px] font-semibold dark:text-white">
          Vincent
        </span>
      </a>
      <div className="flex flex-col gap-y-3 xl:gap-y-1 sm:gap-y-2 ">
        {navbarData.map((item, i) => (
          <a
            href={`#${item.id}`}
            key={i}
            className="group flex flex-col items-center gap-y-2 "
          >
            <span
              className={`text-2xl group-hover:scale-125 transition-all ${
                item.id === id
                  ? 'text-red-500 scale-110'
                  : 'text-yellow-500 scale-100'
              }`}
            >
              {item.icon}
            </span>
            <span
              className={`text-[10px] tracking-wide -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 text-center dark:text-white ${
                item.id === id
                  ? 'text-red-500 scale-110 translate-x-0 opacity-100'
                  : 'text-yellow-500 scale-100 '
              }`}
            >
              {item.name}
            </span>
          </a>
        ))}
      </div>
      <p className="flex items-center justify-center text-[13px] text-gray-500 mt-6">
        <span className="absolute left-1/2 w-max flex items-center -rotate-90 origin-bottom-left tracking-wider dark:text-gray-200 transition-colors">
          {copyRightIcon} {new Date().getFullYear()}
        </span>
      </p>
    </div>
  );
};

export default Navbar;
