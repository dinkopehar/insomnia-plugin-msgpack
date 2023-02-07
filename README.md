# insomnia-plugin-msgpack

Automatically convert JSON Request to MessagePack format **and** MessagePack Response to JSON.

![](./assets/cover.svg)

## Installation

- Go to Insomnia Settings > Plugins
- Type `insomnia-plugin-msgpack` and install the plugin

## Usage

To toggle plugin **ON** or **OFF**, simply <kbd>Right-Click</kbd> on any request and click `Toggle MessagePack`.

When plugin is **"ON"**:

1. Requests sent in JSON format are automatically converted to MessagePack format.
2. Responses received in MessagePack format are automatically converted into JSON format.

When plugin is **"OFF"**, response and and request formats are preserved.

Below is example usage on how to toggle plugin and use it:

![](./assets/usage.gif)

## Contributing

Found any bugs? Have any more ideas or want to contribute to the existing development? Feel free to create a PR/issue in the github repo!