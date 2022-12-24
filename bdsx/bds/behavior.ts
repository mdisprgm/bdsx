import { abstract } from "../common";
import { StaticPointer } from "../core";
import { AbstractClass, nativeClass } from "../nativeclass";
import { bool_t, int16_t, NativeType, void_t } from "../nativetype";
import { procHacker } from "../prochacker";
import { HashedString } from "./hashedstring";

@nativeClass(null)
export class MolangVariable extends AbstractClass {
    static getVariableName(index: MolangVariableIndex): string {
        abstract();
    }
}

@nativeClass(null)
export class MolangVariableMap extends AbstractClass {
    setMolangVariable(name: string, arg: MolangScriptArg): void;
    setMolangVariable(index: MolangVariableIndex, arg: MolangScriptArg): void;
    setMolangVariable(index: MolangVariableIndex | string, arg: MolangScriptArg): void {
        if (typeof index === "string") {
            const hashed = HashedString.constructWith(index);
            setMolangVariableByName(this, hashed, arg);
            hashed.destruct();
        } else {
            setMolangVariableById(this, index, arg);
        }
    }
    getMolangVariable(index: MolangVariableIndex, unknown = false): MolangScriptArg {
        abstract();
    }
}

export enum MolangVariableIndex /** : short */ {
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

const MolangVariable$getVariableName = procHacker.js("?getVariableName@MolangVariable@@SAAEBVHashedString@@W4MolangVariableIndex@@@Z", HashedString, null, int16_t);
MolangVariable.getVariableName = function (index) {
    return MolangVariable$getVariableName(index).str;
};

const setMolangVariableById = procHacker.js("?setMolangVariable@MolangVariableMap@@QEAAXW4MolangVariableIndex@@AEBUMolangScriptArg@@@Z", void_t, null, MolangVariableMap, int16_t, MolangScriptArg);
const setMolangVariableByName = procHacker.js("?setMolangVariable@MolangVariableMap@@QEAAXAEBVHashedString@@AEBUMolangScriptArg@@@Z", void_t, null, MolangVariableMap, HashedString, MolangScriptArg);
MolangVariableMap.prototype.getMolangVariable = procHacker.js("?_getMolangVariable@MolangVariableMap@@AEBAPEBVMolangVariable@@W4MolangVariableIndex@@@Z", MolangScriptArg, { this: MolangVariableMap }, int16_t, bool_t);
