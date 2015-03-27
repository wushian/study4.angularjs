app.service('HelloService', function ($resource) {
    var apiurl = '/api/:controller/:id';
    return $resource(apiurl, { controller: '@controller', Id: "@Id" }, { "update": { method: "PUT" } });
});

