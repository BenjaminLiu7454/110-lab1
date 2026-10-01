import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

class Day {
    weather: number;
    supplyCost: number;   
    interest: number;
    cups: number;
    advertise: number;


    constructor() {
        this.weather = Math.floor(Math.random() * (100));
        this.supplyCost = (Math.random() * (.1 - .02 + 1));
        this.interest = Math.floor(Math.random() * 100);
        this.cups = 0;
        this.advertise = 0;
    }
}

async function StartGame() {
    const rl = readline.createInterface({ input, output });
    let assets = 0;

    let whatDay = 1;
    let advance = true;
    let status = "sunny";
    console.log("You Are Selling Lemonade")
    while (advance){ 
        let day = new Day
        if (whatDay == 1){
            day.weather = 0;
            day.supplyCost = 0.02;
            day.interest = 50;
        }
        if (day.weather > 50){
            status = "cloudy"
        }
        else {
            status = "sunny"
        }
        
        console.log("on day " + whatDay + " the cost of lemonade is " + day.supplyCost + " and the weather is " + status + "\n");
        console.log("Assets:" + assets + "\n");
        const answer: string = await rl.question('How many glasses of lemonade do you want to make? ');
        day.cups = Number(answer);

        ++whatDay
    }
}

StartGame()