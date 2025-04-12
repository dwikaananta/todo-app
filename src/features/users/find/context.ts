import { create } from "zustand";

interface Props {
  open: boolean;
  toggle: (id?: string) => void;
  id?: string;
}

export const useFindUserState = create<Props>((set) => ({
  open: false,
  toggle: (id) => set(() => ({ open: id ? true : false, id })),
  id: undefined,
}));
