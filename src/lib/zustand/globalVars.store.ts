import { create } from "zustand";

type Actions = {
  setIsCollapsed: (value: boolean) => void;
  toggleCollapsed: () => void;
};

type State = {
  isCollapsed: boolean;
};

export const useGlobalVarsStore = create<State & Actions>((set) => ({
  /**
   * State
   */
  isCollapsed: false,

  /**
   * Actions
   */
  setIsCollapsed: (value) => set({ isCollapsed: value }),
  toggleCollapsed: () => set((state) => ({ isCollapsed: !state.isCollapsed })),
}));
