// https://groklearning.com/api/launchpad/course-data/

import { create } from "zustand";
import { CourseActivitiesResponse } from "../../models/courses.models";
import { CrudSlice, StateSlice } from "../../structure";
import { courseData } from "../../api/course-data.mock.api";

export interface CourseActivitiesStore extends CrudSlice<CourseActivitiesResponse> {
    
}

export interface CourseActivitiesActions {
    fetchActivities: () => void;
}

export const initialState: CourseActivitiesStore = {
    loading: false,
    error: null,
    data: null,
}

const useState = create<StateSlice<CourseActivitiesStore, CourseActivitiesActions>>((set) => ({
    ...initialState,
    actions: {
        fetchActivities: async () => {
            set({ loading: true });
            try {
                setTimeout(() => {
                    set({ loading: false, data: courseData });
                }, 1200);
                // const response = await fetch('https://groklearning.com/api/launchpad/course-data/', {
                //     method: 'GET',
                //     headers: {
                //       'Content-Type': 'application/json',
                //     },
                //     mode: 'no-cors',
                //   });
                // const data = await response.json();
            } catch (error: any) {
                set({ loading: false, error: error.message });
            }
        }
    }
}));


export default useState;