const { encodeRequest, decodeResponse, toggle } = require("./core");

module.exports.requestHooks = [encodeRequest];
module.exports.responseHooks = [decodeResponse];
module.exports.requestActions = [
    {
        label: "Toggle MessagePack",
        action: toggle,
        icon: "fa-vial",
    },
];
