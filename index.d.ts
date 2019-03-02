import { Node, Ast, CustomElementOptions } from './interfaces';
interface ParserOptions {
    filename?: string;
    bind?: boolean;
    customElement?: CustomElementOptions | true;
}
export declare class Parser {
    readonly template: string;
    readonly filename?: string;
    readonly customElement: CustomElementOptions | true;
    index: number;
    stack: Array<Node>;
    html: Node;
    css: Node[];
    js: Node[];
    metaTags: {};
    allowBindings: boolean;
    constructor(template: string, options: ParserOptions);
    current(): Node;
    acornError(err: any): void;
    error({ code, message }: {
        code: string;
        message: string;
    }, index?: number): void;
    eat(str: string, required?: boolean, message?: string): boolean;
    match(str: string): boolean;
    matchRegex(pattern: RegExp): string;
    allowWhitespace(): void;
    read(pattern: RegExp): string;
    readIdentifier(): string;
    readUntil(pattern: RegExp): string;
    requireWhitespace(): void;
}
export default function parse(template: string, options?: ParserOptions): Ast;
export {};
