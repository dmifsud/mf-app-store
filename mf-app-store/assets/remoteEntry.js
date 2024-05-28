const exportSet = new Set(['Module', '__esModule', 'default', '_export_sfc']);
      let moduleMap = {
"./index":()=>{
      dynamicLoadingCss([], false, './index');
      return __federation_import('./__federation_expose_Index-BjImWrGI.js').then(module =>Object.keys(module).every(item => exportSet.has(item)) ? () => module.default : () => module)},
"./structure":()=>{
      dynamicLoadingCss([], false, './structure');
      return __federation_import('./__federation_expose_Structure-l0sNRNKZ.js').then(module =>Object.keys(module).every(item => exportSet.has(item)) ? () => module.default : () => module)},
"./vite-env.d":()=>{
      dynamicLoadingCss([], false, './vite-env.d');
      return __federation_import('./__federation_expose_Vite-envD-l0sNRNKZ.js').then(module =>Object.keys(module).every(item => exportSet.has(item)) ? () => module.default : () => module)},
"./api/course-data.mock.api":()=>{
      dynamicLoadingCss([], false, './api/course-data.mock.api');
      return __federation_import('./__federation_expose_ApiCourse-dataMockApi-DTno13Ww.js').then(module =>Object.keys(module).every(item => exportSet.has(item)) ? () => module.default : () => module)},
"./auth/store.auth":()=>{
      dynamicLoadingCss([], false, './auth/store.auth');
      return __federation_import('./__federation_expose_AuthStoreAuth-DsMeke1s.js').then(module =>Object.keys(module).every(item => exportSet.has(item)) ? () => module.default : () => module)},
"./auth/store.profile":()=>{
      dynamicLoadingCss([], false, './auth/store.profile');
      return __federation_import('./__federation_expose_AuthStoreProfile-Cyevw1lt.js').then(module =>Object.keys(module).every(item => exportSet.has(item)) ? () => module.default : () => module)},
"./counter/store.counter":()=>{
      dynamicLoadingCss([], false, './counter/store.counter');
      return __federation_import('./__federation_expose_CounterStoreCounter-D5CXEEHZ.js').then(module =>Object.keys(module).every(item => exportSet.has(item)) ? () => module.default : () => module)},
"./models/auth.models":()=>{
      dynamicLoadingCss([], false, './models/auth.models');
      return __federation_import('./__federation_expose_ModelsAuthModels-l0sNRNKZ.js').then(module =>Object.keys(module).every(item => exportSet.has(item)) ? () => module.default : () => module)},
"./models/courses.models":()=>{
      dynamicLoadingCss([], false, './models/courses.models');
      return __federation_import('./__federation_expose_ModelsCoursesModels-l0sNRNKZ.js').then(module =>Object.keys(module).every(item => exportSet.has(item)) ? () => module.default : () => module)},
"./utils/store.utils":()=>{
      dynamicLoadingCss([], false, './utils/store.utils');
      return __federation_import('./__federation_expose_UtilsStoreUtils-q4PR1uo3.js').then(module =>Object.keys(module).every(item => exportSet.has(item)) ? () => module.default : () => module)},
"./websockets/store.ws":()=>{
      dynamicLoadingCss([], false, './websockets/store.ws');
      return __federation_import('./__federation_expose_WebsocketsStoreWs-svI2T3nx.js').then(module =>Object.keys(module).every(item => exportSet.has(item)) ? () => module.default : () => module)},
"./courses/activities/store.course-activities":()=>{
      dynamicLoadingCss([], false, './courses/activities/store.course-activities');
      return __federation_import('./__federation_expose_CoursesActivitiesStoreCourse-activities-wnK8BkvB.js').then(module =>Object.keys(module).every(item => exportSet.has(item)) ? () => module.default : () => module)},};
    const seen = {};
    const dynamicLoadingCss = (cssFilePaths, dontAppendStylesToHead, exposeItemName) => {
      const metaUrl = import.meta.url;
      if (typeof metaUrl == 'undefined') {
        console.warn('The remote style takes effect only when the build.target option in the vite.config.ts file is higher than that of "es2020".');
        return
      }
      const curUrl = metaUrl.substring(0, metaUrl.lastIndexOf('remoteEntry.js'));

      cssFilePaths.forEach(cssFilePath => {
        const href = curUrl + cssFilePath;
        if (href in seen) return
        seen[href] = true;
        if (dontAppendStylesToHead) {
          const key = 'css__shared_state_app__' + exposeItemName;
          if (window[key] == null) window[key] = [];
          window[key].push(href);
        } else {
          const element = document.head.appendChild(document.createElement('link'));
          element.href = href;
          element.rel = 'stylesheet';
        }
      });
    };
    async function __federation_import(name) {
        return import(name);
    }    const get =(module) => {
      if(!moduleMap[module]) throw new Error('Can not find remote module ' + module)
      return moduleMap[module]();
    };
    const init =(shareScope) => {
      globalThis.__federation_shared__= globalThis.__federation_shared__|| {};
      Object.entries(shareScope).forEach(([key, value]) => {
        const versionKey = Object.keys(value)[0];
        const versionValue = Object.values(value)[0];
        const scope = versionValue.scope || 'default';
        globalThis.__federation_shared__[scope] = globalThis.__federation_shared__[scope] || {};
        const shared= globalThis.__federation_shared__[scope];
        (shared[key] = shared[key]||{})[versionKey] = versionValue;
      });
    };

export { dynamicLoadingCss, get, init };
