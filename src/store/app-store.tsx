"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

type AppState = {
  count: number;
  increase: () => void;
  videos: any;
  fetch: any;
};

export const useAppStore = create<AppState>((set) => ({
  count: 0,
  increase: () => {
    set((state) => ({ count: state.count + 1 }));
  },

  videos: [
    {
      id: "abcd",
      emojis: [{ "😍": 1, "💘": 1, "😎": 1 }],
    },
    {
      id: "efgh",
      emojis: { "😍": 1, "💘": 1, "😎": 1 },
    },
  ],
  fetch: async (what: any) => {
    const res = await fetch(what);
  },
}));

// Menambahkan middleware agar ketika broser di refresh datanya tidak hilang dan akan di simpan di localstorage

// export const useAppStore = create(
//   persist(appStore, {
//     name: "app-store",
//   })
// );
