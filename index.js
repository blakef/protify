"use strict";
var through = require('through2');
var proto = {
    reader: require('protobufjs/cli/pbjs/sources/proto'),
    writer: require('protobufjs/cli/pbjs/targets/commonjs')
};

var protofile = /.+\.proto$/;

module.exports = function (file) {
    if (!protofile.test(file)) return through();

    var builder = proto.reader([file]);
    return through(function(buf, enc, next) {
        this.push(proto.writer(builder));
        next();
    });
}
