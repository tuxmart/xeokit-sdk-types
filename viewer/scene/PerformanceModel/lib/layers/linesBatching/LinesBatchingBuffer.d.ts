/**
 * @private
 */
export class LinesBatchingBuffer {
    constructor(maxGeometryBatchSize?: number);
    maxVerts: number;
    maxIndices: number;
    positions: any[];
    colors: any[];
    flags: any[];
    flags2: any[];
    offsets: any[];
    indices: any[];
}
