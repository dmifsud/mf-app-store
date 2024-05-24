import useStore from './__federation_expose_AuthStoreAuth-DVpJdhZD.js';
import useStore$1 from './__federation_expose_CounterStoreCounter-D5CXEEHZ.js';
import useStore$2 from './__federation_expose_AuthStoreProfile-C1GXyWBe.js';

function sayHelloWorld(world) {
  return `Hello ${world}`;
}
const useBoundStore = () => {
  return {
    authSlice: useStore(),
    counterSlice: useStore$1(),
    profileSlice: useStore$2()
  };
};

export { useBoundStore as default, sayHelloWorld };
