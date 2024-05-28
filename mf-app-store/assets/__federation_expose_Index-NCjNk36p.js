import useStore from './__federation_expose_AuthStoreAuth-DP0Rp0mt.js';
import useStore$1 from './__federation_expose_CounterStoreCounter-D5CXEEHZ.js';
import useStore$2 from './__federation_expose_AuthStoreProfile-CULZcOP5.js';
import useWebSocketStore from './__federation_expose_WebsocketsStoreWs-svI2T3nx.js';

function sayHelloWorld(world) {
  return `Hello ${world}`;
}
const useBoundStore = () => {
  return {
    authSlice: useStore(),
    counterSlice: useStore$1(),
    profileSlice: useStore$2(),
    webSocketSlice: useWebSocketStore()
  };
};

export { useBoundStore as default, sayHelloWorld };
