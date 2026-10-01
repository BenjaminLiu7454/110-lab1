import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

class Day {
    weather: number;
    supplyCost: number;   
    interest: number;
    cups: number;
    advertise: number;
    charge: number;


    constructor() {
        this.weather = Math.floor(Math.random() * (100));
        this.supplyCost = 0.01 * Math.floor(Math.random() * 11);
        this.interest = Math.floor(Math.random() * 100);
        this.cups = 0;
        this.advertise = 0;
        this.charge = 0;
    }
}

async function StartGame() {
    const rl = readline.createInterface({ input, output });
    let assets = 2.00;

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
        
        advance = false;
        let glassNum = 0;
        while (advance == false){
            const answer: string = await rl.question('How many glasses of lemonade do you want to make? ');
            glassNum = Number(answer)
            if (glassNum == 0 ){
                advance = true;
                continue;
            }
            if ((glassNum * day.supplyCost) > assets){
                console.log("too broke to afford :(")
            } else{
                assets = assets - (glassNum * day.supplyCost);
                advance = true;
            }
        }
        day.cups = glassNum;
        let advNum = 0;
        advance = false;
        while (advance == false){
            console.log("Assets:" + assets + "\n");
            const answer: string = await rl.question('How many advertisements? (0.15 ea) ');
            advNum = Number(answer)
            if (advNum == 0 ){
                advance = true;
                continue;
            }
            if ((advNum * 0.15) > assets){
                console.log("too broke to afford :(")
            } else{
                assets = assets - (advNum * 0.15)
                advance = true;
            }
        }
        let chaNum = 0;
        advance = false;
        while (advance == false){
            console.log("Assets:" + assets + "\n");
            const answer: string = await rl.question('How much are you charging per cup ');
            chaNum = Number(answer)
            if (chaNum > 0 && chaNum < 100) {
                advance = true;
                day.charge = chaNum;
            }
            else{
                console.log("not realistic price!");
            }
        }
        console.log("====== DAY " + whatDay + " REPORT ====== \n");


        ++whatDay
    }
}

StartGame()