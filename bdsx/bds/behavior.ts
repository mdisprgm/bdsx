import { StaticPointer } from "../core";
import { AbstractClass, nativeClass } from "../nativeclass";
import { NativeType } from "../nativetype";
import { procHacker } from "../prochacker";

@nativeClass(null)
export class MolangVariableMap extends AbstractClass {}

export enum MolangVariableIndex {}

@nativeClass(null)
/**
 * a struct, but has a destructor
 */
export class MolangScriptArg extends AbstractClass {}

MolangScriptArg[NativeType.dtor] = procHacker.js("??1MolangScriptArg@@QEAA@XZ", MolangScriptArg, { this: MolangScriptArg }, StaticPointer);

MolangVariableMap[NativeType.dtor] = procHacker.js("??1MolangVariableMap@@QEAA@XZ", MolangVariableMap, { this: MolangVariableMap }, StaticPointer);
MolangVariableMap[NativeType.ctor_copy] = procHacker.js("??0MolangVariableMap@@QEAA@AEBV0@@Z", MolangVariableMap, { this: MolangVariableMap }, StaticPointer);
MolangVariableMap[NativeType.ctor_move] = procHacker.js("??0MolangVariableMap@@QEAA@$$QEAV0@@Z", MolangVariableMap, { this: MolangVariableMap }, StaticPointer);
