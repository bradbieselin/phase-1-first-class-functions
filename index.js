function receivesAFunction(func) {
    func();
}

function returnsANamedFunction() {
    function func () {}
    return func;
}

function returnsAnAnonymousFunction () {
    return function () {}
}