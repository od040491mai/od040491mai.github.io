Function.prototype.defer = function(ms){
    setTimeout(this, ms);
};

function f() {
    alert( "привет" );
}

f.defer(1000);
