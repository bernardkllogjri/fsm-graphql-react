import loadable from "@loadable/component";

export default [{ view: loadable(() => import("./Home")), path: "/" }];
