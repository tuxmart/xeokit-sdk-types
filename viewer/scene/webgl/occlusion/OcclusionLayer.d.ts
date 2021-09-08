/**
 * @private
 */
export class OcclusionLayer {
    constructor(scene: any, rtcCenter: any);
    scene: any;
    aabb: any;
    rtcCenter: any;
    rtcCenterHash: any;
    numMarkers: number;
    markers: {};
    markerList: any[];
    markerIndices: {};
    positions: any[];
    indices: any[];
    positionsBuf: ArrayBuf;
    lenPositionsBuf: number;
    indicesBuf: ArrayBuf;
    sectionPlanesActive: any[];
    culledBySectionPlanes: boolean;
    occlusionTestList: any[];
    lenOcclusionTestList: number;
    pixels: any[];
    aabbDirty: boolean;
    markerListDirty: boolean;
    positionsDirty: boolean;
    occlusionTestListDirty: boolean;
    addMarker(marker: any): void;
    markerWorldPosUpdated(marker: any): void;
    removeMarker(marker: any): void;
    update(): void;
    vbosDirty: boolean;
    _buildMarkerList(): void;
    _buildPositions(): void;
    _buildAABB(): void;
    _buildVBOs(): void;
    _buildOcclusionTestList(): void;
    _updateActiveSectionPlanes(): void;
    destroy(): void;
}
import { ArrayBuf } from "../ArrayBuf.js";
