import { CourseActivitiesResponse } from "../../models/courses.models";
import { CrudSlice, StateSlice } from "../../structure";
export interface CourseActivitiesStore extends CrudSlice<CourseActivitiesResponse> {
}
export interface CourseActivitiesActions {
    fetchActivities: () => void;
}
export declare const initialState: CourseActivitiesStore;
declare const useState: import("zustand").UseBoundStore<import("zustand").StoreApi<StateSlice<CourseActivitiesStore, CourseActivitiesActions>>>;
export default useState;
//# sourceMappingURL=store.course-activities.d.ts.map