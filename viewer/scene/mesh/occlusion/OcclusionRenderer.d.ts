export class OcclusionRenderer {
    private constructor();
    put(): void;
    webglContextRestored(): void;
    _program: Program;
    drawMesh(frameCtx: any, mesh: any): void;
    _lastMaterialId: any;
    _lastGeometryId: any;
    _allocate(mesh: any): void;
    errors: any;
    _uPositionsDecodeMatrix: any;
    _uModelMatrix: any;
    _uViewMatrix: any;
    _uProjMatrix: any;
    _uSectionPlanes: any[];
    _aPosition: any;
    _uClippable: any;
    _uOffset: any;
    _uLogDepthBufFC: any;
    _lastVertexBufsId: any;
    _bindProgram(frameCtx: any): void;
}
import { Program } from "../../webgl/Program.js";
