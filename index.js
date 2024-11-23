require('@snipkode/server')

ROUTE("GET /", function() {
    this.view("pages/landingpage");
});

ROUTE("GET /dashboard", function() {
    this.view("pages/dashboard");
});

ROUTE("GET /todo", function() {
    this.view("pages/todo");
});

HTTP('debug', {port: 5000})