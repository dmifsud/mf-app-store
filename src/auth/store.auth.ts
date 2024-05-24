import { create } from 'zustand';
import { StateSlice, CrudSlice } from '../structure';
import { LoginResponse } from '../models/auth.models';
import useProfileStore from './store.profile';



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
}

const useStore = create<StateSlice<LoginStore, LoginStoreActions>>((set) => ({
    ...initialState,
    actions: {
        login: (email: string, password: string) => {
            console.log('login', email, password);
            set({ loading: true });
            setTimeout(() => {
                // effect
                useProfileStore.getState().actions.update('John', 'Doe', email);
                set({ 
                    loading: false,
                    isAuthenticated: true,
                    data: {
                        token: '1234'
                    },
                });
            }, 1000);
        },
        logout: () => {
            set(initialState);
        },
    }
}));


export default useStore;