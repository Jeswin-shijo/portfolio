// custom.d.ts
declare module "*.mp4" {
  const src: string;
  export default src;
}

declare module "*.css";
declare module "*.scss";

declare module "*.module.css" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module "*.module.scss" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module "react-phone-input-2";
declare module "react-phone-input-2/lib/style.css";
