/**
 * @private
 */
export class LinesBatchingLayer {
    /**
     * @param model
     * @param cfg
     * @param cfg.layerIndex
     * @param cfg.positionsDecodeMatrix
     * @param cfg.maxGeometryBatchSize
     * @param cfg.rtcCenter
     * @param cfg.scratchMemory
     */
    constructor(model: any, cfg: any);
    /**
     * Index of this LinesBatchingLayer in {@link PerformanceModel#_layerList}.
     * @type {Number}
     */
    layerIndex: number;
    _batchingRenderers: any;
    model: any;
    _buffer: LinesBatchingBuffer;
    _scratchMemory: any;
    _state: RenderState;
    _numPortions: number;
    _numVisibleLayerPortions: number;
    _numTransparentLayerPortions: number;
    _numXRayedLayerPortions: number;
    _numSelectedLayerPortions: number;
    _numHighlightedLayerPortions: number;
    _numClippableLayerPortions: number;
    _numEdgesLayerPortions: number;
    _numPickableLayerPortions: number;
    _numCulledLayerPortions: number;
    _modelAABB: any;
    _portions: any[];
    _finalized: boolean;
    _positionsDecodeMatrix: any;
    _preCompressed: boolean;
    /**
     * The axis-aligned World-space boundary of this LinesBatchingLayer's positions.
     * @type {*|Float64Array}
     */
    aabb: any | Float64Array;
    /**
     * Tests if there is room for another portion in this LinesBatchingLayer.
     *
     * @param lenPositions Number of positions we'd like to create in the portion.
     * @param lenIndices Number of indices we'd like to create in this portion.
     * @returns {boolean} True if OK to create another portion.
     */
    canCreatePortion(lenPositions: any, lenIndices: any): boolean;
    /**
     * Creates a new portion within this LinesBatchingLayer, returns the new portion ID.
     *
     * Gives the portion the specified geometry, color and matrix.
     *
     * @param cfg.positions Flat float Local-space positions array.
     * @param cfg.indices  Flat int indices array.
     * @param cfg.color Quantized RGB color [0..255,0..255,0..255,0..255]
     * @param cfg.opacity Opacity [0..255]
     * @param [cfg.meshMatrix] Flat float 4x4 matrix
     * @param [cfg.worldMatrix] Flat float 4x4 matrix
     * @param cfg.worldAABB Flat float AABB World-space AABB
     * @param cfg.pickColor Quantized pick color
     * @returns {number} Portion ID
     */
    createPortion(cfg: any): number;
    /**
     * Builds batch VBOs from appended geometries.
     * No more portions can then be created.
     */
    finalize(): void;
    initFlags(portionId: any, flags: any, meshTransparent: any): void;
    setVisible(portionId: any, flags: any, transparent: any): void;
    setHighlighted(portionId: any, flags: any, transparent: any): void;
    setXRayed(portionId: any, flags: any, transparent: any): void;
    setSelected(portionId: any, flags: any, transparent: any): void;
    setEdges(portionId: any, flags: any, transparent: any): void;
    setClippable(portionId: any, flags: any): void;
    setCulled(portionId: any, flags: any, transparent: any): void;
    setCollidable(portionId: any, flags: any): void;
    setPickable(portionId: any, flags: any, transparent: any): void;
    setColor(portionId: any, color: any): void;
    setTransparent(portionId: any, flags: any, transparent: any): void;
    _setFlags(portionId: any, flags: any, transparent: any): void;
    _setFlags2(portionId: any, flags: any): void;
    setOffset(portionId: any, offset: any): void;
    drawColorOpaque(renderFlags: any, frameCtx: any): void;
    drawColorTransparent(renderFlags: any, frameCtx: any): void;
    drawDepth(renderFlags: any, frameCtx: any): void;
    drawNormals(renderFlags: any, frameCtx: any): void;
    drawSilhouetteXRayed(renderFlags: any, frameCtx: any): void;
    drawSilhouetteHighlighted(renderFlags: any, frameCtx: any): void;
    drawSilhouetteSelected(renderFlags: any, frameCtx: any): void;
    drawEdgesColorOpaque(renderFlags: any, frameCtx: any): void;
    drawEdgesColorTransparent(renderFlags: any, frameCtx: any): void;
    drawEdgesHighlighted(renderFlags: any, frameCtx: any): void;
    drawEdgesSelected(renderFlags: any, frameCtx: any): void;
    drawEdgesXRayed(renderFlags: any, frameCtx: any): void;
    drawPickMesh(frameCtx: any): void;
    drawPickDepths(frameCtx: any): void;
    drawPickNormals(frameCtx: any): void;
    drawOcclusion(frameCtx: any): void;
    drawShadow(frameCtx: any): void;
    destroy(): void;
}
import { LinesBatchingBuffer } from "./LinesBatchingBuffer.js";
import { RenderState } from "../../../../webgl/RenderState.js";
