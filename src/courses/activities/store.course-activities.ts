// https://groklearning.com/api/launchpad/course-data/

import { create } from "zustand";
import { CourseActivitiesResponse } from "../../models/courses.models";
import { CrudSlice, StateSlice } from "../../structure";
import { courseData } from "../../api/course-data.mock.api";
import { devtools } from "zustand/middleware";
import { devtoolsConfig } from "../../utils/store.utils";

export interface CourseActivitiesStore
  extends CrudSlice<CourseActivitiesResponse> {}

export interface CourseActivitiesActions {
  fetchActivities: () => void;
}

export const initialState: CourseActivitiesStore = {
  loading: false,
  error: null,
  data: null,
};

const useState = create<
  StateSlice<CourseActivitiesStore, CourseActivitiesActions>
>()(
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
            // const response = await fetch('https://cors-anywhere.herokuapp.com/https://groklearning.com/api/launchpad/course-data/', {
            //     method: 'GET',
            //     headers: {
            //       'Content-Type': 'application/json',
            //     },
            //   });
            // const data = await response.json();
            // set({ loading: false, data }, false, "FETCH_ACTIVITIES_SUCCESS");
          } catch (error: any) {
            set({ loading: false, error: error.message }, false, "FETCH_ACTIVITIES_ERROR");
          }
        },
      },
    }),
    devtoolsConfig("CourseActivitiesStore")
  )
);

// (window as any).state = useState;

export default useState;
