// Typings reference file, you can add your own global typings here
// https://www.typescriptlang.org/docs/handbook/writing-declaration-files.html

// TYPESCRIPT SAFE DEFINITION FOR INLINE import '...css'; import template from '...html';
declare module "*.html" {
    const content: string;
    export default content;
}

declare module "*.css" {
    const content: string;
    export default content;
}

// MINIMAL DEFINITION FOR NODE MODULES WEBPACK require(...);
declare var __dirname: string;
declare var __filename: string;
declare var require: RequireFn;
declare var module: NodeModule;
interface RequireFn {
    (id: string): any
}
interface NodeModule {
    id: any;
    require: RequireFn;
    exports: any;
}