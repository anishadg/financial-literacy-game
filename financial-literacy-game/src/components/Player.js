class Player {
    constructor(name, scenario = 'student') {
        this.name = name;
        this.scenario = scenario;
        this.money = 1000; // Starting money
        this.creditScore = 650;
        this.skills = new Map();
        this.assets = [];
        this.debts = [];
        this.career = null;
        this.happiness = 100;
        this.energy = 100;
    }

    updateFinances(amount) {
        this.money += amount;
    }

    updateCreditScore(points) {
        this.creditScore = Math.max(300, Math.min(850, this.creditScore + points));
    }
}

module.exports = Player;