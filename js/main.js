var txt = "Welcome to Web Develope";
var index = 0;
var txtind = setInterval(function() {
    window.had.value += txt[index++];
    if (index >= txt.length) clearInterval(txtind)
}, 500);