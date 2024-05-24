import { importShared } from './__federation_fn_import-BSSw6lBa.js';
import useStore$1 from './__federation_expose_AuthStoreProfile-C1GXyWBe.js';

const {create} = await importShared('zustand');
const initialState = {
  loading: false,
  error: null,
  data: null,
  isAuthenticated: false
};
const useStore = create((set) => ({
  ...initialState,
  actions: {
    login: (email, password) => {
      console.log("login", email, password);
      set({ loading: true });
      setTimeout(() => {
        useStore$1.getState().actions.update("John", "Doe", email);
        set({
          loading: false,
          isAuthenticated: true,
          data: {
            token: "1234"
          }
        });
      }, 1e3);
    },
    logout: () => {
      set(initialState);
    }
  }
}));

export { useStore as default };
