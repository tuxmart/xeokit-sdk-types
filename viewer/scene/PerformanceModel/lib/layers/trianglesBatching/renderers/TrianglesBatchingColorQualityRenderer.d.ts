/**
 * @private
 */
export class TrianglesBatchingColorQualityRenderer {
    constructor(scene: any, withSAO: any);
    _scene: any;
    _withSAO: any;
    _hash: string;
    getValid(): boolean;
    _getHash(): string;
    drawLayer(frameCtx: any, batchingLayer: any, renderPass: any): void;
    _allocate(): void;
    _program: Program;
    errors: any;
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
    _aOffset: any;
    _aNormal: any;
    _aColor: any;
    _aMetallicRoughness: any;
    _aFlags: any;
    _aFlags2: any;
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
