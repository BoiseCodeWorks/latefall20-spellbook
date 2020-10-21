export const dndApi = axios.create({
  baseURL: "https://www.dnd5eapi.co/api/spells",
  timeout: 10000
})

export const sandboxApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/class/spells/",
  timeout: 10000
})