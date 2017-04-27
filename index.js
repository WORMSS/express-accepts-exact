module.exports = function acceptsExact(type) {
    if ( typeof type === "string" ) {
        return function (req, res, next) {
            accepts(req).types().includes(type) ? next() : next("route");
        };
    }
    if ( Array.isArray(type) ) {
        if ( type.some(v => typeof v !== "string") ) {
            throw new TypeError("Array must contain only strings");
        }
        return function (req, res, next) {
            let types = accepts(req).types(); 
            type.some(type => types.includes(type)) ? next() : next("route"); 
        };
    }
    throw new TypeError("Must be passed string or array of strings");
};