/**
 * @private
 */
export class TrianglesBatchingBuffer {
    constructor(maxGeometryBatchSize?: number);
    maxVerts: number;
    maxIndices: number;
    positions: any[];
    colors: any[];
    metallicRoughness: any[];
    normals: any[];
    pickColors: any[];
    flags: any[];
    flags2: any[];
    offsets: any[];
    indices: any[];
    edgeIndices: any[];
}
