
app.directive("study4header", function () {
    return {
        restrict: "E",
        template: "<h1>Hello Study4</h1>"
    };
});
//‘A’ – Attribute (You want to use your directive as <div study4header>)
//‘E’ – Element (Use it as <study4header>)
//‘C’ – Class. (Use it like <div class=”study4header”>)
//‘M’ – Comment (Use it like <!– directive: study4header –>)