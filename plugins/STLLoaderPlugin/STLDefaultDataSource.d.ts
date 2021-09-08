/**
 * Default data access strategy for {@link STLLoaderPlugin}.
 *
 * This implementation simply loads STL files using XMLHttpRequest.
 */
export class STLDefaultDataSource {
    /**
     * Gets STL data.
     *
     * @param {String|Number} src Identifies the STL file.
     * @param {Function} ok Fired on successful loading of the STL file.
     * @param {Function} error Fired on error while loading the STL file.
     */
    getSTL(src: string | number, ok: Function, error: Function): void;
}
