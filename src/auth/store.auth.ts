import { create } from "zustand";
import { StateSlice, CrudSlice } from "../structure";
import { LoginResponse } from "../models/auth.models";
import useProfileStore from "./store.profile";
import { persist, devtools } from "zustand/middleware";
import { devtoolsConfig } from "../utils/store.utils";

export interface LoginStore extends CrudSlice<LoginResponse> {
  isAuthenticated: boolean;
}

export interface LoginStoreActions {
  login: (email: string, password: string) => void;
  logout: () => void;
}

const initialState: LoginStore = {
  loading: false,
  error: null,
  data: null,
  isAuthenticated: false,
};

const useStore = create<StateSlice<LoginStore, LoginStoreActions>>()(
  devtools(
    persist(
      (set) => ({
        ...initialState,
        actions: {
          login: (email: string, password: string) => {
            console.log("login", email, password);
            set({ loading: true }, false, "LOGIN");
            setTimeout(() => {
              // effect
              useProfileStore.getState().actions.update("John", "Doe", email);
              set({
                loading: false,
                isAuthenticated: true,
                data: {
                  token: "1234",
                },
              }, false, "LOGIN_SUCCESS");
            }, 1000);
          },
          logout: () => {
            set({ loading: true }, false, "LOGOUT");
            setTimeout(() => {
              set(initialState, false, "LOGOUT_SUCCESS");
            }, 1000);
          },
        },
      }),
      {
        name: "auth-storage", // name of the item in the storage
        getStorage: () => localStorage, // TODO: this is deprecated use storage instead (https://github.com/pmndrs/zustand/discussions/1584)
        partialize: (state) =>
          Object.fromEntries(
            Object.entries(state).filter(([key]) => key !== "actions")
          ),
      }
    ), devtoolsConfig("LoginStore")
  )
);

export default useStore;
