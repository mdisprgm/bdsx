import "./command";

import * as fs from "fs";
import * as path from "path";

function load(filePath: string & fs.PathLike) {
    require(filePath);
    console.log(`[First] loaded - ${path.basename(filePath)}`.blue);
}

load("./command");
