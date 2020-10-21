export default class Spell {
  constructor(data) {
    this.id = data._id
    this.name = data.name
    this.description = data.desc || data.description
    this.range = data.range
    this.duration = data.duration

    if(Array.isArray(this.description)){
      this.description = this.description.join('\n')
    }
  }

  get Template() {
    return /*html*/`
    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Spell Name : ${this.name}</h4>
                            <p class="card-text">Description : ${this.description}</p>
                            <p class="card-text">Range : ${this.range}</p>
                            <p class="card-text">Duration : ${this.duration}</p>
                            ${this.Button}
                        </div>
                    </div>`
  }

  get Button(){
    if(this.id){
      return `<button class="btn btn-danger" onclick="app.mySpellsController.removeSpell()">Unlearn Spell</button>`
    } 
    return `<button class="btn btn-primary" onclick="app.mySpellsController.learnSpell()">Learn Spell</button>`
  }
}


// description: "Squirming, ebony tentacles fill a 20-foot square on ground that you can see within range. For the duration, these tentacles turn the ground in the area into difficult terrain.↵When a creature enters the affected area for the first time on a turn or starts its turn there, the creature must succeed on a Dexterity saving throw or take 3d6 bludgeoning damage and be restrained by the tentacles until the spell ends. A creature that starts its turn in the area and is already restrained by the tentacles takes 3d6 bludgeoning damage.↵A creature restrained by the tentacles can use its action to make a Strength or Dexterity check (its choice) against your spell save DC. On a success, it frees itself."
// duration: "Up to 1 minute"
// level: 4
// name: "Black Tentacles"
// range: "90 feet"
// user: "class"
// __v: 0
// _id: "5d685f05d44f67001490bae6"


// 20201021101016
// https://www.dnd5eapi.co/api/spells/acid-arrow

// {
//   "index": "acid-arrow",
//   "name": "Acid Arrow",
//   "desc": [
//     "A shimmering green arrow streaks toward a target within range and bursts in a spray of acid. Make a ranged spell attack against the target. On a hit, the target takes 4d4 acid damage immediately and 2d4 acid damage at the end of its next turn. On a miss, the arrow splashes the target with acid for half as much of the initial damage and no damage at the end of its next turn."
//   ],
//   "higher_level": [
//     "When you cast this spell using a spell slot of 3rd level or higher, the damage (both initial and later) increases by 1d4 for each slot level above 2nd."
//   ],
//   "range": "90 feet",
//   "components": [
//     "V",
//     "S",
//     "M"
//   ],
//   "material": "Powdered rhubarb leaf and an adder's stomach.",
//   "ritual": false,
//   "duration": "Instantaneous",
//   "concentration": false,
//   "casting_time": "1 action",
//   "level": 2,
//   "attack_type": "ranged",
//   "damage": {
//     "damage_type": {
//       "index": "acid",
//       "name": "Acid",
//       "url": "/api/damage-types/acid"
//     },
//     "damage_at_slot_level": {
//       "2": "4d4",
//       "3": "5d4",
//       "4": "6d4",
//       "5": "7d4",
//       "6": "8d4",
//       "7": "9d4",
//       "8": "10d4",
//       "9": "11d4"
//     }
//   },
//   "school": {
//     "index": "evocation",
//     "name": "Evocation",
//     "url": "/api/magic-schools/evocation"
//   },
//   "classes": [
//     {
//       "index": "wizard",
//       "name": "Wizard",
//       "url": "/api/classes/wizard"
//     }
//   ],
//   "subclasses": [
//     {
//       "index": "lore",
//       "name": "Lore",
//       "url": "/api/subclasses/lore"
//     },
//     {
//       "index": "land",
//       "name": "Land",
//       "url": "/api/subclasses/land"
//     }
//   ],
//   "url": "/api/spells/acid-arrow"
// }