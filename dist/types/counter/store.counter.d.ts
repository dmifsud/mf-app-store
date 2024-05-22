export interface CounterStore {
    count: number;
    inc: (amount?: number) => void;
}
declare const useStore: import("zustand").UseBoundStore<import("zustand").StoreApi<CounterStore>>;
export default useStore;
//# sourceMappingURL=store.counter.d.ts.map