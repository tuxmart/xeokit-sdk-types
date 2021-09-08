/**
 * @private
 */
export class PointsInstancingPickMeshRenderer {
    constructor(scene: any);
    _scene: any;
    _hash: any;
    getValid(): boolean;
    _getHash(): any;
    drawLayer(frameCtx: any, instancingLayer: any, renderPass: any): void;
    _allocate(): void;
    _program: Program;
    errors: any;
    _instanceExt: any;
    _uPickInvisible: any;
    _uPositionsDecodeMatrix: any;
    _uWorldMatrix: any;
    _uViewMatrix: any;
    _uProjMatrix: any;
    _uSectionPlanes: any[];
    _uRenderPass: any;
    _aPosition: any;
    _aOffset: any;
    _aPickColor: any;
    _aFlags: any;
    _aFlags2: any;
    _aModelMatrixCol0: any;
    _aModelMatrixCol1: any;
    _aModelMatrixCol2: any;
    _uPointSize: any;
    _uNearPlaneHeight: any;
    _uLogDepthBufFC: any;
    _bindProgram(frameCtx: any): void;
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
