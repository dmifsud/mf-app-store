import { importShared } from './__federation_fn_import-BSSw6lBa.js';

const {create} = await importShared('zustand');

const initialState = {
  name: null,
  surname: null,
  email: null
};
const useStore = create((set) => ({
  ...initialState,
  actions: {
    update: (name, surname, email) => {
      console.log("update", name, surname, email);
      set({ name, surname, email });
    }
  }
}));

export { useStore as default };
