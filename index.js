var protobuf = require('protocol-buffers');
var path = require('path');
var fs = require('fs');
var proto = fs.readFileSync('vector-tile-spec/2.1/vector_tile.proto', 'utf8');
var mvt = protobuf(proto);

// testing what a decoded tile looks like

/*
var vt = mvt.Tile.decode(fs.readFileSync('/Users/dane/projects/mvt-fixtures/fixtures/valid/Feature-single-point.mvt'));
console.log(vt.layers[0].values);
console.log(vt)
console.log(vt.layers[0].features);
*/

// create a tile without a feature id
var features = [
    {
        // without id
        // id: 1, 
        tags: [],
        type: mvt.Tile.GeomType.POINT,
        geometry: [ 9, 50, 34 ]
    }
]

var layers = {
    version: 2,
    name: 'hello',
    features: features,
    keys: {},
    values: {},
    extent: 4096
};

var vt_new = {
    layers: [ layers ]
};

var encoded = mvt.Tile.encode(vt_new);
fs.writeFileSync('Feature-single-point-no-id.mvt',encoded);
