/**
 * @private
 */
export class TouchPickHandler {
    constructor(scene: any, controllers: any, configs: any, states: any, updates: any);
    _scene: any;
    _canvasTouchStartHandler: (e: any) => void;
    _canvasTouchEndHandler: (e: any) => void;
    reset(): void;
    destroy(): void;
}
