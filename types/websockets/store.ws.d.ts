import { StateSlice } from '../structure';
export interface WebSocketStore {
    messages: string[];
    connected: boolean;
    socket: WebSocket | null;
}
export interface WebSocketStoreActions {
    connect: () => void;
    sendMessage: (message: string) => void;
}
declare const useWebSocketStore: import("zustand").UseBoundStore<import("zustand").StoreApi<StateSlice<WebSocketStore, WebSocketStoreActions>>>;
export default useWebSocketStore;
//# sourceMappingURL=store.ws.d.ts.map