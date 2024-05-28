import { importShared } from './__federation_fn_import-BSSw6lBa.js';
import { d as devtools } from './middleware-DYnLWasL.js';
import { devtoolsConfig } from './__federation_expose_UtilsStoreUtils-q4PR1uo3.js';

const {create} = await importShared('zustand');
const initialState = {
  name: null,
  surname: null,
  email: null
};
const useStore = create()(
  devtools(
    (set) => ({
      ...initialState,
      actions: {
        update: (name, surname, email) => {
          console.log("update", name, surname, email);
          set({ name, surname, email }, false, "PROFILE_UPDATE");
        }
      }
    }),
    devtoolsConfig("ProfileStore")
  )
);

export { useStore as default };
