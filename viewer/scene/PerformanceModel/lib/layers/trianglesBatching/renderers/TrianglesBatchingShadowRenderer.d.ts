/**
 * Renders BatchingLayer fragment depths to a shadow map.
 *
 * @private
 */
export class TrianglesBatchingShadowRenderer {
    constructor(scene: any);
    _scene: any;
    _hash: any;
    getValid(): boolean;
    _getHash(): any;
    drawLayer(frameCtx: any, batchingLayer: any): void;
    _allocate(): void;
    _program: Program;
    errors: any;
    _uPositionsDecodeMatrix: any;
    _uShadowViewMatrix: any;
    _uShadowProjMatrix: any;
    _uZFar: any;
    _uSectionPlanes: any[];
    _aPosition: any;
    _aOffset: any;
    _aColor: any;
    _aFlags: any;
    _aFlags2: any;
    _bindProgram(frameCtx: any): void;
    _lastLightId: any;
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
