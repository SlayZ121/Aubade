"use client";
import { LogIn, BookHeart, Settings, User } from "lucide-react";
import Link from "next/link";
import { BookOpen } from "lucide-react";

export default function Navbar() {
  return (
    <header className="bg-base-100 border-b border-base-300 fixed w-full top-0 z-40 backdrop-blur-lg bg-base-100/80">
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          {/* Logo and Brand */}
          <Link
            href="/"
            className="flex items-center gap-2.5 hover:opacity-80 transition-all"
          >
            <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-primary" />
            </div>
            <h1 className="text-lg font-bold">Aubade</h1>
          </Link>

          {/* Right-side Buttons */}
          <div className="flex items-center gap-5">
            <Link
              href="/settings"
              className="flex items-center gap-2 text-sm text-base-content/80 hover:text-primary transition-colors"
            >
              <Settings className="size-4" />
              <span className="hidden sm:inline">Settings</span>
            </Link>

            <Link
              href="/profile"
              className="flex items-center gap-2 text-sm text-base-content/80 hover:text-primary transition-colors"
            >
              <User className="size-5" />
              <span className="hidden sm:inline">Profile</span>
            </Link>
            <button className="flex gap-2 items-center">
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
