import { StateSlice } from '../structure';
export interface CounterStore {
    count: number;
}
export interface CounterStoreActions {
    inc: (amount?: number) => void;
}
declare const useStore: import("zustand").UseBoundStore<import("zustand").StoreApi<StateSlice<CounterStore, CounterStoreActions>>>;
export default useStore;
//# sourceMappingURL=store.counter.d.ts.map