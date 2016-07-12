# Browserify Protocol Buffer Transform
> Uses ProtoBuf.js to transform .proto files

This is currently restricted to targetting commonjs output.

# Installation

    npm i protify -D

# Usage

    browserify -x protobufjs -t protify ./fileWhichImportsProtoFile.js > bundle.js
