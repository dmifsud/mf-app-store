import { StateSlice } from "../structure";
export interface ProfileStore {
    name: string | null;
    surname: string | null;
    email: string | null;
}
export interface ProfileStoreActions {
    update: (name: string, surname: string, email: string) => void;
}
declare const useStore: import("zustand").UseBoundStore<Omit<import("zustand").StoreApi<StateSlice<ProfileStore, ProfileStoreActions>>, "setState"> & {
    setState<A extends string | {
        type: string;
    }>(partial: StateSlice<ProfileStore, ProfileStoreActions> | Partial<StateSlice<ProfileStore, ProfileStoreActions>> | ((state: StateSlice<ProfileStore, ProfileStoreActions>) => StateSlice<ProfileStore, ProfileStoreActions> | Partial<StateSlice<ProfileStore, ProfileStoreActions>>), replace?: boolean | undefined, action?: A | undefined): void;
}>;
export default useStore;
//# sourceMappingURL=store.profile.d.ts.map