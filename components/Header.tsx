import Link from "next/link";
import Image from "next/image";
import CloudNest from "../public/CloudNest.png";
import { SignInButton, SignedOut, UserButton } from "@clerk/nextjs";
import { ThemeToggler } from "./ThemeToggler";
import { Button } from "./ui/button";
function Header() {
  return (
    <header className="flex items-center justify-between">
      <Link href="/" className="flex items-center space-x-3">
        <div className="bg-[#0160FE] w-fit">
          <Image
            src={CloudNest}
            alt=""
            className="invert"
            height={100}
            width={100}
          />
        </div>
        <h1 className="font-bold text-4xl">CloudNest</h1>
      </Link>

      <div className="px-5 flex space-x-2 items-center">
        <ThemeToggler />
        <Button
          type="submit"
          size="sm"
          className="px-6 flex-1"
          variant={"destructive"}
        >
          <span className="sr-only">Admin</span>
          <span>Admin Login</span>
        </Button>

        <UserButton afterSignOutUrl="/" />

        <SignedOut>
          <SignInButton afterSignInUrl="/dashboard" mode="modal" />
        </SignedOut>
      </div>
    </header>
  );
}

export default Header;
