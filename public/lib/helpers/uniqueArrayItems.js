/**
 * Created by sri on 23/08/15.
 */
// function that takes an array of objects
// and returns an array of unique valued in the object
// array for a given key.
// this really belongs in a service, not the global window scope
var unique = function(data, key) {
    var result = [];
    for(var i=0;i<data.length;i++) {
        var value = data[i][key];
        if (result.indexOf(value) == -1) {
            result.push(value);
        }
    }
    return result;
};
