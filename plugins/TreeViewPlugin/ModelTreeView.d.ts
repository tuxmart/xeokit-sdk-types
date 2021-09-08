/**
 * @desc Represents a model tree view within a {@link TreeViewPlugin}.
 *
 * * Stored in {@link treeViewPlugin#modelTreeViews}, mapped to the model ID.
 * * Created by each call to {@link TreeViewPlugin#addModel}.
 */
export class ModelTreeView {
    /**
     * @private
     */
    private constructor();
    /**
     * Contains messages for any errors found in the MetaModel for this ModelTreeView.
     * @type {String[]}
     */
    errors: string[];
    /**
     * True if errors were found in the MetaModel for this ModelTreeView.
     * @type {boolean}
     */
    valid: boolean;
    /**
     * The MetaModel corresponding to this ModelTreeView.
     * @type {MetaModel}
     */
    metaModel: any;
    _id: any;
    _baseId: string;
    _viewer: any;
    _treeViewPlugin: any;
    _rootMetaObject: any;
    _containerElement: any;
    _rootElement: HTMLUListElement;
    _muteSceneEvents: boolean;
    _muteTreeEvents: boolean;
    _rootNodes: any[];
    _objectNodes: {};
    _rootName: any;
    _sortNodes: any;
    _pruneEmptyNodes: any;
    _showListItemElementId: string;
    _onObjectVisibility: any;
    switchExpandHandler: (event: any) => void;
    switchCollapseHandler: (event: any) => void;
    _checkboxChangeHandler: (event: any) => void;
    _hierarchy: any;
    _autoExpandDepth: any;
    _nodeToObjectID(nodeId: any): any;
    _objectToNodeID(objectId: any): string;
    /**
     * @private
     * @param depth
     */
    private setAutoExpandDepth;
    /**
     * @private
     * @param hierarchy
     */
    private setHierarchy;
    _createNodes(): void;
    _validate(): boolean;
    _createEnabledNodes(): void;
    _createDisabledNodes(): void;
    _findEmptyNodes(metaObject?: any, countEntities?: number): any;
    _createStoreysNodes(metaObject: any, buildingNode: any, storeyNode: any, typeNodes: any): void;
    _createTypesNodes(metaObject: any, rootNode: any, typeNodes: any): void;
    _createContainmentNodes(metaObject: any, parent: any): void;
    _doSortNodes(): void;
    _sortChildren(node: any): void;
    _getSpatialSortFunc(): (node1: any, node2: any) => 0 | 1 | -1;
    _spatialSortFunc: (node1: any, node2: any) => 0 | 1 | -1;
    _alphaSortFunc(node1: any, node2: any): 0 | 1 | -1;
    _synchNodesToEntities(): void;
    _withNodeTree(node: any, callback: any): void;
    _createTrees(): void;
    _createNodeElement(node: any): HTMLLIElement;
    /**
     * @private
     * @param depth
     */
    private expandToDepth;
    /**
     * @private
     */
    private collapse;
    /**
     * @private
     * @param objectId
     */
    private showNode;
    /**
     * @private
     */
    private unShowNode;
    _expandSwitchElement(switchElement: any): void;
    _collapseNode(objectId: any): void;
    _collapseSwitchElement(switchElement: any): void;
    /**
     * Destroys this ModelTreeView.
     * @private
     */
    private destroy;
    _destroyed: boolean;
}
