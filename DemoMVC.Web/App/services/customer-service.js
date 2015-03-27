app.service('CustomerService', function ($resource) {
    var apiurl = '/api/Customers/:id';
    return $resource(apiurl,{ Id: "@Id" },{ "update": { method: "PUT" } });
});