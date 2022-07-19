function init(){
    var op = prompt('Ingrese Temperatura en grados ° Celcius: ', '');

    var operaciones = document.getElementById('result');

    result.innerHTML = "<p class=\"conversion\">" + "La conversión de C° es de: " + ((parseFloat(op) * 1.8)+32 ) + "°F" + "</p>\n";
}

window.onload = init;
