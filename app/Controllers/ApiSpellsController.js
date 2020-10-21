import { ProxyState } from "../AppState.js";
import { apiSpellsService } from "../Services/ApiSpellsService.js"

function _drawApiSpells() {
  // console.log(ProxyState.apiSpells);
  let spells = ProxyState.apiSpells
  let template = ""
  spells.forEach(s => template += `<li onclick="app.apiSpellsController.getActiveSpell('${s.index}')" class="pointer">${s.name}</li>`)
  document.getElementById("api-spells").innerHTML = template
}

function _drawActiveSpell() {
  if(ProxyState.activeSpell){
    document.getElementById("active-spell").innerHTML = ProxyState.activeSpell.Template;
  }else {
    document.getElementById("active-spell").innerHTML = "";
  }
}

export default class ApiSpellsController {
  constructor() {
    console.log("api controller");
    this.getAllApiSpells()
    ProxyState.on("apiSpells", _drawApiSpells)
    ProxyState.on("activeSpell", _drawActiveSpell)
  }

  getAllApiSpells() {
    try {
      apiSpellsService.getAll()
    } catch (error) {
      console.error(error)
    }
  }
  getActiveSpell(index) {
    try {
      apiSpellsService.getActiveSpell(index)
    } catch (error) {
      console.error(error)
    }
  }
}