"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const esbuild_1 = require("esbuild");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const esbuildExternal = ["esbuild"];
function emptyDir(path) {
    console.log("empty dir", path);
    const files = fs_1.default.readdirSync(path);
    files.forEach(file => {
        const filePath = `${path}/${file}`;
        const stats = fs_1.default.statSync(filePath);
        if (stats.isDirectory()) {
            emptyDir(filePath);
        }
        else {
            fs_1.default.unlinkSync(filePath);
        }
    });
}
const outDir = path_1.default.resolve(__dirname, '../dist');
if (!fs_1.default.existsSync(outDir)) {
    fs_1.default.mkdirSync(outDir);
}
emptyDir(outDir);
//CommonJS
{
    console.log("building CommonJS");
    const result = (0, esbuild_1.buildSync)({
        entryPoints: [path_1.default.resolve(__dirname, '../src/main.ts')],
        "outfile": path_1.default.resolve(__dirname, "../dist/main.cjs"),
        bundle: true,
        sourcemap: false,
        target: "node16",
        format: "cjs",
        external: esbuildExternal,
    });
    if (result.errors.length !== 0) {
        console.log(result);
        throw result;
    }
}
//ESM 
{
    console.log("building ESM");
    const result = (0, esbuild_1.buildSync)({
        entryPoints: [path_1.default.resolve(__dirname, '../src/main.ts')],
        "outfile": path_1.default.resolve(__dirname, "../dist/main.mjs"),
        bundle: true,
        sourcemap: false,
        target: "node16",
        format: "esm",
        external: esbuildExternal,
    });
    if (result.errors.length !== 0) {
        console.log(result);
        throw result;
    }
}
console.log("build DONE!");
//# sourceMappingURL=build.js.map