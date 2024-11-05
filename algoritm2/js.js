function verify() {
    console.log("a, b, c, m")
    let a = parseFloat(elementA.value);
    let b = parseFloat(elementB.value);
    let c = parseFloat(elementC.value);
    let m = parseFloat(elementM.value);
    console.log(a, b, c, m)
    let h = b;
    let r = c;
    if (a *a * a >= m && h * r * r * 3.14 >= m){
        result = "Можно заполнить обе ёмкости"
        check = true;

    }
    if (a *a * a >= m && h * r * r * 3.14 < m){
        result = "Можно заполнить только первую ёмкость"
        check = true;
    }
    if (a *a * a < m && h * r * r * 3.14 >= m){
        result = "Можно заполнить только вторую ёмкость"
        check = true;
    }
    if (a *a * a < m && h * r * r * 3.14 < m){
        result = "Никакую из двух ёмкостей нельзя заполнить"
        check = false;
    }

    document.getElementById("result").value = result;
}

function send() {
    if (check) {
        document.getElementById("UserEnter").submit();
    } else {
        alert("Есть недостатки. Повторите ввод")
    }
}



let result;
let check;

const elementA = document.getElementById("a");
const elementB = document.getElementById("b");
const elementC = document.getElementById("c");
const elementM = document.getElementById("m");

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', send)

