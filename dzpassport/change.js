const change = document.getElementById("change")

function change_all(){

    if (document.getElementsByTagName('div')[3].innerText==='Валишина'){
        document.getElementsByTagName('div')[3].innerText='Valishina';
        document.getElementsByTagName('div')[4].innerText='Anna';
        document.getElementsByTagName('div')[7].innerHTML='123456';
    return;}

    if (document.getElementsByTagName('div')[3].innerText==='Valishina'){
        document.getElementsByTagName('div')[3].innerText='Валишина';
        document.getElementsByTagName('div')[4].innerText='Анна';
        document.getElementsByTagName('div')[7].innerHTML='03.09.2005';
        return;
    }



}
change.addEventListener("click",change_all)