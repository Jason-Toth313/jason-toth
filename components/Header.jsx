import Image from "next/image";
import Link from "next/link";
import Avatar from "../components/Avatar";

import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full items-center px-5 xl-px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-row justify-between items-center gap-y-6 py-8">
          {/* logo */}
          <div className="flex flex-row items-center">
            <Avatar />
            <Link href="/">
              <p className="font-semibold text-white text-2xl md:text-[40px] lg:text-[54px] my-10 mx-10">Jason Toth</p>
            </Link>
          </div>
          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
