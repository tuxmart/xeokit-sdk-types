/**
 * @private
 */
export class TrianglesInstancingFlatNormalsRenderer {
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
    _uRenderPass: any;
    _uPositionsDecodeMatrix: any;
    _uWorldMatrix: any;
    _uViewMatrix: any;
    _uProjMatrix: any;
    _uSectionPlanes: any[];
    _aPosition: any;
    _aOffset: any;
    _aColor: any;
    _aFlags: any;
    _aFlags2: any;
    _aModelMatrixCol0: any;
    _aModelMatrixCol1: any;
    _aModelMatrixCol2: any;
    _uLogDepthBufFC: any;
    _bindProgram(): void;
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
