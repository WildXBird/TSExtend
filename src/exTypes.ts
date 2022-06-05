// import { v5 as uuidv5 } from 'uuid';

export type HEXValue = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "0" | "A" | "B" | "C" | "D" | "E" | "F"





const HEXValues: HEXValue[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "A", "B", "C", "D", "E", "F"]


function getRandomArrayValue<T>(arr: T[]): T {
    let pointer = Math.ceil(Math.random() * arr.length)
    if (pointer === 0) {
        pointer = 1
    }
    pointer = pointer - 1
    return arr[pointer]
}


export type GUIDValue = [
    [HEXValue, HEXValue, HEXValue, HEXValue, HEXValue, HEXValue, HEXValue, HEXValue,],
    [HEXValue, HEXValue, HEXValue, HEXValue,],
    [HEXValue, HEXValue, HEXValue, HEXValue,],
    [HEXValue, HEXValue, HEXValue, HEXValue,],
    [HEXValue, HEXValue, HEXValue, HEXValue, HEXValue, HEXValue, HEXValue, HEXValue, HEXValue, HEXValue, HEXValue, HEXValue, HEXValue, HEXValue, HEXValue, HEXValue,],
]
export class GUID {
    value: GUIDValue;

    constructor() {
        this.value = [
            [this.hex(), this.hex(), this.hex(), this.hex(), this.hex(), this.hex(), this.hex(), this.hex(),],
            [this.hex(), this.hex(), this.hex(), this.hex(),],
            [this.hex(), this.hex(), this.hex(), this.hex(),],
            [this.hex(), this.hex(), this.hex(), this.hex(),],
            [this.hex(), this.hex(), this.hex(), this.hex(), this.hex(), this.hex(), this.hex(), this.hex(), this.hex(), this.hex(), this.hex(), this.hex(), this.hex(), this.hex(), this.hex(), this.hex(),],
        ]
    }
    
    private hex(): HEXValue {
        return getRandomArrayValue(HEXValues)
    }

    toString(): string {
        let strArr = []
        for (let arr of this.value) {
            let str = ""
            for (let value of arr) {
                str += value
            }
            strArr.push(str)
        }
        return strArr.join("-")
    }

}