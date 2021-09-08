/**
 * SAO implementation inspired from previous SAO work in THREE.js by ludobaka / ludobaka.github.io and bhouston
 * @private
 */
export class SAOOcclusionRenderer {
    constructor(scene: any);
    _scene: any;
    _numSamples: number;
    _program: Program;
    _programError: boolean;
    _aPosition: any;
    _aUV: any;
    _uDepthTexture: string;
    _uCameraNear: any;
    _uCameraFar: any;
    _uCameraProjectionMatrix: any;
    _uCameraInverseProjectionMatrix: any;
    _uScale: any;
    _uIntensity: any;
    _uBias: any;
    _uKernelRadius: any;
    _uMinResolution: any;
    _uRandomSeed: any;
    _uvBuf: ArrayBuf;
    _positionsBuf: ArrayBuf;
    _indicesBuf: ArrayBuf;
    render(depthRenderBuffer: any): void;
    _getInverseProjectMat: () => any;
    _build(): void;
    _uPerspective: any;
    _uViewport: any;
    _dirty: boolean;
    destroy(): void;
}
import { Program } from "./../Program.js";
import { ArrayBuf } from "./../ArrayBuf.js";
