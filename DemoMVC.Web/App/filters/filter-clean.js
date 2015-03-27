app.filter('clean', function () {
    return function (str) {
        return str.toUpperCase().replace(/\s+/g, '-');
    };
});