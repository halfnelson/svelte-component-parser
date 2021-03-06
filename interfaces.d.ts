export interface Node {
    start: number;
    end: number;
    type: string;
    [propName: string]: any;
}
export interface Parser {
    readonly template: string;
    readonly filename?: string;
    index: number;
    stack: Array<Node>;
    html: Node;
    css: Node;
    js: Node;
    metaTags: {};
}
export interface Ast {
    html: Node;
    css: Node;
    instance: Node;
    module: Node;
}
export interface Warning {
    start?: {
        line: number;
        column: number;
        pos?: number;
    };
    end?: {
        line: number;
        column: number;
    };
    pos?: number;
    code: string;
    message: string;
    filename?: string;
    frame?: string;
    toString: () => string;
}
export declare type ModuleFormat = 'esm' | 'cjs';
export interface CompileOptions {
    format?: ModuleFormat;
    name?: string;
    filename?: string;
    generate?: string | false;
    outputFilename?: string;
    cssOutputFilename?: string;
    sveltePath?: string;
    dev?: boolean;
    immutable?: boolean;
    hydratable?: boolean;
    legacy?: boolean;
    customElement?: CustomElementOptions | true;
    css?: boolean;
    preserveComments?: boolean | false;
}
export interface Visitor {
    enter: (node: Node) => void;
    leave?: (node: Node) => void;
}
export interface CustomElementOptions {
    tag?: string;
    props?: string[];
}
export interface AppendTarget {
    slots: Record<string, string>;
    slotStack: string[];
}
export interface Var {
    name: string;
    export_name?: string;
    injected?: boolean;
    module?: boolean;
    mutated?: boolean;
    reassigned?: boolean;
    referenced?: boolean;
    writable?: boolean;
    global?: boolean;
    implicit?: boolean;
    internal?: boolean;
    initialised?: boolean;
    hoistable?: boolean;
    subscribable?: boolean;
}
