"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "text-black fixed top-5 inset-x-0 max-w-2xl mx-auto z-50",
        className
      )}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Courses">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/html">HTML</HoveredLink>
            <HoveredLink href="/tailwind">Tailwind</HoveredLink>
            <HoveredLink href="/nextjs">Nextjs</HoveredLink>
            <HoveredLink href="/prisma">Prisma</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Notes">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/cards">Cards</HoveredLink>
            <HoveredLink href="/questions">Questions</HoveredLink>
            <HoveredLink href="/codes">Codes</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Contact"
        ></MenuItem>
      </Menu>
    </div>
  );
}

export default Navbar;
