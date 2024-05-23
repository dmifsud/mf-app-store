import { importShared } from './__federation_fn_import-BSSw6lBa.js';

const {create} = await importShared('zustand');

const useStore = create((set) => ({
  count: 1,
  inc: (amount) => set((state) => ({ count: state.count + (amount ?? 1) }))
}));

export { useStore as default };
