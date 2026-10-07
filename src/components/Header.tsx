import Image from "next/image";
import NavLinks from "./NavLinks";
import UserInfo from "./UserInfo";

export default function Header() {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });
  return (
    <header className="max-w-6xl mx-auto py-10 px-6 grid grid-cols-3 items-center">
      {/* Left - Empty */}
      <div></div>

      {/* Center - Logo + Text */}
      <div className="flex items-center justify-center gap-4">
        <Image src="/logo.webp" height={60} width={60} alt="logo" />

        <div>
          <h1 className="text-4xl font-bold text-red-700">Bangla News 24</h1>
          <p className="text-gray-600">{date}</p>
        </div>
      </div>

      {/* Right - Buttons */}
     <UserInfo/>
      <NavLinks/>
    </header>
  );
}
