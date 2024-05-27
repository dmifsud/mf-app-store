export declare function sayHelloWorld(world: string): string;
declare const useBoundStore: () => {
    authSlice: import("./structure").StateSlice<import("./auth/store.auth").LoginStore, import("./auth/store.auth").LoginStoreActions>;
    counterSlice: import("./structure").StateSlice<import("./counter/store.counter").CounterStore, import("./counter/store.counter").CounterStoreActions>;
    profileSlice: import("./structure").StateSlice<import("./auth/store.profile").ProfileStore, import("./auth/store.profile").ProfileStoreActions>;
    webSocketSlice: import("./structure").StateSlice<import("./websockets/store.ws").WebSocketStore, import("./websockets/store.ws").WebSocketStoreActions>;
};
export default useBoundStore;
//# sourceMappingURL=index.d.ts.map