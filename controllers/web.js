exports.install = function() {
    ROUTE('GET /', home)
}

function home(){
    this.view('home')
}