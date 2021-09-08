/**
 * Renders InstancingLayer fragment depths to a shadow map.
 *
 * @private
 */
export class PointsInstancingShadowRenderer {
    constructor(scene: any);
    _scene: any;
    _hash: any;
    _lastLightId: any;
    getValid(): boolean;
    _getHash(): any;
    drawLayer(frameCtx: any, instancingLayer: any): void;
    _allocate(): void;
    _program: Program;
    errors: any;
    _instanceExt: any;
    _uPositionsDecodeMatrix: any;
    _uShadowViewMatrix: any;
    _uShadowProjMatrix: any;
    _uSectionPlanes: any[];
    _aPosition: any;
    _aOffset: any;
    _aColor: any;
    _aFlags: any;
    _aFlags2: any;
    _aModelMatrixCol0: any;
    _aModelMatrixCol1: any;
    _aModelMatrixCol2: any;
    _uPointSize: any;
    _bindProgram(frameCtx: any, instancingLayer: any): void;
    _buildShader(): {
        vertex: string[];
        fragment: string[];
    };
    _buildVertexShader(): string[];
    _buildFragmentShader(): string[];
    webglContextRestored(): void;
    destroy(): void;
}
import { Program } from "../../../../../webgl/Program.js";
