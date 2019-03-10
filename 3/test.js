var foo = /** @class */ (function () {
    function foo(name) {
        this.name = name;
    }
    Object.defineProperty(foo.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: true,
        configurable: true
    });
    return foo;
}());
var f = new foo('Emil');
console.log(f.getName);
//console.log(f.name); <- wrong!
