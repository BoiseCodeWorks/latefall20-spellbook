import { ProxyState } from "../AppState.js";
import Spell from "../Models/Spell.js";
import { dndApi } from "./AxiosService.js";

class ApiSpellsService {
  constructor() {
    console.log("api service");
    // this.getAll()
  }
  async getActiveSpell(index) {
    let res = await dndApi.get(index)
    console.log(res)
    ProxyState.activeSpell = new Spell(res.data)
  }
  async getAll() {
    //then catch way
    // dndApi.get("").then(res => {
    //   console.log(res)
    // }).catch(err => console.error(err))

    //async await but needs try catch in controller
    let res = await dndApi.get("")
    console.log(res.data.results)
    ProxyState.apiSpells = res.data.results
  }
}

export const apiSpellsService = new ApiSpellsService();