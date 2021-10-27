function Calculate() {
    let hex1 = document.getElementById("hex1").value;
    let hex2 = document.getElementById("hex2").value;

    hex1 = hex1.toUpperCase();
    hex2 = hex2.toUpperCase();

    hex1 = hex1.split('').reverse().join('');
    hex2 = hex2.split('').reverse().join('');
    
    let j = Math.max(hex1.length, hex2.length);

    hex1 = hex1.padEnd(j, '0');
    hex2 = hex2.padEnd(j, '0');

    let aux = 0;
    let finalResult = [];

    for (i = 0; i <= j; i++) {
        let result;
        let hex1Som;
        let hex2Som;
        
        switch (hex1[i]) {
            case '0': hex1Som = 0; break;
            case '1': hex1Som = 1; break;
            case '2': hex1Som = 2; break;
            case '3': hex1Som = 3; break;
            case '4': hex1Som = 4; break;
            case '5': hex1Som = 5; break;
            case '6': hex1Som = 6; break;
            case '7': hex1Som = 7; break;
            case '8': hex1Som = 8; break;
            case '9': hex1Som = 9; break;
            case 'A': hex1Som = 10; break;
            case 'B': hex1Som = 11; break;
            case 'C': hex1Som = 12; break;
            case 'D': hex1Som = 13; break;
            case 'E': hex1Som = 14; break;
            case 'F': hex1Som = 15; break;
            default: hex1Som = undefined;
        }
        
        switch (hex2[i]) {
            case '0': hex2Som = 0; break;
            case '1': hex2Som = 1; break;
            case '2': hex2Som = 2; break;
            case '3': hex2Som = 3; break;
            case '4': hex2Som = 4; break;
            case '5': hex2Som = 5; break;
            case '6': hex2Som = 6; break;
            case '7': hex2Som = 7; break;
            case '8': hex2Som = 8; break;
            case '9': hex2Som = 9; break;
            case 'A': hex2Som = 10; break;
            case 'B': hex2Som = 11; break;
            case 'C': hex2Som = 12; break;
            case 'D': hex2Som = 13; break;
            case 'E': hex2Som = 14; break;
            case 'F': hex2Som = 15; break;
            default: hex2Som = undefined;
        }

        if (i == j && aux == 1) {
            finalResult.unshift(String (0 + 0 + aux)); 
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

            switch (result) {
                case 0: result = '0'; break;
                case 1: result = '1'; break;
                case 2: result = '2'; break;
                case 3: result = '3'; break;
                case 4: result = '4'; break;
                case 5: result = '5'; break;
                case 6: result = '6'; break;
                case 7: result = '7'; break;
                case 8: result = '8'; break;
                case 9: result = '9'; break;
                case 10: result = 'A'; break;
                case 11: result = 'B'; break;
                case 12: result = 'C'; break;
                case 13: result = 'D'; break;
                case 14: result = 'E'; break;
                case 15: result = 'F'; break;

                default: console.log("Chegou aqui " + result);
            }

            finalResult.unshift(result);

        } else if (result <= 15) {

            switch (result) {
                case 0: result = '0'; break;
                case 1: result = '1'; break;
                case 2: result = '2'; break;
                case 3: result = '3'; break;
                case 4: result = '4'; break;
                case 5: result = '5'; break;
                case 6: result = '6'; break;
                case 7: result = '7'; break;
                case 8: result = '8'; break;
                case 9: result = '9'; break;
                case 10: result = 'A'; break;
                case 11: result = 'B'; break;
                case 12: result = 'C'; break;
                case 13: result = 'D'; break;
                case 14: result = 'E'; break;
                case 15: result = 'F'; break;

                default: console.log("Chegou aqui " + result);
            }

            finalResult.unshift(String(result));
        }
    }

    document.getElementById("result").innerHTML = finalResult.join('');
}