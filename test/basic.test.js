describe('loads a proto file', function() {

    it('loads the test file', function() {
        var Message = require('protobufjs').Builder.Message;
        var proto = require('./test.proto');

        proto.should.have.propertyByPath('foobar', 'SearchRequest');
        proto.foobar.SearchRequest.should.be.properties('encode', 'decode');
    });

});
