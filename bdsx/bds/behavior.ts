import { abstract } from "../common";
import { StaticPointer } from "../core";
import { AbstractClass, nativeClass } from "../nativeclass";
import { int32_t, NativeType } from "../nativetype";
import { procHacker } from "../prochacker";
import { HashedString } from "./hashedstring";

@nativeClass(null)
export class MolangVariable extends AbstractClass {
    static getVariableName(index: MolangVariableIndex): string {
        abstract();
    }
}

@nativeClass(null)
export class MolangVariableMap extends AbstractClass {}

export enum MolangVariableIndex {
    OriginX,
    OriginY,
    OriginZ,
    WorldX,
    WorldY,
    WorldZ,
    SeaLevel,
    IsLegacy,
}

@nativeClass(null)
/**
 * a struct, but has a destructor
 */
export class MolangScriptArg extends AbstractClass {}

MolangScriptArg[NativeType.dtor] = procHacker.js("??1MolangScriptArg@@QEAA@XZ", MolangScriptArg, { this: MolangScriptArg }, StaticPointer);

MolangVariableMap[NativeType.dtor] = procHacker.js("??1MolangVariableMap@@QEAA@XZ", MolangVariableMap, { this: MolangVariableMap }, StaticPointer);
MolangVariableMap[NativeType.ctor_copy] = procHacker.js("??0MolangVariableMap@@QEAA@AEBV0@@Z", MolangVariableMap, { this: MolangVariableMap }, StaticPointer);
MolangVariableMap[NativeType.ctor_move] = procHacker.js("??0MolangVariableMap@@QEAA@$$QEAV0@@Z", MolangVariableMap, { this: MolangVariableMap }, StaticPointer);

const MolangVariable$getVariableName = procHacker.js("?getVariableName@MolangVariable@@SAAEBVHashedString@@W4MolangVariableIndex@@@Z", HashedString, null, int32_t);
MolangVariable.getVariableName = function (index) {
    return MolangVariable$getVariableName(index).str;
};
