declare module 'express-prometheus-middleware' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function promMid(args: any): Express;

  export = promMid;
}
