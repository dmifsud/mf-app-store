import { create } from "zustand";
import { StateSlice } from "../structure";


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

const useStore = create<StateSlice<ProfileStore, ProfileStoreActions>>((set) => ({
    ...initialState,
    actions: {
        update: (name: string, surname: string, email: string) => {
            console.log('update', name, surname, email);
            set({ name, surname, email });
        },
    },
}));

export default useStore;