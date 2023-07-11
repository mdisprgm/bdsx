const { cgate, runtimeError } = require('../core');
const { asm } = require('../assembler');
require('../codealloc');
const buffer = cgate.allocExecutableMemory(3404, 8);
buffer.setBuffer(new Uint8Array([
// pointer_np2js
0x48,0x83,0xec,0x28,0x48,0x89,0x54,0x24,0x38,0x4c,0x89,0x44,0x24,0x40,0x4c,0x8d,0x4c,0x24,0x20,0x48,0x8d,0x54,0x24,0x30,0x48,0x8b,0x05,0x39,0x0a,0x00,0x00,0x49,0xc7,0xc0,0x01,0x00,0x00,0x00,0x48,0x89,0x02,0xff,0x15,0x19,0x0a,0x00,0x00,0x85,0xc0,0x75,0x1e,0x48,0x8b,0x54,0x24,0x40,0x48,0x8b,0x4c,0x24,0x20,0x48,0x89,0x0a,0xff,0x15,0x4a,0x0a,0x00,0x00,0x48,0x8b,0x4c,0x24,0x38,0x48,0x89,0x48,0x10,0x31,0xc0,0x48,0x83,0xc4,0x28,0xc3,
// breakBeforeCallNativeFunction
0xcc,
// callNativeFunction
0x55,0x53,0x48,0x89,0xe5,0x48,0x83,0xec,0x28,0x4c,0x89,0xc3,0x31,0xc0,0x48,0x8d,0x55,0x28,0x48,0x89,0x02,0x48,0x8b,0x4b,0x08,0xff,0x15,0x02,0x0a,0x00,0x00,0x48,0x2b,0x65,0x28,0x4c,0x8d,0x45,0x38,0x48,0x89,0xe2,0x48,0x8b,0x0d,0x10,0x0a,0x00,0x00,0xe8,0x73,0xff,0xff,0xff,0x85,0xc0,0x0f,0x85,0x9c,0x00,0x00,0x00,0x48,0x8b,0x4b,0x18,0x4c,0x8d,0x4d,0x28,0x4c,0x8b,0x05,0xe4,0x09,0x00,0x00,0x48,0x8d,0x55,0x30,0x4c,0x89,0x45,0x30,0x49,0xc7,0xc0,0x02,0x00,0x00,0x00,0x48,0x83,0xec,0x20,0xff,0x15,0xc3,0x09,0x00,0x00,0x85,0xc0,0x75,0x70,0x48,0x8b,0x4b,0x10,0xff,0x15,0xc5,0x09,0x00,0x00,0x48,0x83,0xc4,0x20,0x48,0x8b,0x0c,0x24,0x48,0x8b,0x54,0x24,0x08,0x4c,0x8b,0x44,0x24,0x10,0x4c,0x8b,0x4c,0x24,0x18,0xf2,0x0f,0x10,0x04,0x24,0xf2,0x0f,0x10,0x4c,0x24,0x08,0xf2,0x0f,0x10,0x54,0x24,0x10,0xf2,0x0f,0x10,0x5c,0x24,0x18,0xff,0x50,0x10,0x48,0x89,0x45,0x18,0xf2,0x0f,0x11,0x45,0x20,0x48,0x8b,0x4b,0x20,0x4c,0x8d,0x4d,0x28,0x48,0x8d,0x55,0x30,0x49,0xc7,0xc0,0x02,0x00,0x00,0x00,0x48,0x83,0xec,0x20,0xff,0x15,0x5e,0x09,0x00,0x00,0x48,0x85,0xc0,0x75,0x0a,0x48,0x8b,0x45,0x28,0x48,0x89,0xec,0x5b,0x5d,0xc3,0x48,0x8b,0x05,0x50,0x09,0x00,0x00,0x48,0x89,0xec,0x5b,0x5d,0xc3,
// callJsFunction
0x48,0x81,0xec,0xa8,0x00,0x00,0x00,0x4c,0x89,0x9c,0x24,0xa0,0x00,0x00,0x00,0x48,0x89,0x4c,0x24,0x48,0x48,0x89,0x54,0x24,0x50,0x4c,0x89,0x44,0x24,0x58,0x4c,0x89,0x4c,0x24,0x60,0xf2,0x0f,0x11,0x44,0x24,0x68,0xf2,0x0f,0x11,0x4c,0x24,0x70,0xf2,0x0f,0x11,0x54,0x24,0x78,0xf2,0x0f,0x11,0x9c,0x24,0x80,0x00,0x00,0x00,0x4c,0x89,0x54,0x24,0x30,0x4c,0x8d,0x44,0x24,0x40,0x48,0x8d,0x54,0x24,0x48,0x48,0x8b,0x0d,0x06,0x09,0x00,0x00,0xe8,0x69,0xfe,0xff,0xff,0x85,0xc0,0x75,0x45,0x48,0x8b,0x4c,0x24,0x30,0x4c,0x8d,0x4c,0x24,0x28,0x49,0xc7,0xc0,0x02,0x00,0x00,0x00,0x48,0x8b,0x05,0xa5,0x08,0x00,0x00,0x48,0x8d,0x54,0x24,0x38,0x48,0x89,0x44,0x24,0x38,0xff,0x15,0xbd,0x08,0x00,0x00,0x85,0xc0,0x75,0x19,0x48,0x8b,0x84,0x24,0x90,0x00,0x00,0x00,0xf2,0x0f,0x10,0x84,0x24,0x98,0x00,0x00,0x00,0x48,0x81,0xc4,0xa8,0x00,0x00,0x00,0xc3,0x48,0x8b,0x4c,0x24,0x48,0x48,0x8b,0x54,0x24,0x50,0x4c,0x8b,0x44,0x24,0x58,0x4c,0x8b,0x4c,0x24,0x60,0xf2,0x0f,0x10,0x44,0x24,0x68,0xf2,0x0f,0x10,0x4c,0x24,0x70,0xf2,0x0f,0x10,0x54,0x24,0x78,0xf2,0x0f,0x10,0x9c,0x24,0x80,0x00,0x00,0x00,0x48,0x81,0xc4,0xa8,0x00,0x00,0x00,0xff,0x64,0x24,0xf8,
// crosscall_on_gamethread
0x53,0x48,0x83,0xec,0x20,0x48,0x8b,0x59,0x20,0x4c,0x8d,0x43,0x40,0x48,0x8d,0x53,0x48,0x48,0x8b,0x0d,0x66,0x08,0x00,0x00,0xe8,0xc9,0xfd,0xff,0xff,0x85,0xc0,0x75,0x38,0x48,0x8b,0x4b,0x30,0x4c,0x8d,0x4b,0x28,0x49,0xc7,0xc0,0x02,0x00,0x00,0x00,0x48,0x8b,0x05,0x07,0x08,0x00,0x00,0x48,0x8d,0x53,0x38,0x48,0x89,0x43,0x38,0xff,0x15,0x21,0x08,0x00,0x00,0x85,0xc0,0x75,0x10,0x48,0x8b,0x4b,0x20,0xff,0x15,0x6b,0x08,0x00,0x00,0x48,0x83,0xc4,0x20,0x5b,0xc3,0x48,0x83,0xc4,0x20,0x5b,0xe9,0x85,0x00,0x00,0x00,
// jsend_crossthread
0x48,0x81,0xec,0xa8,0x00,0x00,0x00,0x3d,0x03,0x00,0x01,0x00,0x75,0x77,0x31,0xc9,0x31,0xd2,0x45,0x31,0xc0,0x45,0x31,0xc9,0xff,0x15,0x2d,0x08,0x00,0x00,0x48,0x89,0x44,0x24,0x20,0x48,0x8d,0x0d,0x73,0xff,0xff,0xff,0x48,0xc7,0xc2,0x08,0x00,0x00,0x00,0xff,0x15,0xfc,0x07,0x00,0x00,0x48,0x89,0x44,0x24,0x18,0x48,0x89,0xc1,0xff,0x15,0xf6,0x07,0x00,0x00,0x48,0x8b,0x44,0x24,0x18,0x48,0x89,0xe2,0x48,0x8b,0x4c,0x24,0x20,0x48,0x89,0x50,0x20,0xba,0xff,0xff,0xff,0xff,0xff,0x15,0x02,0x08,0x00,0x00,0x48,0x8b,0x4c,0x24,0x20,0xff,0x15,0xe7,0x07,0x00,0x00,0x48,0x8b,0x84,0x24,0x90,0x00,0x00,0x00,0xf2,0x0f,0x10,0x84,0x24,0x98,0x00,0x00,0x00,0x48,0x81,0xc4,0xa8,0x00,0x00,0x00,0xc3,
// jsend_crash
0x89,0xc1,0x81,0xc9,0x00,0x00,0x00,0xe0,0xe9,0x1f,0x01,0x00,0x00,0xc3,
// jsend_returnZero
0x48,0x83,0xec,0x18,0x48,0x8d,0x4c,0x24,0x10,0xff,0x15,0x31,0x07,0x00,0x00,0x85,0xc0,0x75,0x0b,0x48,0x8b,0x4c,0x24,0x10,0xff,0x15,0x92,0x07,0x00,0x00,0x31,0xc0,0x48,0x83,0xc4,0x18,0xc3,
// logHookAsyncCb
0x4c,0x8b,0x41,0x28,0x48,0x8d,0x51,0x30,0x48,0x8b,0x49,0x20,0xff,0x25,0xf1,0x06,0x00,0x00,0xc3,
// logHook
0x53,0x48,0x83,0xec,0x20,0x89,0x4c,0x24,0x30,0x48,0x89,0x54,0x24,0x38,0x4c,0x89,0x44,0x24,0x40,0x4c,0x89,0x4c,0x24,0x48,0x4c,0x8d,0x4c,0x24,0x40,0x49,0x89,0xd0,0x31,0xd2,0x89,0xd1,0xff,0x15,0xce,0x06,0x00,0x00,0x48,0x85,0xc0,0x0f,0x88,0x60,0x00,0x00,0x00,0x48,0x89,0xc3,0x48,0x8d,0x50,0x11,0x48,0x8d,0x0d,0xac,0xff,0xff,0xff,0xff,0x15,0x21,0x07,0x00,0x00,0x48,0x8b,0x4c,0x24,0x30,0x48,0x89,0x48,0x20,0x48,0x89,0x58,0x28,0x4c,0x8d,0x4c,0x24,0x40,0x4c,0x8b,0x44,0x24,0x38,0x48,0x8d,0x53,0x01,0x48,0x8d,0x48,0x30,0x48,0x89,0xc3,0xff,0x15,0x89,0x06,0x00,0x00,0xff,0x15,0x73,0x06,0x00,0x00,0x48,0x89,0xd9,0x3b,0x05,0x9a,0x06,0x00,0x00,0x0f,0x85,0x07,0x00,0x00,0x00,0xe8,0x64,0xff,0xff,0xff,0xeb,0x43,0xff,0x15,0xdf,0x06,0x00,0x00,0xeb,0x3b,0x48,0xc7,0xc2,0x20,0x00,0x00,0x00,0x48,0x8d,0x0d,0x4c,0xff,0xff,0xff,0xff,0x15,0xc1,0x06,0x00,0x00,0x48,0x8b,0x54,0x24,0x30,0x48,0x89,0x50,0x20,0x48,0xc7,0x40,0x28,0x0f,0x00,0x00,0x00,0x48,0x8d,0x0d,0xce,0x03,0x00,0x00,0x48,0x8b,0x11,0x48,0x89,0x50,0x30,0x48,0x8b,0x51,0x08,0x48,0x89,0x50,0x38,0x48,0x83,0xc4,0x20,0x5b,0xc3,
// runtime_error
0x48,0x8b,0x01,0x81,0x38,0x03,0x00,0x00,0x80,0x74,0x06,0xff,0x25,0x3b,0x06,0x00,0x00,0xc3,
// raise_runtime_error
0x48,0x81,0xec,0x88,0x05,0x00,0x00,0x48,0x8d,0x54,0x24,0x18,0x89,0x0a,0x48,0x8d,0x8a,0x98,0x00,0x00,0x00,0x48,0x89,0x54,0x24,0x08,0x48,0x89,0x4c,0x24,0x10,0xff,0x15,0x1d,0x06,0x00,0x00,0x4c,0x8d,0x04,0x25,0x94,0x00,0x00,0x00,0x48,0x8d,0x4a,0x04,0x31,0xd2,0xff,0x15,0x39,0x06,0x00,0x00,0x48,0x8d,0x4c,0x24,0x08,0xff,0x15,0xf6,0x05,0x00,0x00,0x48,0x81,0xc4,0x88,0x05,0x00,0x00,0xc3,
// debugBreak
0xcc,0xc3,
// returnRcx
0x48,0x89,0xc8,0xc3,
// returnZero
0x31,0xc0,0xc3,
// CommandOutputSenderHook
0x48,0x83,0xec,0x28,0x48,0x8d,0x4d,0x07,0xff,0x15,0x57,0x06,0x00,0x00,0x48,0x83,0xc4,0x28,0xc3,
// ConsoleInputReader_getLine_hook
0x48,0x8b,0x0d,0x53,0x06,0x00,0x00,0xff,0x25,0x55,0x06,0x00,0x00,0xc3,
// gameThreadEntry
0x48,0x83,0xec,0x28,0xff,0x15,0x5a,0x06,0x00,0x00,0x48,0x8b,0x0d,0x4b,0x06,0x00,0x00,0xff,0x15,0x5d,0x06,0x00,0x00,0xff,0x15,0x4f,0x06,0x00,0x00,0x48,0x8b,0x0d,0x60,0x06,0x00,0x00,0xff,0x15,0x0a,0x06,0x00,0x00,0x48,0x83,0xc4,0x28,0xc3,
// gameThreadHook
0x48,0x83,0xec,0x28,0x48,0x89,0xcb,0x48,0x89,0x0d,0x1f,0x06,0x00,0x00,0x48,0x8d,0x0d,0xbc,0xff,0xff,0xff,0xff,0x15,0xba,0x05,0x00,0x00,0x48,0x8b,0x0d,0x33,0x06,0x00,0x00,0x48,0xc7,0xc2,0xff,0xff,0xff,0xff,0xff,0x15,0xde,0x05,0x00,0x00,0x48,0x83,0xc4,0x28,0xff,0x25,0x24,0x06,0x00,0x00,
// wrapped_main
0x48,0x83,0xec,0x28,0x8b,0x0d,0x2a,0x06,0x00,0x00,0x48,0x8b,0x15,0x1b,0x06,0x00,0x00,0x45,0x31,0xc0,0xff,0x15,0x22,0x06,0x00,0x00,0x48,0x83,0xc4,0x28,0x48,0x8b,0x0d,0x1f,0x06,0x00,0x00,0xff,0x25,0x71,0x05,0x00,0x00,
// updateWithSleep
0x48,0x83,0xec,0x28,0xff,0x15,0x17,0x06,0x00,0x00,0x48,0x83,0xc4,0x28,0x48,0x8b,0x05,0x14,0x06,0x00,0x00,0x48,0x85,0xc0,0x74,0x06,0xff,0x25,0x09,0x06,0x00,0x00,0xc3,
// actorDestructorHook
0x48,0x83,0xec,0x08,0xff,0x15,0xce,0x04,0x00,0x00,0x48,0x83,0xc4,0x08,0x48,0x3b,0x05,0xf3,0x04,0x00,0x00,0x75,0x06,0xff,0x25,0xf3,0x05,0x00,0x00,0xc3,
// packetRawHook
0x48,0x8d,0x05,0x03,0x06,0x00,0x00,0x42,0x8a,0x04,0x38,0x84,0xc0,0x74,0x0f,0x48,0x89,0xe9,0x44,0x89,0xfa,0x4d,0x89,0xe8,0xff,0x25,0xdc,0x05,0x00,0x00,0x36,0x8b,0x95,0xd0,0x00,0x00,0x00,0x48,0x8d,0x8d,0xe0,0x00,0x00,0x00,0xff,0x25,0xd0,0x05,0x00,0x00,
// packetBeforeHook
0x48,0x83,0xec,0x38,0x48,0x89,0x4c,0x24,0x28,0x4c,0x89,0x4c,0x24,0x20,0xff,0x15,0x04,0x07,0x00,0x00,0x48,0x83,0xc4,0x38,0x85,0xc0,0x74,0x20,0x48,0x8d,0x0d,0xb5,0x05,0x00,0x00,0x42,0x0f,0xb6,0x0c,0x39,0x85,0xc9,0x74,0x10,0x48,0x8b,0x4c,0x24,0xf0,0x48,0x8b,0x54,0x24,0xe8,0xff,0x25,0xe4,0x06,0x00,0x00,0xc3,
// packetBeforeCancelHandling
0x49,0x83,0xf8,0x7f,0x75,0x09,0x48,0x8b,0x44,0x24,0x28,0xc6,0x00,0x00,0xc3,0x48,0x89,0x5c,0x24,0x10,0x55,0x56,0x57,0x41,0x54,0x41,0x55,0x41,0x56,0xff,0x25,0xc8,0x06,0x00,0x00,
// packetAfterHook
0x48,0x83,0xec,0x28,0x4d,0x89,0xf0,0x4c,0x89,0xea,0x48,0x8b,0x8d,0xe0,0x00,0x00,0x00,0xff,0x15,0xc1,0x06,0x00,0x00,0x4c,0x8d,0x15,0x5a,0x05,0x00,0x00,0x43,0x8a,0x04,0x3a,0x48,0x83,0xc4,0x28,0x84,0xc0,0x74,0x10,0x48,0x8b,0x8d,0xe0,0x00,0x00,0x00,0x4c,0x89,0xea,0xff,0x25,0x96,0x06,0x00,0x00,0xc3,
// packetSendHook
0x48,0x83,0xec,0x48,0x49,0x8b,0x00,0xff,0x50,0x08,0x4c,0x8d,0x15,0x2c,0x05,0x00,0x00,0x42,0x8a,0x04,0x10,0x84,0xc0,0x0f,0x84,0x32,0x00,0x00,0x00,0x48,0x89,0x4c,0x24,0x20,0x48,0x89,0x54,0x24,0x28,0x4c,0x89,0x44,0x24,0x30,0x4c,0x89,0x4c,0x24,0x38,0xff,0x15,0x76,0x06,0x00,0x00,0x48,0x8b,0x4c,0x24,0x20,0x48,0x8b,0x54,0x24,0x28,0x4c,0x8b,0x44,0x24,0x30,0x4c,0x8b,0x4c,0x24,0x38,0x85,0xc0,0x75,0x0a,0x48,0x83,0xc4,0x48,0xff,0x25,0x4c,0x06,0x00,0x00,0x48,0x83,0xc4,0x48,0xc3,
// packetSendAllHook
0x48,0x83,0xec,0x28,0x49,0x8b,0x07,0xff,0x50,0x08,0x4c,0x8d,0x15,0xce,0x04,0x00,0x00,0x42,0x8a,0x04,0x10,0x84,0xc0,0x74,0x1b,0x4d,0x89,0xf8,0x48,0x89,0xda,0xff,0x15,0x2a,0x06,0x00,0x00,0x85,0xc0,0x74,0x0b,0x48,0x83,0xc4,0x28,0x59,0xff,0x25,0x23,0x06,0x00,0x00,0x48,0x83,0xc4,0x28,0x4d,0x85,0xf6,0x75,0x07,0x59,0xff,0x25,0x1b,0x06,0x00,0x00,0x41,0x0f,0xb6,0x86,0xa0,0x00,0x00,0x00,0xc3,
// packetSendInternalHook
0x48,0x83,0xec,0x48,0x49,0x8b,0x00,0xff,0x50,0x08,0x4c,0x8d,0x15,0x81,0x04,0x00,0x00,0x42,0x8a,0x04,0x10,0x84,0xc0,0x0f,0x84,0x32,0x00,0x00,0x00,0x48,0x89,0x4c,0x24,0x20,0x48,0x89,0x54,0x24,0x28,0x4c,0x89,0x44,0x24,0x30,0x4c,0x89,0x4c,0x24,0x38,0xff,0x15,0xe3,0x05,0x00,0x00,0x48,0x8b,0x4c,0x24,0x20,0x48,0x8b,0x54,0x24,0x28,0x4c,0x8b,0x44,0x24,0x30,0x4c,0x8b,0x4c,0x24,0x38,0x85,0xc0,0x75,0x0a,0x48,0x83,0xc4,0x48,0xff,0x25,0xc9,0x05,0x00,0x00,0x48,0x83,0xc4,0x48,0xc3,
// getline
0x53,0x56,0x48,0x83,0xec,0x18,0x48,0x89,0xcb,0x48,0x8b,0x0d,0xbc,0x05,0x00,0x00,0x48,0x8d,0x14,0x25,0x28,0x00,0x00,0x00,0xff,0x15,0x46,0x03,0x00,0x00,0x48,0x89,0x58,0x40,0x48,0x89,0xc6,0x48,0x8d,0x4e,0x20,0xff,0x15,0xb5,0x05,0x00,0x00,0x48,0x8b,0x0d,0x9e,0x05,0x00,0x00,0x48,0x89,0xc2,0x49,0xc7,0xc0,0x0a,0x00,0x00,0x00,0xff,0x15,0x96,0x05,0x00,0x00,0x48,0x89,0xf1,0xff,0x15,0x1d,0x03,0x00,0x00,0xeb,0xb8,0x48,0x83,0xc4,0x18,0x5e,0x5b,0xc3,
// terminateHook
0x48,0x83,0xec,0x28,0xff,0x15,0x82,0x02,0x00,0x00,0x3b,0x05,0x94,0x05,0x00,0x00,0x75,0x15,0x48,0x8b,0x0d,0x93,0x03,0x00,0x00,0xff,0x15,0xe5,0x02,0x00,0x00,0x31,0xc9,0xff,0x15,0x75,0x05,0x00,0x00,0x48,0x83,0xc4,0x28,0xff,0x25,0x63,0x05,0x00,0x00,0x5b,0x66,0x6f,0x72,0x6d,0x61,0x74,0x20,0x66,0x61,0x69,0x6c,0x65,0x64,0x5d,0x00,0x00,0x00,0x00,0x01,0x00,0x00,0x00,0x01,0x00,0x00,0x00,0x01,0x05,0x03,0x05,0x05,0x03,0x02,0x30,0x01,0x50,0x00,0x00,0x01,0x07,0x02,0x00,0x07,0x01,0x15,0x00,0x01,0x05,0x02,0x00,0x05,0x32,0x01,0x30,0x01,0x07,0x02,0x00,0x07,0x01,0x15,0x00,0x01,0x00,0x00,0x00,0x01,0x04,0x01,0x00,0x04,0x22,0x00,0x00,0x01,0x00,0x00,0x00,0x01,0x05,0x02,0x00,0x05,0x32,0x01,0x30,0x01,0x00,0x00,0x00,0x01,0x07,0x02,0x00,0x07,0x01,0xb1,0x00,0x01,0x00,0x00,0x00,0x01,0x00,0x00,0x00,0x01,0x00,0x00,0x00,0x01,0x04,0x01,0x00,0x04,0x42,0x00,0x00,0x01,0x00,0x00,0x00,0x01,0x04,0x01,0x00,0x04,0x42,0x00,0x00,0x01,0x04,0x01,0x00,0x04,0x42,0x00,0x00,0x01,0x04,0x01,0x00,0x04,0x42,0x00,0x00,0x01,0x04,0x01,0x00,0x04,0x42,0x00,0x00,0x01,0x04,0x01,0x00,0x04,0x02,0x00,0x00,0x01,0x00,0x00,0x00,0x01,0x04,0x01,0x00,0x04,0x62,0x00,0x00,0x01,0x00,0x00,0x00,0x01,0x04,0x01,0x00,0x04,0x42,0x00,0x00,0x01,0x04,0x01,0x00,0x04,0x82,0x00,0x00,0x01,0x04,0x01,0x00,0x04,0x42,0x00,0x00,0x01,0x04,0x01,0x00,0x04,0x82,0x00,0x00,0x01,0x06,0x03,0x00,0x06,0x22,0x02,0x60,0x01,0x30,0x00,0x00,0x01,0x04,0x01,0x00,0x04,0x42,0x00,0x00,
// #runtime_function_table
0x00,0x00,0x00,0x00,0x56,0x00,0x00,0x00,0xe8,0x07,0x00,0x00,0x56,0x00,0x00,0x00,0x57,0x00,0x00,0x00,0xec,0x07,0x00,0x00,0x57,0x00,0x00,0x00,0x3e,0x01,0x00,0x00,0xf0,0x07,0x00,0x00,0x3e,0x01,0x00,0x00,0x1a,0x02,0x00,0x00,0xfc,0x07,0x00,0x00,0x1a,0x02,0x00,0x00,0x7d,0x02,0x00,0x00,0x04,0x08,0x00,0x00,0x7d,0x02,0x00,0x00,0x02,0x03,0x00,0x00,0x0c,0x08,0x00,0x00,0x02,0x03,0x00,0x00,0x10,0x03,0x00,0x00,0x14,0x08,0x00,0x00,0x10,0x03,0x00,0x00,0x35,0x03,0x00,0x00,0x18,0x08,0x00,0x00,0x35,0x03,0x00,0x00,0x48,0x03,0x00,0x00,0x20,0x08,0x00,0x00,0x48,0x03,0x00,0x00,0x1c,0x04,0x00,0x00,0x24,0x08,0x00,0x00,0x1c,0x04,0x00,0x00,0x2e,0x04,0x00,0x00,0x2c,0x08,0x00,0x00,0x2e,0x04,0x00,0x00,0x7a,0x04,0x00,0x00,0x30,0x08,0x00,0x00,0x7a,0x04,0x00,0x00,0x7c,0x04,0x00,0x00,0x38,0x08,0x00,0x00,0x7c,0x04,0x00,0x00,0x80,0x04,0x00,0x00,0x3c,0x08,0x00,0x00,0x80,0x04,0x00,0x00,0x83,0x04,0x00,0x00,0x40,0x08,0x00,0x00,0x83,0x04,0x00,0x00,0x96,0x04,0x00,0x00,0x44,0x08,0x00,0x00,0x96,0x04,0x00,0x00,0xa4,0x04,0x00,0x00,0x4c,0x08,0x00,0x00,0xa4,0x04,0x00,0x00,0xd3,0x04,0x00,0x00,0x50,0x08,0x00,0x00,0xd3,0x04,0x00,0x00,0x0c,0x05,0x00,0x00,0x58,0x08,0x00,0x00,0x0c,0x05,0x00,0x00,0x37,0x05,0x00,0x00,0x60,0x08,0x00,0x00,0x37,0x05,0x00,0x00,0x58,0x05,0x00,0x00,0x68,0x08,0x00,0x00,0x58,0x05,0x00,0x00,0x76,0x05,0x00,0x00,0x70,0x08,0x00,0x00,0x76,0x05,0x00,0x00,0xa8,0x05,0x00,0x00,0x78,0x08,0x00,0x00,0xa8,0x05,0x00,0x00,0xe5,0x05,0x00,0x00,0x7c,0x08,0x00,0x00,0xe5,0x05,0x00,0x00,0x08,0x06,0x00,0x00,0x84,0x08,0x00,0x00,0x08,0x06,0x00,0x00,0x43,0x06,0x00,0x00,0x88,0x08,0x00,0x00,0x43,0x06,0x00,0x00,0xa1,0x06,0x00,0x00,0x90,0x08,0x00,0x00,0xa1,0x06,0x00,0x00,0xee,0x06,0x00,0x00,0x98,0x08,0x00,0x00,0xee,0x06,0x00,0x00,0x4c,0x07,0x00,0x00,0xa0,0x08,0x00,0x00,0x4c,0x07,0x00,0x00,0xa4,0x07,0x00,0x00,0xa8,0x08,0x00,0x00,0xa4,0x07,0x00,0x00,0xe5,0x07,0x00,0x00,0xb4,0x08,0x00,0x00,
]));
exports.asmcode = {
    get GetCurrentThreadId(){
        return buffer.getPointer(2608);
    },
    set GetCurrentThreadId(n){
        buffer.setPointer(n, 2608);
    },
    get addressof_GetCurrentThreadId(){
        return buffer.add(2608);
    },
    get bedrockLogNp(){
        return buffer.getPointer(2616);
    },
    set bedrockLogNp(n){
        buffer.setPointer(n, 2616);
    },
    get addressof_bedrockLogNp(){
        return buffer.add(2616);
    },
    get vsnprintf(){
        return buffer.getPointer(2624);
    },
    set vsnprintf(n){
        buffer.setPointer(n, 2624);
    },
    get addressof_vsnprintf(){
        return buffer.add(2624);
    },
    get JsConstructObject(){
        return buffer.getPointer(2632);
    },
    set JsConstructObject(n){
        buffer.setPointer(n, 2632);
    },
    get addressof_JsConstructObject(){
        return buffer.add(2632);
    },
    get JsGetAndClearException(){
        return buffer.getPointer(2640);
    },
    set JsGetAndClearException(n){
        buffer.setPointer(n, 2640);
    },
    get addressof_JsGetAndClearException(){
        return buffer.add(2640);
    },
    get js_null(){
        return buffer.getPointer(2648);
    },
    set js_null(n){
        buffer.setPointer(n, 2648);
    },
    get addressof_js_null(){
        return buffer.add(2648);
    },
    get nodeThreadId(){
        return buffer.getInt32(2656);
    },
    set nodeThreadId(n){
        buffer.setInt32(n, 2656);
    },
    get addressof_nodeThreadId(){
        return buffer.add(2656);
    },
    get runtimeErrorRaise(){
        return buffer.getPointer(2664);
    },
    set runtimeErrorRaise(n){
        buffer.setPointer(n, 2664);
    },
    get addressof_runtimeErrorRaise(){
        return buffer.add(2664);
    },
    get RtlCaptureContext(){
        return buffer.getPointer(2672);
    },
    set RtlCaptureContext(n){
        buffer.setPointer(n, 2672);
    },
    get addressof_RtlCaptureContext(){
        return buffer.add(2672);
    },
    get JsNumberToInt(){
        return buffer.getPointer(2680);
    },
    set JsNumberToInt(n){
        buffer.setPointer(n, 2680);
    },
    get addressof_JsNumberToInt(){
        return buffer.add(2680);
    },
    get JsCallFunction(){
        return buffer.getPointer(2688);
    },
    set JsCallFunction(n){
        buffer.setPointer(n, 2688);
    },
    get addressof_JsCallFunction(){
        return buffer.add(2688);
    },
    get js_undefined(){
        return buffer.getPointer(2696);
    },
    set js_undefined(n){
        buffer.setPointer(n, 2696);
    },
    get addressof_js_undefined(){
        return buffer.add(2696);
    },
    get pointer_js2class(){
        return buffer.getPointer(2704);
    },
    set pointer_js2class(n){
        buffer.setPointer(n, 2704);
    },
    get addressof_pointer_js2class(){
        return buffer.add(2704);
    },
    get NativePointer(){
        return buffer.getPointer(2712);
    },
    set NativePointer(n){
        buffer.setPointer(n, 2712);
    },
    get addressof_NativePointer(){
        return buffer.add(2712);
    },
    get memset(){
        return buffer.getPointer(2720);
    },
    set memset(n){
        buffer.setPointer(n, 2720);
    },
    get addressof_memset(){
        return buffer.add(2720);
    },
    get uv_async_call(){
        return buffer.getPointer(2728);
    },
    set uv_async_call(n){
        buffer.setPointer(n, 2728);
    },
    get addressof_uv_async_call(){
        return buffer.add(2728);
    },
    get uv_async_alloc(){
        return buffer.getPointer(2736);
    },
    set uv_async_alloc(n){
        buffer.setPointer(n, 2736);
    },
    get addressof_uv_async_alloc(){
        return buffer.add(2736);
    },
    get uv_async_post(){
        return buffer.getPointer(2744);
    },
    set uv_async_post(n){
        buffer.setPointer(n, 2744);
    },
    get addressof_uv_async_post(){
        return buffer.add(2744);
    },
    get pointer_np2js(){
        return buffer.add(0);
    },
    get breakBeforeCallNativeFunction(){
        return buffer.add(86);
    },
    get callNativeFunction(){
        return buffer.add(87);
    },
    get callJsFunction(){
        return buffer.add(318);
    },
    get jshook_fireError(){
        return buffer.getPointer(2752);
    },
    set jshook_fireError(n){
        buffer.setPointer(n, 2752);
    },
    get addressof_jshook_fireError(){
        return buffer.add(2752);
    },
    get CreateEventW(){
        return buffer.getPointer(2760);
    },
    set CreateEventW(n){
        buffer.setPointer(n, 2760);
    },
    get addressof_CreateEventW(){
        return buffer.add(2760);
    },
    get CloseHandle(){
        return buffer.getPointer(2768);
    },
    set CloseHandle(n){
        buffer.setPointer(n, 2768);
    },
    get addressof_CloseHandle(){
        return buffer.add(2768);
    },
    get SetEvent(){
        return buffer.getPointer(2776);
    },
    set SetEvent(n){
        buffer.setPointer(n, 2776);
    },
    get addressof_SetEvent(){
        return buffer.add(2776);
    },
    get WaitForSingleObject(){
        return buffer.getPointer(2784);
    },
    set WaitForSingleObject(n){
        buffer.setPointer(n, 2784);
    },
    get addressof_WaitForSingleObject(){
        return buffer.add(2784);
    },
    get jsend_crash(){
        return buffer.add(770);
    },
    get jsend_crossthread(){
        return buffer.add(637);
    },
    get raise_runtime_error(){
        return buffer.add(1070);
    },
    get jsend_returnZero(){
        return buffer.add(784);
    },
    get logHookAsyncCb(){
        return buffer.add(821);
    },
    get logHook(){
        return buffer.add(840);
    },
    get runtime_error(){
        return buffer.add(1052);
    },
    get debugBreak(){
        return buffer.add(1146);
    },
    get returnRcx(){
        return buffer.add(1148);
    },
    get returnZero(){
        return buffer.add(1152);
    },
    get CommandOutputSenderHookCallback(){
        return buffer.getPointer(2792);
    },
    set CommandOutputSenderHookCallback(n){
        buffer.setPointer(n, 2792);
    },
    get addressof_CommandOutputSenderHookCallback(){
        return buffer.add(2792);
    },
    get CommandOutputSenderHook(){
        return buffer.add(1155);
    },
    get commandQueue(){
        return buffer.getPointer(2800);
    },
    set commandQueue(n){
        buffer.setPointer(n, 2800);
    },
    get addressof_commandQueue(){
        return buffer.add(2800);
    },
    get MultiThreadQueueTryDequeue(){
        return buffer.getPointer(2808);
    },
    set MultiThreadQueueTryDequeue(n){
        buffer.setPointer(n, 2808);
    },
    get addressof_MultiThreadQueueTryDequeue(){
        return buffer.add(2808);
    },
    get ConsoleInputReader_getLine_hook(){
        return buffer.add(1174);
    },
    get gameThreadStart(){
        return buffer.getPointer(2824);
    },
    set gameThreadStart(n){
        buffer.setPointer(n, 2824);
    },
    get addressof_gameThreadStart(){
        return buffer.add(2824);
    },
    get gameThreadFinish(){
        return buffer.getPointer(2832);
    },
    set gameThreadFinish(n){
        buffer.setPointer(n, 2832);
    },
    get addressof_gameThreadFinish(){
        return buffer.add(2832);
    },
    get gameThreadInner(){
        return buffer.getPointer(2840);
    },
    set gameThreadInner(n){
        buffer.setPointer(n, 2840);
    },
    get addressof_gameThreadInner(){
        return buffer.add(2840);
    },
    get free(){
        return buffer.getPointer(2848);
    },
    set free(n){
        buffer.setPointer(n, 2848);
    },
    get addressof_free(){
        return buffer.add(2848);
    },
    get evWaitGameThreadEnd(){
        return buffer.getPointer(2856);
    },
    set evWaitGameThreadEnd(n){
        buffer.setPointer(n, 2856);
    },
    get addressof_evWaitGameThreadEnd(){
        return buffer.add(2856);
    },
    get _Cnd_do_broadcast_at_thread_exit(){
        return buffer.getPointer(2864);
    },
    set _Cnd_do_broadcast_at_thread_exit(n){
        buffer.setPointer(n, 2864);
    },
    get addressof__Cnd_do_broadcast_at_thread_exit(){
        return buffer.add(2864);
    },
    get gameThreadHook(){
        return buffer.add(1235);
    },
    get bedrock_server_exe_args(){
        return buffer.getPointer(2872);
    },
    set bedrock_server_exe_args(n){
        buffer.setPointer(n, 2872);
    },
    get addressof_bedrock_server_exe_args(){
        return buffer.add(2872);
    },
    get bedrock_server_exe_argc(){
        return buffer.getInt32(2880);
    },
    set bedrock_server_exe_argc(n){
        buffer.setInt32(n, 2880);
    },
    get addressof_bedrock_server_exe_argc(){
        return buffer.add(2880);
    },
    get bedrock_server_exe_main(){
        return buffer.getPointer(2888);
    },
    set bedrock_server_exe_main(n){
        buffer.setPointer(n, 2888);
    },
    get addressof_bedrock_server_exe_main(){
        return buffer.add(2888);
    },
    get finishCallback(){
        return buffer.getPointer(2896);
    },
    set finishCallback(n){
        buffer.setPointer(n, 2896);
    },
    get addressof_finishCallback(){
        return buffer.add(2896);
    },
    get wrapped_main(){
        return buffer.add(1292);
    },
    get cgateNodeLoop(){
        return buffer.getPointer(2904);
    },
    set cgateNodeLoop(n){
        buffer.setPointer(n, 2904);
    },
    get addressof_cgateNodeLoop(){
        return buffer.add(2904);
    },
    get updateEvTargetFire(){
        return buffer.getPointer(2912);
    },
    set updateEvTargetFire(n){
        buffer.setPointer(n, 2912);
    },
    get addressof_updateEvTargetFire(){
        return buffer.add(2912);
    },
    get updateWithSleep(){
        return buffer.add(1335);
    },
    get removeActor(){
        return buffer.getPointer(2920);
    },
    set removeActor(n){
        buffer.setPointer(n, 2920);
    },
    get addressof_removeActor(){
        return buffer.add(2920);
    },
    get actorDestructorHook(){
        return buffer.add(1368);
    },
    get onPacketRaw(){
        return buffer.getPointer(2928);
    },
    set onPacketRaw(n){
        buffer.setPointer(n, 2928);
    },
    get addressof_onPacketRaw(){
        return buffer.add(2928);
    },
    get createPacketRaw(){
        return buffer.getPointer(2936);
    },
    set createPacketRaw(n){
        buffer.setPointer(n, 2936);
    },
    get addressof_createPacketRaw(){
        return buffer.add(2936);
    },
    getEnabledPacket(idx){
        return buffer.getUint8(2944+idx);
    },
    setEnabledPacket(n, idx){
        buffer.setUint8(n, 2944+idx);
    },
    get addressof_enabledPacket(){
        return buffer.add(2944);
    },
    get packetRawHook(){
        return buffer.add(1398);
    },
    get packetBeforeOriginal(){
        return buffer.getPointer(3264);
    },
    set packetBeforeOriginal(n){
        buffer.setPointer(n, 3264);
    },
    get addressof_packetBeforeOriginal(){
        return buffer.add(3264);
    },
    get onPacketBefore(){
        return buffer.getPointer(3272);
    },
    set onPacketBefore(n){
        buffer.setPointer(n, 3272);
    },
    get addressof_onPacketBefore(){
        return buffer.add(3272);
    },
    get packetBeforeHook(){
        return buffer.add(1448);
    },
    get PacketViolationHandlerHandleViolationAfter(){
        return buffer.getPointer(3280);
    },
    set PacketViolationHandlerHandleViolationAfter(n){
        buffer.setPointer(n, 3280);
    },
    get addressof_PacketViolationHandlerHandleViolationAfter(){
        return buffer.add(3280);
    },
    get packetBeforeCancelHandling(){
        return buffer.add(1509);
    },
    get onPacketAfter(){
        return buffer.getPointer(3288);
    },
    set onPacketAfter(n){
        buffer.setPointer(n, 3288);
    },
    get addressof_onPacketAfter(){
        return buffer.add(3288);
    },
    get handlePacket(){
        return buffer.getPointer(3296);
    },
    set handlePacket(n){
        buffer.setPointer(n, 3296);
    },
    get addressof_handlePacket(){
        return buffer.add(3296);
    },
    get packetAfterHook(){
        return buffer.add(1544);
    },
    get sendOriginal(){
        return buffer.getPointer(3304);
    },
    set sendOriginal(n){
        buffer.setPointer(n, 3304);
    },
    get addressof_sendOriginal(){
        return buffer.add(3304);
    },
    get onPacketSend(){
        return buffer.getPointer(3312);
    },
    set onPacketSend(n){
        buffer.setPointer(n, 3312);
    },
    get addressof_onPacketSend(){
        return buffer.add(3312);
    },
    get packetSendHook(){
        return buffer.add(1603);
    },
    get packetSendAllCancelPoint(){
        return buffer.getPointer(3320);
    },
    set packetSendAllCancelPoint(n){
        buffer.setPointer(n, 3320);
    },
    get addressof_packetSendAllCancelPoint(){
        return buffer.add(3320);
    },
    get packetSendAllJumpPoint(){
        return buffer.getPointer(3328);
    },
    set packetSendAllJumpPoint(n){
        buffer.setPointer(n, 3328);
    },
    get addressof_packetSendAllJumpPoint(){
        return buffer.add(3328);
    },
    get packetSendAllHook(){
        return buffer.add(1697);
    },
    get onPacketSendInternal(){
        return buffer.getPointer(3336);
    },
    set onPacketSendInternal(n){
        buffer.setPointer(n, 3336);
    },
    get addressof_onPacketSendInternal(){
        return buffer.add(3336);
    },
    get sendInternalOriginal(){
        return buffer.getPointer(3344);
    },
    set sendInternalOriginal(n){
        buffer.setPointer(n, 3344);
    },
    get addressof_sendInternalOriginal(){
        return buffer.add(3344);
    },
    get packetSendInternalHook(){
        return buffer.add(1774);
    },
    get getLineProcessTask(){
        return buffer.getPointer(3352);
    },
    set getLineProcessTask(n){
        buffer.setPointer(n, 3352);
    },
    get addressof_getLineProcessTask(){
        return buffer.add(3352);
    },
    get std_cin(){
        return buffer.getPointer(3360);
    },
    set std_cin(n){
        buffer.setPointer(n, 3360);
    },
    get addressof_std_cin(){
        return buffer.add(3360);
    },
    get std_getline(){
        return buffer.getPointer(3368);
    },
    set std_getline(n){
        buffer.setPointer(n, 3368);
    },
    get addressof_std_getline(){
        return buffer.add(3368);
    },
    get std_string_ctor(){
        return buffer.getPointer(3376);
    },
    set std_string_ctor(n){
        buffer.setPointer(n, 3376);
    },
    get addressof_std_string_ctor(){
        return buffer.add(3376);
    },
    get getline(){
        return buffer.add(1868);
    },
    get terminate(){
        return buffer.getPointer(3384);
    },
    set terminate(n){
        buffer.setPointer(n, 3384);
    },
    get addressof_terminate(){
        return buffer.add(3384);
    },
    get ExitThread(){
        return buffer.getPointer(3392);
    },
    set ExitThread(n){
        buffer.setPointer(n, 3392);
    },
    get addressof_ExitThread(){
        return buffer.add(3392);
    },
    get bdsMainThreadId(){
        return buffer.getInt32(3400);
    },
    set bdsMainThreadId(n){
        buffer.setInt32(n, 3400);
    },
    get addressof_bdsMainThreadId(){
        return buffer.add(3400);
    },
    get terminateHook(){
        return buffer.add(1956);
    },
};
runtimeError.addFunctionTable(buffer.add(2236), 31, buffer);
asm.setFunctionNames(buffer, {"pointer_np2js":0,"breakBeforeCallNativeFunction":86,"callNativeFunction":87,"callJsFunction":318,"crosscall_on_gamethread":538,"jsend_crash":770,"jsend_crossthread":637,"raise_runtime_error":1070,"jsend_returnZero":784,"logHookAsyncCb":821,"logHook":840,"runtime_error":1052,"debugBreak":1146,"returnRcx":1148,"returnZero":1152,"CommandOutputSenderHook":1155,"ConsoleInputReader_getLine_hook":1174,"gameThreadEntry":1188,"gameThreadHook":1235,"wrapped_main":1292,"updateWithSleep":1335,"actorDestructorHook":1368,"packetRawHook":1398,"packetBeforeHook":1448,"packetBeforeCancelHandling":1509,"packetAfterHook":1544,"packetSendHook":1603,"packetSendAllHook":1697,"packetSendInternalHook":1774,"getline":1868,"terminateHook":1956});
