import { create } from "zustand";

interface Props {
  open: boolean;
  toggle: () => void;
}

export const useCreateTodoState = create<Props>((set) => ({
  open: false,
  toggle: () => set(({ open }) => ({ open: !open })),
}));
