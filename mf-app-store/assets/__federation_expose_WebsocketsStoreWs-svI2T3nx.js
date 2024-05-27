import { importShared } from './__federation_fn_import-BSSw6lBa.js';

const {create} = await importShared('zustand');

const initialState = {
  messages: [],
  socket: null,
  connected: false
};
const useWebSocketStore = create((set) => ({
  ...initialState,
  actions: {
    connect: () => {
      const protocol = location.protocol === "https:" ? "wss" : "ws";
      const socket = new WebSocket(`${protocol}://ws.ifelse.io`);
      socket.onopen = () => set({ connected: true });
      socket.onmessage = (event) => set((state) => ({ messages: [...state.messages, event.data] }));
      socket.onclose = () => set({ connected: false });
      socket.onerror = (error) => console.error("WebSocket error:", error);
      set({ socket });
    },
    sendMessage: (message) => {
      set((state) => {
        if (state.socket) {
          state?.socket.send(message);
          state.messages = [...state.messages, `Sent: ${message}`];
        }
        return state;
      });
    }
  }
}));

export { useWebSocketStore as default };
