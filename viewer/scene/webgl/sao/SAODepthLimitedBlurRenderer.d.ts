/**
 * SAO implementation inspired from previous SAO work in THREE.js by ludobaka / ludobaka.github.io and bhouston
 * @private
 */
export class SAODepthLimitedBlurRenderer {
    constructor(scene: any);
    _scene: any;
    _program: Program;
    _programError: boolean;
    _aPosition: any;
    _aUV: any;
    _uDepthTexture: string;
    _uOcclusionTexture: string;
    _uViewport: any;
    _uCameraNear: any;
    _uCameraFar: any;
    _uCameraProjectionMatrix: any;
    _uCameraInverseProjectionMatrix: any;
    _uScale: any;
    _uIntensity: any;
    _uBias: any;
    _uKernelRadius: any;
    _uMinResolution: any;
    _uvBuf: ArrayBuf;
    _positionsBuf: ArrayBuf;
    _indicesBuf: ArrayBuf;
    init(): void;
    _uDepthCutoff: any;
    _uSampleOffsets: any;
    _uSampleWeights: any;
    render(depthRenderBuffer: any, occlusionRenderBuffer: any, direction: any): void;
    _getInverseProjectMat: () => any;
    destroy(): void;
}
import { Program } from "./../Program.js";
import { ArrayBuf } from "./../ArrayBuf.js";
