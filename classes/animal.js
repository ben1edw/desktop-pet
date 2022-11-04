class Animal {
    constructor(name){
        this.name = name
        this.health = 50
        this.hunger = 50
        this.thirst = 50
        this.boredom = 100
        this.strength= 100
        this.love = 100
    }
    drinks() {
        this.health += 5
        this.thirst += 10
        this.strength +=1
        console.log(`${this.name} is feeling full`)
        return this
    }
    hunt() {
        this.health += 5
        this.hunger += 10
        this.boredom -= 10
        console.log(`${this.name} is feeling full`)
        return this
    } 
    gym() {
        this.health += 5
        this.hunger -= 10
        this.boredom -= 10
        this.strength +=10
        console.log(`${this.name} is strong`)
        return this
    }
    flirt() {
        this.health += 5
        this.boredom += 10
        this.love +=20
        console.log(`${this.name} is falling in love`)
        return this
    }
    stats() {
        return console.table({
            name: this.name,
            health: this.health,
            hunger: this.hunger,
            thirst: this.thirst,
            boredom: this.boredom,
            strength: this.strength,
            love: this.love

        })
    }
}

export default Animal