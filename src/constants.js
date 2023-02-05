const { join } = require("path");
const { tmpdir } = require("os");

const extensionStoreItemName = "msgpack";
const msgpackContentType = "application/x-msgpack";
const msgpackOutputFile = join(tmpdir(), "data.msgpack");

const msgpackToggleActionDetails = {
    enabled: {
        title: "MessagePack extension enabled.",
        details: `Requests sent in JSON format are automatically serialized into MessagePack format.
        Responses are automatically deserialized into JSON when "Content-Type" is set to "application/x-msgpack".`,
    },
    disabled: {
        title: "MessagePack extension disabled.",
        details: "Requests and Responses are serialized and deserialized in their respective format.",
    },
};

module.exports = {
    extensionStoreItemName,
    msgpackContentType,
    msgpackOutputFile,
    msgpackToggleActionDetails,
};
