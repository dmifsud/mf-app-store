// import { create } from 'zustand';
// import { StateSlice } from '../structure';

// export interface WebSocketStore {
//     messages: string[];
//     connected: boolean;
//     socket: WebSocket | null;
// }

// export interface WebSocketStoreActions {
//     connect: () => void;
//     sendMessage: (message: string) => void;
// }

// const initialState: WebSocketStore = {
//     messages: [],
//     socket: null,
//     connected: false,
// }

// const useWebSocketStore = create<StateSlice<WebSocketStore, WebSocketStoreActions>>((set) => ({
//   ...initialState,
//   actions: {
//     connect: () => {
//       const protocol = location.protocol === 'https:' ? 'wss' : 'ws';
//         const socket = new WebSocket(`${protocol}://ws.ifelse.io`);
    
//         socket.onopen = () => set({ connected: true });
//         socket.onmessage = (event) =>
//           set((state) => ({ messages: [...state.messages, event.data] }));
//         socket.onclose = () => set({ connected: false });
//         socket.onerror = (error) => console.error('WebSocket error:', error);
    
//         set({ socket });
//       },
//       sendMessage: (message) => {
//         set((state) => {
//             if (state.socket) {
//                 state?.socket.send(message);
//                 state.messages = [...state.messages, `Sent: ${message}`];
//             }
//             return state;
//         });
//       },
//   }
// }));


// export default useWebSocketStore;
