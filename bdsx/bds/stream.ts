import { abstract } from "../common";
import { VoidPointer } from "../core";
import { AbstractClass, nativeClass, nativeField } from "../nativeclass";
import { bool_t, int64_as_float_t } from "../nativetype";
import { CxxStringWrapper } from "../pointer";
import { procHacker } from "../prochacker";

@nativeClass(null)
export class ReadOnlyBinaryStream extends AbstractClass {
    @nativeField(VoidPointer)
    vftable: VoidPointer;
    @nativeField(CxxStringWrapper.ref(), 0x38)
    data:CxxStringWrapper;

    read(dest:VoidPointer, size:number):boolean {
        abstract();
    }
}
ReadOnlyBinaryStream.prototype.read = procHacker.jsv('??_7ReadOnlyBinaryStream@@6B@', '?read@ReadOnlyBinaryStream@@EEAA_NPEAX_K@Z', bool_t, {this: ReadOnlyBinaryStream}, VoidPointer, int64_as_float_t);

@nativeClass(null)
export class BinaryStream extends ReadOnlyBinaryStream {}
