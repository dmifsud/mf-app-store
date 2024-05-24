import { StateSlice } from "../structure";
export interface ProfileStore {
    name: string | null;
    surname: string | null;
    email: string | null;
}
export interface ProfileStoreActions {
    update: (name: string, surname: string, email: string) => void;
}
declare const useStore: import("zustand").UseBoundStore<import("zustand").StoreApi<StateSlice<ProfileStore, ProfileStoreActions>>>;
export default useStore;
//# sourceMappingURL=store.profile.d.ts.map