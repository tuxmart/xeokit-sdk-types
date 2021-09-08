/**
 * Tests if {@link TreeViewPlugin} would be able to create a "types" hierarchy for the given {@link MetaModel}.
 *
 * @param {MetaModel} metaModel The MetaModel.
 * @param {String[]} errors Accumulates messages for validation errors.
 * @return {boolean} Returns ````true```` if no errors found, else ````false````.
 */
export function validateMetaModelForTreeViewTypesHierarchy(metaModel: any, errors: string[]): boolean;
/**
 * Tests if {@link TreeViewPlugin} would be able to create a "storeys" hierarchy for the given {@link MetaModel}.
 *
 * @param {MetaModel} metaModel The MetaModel.
 * @param {String[]} errors Accumulates messages for validation errors.
 * @return {boolean} Returns ````true```` if no errors found, else ````false````.
 */
export function validateMetaModelForTreeViewStoreysHierarchy(metaModel: any, errors: string[]): boolean;
/**
 * Tests if {@link TreeViewPlugin} would be able to create a "containment" hierarchy for the given {@link MetaModel}.
 *
 * @param {MetaModel} metaModel The MetaModel.
 * @param {String[]} errors Accumulates messages for validation errors.
 * @return {boolean} Returns ````true```` if no errors found, else ````false````.
 */
export function validateMetaModelForTreeViewContainmentHierarchy(metaModel: any, errors: string[]): boolean;
