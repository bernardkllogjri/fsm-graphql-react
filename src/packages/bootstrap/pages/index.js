import loadable from "@loadable/component";

export default [
  { view: loadable(() => import("./Home")), path: "/" },
  { view: loadable(() => import("./Login&Register")), path: "/login" }
];
