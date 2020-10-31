/**
 * El objetivo de este ejercicio es crear una máquina tragaperras utilizando clases donde
 * cada vez que juguemos insertemos una moneda. Cada máquina tragaperras (instancia)
 * tendrá un contador de monedas que automá􀦞camente se irá incrementando conforme
 * vayamos jugando.
 * Cuando se llame al método play el número de monedas se debe incrementar de forma
 * automá􀦞ca y debe generar tres booleanos aleatorios que representarán el estado de las
 * 3 ruletas. El usuario habrá ganado en caso de que los tres booleanos sean true , y por
 * tanto deberá mostrarse por consola el mensaje:
 * "Congratulations!!!. You won <número de monedas> coins!!"
 * y reiniciar las monedas almacenadas, ya que las hemos conseguido y han salido de la
 * máquina.
 * En caso contrario deberá mostrar otro mensaje:
 * "Good luck next time!!".
 */


class SlotMachine {
    constructor() {
        this.coins=0;
    }

    play () {
        this.coins += 1;

        console.log(`-----Partida nº ${this.coins}-----`);

        const ruleta1 = Boolean(Math.round(Math.random()));
        const ruleta2 = Boolean(Math.round(Math.random()));
        const ruleta3 = Boolean(Math.round(Math.random()));
        
        console.log(ruleta1 , ruleta2, ruleta3);

        console.log(this.printResult(ruleta1, ruleta2, ruleta3));

        if(ruleta1 && ruleta2 && ruleta3){
            console.log('Congratulations!!!. You won ' + this.coins + ' coins');
            this.coins=0;
        } else {
            console.log("Good luck next time!!");
        }
    }

    printResult(...ruleta) {
        let usado = false;
        let result="";

        ruleta.forEach(element=> {
            if(element) {
                result += " 🍋 "
            } else {
                if(!usado) {
                    usado=true;
                    result+= " 🍓 ";
                } else {
                    usado=false;
                    result += " 🍒 ";
                }
            }
        });

        return result;
    }
}

const machine1 = new SlotMachine();

machine1.play(); 
machine1.play();
machine1.play();
machine1.play(); 
machine1.play(); 
