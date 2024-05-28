import { CourseActivitiesResponse } from "../../models/courses.models";
import { CrudSlice, StateSlice } from "../../structure";
export interface CourseActivitiesStore extends CrudSlice<CourseActivitiesResponse> {
}
export interface CourseActivitiesActions {
    fetchActivities: () => void;
}
export declare const initialState: CourseActivitiesStore;
declare const useState: import("zustand").UseBoundStore<Omit<import("zustand").StoreApi<StateSlice<CourseActivitiesStore, CourseActivitiesActions>>, "setState"> & {
    setState<A extends string | {
        type: string;
    }>(partial: StateSlice<CourseActivitiesStore, CourseActivitiesActions> | Partial<StateSlice<CourseActivitiesStore, CourseActivitiesActions>> | ((state: StateSlice<CourseActivitiesStore, CourseActivitiesActions>) => StateSlice<CourseActivitiesStore, CourseActivitiesActions> | Partial<StateSlice<CourseActivitiesStore, CourseActivitiesActions>>), replace?: boolean | undefined, action?: A | undefined): void;
}>;
export default useState;
//# sourceMappingURL=store.course-activities.d.ts.map