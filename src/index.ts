// import useAuthStore from "./auth/store.auth";
// import useCounterStore from "./counter/store.counter";
// import useProfileStore from "./auth/store.profile";
// import useWebSocketStore from "./websockets/store.ws";

export function sayHelloWorld(world: string) {
  return `Hello ${world}`;
}

// const useBoundStore = () => {
//   return {
//     authSlice: useAuthStore(),
//     counterSlice: useCounterStore(),
//     profileSlice: useProfileStore(),
//     webSocketSlice: useWebSocketStore(),
//   };
// }
// export default useBoundStore;
//   (set) => ({
//   authSlice: createAuthStore<LoginStore>(set),
//   counterSlice: createCounterStore(set),
// }));

// partial: BoundStore | Partial<BoundStore> | ((state: BoundStore) => BoundStore | Partial<BoundStore>)
// (partial: LoginStore | Partial<LoginStore> | ((state: LoginStore) => LoginStore | Partial<LoginStore>), replace?: boolean | undefined)