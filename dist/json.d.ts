/**
 * 受限制的可JSON化值
 *
 * null 是不允许的
 *
 * undefined 在转换时会被删除
 */
declare type JSONValue = string | number | boolean | undefined;
/**
 * 受限制的可JSON化Object
 */
export declare type JSONable = {
    [str: string]: JSONValue | JSONable;
} | JSONValue[] | JSONable[];
export declare type Json<T extends JSONable> = T;
/**
 * 扩展的可JSON化值
 *
 * 需要使用 ExpandedJSONable 转为字符串
 */
declare type ExJSONValue = JSONValue | URL | Date;
export declare type ExJSONable = {
    [str: string]: ExJSONValue | ExJSONable;
} | ExJSONValue[] | ExJSONable[];
export declare type Exjson<T extends ExJSONable> = T;
export declare function ExJSONReplace(key: string, value: any): JSONValue | any[];
export {};
