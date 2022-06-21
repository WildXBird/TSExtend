import { buildSync } from "esbuild"
import fs from "fs"
import path from "path"
// const path = require('path');
// const fs = require('fs');
const esbuildExternal = ["esbuild"]


function emptyDir(path: string) {
    const files = fs.readdirSync(path);
    files.forEach(file => {
        const filePath = `${path}/${file}`;
        const stats = fs.statSync(filePath);
        if (stats.isDirectory()) {
            emptyDir(filePath);
        } else {
            fs.unlinkSync(filePath);
            console.log(`删除${file}文件成功`);
        }
    });
}

/////////////////////////////////////
// console.log("清空TEMP...")
const outDir = path.resolve(__dirname, './dist')
if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir);
}
emptyDir(outDir);
/////////////////////////////////
// console.log("创建SecurityOutDir")
// const SecurityOutDir = path.resolve(TempDir, './SecurityEncoded')
// if (!fs.existsSync(SecurityOutDir)) {
//     fs.mkdirSync(SecurityOutDir);
// }


//编译器代码打包
{
    console.log("编译器代码打包")

    const result = buildSync({
        entryPoints: [path.resolve(__dirname, '../src/main.ts')],
        "outfile": path.resolve(__dirname, "../dist/main.cjs"),
        bundle: true,
        sourcemap: false,
        target: "node16",
        format: "cjs",
        external: esbuildExternal,

    });

    if (result.errors.length !== 0) {
        console.log(result)
        throw result
    }
    console.log(result); // { errors: [], warnings: [] }
}
console.log("RunSecurityEncode DONE!")