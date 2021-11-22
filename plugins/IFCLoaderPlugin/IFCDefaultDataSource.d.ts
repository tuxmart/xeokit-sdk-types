/**
 * Default data access strategy for {@link IFCLoaderPlugin}.
 */
export class IFCDefaultDataSource {
    /**
     * Gets the contents of the given IFC file in an arraybuffer.
     *
     * @param {String|Number} src Path or ID of an IFC file.
     * @param {Function} ok Callback fired on success, argument is the IFC file in an arraybuffer.
     * @param {Function} error Callback fired on error.
     */
    getIFC(src: string | number, ok: Function, error: Function): void;
}
