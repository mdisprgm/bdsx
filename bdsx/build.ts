import * as swc from "@swc/core";
import * as fs from "fs";
import * as path from "path";
const options: swc.Options = {
    sourceMaps: "inline",
    exclude: [".*\\.js$"],
    jsc: {
        parser: {
            syntax: "typescript",
            decorators: true,
        },
        target: "es2017",
    },
    module: {
        type: "commonjs",
        importInterop: "none",
    },
};

function transform(path: fs.PathLike): void {
    const dirs = fs.readdirSync(path);
    for (const content of dirs) {
        const stat = fs.statSync(content);
        if (stat.isDirectory()) {
            transform(content);
        } else if (content.endsWith(".ts") && !content.endsWith(".d.ts")) {
            swc.transformFileSync(content, options);
        }
    }
}
