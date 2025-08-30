import Link from "next/link";
import { memo } from "react";

const Header = () => {
  return (
    <header className="border-b border-b-[#393939]">
      <nav className="container flex items-center justify-between py-[20px]">
        <h2 className="text-[30px]">Market</h2>
        <ul className="flex items-center gap-[20px]">
          <li className="hover:underline">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="hover:underline">
            <Link href={"/recipes"}>Recipes</Link>
          </li>
          <li className="hover:underline">
            <Link href={"/users"}>Users</Link>
          </li>
          <li className="hover:underline">
            <Link href={"/comments"}>Comments</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default memo(Header);
