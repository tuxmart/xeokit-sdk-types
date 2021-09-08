export class PickTriangleRenderer {
    private constructor();
    put(): void;
    webglContextRestored(): void;
    _program: Program;
    drawMesh(frameCtx: any, mesh: any): void;
    _allocate(mesh: any): void;
    _useCount: number;
    errors: any;
    _uPositionsDecodeMatrix: any;
    _uModelMatrix: any;
    _uViewMatrix: any;
    _uProjMatrix: any;
    _uSectionPlanes: any[];
    _aPosition: any;
    _aColor: any;
    _uClippable: any;
    _uOffset: any;
    _uLogDepthBufFC: any;
}
import { Program } from "../../webgl/Program.js";
