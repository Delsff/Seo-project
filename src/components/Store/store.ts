import { create } from "zustand";

type data = {
  isModel: boolean;
  openWindow: () => void;
  closeWindow: () => void;
};

export const useStoreWindow = create<data>((set) => ({
  isModel: false,
  openWindow: () => set({ isModel: true }),
  closeWindow: () => set({ isModel: false }),
}));
