import { ProxyState } from "../AppState.js";
import Spell from "../Models/Spell.js";
import { sandboxApi } from "./AxiosService.js";

class MySpellsService {
  constructor() {
    console.log("myspellserv");
  }
  async getMySpells() {
    let res = await sandboxApi.get("")
    console.log(res)
    ProxyState.mySpells = res.data.data.map(s => new Spell(s))
  }
  async addSpell() {  
    let res = await sandboxApi.post("", ProxyState.activeSpell)
    console.log(res)
    // this.getMySpells()
    ProxyState.mySpells = [...ProxyState.mySpells, new Spell(res.data.data) ]
  }
  getActiveSpell(id) {
    ProxyState.activeSpell = ProxyState.mySpells.find(s => s.id == id)
  }

  //api/class/spells/89yt345hto4ibnour
  async removeSpell() {
    await sandboxApi.delete(ProxyState.activeSpell.id)
    this.getMySpells()
    ProxyState.activeSpell = null
  }
}
export const mySpellsService = new MySpellsService()