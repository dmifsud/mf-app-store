import { importShared } from './__federation_fn_import-BSSw6lBa.js';
import useStore$1 from './__federation_expose_AuthStoreProfile-Cyevw1lt.js';
import { d as devtools, p as persist } from './middleware-DYnLWasL.js';
import { devtoolsConfig } from './__federation_expose_UtilsStoreUtils-q4PR1uo3.js';

const {create} = await importShared('zustand');
const initialState = {
  loading: false,
  error: null,
  data: null,
  isAuthenticated: false
};
const useStore = create()(
  devtools(
    persist(
      (set) => ({
        ...initialState,
        actions: {
          login: (email, password) => {
            console.log("login", email, password);
            set({ loading: true }, false, "LOGIN");
            setTimeout(() => {
              useStore$1.getState().actions.update("John", "Doe", email);
              set({
                loading: false,
                isAuthenticated: true,
                data: {
                  token: "1234"
                }
              }, false, "LOGIN_SUCCESS");
            }, 1e3);
          },
          logout: () => {
            set({ loading: true }, false, "LOGOUT");
            setTimeout(() => {
              set(initialState, false, "LOGOUT_SUCCESS");
            }, 1e3);
          }
        }
      }),
      {
        name: "auth-storage",
        // name of the item in the storage
        getStorage: () => localStorage,
        // TODO: this is deprecated use storage instead (https://github.com/pmndrs/zustand/discussions/1584)
        partialize: (state) => Object.fromEntries(
          Object.entries(state).filter(([key]) => key !== "actions")
        )
      }
    ),
    devtoolsConfig("LoginStore")
  )
);

export { useStore as default };
