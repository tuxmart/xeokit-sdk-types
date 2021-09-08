/**
 * Indicates what rendering needs to be done for the layers within a {@link Drawable}.
 *
 * Each Drawable has a RenderFlags in {@link Drawable#renderFlags}.
 *
 * Before rendering each frame, {@link Renderer} will call {@link Drawable#rebuildRenderFlags} on each {@link Drawable}.
 *
 * Then, when rendering a frame, Renderer will apply rendering passes to each Drawable according on what flags are set in {@link Drawable#renderFlags}.
 *
 * @private
 */
export class RenderFlags {
    /**
     * Set by {@link Drawable#rebuildRenderFlags} to indicate which layers are visible within the {@link Drawable}.
     *
     * This is a list of IDs of visible layers within the {@link Drawable}. The IDs will be whatever the
     * {@link Drawable} uses to identify its layers, usually integers.
     *
     * @property visibleLayers
     * @type {Number[]}
     */
    visibleLayers: number[];
    /**
     * Set by {@link Drawable#rebuildRenderFlags} to indicate which {@link SectionPlane}s are active within each layer of the {@link Drawable}.
     *
     * Layout is as follows:
     *
     * ````[
     *      false, false, true, // Layer 0, SectionPlanes 0, 1, 2
     *      false, true, true,  // Layer 1, SectionPlanes 0, 1, 2
     *      true, false, true   // Layer 2, SectionPlanes 0, 1, 2
     * ]````
     *
     * @property sectionPlanesActivePerLayer
     * @type {Boolean[]}
     */
    sectionPlanesActivePerLayer: boolean[];
    /**
     * @private
     */
    private reset;
    /**
     * Set by {@link Drawable#rebuildRenderFlags} to indicate whether the {@link Drawable} is culled.
     *
     * When this is ````false````, then all of the other properties on ````RenderFlags```` will remain at their default values.
     *
     * @property culled
     * @type {Boolean}
     */
    culled: boolean;
    /**
     * Set by {@link Drawable#rebuildRenderFlags} to indicate whether the {@link Drawable} is sliced by any {@link SectionPlane}s.
     *
     * @property sectioned
     * @type {Boolean}
     */
    sectioned: boolean;
    /**
     * Set by {@link Drawable#rebuildRenderFlags} to indicate the number of layers within the {@link Drawable}.
     *
     * @property numLayers
     * @type {Number}
     */
    numLayers: number;
    /**
     * Set by {@link Drawable#rebuildRenderFlags} to indicate the number of visible layers within the {@link Drawable}.
     *
     * @property numVisibleLayers
     * @type {Number}
     */
    numVisibleLayers: number;
    /**
     * Set by {@link Drawable#rebuildRenderFlags} to indicate the {@link Drawable} needs {@link Drawable#drawColorOpaque}.
     * @property colorOpaque
     * @type {boolean}
     */
    colorOpaque: boolean;
    /**
     * Set by {@link Drawable#rebuildRenderFlags} to indicate the {@link Drawable} needs {@link Drawable#drawColorTransparent}.
     * @property colorTransparent
     * @type {boolean}
     */
    colorTransparent: boolean;
    /**
     * Set by {@link Drawable#rebuildRenderFlags} to indicate the {@link Drawable} needs {@link Drawable#drawEdgesColorOpaque}.
     * @property edgesOpaque
     * @type {boolean}
     */
    edgesOpaque: boolean;
    /**
     * Set by {@link Drawable#rebuildRenderFlags} to indicate the {@link Drawable} needs {@link Drawable#drawEdgesColorTransparent}.
     * @property edgesTransparent
     * @type {boolean}
     */
    edgesTransparent: boolean;
    /**
     * Set by {@link Drawable#rebuildRenderFlags} to indicate the {@link Drawable} needs an opaque {@link Drawable#drawSilhouetteXRayed}.
     * @property xrayedSilhouetteOpaque
     * @type {boolean}
     */
    xrayedSilhouetteOpaque: boolean;
    /**
     * Set by {@link Drawable#rebuildRenderFlags} to indicate the {@link Drawable} needs an opaque {@link Drawable#drawEdgesXRayed}.
     * @property xrayedEdgesOpaque
     * @type {boolean}
     */
    xrayedEdgesOpaque: boolean;
    /**
     * Set by {@link Drawable#rebuildRenderFlags} to indicate the {@link Drawable} needs a transparent {@link Drawable#drawSilhouetteXRayed}.
     * @property xrayedSilhouetteTransparent
     * @type {boolean}
     */
    xrayedSilhouetteTransparent: boolean;
    /**
     * Set by {@link Drawable#rebuildRenderFlags} to indicate the {@link Drawable} needs a transparent {@link Drawable#drawEdgesXRayed}.
     * @property xrayedEdgesTransparent
     * @type {boolean}
     */
    xrayedEdgesTransparent: boolean;
    /**
     * Set by {@link Drawable#rebuildRenderFlags} to indicate the {@link Drawable} needs an opaque {@link Drawable#drawSilhouetteHighlighted}.
     * @property highlightedSilhouetteOpaque
     * @type {boolean}
     */
    highlightedSilhouetteOpaque: boolean;
    /**
     * Set by {@link Drawable#rebuildRenderFlags} to indicate the {@link Drawable} needs an opaque {@link Drawable#drawEdgesHighlighted}.
     * @property highlightedEdgesOpaque
     * @type {boolean}
     */
    highlightedEdgesOpaque: boolean;
    /**
     * Set by {@link Drawable#rebuildRenderFlags} to indicate the {@link Drawable} needs a transparent {@link Drawable#drawSilhouetteHighlighted}.
     * @property highlightedSilhouetteTransparent
     * @type {boolean}
     */
    highlightedSilhouetteTransparent: boolean;
    /**
     * Set by {@link Drawable#rebuildRenderFlags} to indicate the {@link Drawable} needs a transparent {@link Drawable#drawEdgesHighlighted}.
     * @property highlightedEdgesTransparent
     * @type {boolean}
     */
    highlightedEdgesTransparent: boolean;
    /**
     * Set by {@link Drawable#rebuildRenderFlags} to indicate the {@link Drawable} needs an opaque {@link Drawable#drawSilhouetteSelected}.
     * @property selectedSilhouetteOpaque
     * @type {boolean}
     */
    selectedSilhouetteOpaque: boolean;
    /**
     * Set by {@link Drawable#rebuildRenderFlags} to indicate the {@link Drawable} needs an opaque {@link Drawable#drawEdgesSelected}.
     * @property selectedEdgesOpaque
     * @type {boolean}
     */
    selectedEdgesOpaque: boolean;
    /**
     * Set by {@link Drawable#rebuildRenderFlags} to indicate the {@link Drawable} needs a transparent {@link Drawable#drawSilhouetteSelected}.
     * @property selectedSilhouetteTransparent
     * @type {boolean}
     */
    selectedSilhouetteTransparent: boolean;
    /**
     * Set by {@link Drawable#rebuildRenderFlags} to indicate the {@link Drawable} needs a transparent {@link Drawable#drawEdgesSelected}.
     * @property selectedEdgesTransparent
     * @type {boolean}
     */
    selectedEdgesTransparent: boolean;
}
