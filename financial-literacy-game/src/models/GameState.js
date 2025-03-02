class GameState {
    constructor() {
        this.currentWeek = 1;
        this.events = [];
        this.marketConditions = {
            stockMarket: 1.0,
            realEstate: 1.0,
            jobMarket: 1.0,
            cryptoMarket: 1.0,
            interestRate: 0.05
        };
        this.achievements = new Set();
        this.eventHistory = [];
        this.economicCycle = 'normal'; // boom, recession, normal
    }

    advanceWeek() {
        this.currentWeek++;
        this.updateMarketConditions();
        this.generateRandomEvent();
        return this.getCurrentState();
    }

    updateMarketConditions() {
        const volatility = this.economicCycle === 'recession' ? 0.15 : 0.08;
        
        this.marketConditions.stockMarket *= (0.95 + Math.random() * volatility);
        this.marketConditions.realEstate *= (0.98 + Math.random() * (volatility / 2));
        this.marketConditions.jobMarket *= (0.97 + Math.random() * (volatility / 3));
        this.marketConditions.cryptoMarket *= (0.90 + Math.random() * (volatility * 2));
        
        // Adjust interest rates based on economic cycle
        if (this.economicCycle === 'boom') {
            this.marketConditions.interestRate += 0.001;
        } else if (this.economicCycle === 'recession') {
            this.marketConditions.interestRate -= 0.001;
        }
    }

    generateRandomEvent() {
        const events = [
            { type: 'MARKET_CRASH', probability: 0.01, impact: -0.3 },
            { type: 'MARKET_BOOM', probability: 0.01, impact: 0.3 },
            { type: 'TECH_BOOM', probability: 0.05, impact: 0.2 },
            { type: 'HOUSING_CRISIS', probability: 0.02, impact: -0.25 },
            { type: 'CRYPTO_SURGE', probability: 0.08, impact: 0.5 }
        ];

        events.forEach(event => {
            if (Math.random() < event.probability) {
                this.triggerEvent(event);
            }
        });
    }

    triggerEvent(event) {
        this.events.push({
            type: event.type,
            week: this.currentWeek,
            impact: event.impact
        });
        
        // Apply event effects
        switch(event.type) {
            case 'MARKET_CRASH':
                this.marketConditions.stockMarket *= (1 + event.impact);
                this.economicCycle = 'recession';
                break;
            case 'MARKET_BOOM':
                this.marketConditions.stockMarket *= (1 + event.impact);
                this.economicCycle = 'boom';
                break;
            // Add more event effects...
        }
    }

    getCurrentState() {
        return {
            week: this.currentWeek,
            marketConditions: this.marketConditions,
            currentEvents: this.events,
            economicCycle: this.economicCycle
        };
    }

    addAchievement(achievement) {
        this.achievements.add(achievement);
    }

    hasAchievement(achievement) {
        return this.achievements.has(achievement);
    }
}

module.exports = GameState;