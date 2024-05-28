import { importShared } from './__federation_fn_import-BSSw6lBa.js';
import { courseData } from './__federation_expose_ApiCourse-dataMockApi-DTno13Ww.js';
import { d as devtools } from './middleware-DYnLWasL.js';
import { devtoolsConfig } from './__federation_expose_UtilsStoreUtils-q4PR1uo3.js';

const {create} = await importShared('zustand');
const initialState = {
  loading: false,
  error: null,
  data: null
};
const useState = create()(
  devtools(
    (set) => ({
      ...initialState,
      actions: {
        fetchActivities: async () => {
          set({ loading: true }, false, "FETCH_ACTIVITIES");
          try {
            setTimeout(() => {
              set({ loading: false, data: courseData }, false, "FETCH_ACTIVITIES_SUCCESS");
            }, 1200);
          } catch (error) {
            set({ loading: false, error: error.message }, false, "FETCH_ACTIVITIES_ERROR");
          }
        }
      }
    }),
    devtoolsConfig("CourseActivitiesStore")
  )
);

export { useState as default, initialState };
