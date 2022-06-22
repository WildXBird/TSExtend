/**
 * 受限制的可JSON化值的最小单位
 * 
 * null 是不允许的
 * 
 * undefined 在转换时会被删除
 */
type JSONValue = string | number | boolean | undefined

/**
 * 对象JSON
 */
export type ObjectJson = {
    [str: string]: JSONValue | JSONable
}

/**
 * 数组JSON
 */
export type ArrayJson = JSONValue[] | JSONable[]


/**
 * 可JSON化的Object
 */
export type JSONable = ObjectJson | ArrayJson





export type Json<T extends JSONable> = T





/**
 * 扩展的可JSON化值
 * 
 * 需要使用 ExpandedJSONable 转为字符串
 */
type ExJSONValue = JSONValue | URL | Date

export type ExJSONable = {
    [str: string]: ExJSONValue | ExJSONable
} | ExJSONValue[] | ExJSONable[]


export type Exjson<T extends ExJSONable> = T

export function ExJSONReplace(key: string, value: any): JSONValue | any[] {
    // console.warn("ExJSONReplace", key.length, "key:", key, "value:", value)

    if (key.length === 0) {
        return value
    }

    switch (typeof (value)) {
        case "string":
        case "number":
        case "boolean":
            return value
        case "object":
            if (Array.isArray(value)) {
                return value
            } else if (value instanceof URL) {
                return value.href
            } else if (value instanceof Date) {
                return value.toISOString()
            } else if (Object.keys(value).length !== 0) {
                return value
            }
            return undefined

        default:
            return undefined
    }
}


