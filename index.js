let hex1;
let hex2;
let lengthMaxHex;

function getValueInInputs() {
    hex1 = document.getElementById("hex1").value;
    hex2 = document.getElementById("hex2").value;
}

function formatValueHex() {
    hex1 = hex1.toUpperCase();
    hex2 = hex2.toUpperCase();

    hex1 = hex1.split(' ').join('');
    hex2 = hex2.split(' ').join('');

    hex1 = hex1.split('').reverse().join('');
    hex2 = hex2.split('').reverse().join('');

    lengthMaxHex = Math.max(hex1.length, hex2.length);

    hex1 = hex1.padEnd(lengthMaxHex, '0');
    hex2 = hex2.padEnd(lengthMaxHex, '0');
}

function transformValue(hexV, i) {
    let hexSom;

    switch (hexV[i]) {
        case '0': hexSom = 0; break;
        case '1': hexSom = 1; break;
        case '2': hexSom = 2; break;
        case '3': hexSom = 3; break;
        case '4': hexSom = 4; break;
        case '5': hexSom = 5; break;
        case '6': hexSom = 6; break;
        case '7': hexSom = 7; break;
        case '8': hexSom = 8; break;
        case '9': hexSom = 9; break;
        case 'A': hexSom = 10; break;
        case 'B': hexSom = 11; break;
        case 'C': hexSom = 12; break;
        case 'D': hexSom = 13; break;
        case 'E': hexSom = 14; break;
        case 'F': hexSom = 15; break;
        default: hexSom = undefined;
    }

    return hexSom;
}

function transformValueResult(res) {
    switch (res) {
        case 0: res = '0'; break;
        case 1: res = '1'; break;
        case 2: res = '2'; break;
        case 3: res = '3'; break;
        case 4: res = '4'; break;
        case 5: res = '5'; break;
        case 6: res = '6'; break;
        case 7: res = '7'; break;
        case 8: res = '8'; break;
        case 9: res = '9'; break;
        case 10: res = 'A'; break;
        case 11: res = 'B'; break;
        case 12: res = 'C'; break;
        case 13: res = 'D'; break;
        case 14: res = 'E'; break;
        case 15: res = 'F'; break;

        default: console.log("Chegou aqui " + result);
    }

    return res;
}

function Calculate() {
    let aux = 0;
    let finalResult = [];
    let divRes = document.getElementById("result");

    divRes.innerHTML = "";

    getValueInInputs();

    formatValueHex();

    for (i = 0; i <= lengthMaxHex; i++) {
        let result;
        let hex1Som;
        let hex2Som;

        hex1Som = transformValue(hex1, i);
        hex2Som = transformValue(hex2, i);

        if (i == lengthMaxHex && aux == 1) {
            finalResult.unshift(String(0 + 0 + aux));
        }

        if (aux == 1) {
            result = hex1Som + hex2Som + 1;
            aux = 0;
        } else {
            result = hex1Som + hex2Som;
        }

        if (result > 15) {
            aux = 1;
        }

        if (result >= 16) {
            result -= 16;

            result = transformValueResult(result);

            finalResult.unshift(String(result));

        } else if (result <= 15) {
            result = transformValueResult(result);

            finalResult.unshift(String(result));
        }
    }
    finalResult = finalResult.join('').replace(/\B(?=(\w{4})+(?!\w))/g, ' $&');

    divRes.innerHTML = finalResult;
}