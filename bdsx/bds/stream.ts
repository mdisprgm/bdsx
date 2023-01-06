import { abstract } from "../common";
import { VoidPointer } from "../core";
import { AbstractClass, nativeClass, nativeField } from "../nativeclass";
import { bool_t, float32_t, float64_t, GslStringSpan, int64_as_float_t, uint8_t, void_t } from "../nativetype";
import { CxxStringWrapper } from "../pointer";
import { procHacker } from "../prochacker";

@nativeClass(null)
export class ReadOnlyBinaryStream extends AbstractClass {
    @nativeField(VoidPointer)
    vftable: VoidPointer;
    @nativeField(CxxStringWrapper.ref(), 0x38)
    data: CxxStringWrapper;

    read(dest: VoidPointer, size: number): boolean {
        abstract();
    }
}
ReadOnlyBinaryStream.prototype.read = procHacker.jsv(
    "??_7ReadOnlyBinaryStream@@6B@",
    "?read@ReadOnlyBinaryStream@@EEAA_NPEAX_K@Z",
    bool_t,
    { this: ReadOnlyBinaryStream },
    VoidPointer,
    int64_as_float_t,
);

@nativeClass(null)
export class BinaryStream extends ReadOnlyBinaryStream {
    writeBool(value: bool_t): void {
        abstract();
    }
    writeByte(value: uint8_t): void {
        abstract();
    }
    writeDouble(value: float64_t): void {
        abstract();
    }
    writeFloat(value: float32_t): void {
        abstract();
    }
    writeString(string: GslStringSpan): void {
        abstract();
    }
}

BinaryStream.prototype.writeBool = procHacker.js("?writeBool@BinaryStream@@QEAAX_N@Z", void_t, { this: BinaryStream }, bool_t);
BinaryStream.prototype.writeByte = procHacker.js("?writeByte@BinaryStream@@QEAAXE@Z", void_t, { this: BinaryStream }, uint8_t);
BinaryStream.prototype.writeDouble = procHacker.js("?writeDouble@BinaryStream@@QEAAXN@Z", void_t, { this: BinaryStream }, float64_t);
BinaryStream.prototype.writeFloat = procHacker.js("?writeFloat@BinaryStream@@QEAAXM@Z", void_t, { this: BinaryStream }, float32_t);
BinaryStream.prototype.writeString = procHacker.js(
    "?writeString@BinaryStream@@QEAAXV?$basic_string_span@$$CBD$0?0@gsl@@@Z",
    void_t,
    { this: BinaryStream },
    GslStringSpan,
);
