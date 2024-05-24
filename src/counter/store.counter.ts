import { create } from 'zustand';
import { StateSlice } from '../structure';

export interface CounterStore {
    count: number;
}

export interface CounterStoreActions {
    inc: (amount?: number) => void;
}

const useStore = create<StateSlice<CounterStore, CounterStoreActions>>((set) => ({
    count: 0,
    actions: {
        inc: (amount?: number) => set((state) => ({ count: state.count + (amount ?? 1) })),
    },
}));

export default useStore;