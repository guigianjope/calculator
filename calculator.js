let val;

function button(num) {
    val = document.calc.typing.value += num;   
}

function clean() {
    document.calc.typing.value = "";
}

function calculation() {
    result = eval(val);
    document.calc.typing.value = result;
}