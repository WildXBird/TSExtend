"use strict";
// import { v5 as uuidv5 } from 'uuid';
Object.defineProperty(exports, "__esModule", { value: true });
exports.GUID = void 0;
const HEXValues = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "A", "B", "C", "D", "E", "F"];
function getRandomArrayValue(arr) {
    let pointer = Math.ceil(Math.random() * arr.length);
    if (pointer === 0) {
        pointer = 1;
    }
    pointer = pointer - 1;
    return arr[pointer];
}
class GUID {
    constructor() {
        this.value = [
            [this.hex(), this.hex(), this.hex(), this.hex(), this.hex(), this.hex(), this.hex(), this.hex(),],
            [this.hex(), this.hex(), this.hex(), this.hex(),],
            [this.hex(), this.hex(), this.hex(), this.hex(),],
            [this.hex(), this.hex(), this.hex(), this.hex(),],
            [this.hex(), this.hex(), this.hex(), this.hex(), this.hex(), this.hex(), this.hex(), this.hex(), this.hex(), this.hex(), this.hex(), this.hex(), this.hex(), this.hex(), this.hex(), this.hex(),],
        ];
    }
    hex() {
        return getRandomArrayValue(HEXValues);
    }
    toString() {
        let strArr = [];
        for (let arr of this.value) {
            let str = "";
            for (let value of arr) {
                str += value;
            }
            strArr.push(str);
        }
        return strArr.join("-");
    }
}
exports.GUID = GUID;
//# sourceMappingURL=exTypes.js.map