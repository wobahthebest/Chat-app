import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("chatTheme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("chatTheme", theme);
    set({ theme });
  },
}));
