"use client";

import Link from "next/link";
import Image from "next/image";
import { CreditCard } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";

import logo from "@/assets/logo.png";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  const { theme } = useTheme();

  return (
    <header className="shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 p-3">
        <Link href="/resumes" className="flex items-center gap-2">
          <Image
            src={logo}
            alt="Logo"
            width={35}
            height={35}
            className="h-[35px] w-auto"
          />
          <span className="text-xl font-bold tracking-tight">cvKu.ai</span>
        </Link>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <UserButton
            appearance={{
              baseTheme: theme === "dark" ? dark : undefined,
              elements: {
                avatarBox: {
                  width: 35,
                  height: 35,
                },
              },
            }}
          >
            <UserButton.MenuItems>
              <UserButton.Link
                label="Billing"
                labelIcon={<CreditCard className="size-4" />}
                href="/billing"
              />
            </UserButton.MenuItems>
          </UserButton>
        </div>
      </div>
    </header>
  );
}
