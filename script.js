const url = "https://www.dnd5eapi.co/api/races/dwarf"

const characterAPIs = [
    "https://www.dnd5eapi.co/api/races/dragonborn",
    "https://www.dnd5eapi.co/api/races/dwarf",
    "https://www.dnd5eapi.co/api/races/elf",
    "https://www.dnd5eapi.co/api/races/gnome",
    "https://www.dnd5eapi.co/api/races/half-elf",
    "https://www.dnd5eapi.co/api/races/half-orc",
    "https://www.dnd5eapi.co/api/races/halfling",
    "https://www.dnd5eapi.co/api/races/human",
    "https://www.dnd5eapi.co/api/races/tiefling"
  ]

async function getDataFromServer() {
    const url = "https://www.dnd5eapi.co/api/races/dwarf";
    const response = await fetch(url);
    const data = await response.json();
    console.log(url);
  }
  getDataFromServer();