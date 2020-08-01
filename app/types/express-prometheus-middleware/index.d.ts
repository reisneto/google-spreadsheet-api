declare module 'express-prometheus-middleware' {
  function promMid(args: any): Express;

  export = promMid;
}
