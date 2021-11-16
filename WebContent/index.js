sap.ui.define([
    "sap/ui/core/ComponentContainer"
], async function(ComponentContainer) {
    new ComponentContainer({
        async: true,
        manifest: true,
        name: "YTP"
    }).placeAt("content")
});