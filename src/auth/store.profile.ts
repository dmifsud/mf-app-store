import { create } from "zustand";
import { StateSlice } from "../structure";
import { devtools } from "zustand/middleware";
import { devtoolsConfig } from "../utils/store.utils";


export interface ProfileStore {
    name: string | null;
    surname: string | null;
    email: string | null;
}

export interface ProfileStoreActions {
    update: (name: string, surname: string, email: string) => void;
}

const initialState: ProfileStore = {
    name: null,
    surname: null,
    email: null,
};

const useStore = create<StateSlice<ProfileStore, ProfileStoreActions>>()(
    devtools(
        (set) => ({
            ...initialState,
            actions: {
                update: (name: string, surname: string, email: string) => {
                    console.log('update', name, surname, email);
                    set({ name, surname, email }, false, 'PROFILE_UPDATE');
                },
            },
        }), devtoolsConfig("ProfileStore")
    )
);

export default useStore;