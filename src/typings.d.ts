// Typings reference file, you can add your own global typings here
// https://www.typescriptlang.org/docs/handbook/writing-declaration-files.html

declare module "*.html" {
    const content: string;
    export default content;
}

declare module "*.css" {
    const content: string;
    export default content;
}

// MINIMAL DEFINITION FOR REQUIRE / NODE MODULES / BROWSERIFY / BRFS 
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