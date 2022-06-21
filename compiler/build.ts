import { buildSync } from "esbuild"
import fs from "fs"
import path from "path"
const esbuildExternal = ["esbuild"]


function emptyDir(path: string) {
    console.log("empty dir",path)

    const files = fs.readdirSync(path);
    files.forEach(file => {
        const filePath = `${path}/${file}`;
        const stats = fs.statSync(filePath);
        if (stats.isDirectory()) {
            emptyDir(filePath);
        } else {
            fs.unlinkSync(filePath);
        }
    });
}

const outDir = path.resolve(__dirname, '../dist')
if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir);
}
emptyDir(outDir);


//CommonJS
{
    console.log("building CommonJS")

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
}
//ESM 
{
    console.log("building ESM")

    const result = buildSync({
        entryPoints: [path.resolve(__dirname, '../src/main.ts')],
        "outfile": path.resolve(__dirname, "../dist/main.mjs"),
        bundle: true,
        sourcemap: false,
        target: "node16",
        format: "esm",
        external: esbuildExternal,
    });

    if (result.errors.length !== 0) {
        console.log(result)
        throw result
    }
}

console.log("build DONE!")