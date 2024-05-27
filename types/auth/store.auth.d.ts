import { StateSlice, CrudSlice } from '../structure';
import { LoginResponse } from '../models/auth.models';
export interface LoginStore extends CrudSlice<LoginResponse> {
    isAuthenticated: boolean;
}
export interface LoginStoreActions {
    login: (email: string, password: string) => void;
    logout: () => void;
}
declare const useStore: import("zustand").UseBoundStore<Omit<import("zustand").StoreApi<StateSlice<LoginStore, LoginStoreActions>>, "persist"> & {
    persist: {
        setOptions: (options: Partial<import("zustand/middleware").PersistOptions<StateSlice<LoginStore, LoginStoreActions>, {
            [k: string]: any;
        }>>) => void;
        clearStorage: () => void;
        rehydrate: () => void | Promise<void>;
        hasHydrated: () => boolean;
        onHydrate: (fn: (state: StateSlice<LoginStore, LoginStoreActions>) => void) => () => void;
        onFinishHydration: (fn: (state: StateSlice<LoginStore, LoginStoreActions>) => void) => () => void;
        getOptions: () => Partial<import("zustand/middleware").PersistOptions<StateSlice<LoginStore, LoginStoreActions>, {
            [k: string]: any;
        }>>;
    };
}>;
export default useStore;
//# sourceMappingURL=store.auth.d.ts.map