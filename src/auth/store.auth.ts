import { createMutable } from "solid-js/store";
import { CrudSlice } from "../structure";
import { LoginResponse } from "../models/auth.models";
import profileStore from "./store.profile";

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

const loginState = createMutable<LoginStore & LoginStoreActions>({
  ...initialState,
  login(email: string, password: string) {
    console.log("login", email, password);
    this.loading = true;
    setTimeout(() => {
      // effect
      profileStore.update("John", "Doe", email);
      this.loading = false;
      this.isAuthenticated = true;
      this.data = {
        token: "1234",
      };
    }, 1000);
  },
  logout() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.error = null;
      this.data = null;
      this.isAuthenticated = false;
    }, 1000);
  },
});

export default loginState;
