export function quantizePositions(positions: any, aabb: any, positionsDecodeMatrix: any): Uint16Array;
export function octEncodeNormals(normals: any): Int8Array;
export function transformAndOctEncodeNormals(worldNormalMatrix: any, normals: any, lenNormals: any, compressedNormals: any, lenCompressedNormals: any): any;
export function octEncodeVec3(p: any, xfunc: any, yfunc: any): Int8Array;
export function octDecodeVec2(oct: any): number[];
