import { create } from "zustand";
import toast from "react-hot-toast";

export const useAuthStore = create((set) => ({
  authUser: null,
  isSigningUp: false,
  isLoggingIn: false,
  isCheckingAuth: true,

  checkAuth: async () => {
  try {
    const res = await fetch("/api/auth/check", {
      credentials: "include",
    });

    const { code, data } = await res.json();
    if (code !== 1) throw new Error("Not authenticated");

    set({ authUser: data });
  } catch (error) {
    console.log("Auth check failed:", error.message);
    set({ authUser: null });
  } finally {
    set({ isCheckingAuth: false });
  }
},


  signup: async (formData) => {
    set({ isSigningUp: true });
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData),
      });

      const { code, message, data, token } = await res.json();
      if (!res.ok || code !== 1) throw new Error(message || "Signup failed");

      localStorage.setItem("aubadeAuthCookies", token);
      set({ authUser: data });
      toast.success(message || "Account created successfully");
    } catch (err) {
      toast.error(err.message);
    } finally {
      set({ isSigningUp: false });
    }
  },

  login: async (formData) => {
    set({ isLoggingIn: true });
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData),
      });

      const { code, message, data, token } = await res.json();
      if (!res.ok || code !== 1) throw new Error(message || "Login failed");

      localStorage.setItem("aubadeAuthCookies", token); // ✅ Store token
      set({ authUser: data });
      const currentUser = useAuthStore.getState().authUser;
      console.log("✅ Current Zustand authUser:", currentUser);
      console.log("auth user is set");
      toast.success(message || "Logged in successfully");
    } catch (err) {
      toast.error(err.message);
    } finally {
      set({ isLoggingIn: false });
    }
  },

  logout: async () => {
    try {
      const token = localStorage.getItem("aubadeAuthCookies");

      const res = await fetch("/api/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        credentials: "include",
      });

      const { code, message } = await res.json();
      if (!res.ok || code !== 1) throw new Error(message || "Logout failed");

      localStorage.removeItem("aubadeAuthCookies");
      set({ authUser: null });
      toast.success(message || "Logged out successfully");
    } catch (err) {
      toast.error(err.message);
    }
  },
}));
