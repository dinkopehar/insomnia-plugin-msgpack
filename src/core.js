const { encode, decode } = require("@msgpack/msgpack");
const { writeFileSync } = require("fs");

const {
    extensionStoreItemName,
    msgpackContentType,
    msgpackToggleActionDetails,
    msgpackOutputFile,
} = require("./constants");

async function encodeRequest(context) {
    // If store has extension disabled, early return.
    if (!(await context.store.hasItem(extensionStoreItemName))) return;

    const body = context.request.getBody();
    // If body is empty return.
    if (!body.text) return;
    const encoded = encode(JSON.parse(body.text));

    writeFileSync(msgpackOutputFile, encoded, "binary", (err) => {
        if (err) throw err;
    });

    context.request.setHeader("Content-Type", msgpackContentType);
    context.request.setBody({
        ...body,
        fileName: msgpackOutputFile,
    });
}

async function decodeResponse(context) {
    // If store has extension disabled, early return.
    if (!(await context.store.hasItem(extensionStoreItemName))) return;

    if ((await context.response.getHeader("Content-Type")) !== msgpackContentType) return;

    try {
        const body = context.response.getBody();
        const decoded = decode(body);
        context.response.setBody(Buffer.from(JSON.stringify(decoded), "utf-8"));
    } catch {
        // no-op
    }
}

async function toggle(context) {
    let title = "",
        details = "";

    if (await context.store.hasItem(extensionStoreItemName)) {
        await context.store.removeItem(extensionStoreItemName);
        title = msgpackToggleActionDetails.disabled.title;
        details = msgpackToggleActionDetails.disabled.details;
    } else {
        await context.store.setItem(extensionStoreItemName, "1");
        title = msgpackToggleActionDetails.enabled.title;
        details = msgpackToggleActionDetails.enabled.details;
    }
    await context.app.alert(title, details);
}

module.exports = { encodeRequest, decodeResponse, toggle };
