sap.ui.define([
    "sap/ui/core/UIComponent"
], function(UIComponent) {
    "use strict";
    return UIComponent.extend("YTP.Component", {
        metadata: {
            manifest: "json"
        },

        /** @public */
        init: function() {
            UIComponent.prototype.init.call(this, arguments);
        }
    });
});