/**
 * @private
 */
export class PointsBatchingBuffer {
    constructor(maxGeometryBatchSize?: number);
    maxVerts: number;
    maxIndices: number;
    positions: any[];
    colors: any[];
    intensities: any[];
    pickColors: any[];
    flags: any[];
    flags2: any[];
    offsets: any[];
}
