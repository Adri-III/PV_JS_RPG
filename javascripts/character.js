class Character {
    constructor(hp, dmg, status, mana) {
        this.hp = hp;
        this.dmg = dmg;
        this.status = status;
        this.mana = mana;
    }

    takeDamage = (damage) => {
        if (this.hp > 0) {
            this.hp = this.hp - damage;
        } else {
            console.log(`You can't smash ${this.name} because he passed away ...`)
        }
    }

    dealDamage = (victim) => {
        if (this.dmg > victim.hp) {
            this.mana = this.mana + 20;
            console.log(`${this.name}  +20 mana to having annhililated ${victim.name}`)
        }
        if (this.status != "loser") {
            victim.takeDamage(this.dmg);
            console.log(`Violent Smaaash of ${this.name} with ${this.dmg} on ${victim.name} !`)
            console.log(victim.name + " has " + victim.hp + " HP !")
        }

    }
}