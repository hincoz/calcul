 function inputSymbol (namber){
    var input = document.getElementById("calculator");
    input.value += namber;
}
function formula() {
    var form = document.getElementById("calculator");
    form.value = eval(form.value);
 }
function cchuisto() {
    var clr = document.getElementById("calculator");
    clr.value = "";
 }