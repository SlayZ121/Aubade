"use client";
import { useEffect } from "react";
import { useAuthStore } from "@/app/store/useAuthStore";
import { Loader } from "lucide-react";

export default function AuthProvider({ children }) {
  const { checkAuth, isCheckingAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, []);

  if (isCheckingAuth) {
    return (
      <div className="h-screen flex justify-center items-center">
        <Loader className="size-10 animate-spin" />
      </div>
    );
  }

  return <>{children}</>;
}
