/**
 * @private
 */
export class TrianglesInstancingLayer {
    /**
     * @param model
     * @param cfg
     * @param cfg.layerIndex
     * @param cfg.positions Flat float Local-space positions array.
     * @param [cfg.normals] Flat float normals array.
     * @param cfg.indices Flat int indices array.
     * @param [cfg.edgeIndices] Flat int edges indices array.
     * @param cfg.edgeThreshold
     * @param cfg.rtcCenter
     * @params cfg.solid
     */
    constructor(model: any, cfg: any);
    /**
     * State sorting key.
     * @type {string}
     */
    sortId: string;
    /**
     * Index of this InstancingLayer in PerformanceModel#_layerList
     * @type {Number}
     */
    layerIndex: number;
    _instancingRenderers: any;
    model: any;
    _aabb: any;
    _state: RenderState;
    _numPortions: number;
    _numVisibleLayerPortions: number;
    _numTransparentLayerPortions: number;
    _numXRayedLayerPortions: number;
    _numHighlightedLayerPortions: number;
    _numSelectedLayerPortions: number;
    _numClippableLayerPortions: number;
    _numEdgesLayerPortions: number;
    _numPickableLayerPortions: number;
    _numCulledLayerPortions: number;
    /** @private */
    private numIndices;
    _colors: any[];
    _metallicRoughness: any[];
    _pickColors: any[];
    _offsets: any[];
    _modelMatrixCol0: any[];
    _modelMatrixCol1: any[];
    _modelMatrixCol2: any[];
    _modelNormalMatrixCol0: any[];
    _modelNormalMatrixCol1: any[];
    _modelNormalMatrixCol2: any[];
    _portions: any[];
    _finalized: boolean;
    /**
     * The axis-aligned World-space boundary of this InstancingLayer's positions.
     * @type {*|Float64Array}
     */
    aabb: any | Float64Array;
    /**
     * When true, this layer contains solid triangle meshes, otherwise this layer contains surface triangle meshes
     * @type {boolean}
     */
    solid: boolean;
    /**
     * Creates a new portion within this InstancingLayer, returns the new portion ID.
     *
     * The portion will instance this InstancingLayer's geometry.
     *
     * Gives the portion the specified color and matrix.
     *
     * @param cfg Portion params
     * @param cfg.color Color [0..255,0..255,0..255]
     * @param cfg.metallic Metalness factor [0..255]
     * @param cfg.roughness Roughness factor [0..255]
     * @param cfg.opacity Opacity [0..255].
     * @param cfg.meshMatrix Flat float 4x4 matrix.
     * @param [cfg.worldMatrix] Flat float 4x4 matrix.
     * @param cfg.worldAABB Flat float AABB.
     * @param cfg.pickColor Quantized pick color
     * @returns {number} Portion ID.
     */
    createPortion(cfg: any): number;
    finalize(): void;
    isEmpty(): boolean;
    initFlags(portionId: any, flags: any, meshTransparent: any): void;
    setVisible(portionId: any, flags: any, meshTransparent: any): void;
    setHighlighted(portionId: any, flags: any, meshTransparent: any): void;
    setXRayed(portionId: any, flags: any, meshTransparent: any): void;
    setSelected(portionId: any, flags: any, meshTransparent: any): void;
    setEdges(portionId: any, flags: any, meshTransparent: any): void;
    setClippable(portionId: any, flags: any): void;
    setCollidable(portionId: any, flags: any): void;
    setPickable(portionId: any, flags: any, meshTransparent: any): void;
    setCulled(portionId: any, flags: any, meshTransparent: any): void;
    setColor(portionId: any, color: any): void;
    setTransparent(portionId: any, flags: any, transparent: any): void;
    _setFlags(portionId: any, flags: any, meshTransparent: any): void;
    _setFlags2(portionId: any, flags: any): void;
    setOffset(portionId: any, offset: any): void;
    drawColorOpaque(renderFlags: any, frameCtx: any): void;
    _updateBackfaceCull(renderFlags: any, frameCtx: any): void;
    drawColorTransparent(renderFlags: any, frameCtx: any): void;
    drawDepth(renderFlags: any, frameCtx: any): void;
    drawSilhouetteXRayed(renderFlags: any, frameCtx: any): void;
    drawSilhouetteHighlighted(renderFlags: any, frameCtx: any): void;
    drawSilhouetteSelected(renderFlags: any, frameCtx: any): void;
    drawEdgesColorOpaque(renderFlags: any, frameCtx: any): void;
    drawEdgesColorTransparent(renderFlags: any, frameCtx: any): void;
    drawEdgesXRayed(renderFlags: any, frameCtx: any): void;
    drawEdgesHighlighted(renderFlags: any, frameCtx: any): void;
    drawEdgesSelected(renderFlags: any, frameCtx: any): void;
    drawOcclusion(renderFlags: any, frameCtx: any): void;
    drawShadow(renderFlags: any, frameCtx: any): void;
    drawPickMesh(renderFlags: any, frameCtx: any): void;
    drawPickDepths(renderFlags: any, frameCtx: any): void;
    drawPickNormals(renderFlags: any, frameCtx: any): void;
    destroy(): void;
}
import { RenderState } from "../../../../webgl/RenderState.js";
