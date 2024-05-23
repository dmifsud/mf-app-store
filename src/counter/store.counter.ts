import { create } from 'zustand';

export interface CounterStore {
    count: number;
    inc: (amount?: number) => void;
}

const useStore = create<CounterStore>((set) => ({
    count: 1,
    inc: (amount?: number) => set((state) => ({ count: state.count + (amount ?? 1) })),
}));

export default useStore;