// import { create } from 'zustand';
import { createMutable } from 'solid-js/store';
// import { StateSlice } from '../structure';

interface CounterStore {
    count: number;
}

interface CounterStoreActions {
    inc: (amount?: number) => void;
}

const initialState: CounterStore = {
    count: 2,
};

// SOLID IMPLEMENTATION
const counterState = createMutable<CounterStore & CounterStoreActions>({
    ...initialState,
    inc(amount?: number) {
        this.count += amount ?? 1;
    },
});

export default counterState;

// export const CounterComponent = () => {
//     return (
//         <div>
//             {counterState.count}
//         </div>
//     );
// }


// const useStore = create<StateSlice<CounterStore, CounterStoreActions>>((set) => ({
//     count: 0,
//     actions: {
//         inc: (amount?: number) => set((state) => ({ count: state.count + (amount ?? 1) })),
//     },
// }));

// export default useStore;