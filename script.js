const cValue = document.querySelector("#Celsius");
const fValue = document.querySelector("#Fahrenheit");
const kValue = document.querySelector("#Kelvin");

function convertThis(num) {


    switch (event.target.name) {

        case "Fahrenheit":
            cValue.value = (num - 32)/1.8;
            kValue.value = ((num - 32)/1.8) + 273.15;
            break;

        case "Celsius":
            fValue.value = (num * 1.8) + 32;
            kValue.value = num + 273.15;
            break;
        
        case "Kelvin":
            fValue.value = ((num - 273.15) * 1.8) + 32;
            cValue.value = num - 273.15;
            break;

        default:
            break;
    }

}