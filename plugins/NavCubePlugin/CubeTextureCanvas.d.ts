/**
 * @private
 */
export function CubeTextureCanvas(viewer: any, cfg?: {}): void;
export class CubeTextureCanvas {
    /**
     * @private
     */
    private constructor();
    _textureCanvas: HTMLCanvasElement;
    setZUp: () => void;
    setYUp: () => void;
    clear: () => void;
    getArea: (uv: any) => number;
    setAreaHighlighted: (areaId: any, highlighted: any) => void;
    getAreaDir: (areaId: any) => number[];
    getAreaUp: (areaId: any) => number[];
    getImage: () => HTMLCanvasElement;
    /**
     * @private
     */
    private destroy;
}
