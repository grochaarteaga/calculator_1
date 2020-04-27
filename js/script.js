function calc() {
    var num_1 = parseInt(document.querySelector("#num_1").value);
    var num_2 = parseInt(document.querySelector("#num_2").value);
    var op = document.querySelector("#operator").value;
    var res;

    if (op == "add"){
        res = num_1 + num_2;
    } else if (op == "minus"){
        res = num_1 - num_2;
    } else if (op == "mul"){
        res = num_1 * num_2;
    } else if (op == "div"){
        res = num_1 / num_2;
    }

    //Display res in the HTML code
    document.querySelector("#result").innerHTML = res;
}