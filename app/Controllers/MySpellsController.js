import { ProxyState } from "../AppState.js";
import { mySpellsService } from "../Services/MySpellsService.js"

function _drawMySpells(){
  let spells = ProxyState.mySpells
  let template = ""
  spells.forEach(s => template += `<li onclick="app.mySpellsController.getActiveSpell('${s.id}')" class="pointer">${s.name}</li>`)
  document.getElementById("my-spells").innerHTML = template

}
export default class MySpellsController{
  constructor(){
    console.log("myspellscontroller");
    ProxyState.on("mySpells", _drawMySpells)
    this.getMySpells()
  }

    getMySpells(){
      try {
        mySpellsService.getMySpells()
      } catch (error) {
        console.error(error)
      }
    }

    learnSpell(){
      try {
        console.log("test")
        mySpellsService.addSpell()
      } catch (error) {
        console.error(error)
      }
    }

    getActiveSpell(id){
      try {
        mySpellsService.getActiveSpell(id)
      } catch (error) {
        console.error(error)
      }
    }
    removeSpell(){
      try {
        mySpellsService.removeSpell()
      } catch (error) {
        console.error(error)
      }
    }
}