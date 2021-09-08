/**
 * @private
 */
export class TrianglesInstancingColorQualityRenderer {
    constructor(scene: any, withSAO: any);
    _scene: any;
    _withSAO: any;
    _hash: string;
    getValid(): boolean;
    _getHash(): string;
    drawLayer(frameCtx: any, instancingLayer: any, renderPass: any): void;
    _allocate(): void;
    _program: Program;
    errors: any;
    _instanceExt: any;
    _uRenderPass: any;
    _uPositionsDecodeMatrix: any;
    _uWorldMatrix: any;
    _uWorldNormalMatrix: any;
    _uViewMatrix: any;
    _uViewNormalMatrix: any;
    _uProjMatrix: any;
    _uGammaFactor: any;
    _uLightAmbient: any;
    _uLightColor: any[];
    _uLightDir: any[];
    _uLightPos: any[];
    _uLightAttenuation: any[];
    _uReflectionMap: string;
    _uLightMap: string;
    _uSectionPlanes: any[];
    _aPosition: any;
    _aNormal: any;
    _aColor: any;
    _aMetallicRoughness: any;
    _aFlags: any;
    _aFlags2: any;
    _aOffset: any;
    _aModelMatrixCol0: any;
    _aModelMatrixCol1: any;
    _aModelMatrixCol2: any;
    _aModelNormalMatrixCol0: any;
    _aModelNormalMatrixCol1: any;
    _aModelNormalMatrixCol2: any;
    _uOcclusionTexture: string;
    _uSAOParams: any;
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
