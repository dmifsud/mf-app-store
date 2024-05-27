import { importShared } from './__federation_fn_import-BSSw6lBa.js';
import { courseData } from './__federation_expose_ApiCourse-dataMockApi-DTno13Ww.js';

const {create} = await importShared('zustand');
const initialState = {
  loading: false,
  error: null,
  data: null
};
const useState = create((set) => ({
  ...initialState,
  actions: {
    fetchActivities: async () => {
      set({ loading: true });
      try {
        setTimeout(() => {
          set({ loading: false, data: courseData });
        }, 1200);
      } catch (error) {
        set({ loading: false, error: error.message });
      }
    }
  }
}));

export { useState as default, initialState };
