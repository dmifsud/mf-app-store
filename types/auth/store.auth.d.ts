import { StateSlice, CrudSlice } from '../structure';
import { LoginResponse } from '../models/auth.models';
export interface LoginStore extends CrudSlice<LoginResponse> {
    isAuthenticated: boolean;
}
export interface LoginStoreActions {
    login: (email: string, password: string) => void;
    logout: () => void;
}
declare const useStore: import("zustand").UseBoundStore<import("zustand").StoreApi<StateSlice<LoginStore, LoginStoreActions>>>;
export default useStore;
//# sourceMappingURL=store.auth.d.ts.map