// ============================================================================
// DATA
// ============================================================================

const DATA = [
  {
    "slug": "bulbasaur",
    "id": 1,
    "name": "Bulbasaur",
    "types": [
      "Grass",
      "Poison"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "usar",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "venusaur",
    "id": 3,
    "name": "Venusaur",
    "types": [
      "Grass",
      "Poison"
    ],
    "locations": [
      "Wildscape",
      "Normal",
      "Outland"
    ],
    "areas": [
      {
        "category": "Wildscape",
        "name": "Encontrado no Wildscape",
        "image": null
      },
      {
        "category": "Outland",
        "name": "Encontrado na Outland",
        "image": null
      },
      {
        "category": "Normal",
        "name": "Ilha sul de Fuchsia",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "charmander",
    "id": 4,
    "name": "Charmander",
    "types": [
      "Fire"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Esquerda do CP de Cinnabar",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "charizard",
    "id": 6,
    "name": "Charizard",
    "types": [
      "Fire",
      "Flying"
    ],
    "locations": [
      "Wildscape",
      "Normal",
      "Outland"
    ],
    "areas": [
      {
        "category": "Wildscape",
        "name": "Encontrado no Wildscape",
        "image": "https://imgur.com/a/thSWZiw"
      },
      {
        "category": "Outland",
        "name": "Encontrado na Outland",
        "image": "https://imgur.com/a/tjd9sGl"
      },
      {
        "category": "Normal",
        "name": "Ilha norte de Cerulean",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "squirtle",
    "id": 7,
    "name": "Squirtle",
    "types": [
      "Water"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Ilha norte de Cinnabar",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "wartortle",
    "id": 8,
    "name": "Wartortle",
    "types": [
      "Water"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Ilha oeste de Pallet",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "blastoise",
    "id": 9,
    "name": "Blastoise",
    "types": [
      "Water"
    ],
    "locations": [
      "Wildscape",
      "Normal",
      "Outland"
    ],
    "areas": [
      {
        "category": "Wildscape",
        "name": "Encontrado no Wildscape",
        "image": "https://imgur.com/a/H98mIzg"
      },
      {
        "category": "Outland",
        "name": "Encontrado na Outland",
        "image": "https://imgur.com/a/BG2lBrL"
      },
      {
        "category": "Normal",
        "name": "Localiza\u00e7\u00e3o Normal",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "caterpie",
    "id": 10,
    "name": "Caterpie",
    "types": [
      "Bug"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Norte de Viridian",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "metapod",
    "id": 11,
    "name": "Metapod",
    "types": [
      "Bug"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Norte de Viridian",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "butterfree",
    "id": 12,
    "name": "Butterfree",
    "types": [
      "Bug",
      "Flying"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Norte de Viridian",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "weedle",
    "id": 13,
    "name": "Weedle",
    "types": [
      "Bug",
      "Poison"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Norte de Viridian",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "kakuna",
    "id": 14,
    "name": "Kakuna",
    "types": [
      "Bug",
      "Poison"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Norte de Viridian",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "beedrill",
    "id": 15,
    "name": "Beedrill",
    "types": [
      "Bug",
      "Poison"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "pidgey",
    "id": 16,
    "name": "Pidgey",
    "types": [
      "Normal",
      "Flying"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Norte de Saffron",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "pidgeotto",
    "id": 17,
    "name": "Pidgeotto",
    "types": [
      "Normal",
      "Flying"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Norte de Saffron",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "pidgeot",
    "id": 18,
    "name": "Pidgeot",
    "types": [
      "Normal",
      "Flying"
    ],
    "locations": [
      "Wildscape",
      "Normal",
      "Outland"
    ],
    "areas": [
      {
        "category": "Wildscape",
        "name": "Encontrado no Wildscape",
        "image": "https://imgur.com/a/mZdWvFw"
      },
      {
        "category": "Outland",
        "name": "Encontrado na Outland",
        "image": "https://imgur.com/a/oeFCJAc"
      },
      {
        "category": "Normal",
        "name": "Ilha sul de Fuchsia",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "raticate",
    "id": 20,
    "name": "Raticate",
    "types": [
      "Normal"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Bueiro na frente do CP de Saffron",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "spearow",
    "id": 21,
    "name": "Spearow",
    "types": [
      "Normal",
      "Flying"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Norte de Saffron",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "fearow",
    "id": 22,
    "name": "Fearow",
    "types": [
      "Normal",
      "Flying"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "ekans",
    "id": 23,
    "name": "Ekans",
    "types": [
      "Poison"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Esquerda de Cerulean",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "arbok",
    "id": 24,
    "name": "Arbok",
    "types": [
      "Poison"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Esquerda de Cerulean",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "pikachu",
    "id": 25,
    "name": "Pikachu",
    "types": [
      "Electric"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Direita de Saffron",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "raichu",
    "id": 26,
    "name": "Raichu",
    "types": [
      "Electric"
    ],
    "locations": [
      "Wildscape",
      "Normal",
      "Outland"
    ],
    "areas": [
      {
        "category": "Wildscape",
        "name": "Encontrado no Wildscape",
        "image": "https://imgur.com/a/clP3jSD"
      },
      {
        "category": "Outland",
        "name": "Encontrado na Outland",
        "image": "https://imgur.com/a/mXWBecs"
      },
      {
        "category": "Normal",
        "name": "Direita de Saffron (segundo andar)",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "sandshrew",
    "id": 27,
    "name": "Sandshrew",
    "types": [
      "Ground"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Direita de Cerulean",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "sandslash",
    "id": 28,
    "name": "Sandslash",
    "types": [
      "Ground"
    ],
    "locations": [
      "Normal",
      "Outland"
    ],
    "areas": [
      {
        "category": "Outland",
        "name": "Encontrado na Outland",
        "image": "https://imgur.com/a/POAo39e"
      },
      {
        "category": "Normal",
        "name": "Direita de Cerulean (descendo o cubone gigante)",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "nidorina",
    "id": 30,
    "name": "Nidorina",
    "types": [
      "Poison"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Safari",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "nidoqueen",
    "id": 31,
    "name": "Nidoqueen",
    "types": [
      "Poison",
      "Ground"
    ],
    "locations": [
      "Wildscape",
      "Normal",
      "Outland"
    ],
    "areas": [
      {
        "category": "Wildscape",
        "name": "Encontrado no Wildscape",
        "image": "https://imgur.com/a/lnONjUq"
      },
      {
        "category": "Outland",
        "name": "Encontrado na Outland",
        "image": "https://imgur.com/a/zWvU1RF"
      },
      {
        "category": "Normal",
        "name": "Safari",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "nidorino",
    "id": 33,
    "name": "Nidorino",
    "types": [
      "Poison"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Safari",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "nidoking",
    "id": 34,
    "name": "Nidoking",
    "types": [
      "Poison",
      "Ground"
    ],
    "locations": [
      "Wildscape",
      "Normal",
      "Outland"
    ],
    "areas": [
      {
        "category": "Wildscape",
        "name": "Encontrado no Wildscape",
        "image": "https://imgur.com/a/HWxtEs3"
      },
      {
        "category": "Outland",
        "name": "Encontrado na Outland",
        "image": "https://imgur.com/a/qQ0J7Nc"
      },
      {
        "category": "Normal",
        "name": "Safari",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "clefairy",
    "id": 35,
    "name": "Clefairy",
    "types": [
      "Fairy"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Ilha direita de Fuchsia",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "clefable",
    "id": 36,
    "name": "Clefable",
    "types": [
      "Fairy"
    ],
    "locations": [
      "Normal",
      "Outland"
    ],
    "areas": [
      {
        "category": "Outland",
        "name": "Encontrado na Outland",
        "image": "https://imgur.com/a/786DMGM"
      },
      {
        "category": "Normal",
        "name": "Escada na DG de Floette em Pewter",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "vulpix",
    "id": 37,
    "name": "Vulpix",
    "types": [
      "Fire"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Esquerda do CP de Cinnabar",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "ninetales",
    "id": 38,
    "name": "Ninetales",
    "types": [
      "Fire"
    ],
    "locations": [
      "Wildscape",
      "Normal"
    ],
    "areas": [
      {
        "category": "Wildscape",
        "name": "Encontrado no Wildscape",
        "image": "https://imgur.com/a/2uMZqFZ"
      },
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "jigglypuff",
    "id": 39,
    "name": "Jigglypuff",
    "types": [
      "Normal",
      "Fairy"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Norte de Pewter",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "wigglytuff",
    "id": 40,
    "name": "Wigglytuff",
    "types": [
      "Normal",
      "Fairy"
    ],
    "locations": [
      "Normal",
      "Outland"
    ],
    "areas": [
      {
        "category": "Outland",
        "name": "Encontrado na Outland",
        "image": "https://imgur.com/a/YkFBYUv"
      },
      {
        "category": "Normal",
        "name": "Escada na DG de Folette em Pewter",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "zubat",
    "id": 41,
    "name": "Zubat",
    "types": [
      "Poison",
      "Flying"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "golbat",
    "id": 42,
    "name": "Golbat",
    "types": [
      "Poison",
      "Flying"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "oddish",
    "id": 43,
    "name": "Oddish",
    "types": [
      "Grass",
      "Poison"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "gloom",
    "id": 44,
    "name": "Gloom",
    "types": [
      "Grass",
      "Poison"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "vileplume",
    "id": 45,
    "name": "Vileplume",
    "types": [
      "Grass",
      "Poison"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Ilha nordeste de Cerulean",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "paras",
    "id": 46,
    "name": "Paras",
    "types": [
      "Bug",
      "Grass"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "parasect",
    "id": 47,
    "name": "Parasect",
    "types": [
      "Bug",
      "Grass"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "venonat",
    "id": 48,
    "name": "Venonat",
    "types": [
      "Bug",
      "Poison"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Direita de Fuchsia",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "venomoth",
    "id": 49,
    "name": "Venomoth",
    "types": [
      "Bug",
      "Poison"
    ],
    "locations": [
      "Normal",
      "Outland"
    ],
    "areas": [
      {
        "category": "Outland",
        "name": "Encontrado na Outland",
        "image": "https://imgur.com/a/8uiWc1k"
      },
      {
        "category": "Normal",
        "name": "Localiza\u00e7\u00e3o Normal",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "diglett",
    "id": 50,
    "name": "Diglett",
    "types": [
      "Ground"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Direita de Cerulean",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "dugtrio",
    "id": 51,
    "name": "Dugtrio",
    "types": [
      "Ground"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Direita de Cerulean",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "meowth",
    "id": 52,
    "name": "Meowth",
    "types": [
      "Normal"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Ilha norte de Ecruteak",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "persian",
    "id": 53,
    "name": "Persian",
    "types": [
      "Normal"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "psyduck",
    "id": 54,
    "name": "Psyduck",
    "types": [
      "Water"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Ilha norte de Cinnabar",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "golduck",
    "id": 55,
    "name": "Golduck",
    "types": [
      "Water"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "https://www.youtube.com/watch?v=jTEe_aB8h-A",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "mankey",
    "id": 56,
    "name": "Mankey",
    "types": [
      "Fighting"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Esquerda de Viridian",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "primeape",
    "id": 57,
    "name": "Primeape",
    "types": [
      "Fighting"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Esquerda de Viridian",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "growlithe",
    "id": 58,
    "name": "Growlithe",
    "types": [
      "Fire"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Sul do CP de Cinnabar",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "arcanine",
    "id": 59,
    "name": "Arcanine",
    "types": [
      "Fire"
    ],
    "locations": [
      "Wildscape",
      "Normal",
      "Outland"
    ],
    "areas": [
      {
        "category": "Wildscape",
        "name": "Encontrado no Wildscape",
        "image": "https://imgur.com/a/NnkwV5t"
      },
      {
        "category": "Outland",
        "name": "Encontrado na Outland",
        "image": "https://imgur.com/a/Y4xdX5S"
      },
      {
        "category": "Normal",
        "name": "Localiza\u00e7\u00e3o Normal",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "poliwag",
    "id": 60,
    "name": "Poliwag",
    "types": [
      "Water"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Ilha de gelo sudeste de Kanto",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "poliwhirl",
    "id": 61,
    "name": "Poliwhirl",
    "types": [
      "Water"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Ilha de gelo sudeste de Kanto",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "poliwrath",
    "id": 62,
    "name": "Poliwrath",
    "types": [
      "Water",
      "Fighting"
    ],
    "locations": [
      "Wildscape",
      "Normal"
    ],
    "areas": [
      {
        "category": "Wildscape",
        "name": "Encontrado no Wildscape",
        "image": "https://imgur.com/a/rg5qYI4"
      },
      {
        "category": "Normal",
        "name": "Ilha de gelo sudeste de Kanto",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "abra",
    "id": 63,
    "name": "Abra",
    "types": [
      "Psychic"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "kadabra",
    "id": 64,
    "name": "Kadabra",
    "types": [
      "Psychic"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "alakazam",
    "id": 65,
    "name": "Alakazam",
    "types": [
      "Psychic"
    ],
    "locations": [
      "Wildscape",
      "Normal",
      "Outland"
    ],
    "areas": [
      {
        "category": "Wildscape",
        "name": "Encontrado no Wildscape",
        "image": "https://imgur.com/a/OEmy8zV"
      },
      {
        "category": "Outland",
        "name": "Encontrado na Outland",
        "image": "https://imgur.com/a/Rocuiu4"
      },
      {
        "category": "Normal",
        "name": "Localiza\u00e7\u00e3o Normal",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "machop",
    "id": 66,
    "name": "Machop",
    "types": [
      "Fighting"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Norte de Lavender, descendo escada nos Geodude",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "machoke",
    "id": 67,
    "name": "Machoke",
    "types": [
      "Fighting"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Norte de Lavender, descendo escada nos Geodude",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "machamp",
    "id": 68,
    "name": "Machamp",
    "types": [
      "Fighting"
    ],
    "locations": [
      "Wildscape",
      "Normal",
      "Outland"
    ],
    "areas": [
      {
        "category": "Wildscape",
        "name": "Encontrado no Wildscape",
        "image": "https://imgur.com/a/yB63tms"
      },
      {
        "category": "Outland",
        "name": "Encontrado na Outland",
        "image": "https://imgur.com/a/TuUxfDy"
      },
      {
        "category": "Normal",
        "name": "Norte de Lavender, \u00faltimo andar",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "bellsprout",
    "id": 69,
    "name": "Bellsprout",
    "types": [
      "Grass",
      "Poison"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Sul de Saffron",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "weepinbell",
    "id": 70,
    "name": "Weepinbell",
    "types": [
      "Grass",
      "Poison"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Sul de Saffron",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "victreebel",
    "id": 71,
    "name": "Victreebel",
    "types": [
      "Grass",
      "Poison"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Ilha nordeste de Cerulean",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "tentacool",
    "id": 72,
    "name": "Tentacool",
    "types": [
      "Water",
      "Poison"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "tentacruel",
    "id": 73,
    "name": "Tentacruel",
    "types": [
      "Water",
      "Poison"
    ],
    "locations": [
      "Wildscape",
      "Normal"
    ],
    "areas": [
      {
        "category": "Wildscape",
        "name": "Encontrado no Wildscape",
        "image": "https://imgur.com/a/1MIh0TT"
      },
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "geodude",
    "id": 74,
    "name": "Geodude",
    "types": [
      "Rock",
      "Ground"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Norte de Lavender",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "graveler",
    "id": 75,
    "name": "Graveler",
    "types": [
      "Rock",
      "Ground"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "golem",
    "id": 76,
    "name": "Golem",
    "types": [
      "Rock",
      "Ground"
    ],
    "locations": [
      "Wildscape",
      "Normal",
      "Outland"
    ],
    "areas": [
      {
        "category": "Wildscape",
        "name": "Encontrado no Wildscape",
        "image": "https://imgur.com/a/rg5qYI4"
      },
      {
        "category": "Outland",
        "name": "Encontrado na Outland",
        "image": "https://imgur.com/a/d1PPOJE"
      },
      {
        "category": "Normal",
        "name": "Localiza\u00e7\u00e3o Normal",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "ponyta",
    "id": 77,
    "name": "Ponyta",
    "types": [
      "Fire"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Sul do CP de Cinnabar",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "rapidash",
    "id": 78,
    "name": "Rapidash",
    "types": [
      "Fire"
    ],
    "locations": [
      "Wildscape",
      "Normal"
    ],
    "areas": [
      {
        "category": "Wildscape",
        "name": "Encontrado no Wildscape",
        "image": "https://imgur.com/a/lwqRvJB"
      },
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "slowpoke",
    "id": 79,
    "name": "Slowpoke",
    "types": [
      "Water",
      "Psychic"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Po\u00e7o direita de Azalea",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "slowbro",
    "id": 80,
    "name": "Slowbro",
    "types": [
      "Water",
      "Psychic"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Po\u00e7o direita de Azalea",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "magnemite",
    "id": 81,
    "name": "Magnemite",
    "types": [
      "Electric",
      "Steel"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Norte de Saffron",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "magneton",
    "id": 82,
    "name": "Magneton",
    "types": [
      "Electric",
      "Steel"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Norte de Saffron",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "doduo",
    "id": 84,
    "name": "Doduo",
    "types": [
      "Normal",
      "Flying"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Esquerda de Viridian",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "dodrio",
    "id": 85,
    "name": "Dodrio",
    "types": [
      "Normal",
      "Flying"
    ],
    "locations": [
      "Wildscape",
      "Normal"
    ],
    "areas": [
      {
        "category": "Wildscape",
        "name": "Encontrado no Wildscape",
        "image": "https://imgur.com/a/mZdWvFw"
      },
      {
        "category": "Normal",
        "name": "Safari",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "seel",
    "id": 86,
    "name": "Seel",
    "types": [
      "Water"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Ilha de gelo sudeste de Kanto",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "dewgong",
    "id": 87,
    "name": "Dewgong",
    "types": [
      "Water",
      "Ice"
    ],
    "locations": [
      "Normal",
      "Outland"
    ],
    "areas": [
      {
        "category": "Outland",
        "name": "Encontrado na Outland",
        "image": "https://imgur.com/a/JWPvUyD"
      },
      {
        "category": "Normal",
        "name": "Ilha de gelo sudeste de Kanto",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "grimer",
    "id": 88,
    "name": "Grimer",
    "types": [
      "Poison"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "muk",
    "id": 89,
    "name": "Muk",
    "types": [
      "Poison"
    ],
    "locations": [
      "Wildscape",
      "Normal",
      "Outland"
    ],
    "areas": [
      {
        "category": "Wildscape",
        "name": "Encontrado no Wildscape",
        "image": "https://imgur.com/a/vgGrrfT"
      },
      {
        "category": "Outland",
        "name": "Encontrado na Outland",
        "image": "https://imgur.com/a/rEliicY"
      },
      {
        "category": "Normal",
        "name": "Localiza\u00e7\u00e3o Normal",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "shellder",
    "id": 90,
    "name": "Shellder",
    "types": [
      "Water"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Ilha de gelo sudeste de Kanto",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "cloyster",
    "id": 91,
    "name": "Cloyster",
    "types": [
      "Water",
      "Ice"
    ],
    "locations": [
      "Normal",
      "Outland"
    ],
    "areas": [
      {
        "category": "Outland",
        "name": "Encontrado na Outland",
        "image": "https://imgur.com/a/nKxwd97"
      },
      {
        "category": "Normal",
        "name": "Ilha de gelo sudeste de Kanto",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "gastly",
    "id": 92,
    "name": "Gastly",
    "types": [
      "Ghost",
      "Poison"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Ilha nordeste de Cerulean",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "haunter",
    "id": 93,
    "name": "Haunter",
    "types": [
      "Ghost",
      "Poison"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Ilha nordeste de Cerulean",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "gengar",
    "id": 94,
    "name": "Gengar",
    "types": [
      "Ghost",
      "Poison"
    ],
    "locations": [
      "Wildscape",
      "Normal",
      "Outland"
    ],
    "areas": [
      {
        "category": "Wildscape",
        "name": "Encontrado no Wildscape",
        "image": "https://imgur.com/a/xfYPzTw"
      },
      {
        "category": "Outland",
        "name": "Encontrado na Outland",
        "image": "https://imgur.com/a/MHkIa4x"
      },
      {
        "category": "Normal",
        "name": "Ilha nordeste de Cerulean",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "onix",
    "id": 95,
    "name": "Onix",
    "types": [
      "Rock",
      "Ground"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Ilha norte de Pewter",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "drowzee",
    "id": 96,
    "name": "Drowzee",
    "types": [
      "Psychic"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "hypno",
    "id": 97,
    "name": "Hypno",
    "types": [
      "Psychic"
    ],
    "locations": [
      "Normal",
      "Outland"
    ],
    "areas": [
      {
        "category": "Outland",
        "name": "Encontrado na Outland",
        "image": "https://imgur.com/a/OpoeFRJ"
      },
      {
        "category": "Normal",
        "name": "Localiza\u00e7\u00e3o Normal",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "krabby",
    "id": 98,
    "name": "Krabby",
    "types": [
      "Water"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Praia norte de Ecruteak",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "kingler",
    "id": 99,
    "name": "Kingler",
    "types": [
      "Water"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "voltorb",
    "id": 100,
    "name": "Voltorb",
    "types": [
      "Electric"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Norte de Saffron",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "electrode",
    "id": 101,
    "name": "Electrode",
    "types": [
      "Electric"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Norte de Saffron",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "exeggcute",
    "id": 102,
    "name": "Exeggcute",
    "types": [
      "Grass",
      "Psychic"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Esquerda de Viridian",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "exeggutor",
    "id": 103,
    "name": "Exeggutor",
    "types": [
      "Grass",
      "Psychic"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Ilha sul de Fuchsia",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "cubone",
    "id": 104,
    "name": "Cubone",
    "types": [
      "Ground"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "marowak",
    "id": 105,
    "name": "Marowak",
    "types": [
      "Ground"
    ],
    "locations": [
      "Wildscape",
      "Normal",
      "Outland"
    ],
    "areas": [
      {
        "category": "Wildscape",
        "name": "Encontrado no Wildscape",
        "image": "https://imgur.com/a/AYaHOY2"
      },
      {
        "category": "Outland",
        "name": "Encontrado na Outland",
        "image": "https://imgur.com/a/mVMMPsK"
      },
      {
        "category": "Normal",
        "name": "Localiza\u00e7\u00e3o Normal",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "hitmonlee",
    "id": 106,
    "name": "Hitmonlee",
    "types": [
      "Fighting"
    ],
    "locations": [
      "Wildscape",
      "Outland"
    ],
    "areas": [
      {
        "category": "Wildscape",
        "name": "Encontrado no Wildscape",
        "image": "https://imgur.com/a/pjIUv00"
      },
      {
        "category": "Outland",
        "name": "Encontrado na Outland",
        "image": "https://imgur.com/a/mNmvmXC"
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "hitmonchan",
    "id": 107,
    "name": "Hitmonchan",
    "types": [
      "Fighting"
    ],
    "locations": [
      "Wildscape",
      "Outland"
    ],
    "areas": [
      {
        "category": "Wildscape",
        "name": "Encontrado no Wildscape",
        "image": "https://imgur.com/a/pjIUv00"
      },
      {
        "category": "Outland",
        "name": "Encontrado na Outland",
        "image": "https://imgur.com/a/hUv66HU"
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "lickitung",
    "id": 108,
    "name": "Lickitung",
    "types": [
      "Normal"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Safari",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "koffing",
    "id": 109,
    "name": "Koffing",
    "types": [
      "Poison"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "weezing",
    "id": 110,
    "name": "Weezing",
    "types": [
      "Poison"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "rhyhorn",
    "id": 111,
    "name": "Rhyhorn",
    "types": [
      "Ground",
      "Rock"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "rhydon",
    "id": 112,
    "name": "Rhydon",
    "types": [
      "Ground",
      "Rock"
    ],
    "locations": [
      "Normal",
      "Outland"
    ],
    "areas": [
      {
        "category": "Outland",
        "name": "Encontrado na Outland",
        "image": "https://imgur.com/a/KoBjA2y"
      },
      {
        "category": "Normal",
        "name": "Localiza\u00e7\u00e3o Normal",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "chansey",
    "id": 113,
    "name": "Chansey",
    "types": [
      "Normal"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Ilha sul de Fuchsia",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "tangela",
    "id": 114,
    "name": "Tangela",
    "types": [
      "Grass"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Ilha nordeste de Cerulean",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "kangaskhan",
    "id": 115,
    "name": "Kangaskhan",
    "types": [
      "Normal"
    ],
    "locations": [
      "Wildscape",
      "Normal"
    ],
    "areas": [
      {
        "category": "Wildscape",
        "name": "Encontrado no Wildscape",
        "image": "https://imgur.com/a/j21SPSA"
      },
      {
        "category": "Normal",
        "name": "Safari",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "horsea",
    "id": 116,
    "name": "Horsea",
    "types": [
      "Water"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "seadra",
    "id": 117,
    "name": "Seadra",
    "types": [
      "Water"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "goldeen",
    "id": 118,
    "name": "Goldeen",
    "types": [
      "Water"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Ilha oeste de Pallet",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "seaking",
    "id": 119,
    "name": "Seaking",
    "types": [
      "Water"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Ilha oeste de Pallet",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "staryu",
    "id": 120,
    "name": "Staryu",
    "types": [
      "Water"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Ilha oeste de Pallet",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "starmie",
    "id": 121,
    "name": "Starmie",
    "types": [
      "Water",
      "Psychic"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Ilha oeste de Pallet",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "scyther",
    "id": 123,
    "name": "Scyther",
    "types": [
      "Bug",
      "Flying"
    ],
    "locations": [
      "Wildscape",
      "Normal",
      "Outland"
    ],
    "areas": [
      {
        "category": "Wildscape",
        "name": "Encontrado no Wildscape",
        "image": "https://imgur.com/a/df36NrE"
      },
      {
        "category": "Outland",
        "name": "Encontrado na Outland",
        "image": "https://imgur.com/a/wE4YNiO"
      },
      {
        "category": "Normal",
        "name": "Localiza\u00e7\u00e3o Normal",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "jynx",
    "id": 124,
    "name": "Jynx",
    "types": [
      "Ice",
      "Psychic"
    ],
    "locations": [
      "Wildscape",
      "Normal",
      "Outland"
    ],
    "areas": [
      {
        "category": "Wildscape",
        "name": "Encontrado no Wildscape",
        "image": "https://imgur.com/a/3LppiO7"
      },
      {
        "category": "Outland",
        "name": "Encontrado na Outland",
        "image": "https://imgur.com/a/8np50W5"
      },
      {
        "category": "Normal",
        "name": "Ilha de gelo sudeste de Kanto",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "electabuzz",
    "id": 125,
    "name": "Electabuzz",
    "types": [
      "Electric"
    ],
    "locations": [
      "Wildscape",
      "Normal",
      "Outland"
    ],
    "areas": [
      {
        "category": "Wildscape",
        "name": "Encontrado no Wildscape",
        "image": "https://imgur.com/a/clP3jSD"
      },
      {
        "category": "Outland",
        "name": "Encontrado na Outland",
        "image": "https://imgur.com/a/mXWBecs"
      },
      {
        "category": "Normal",
        "name": "Direita de Saffron (subsolo dos Pikachu)",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "magmar",
    "id": 126,
    "name": "Magmar",
    "types": [
      "Fire"
    ],
    "locations": [
      "Wildscape",
      "Normal"
    ],
    "areas": [
      {
        "category": "Wildscape",
        "name": "Encontrado no Wildscape",
        "image": "https://imgur.com/a/srX7Vkk"
      },
      {
        "category": "Normal",
        "name": "Esquerda do CP de Cinnabar",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "pinsir",
    "id": 127,
    "name": "Pinsir",
    "types": [
      "Bug"
    ],
    "locations": [
      "Wildscape",
      "Normal",
      "Outland"
    ],
    "areas": [
      {
        "category": "Wildscape",
        "name": "Encontrado no Wildscape",
        "image": "https://imgur.com/a/T3rOBjE"
      },
      {
        "category": "Outland",
        "name": "Encontrado na Outland",
        "image": "https://imgur.com/a/wtV1BSr"
      },
      {
        "category": "Normal",
        "name": "Ilha sul de Fuchsia",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "tauros",
    "id": 128,
    "name": "Tauros",
    "types": [
      "Normal"
    ],
    "locations": [
      "Wildscape",
      "Normal"
    ],
    "areas": [
      {
        "category": "Wildscape",
        "name": "Encontrado no Wildscape",
        "image": "https://imgur.com/a/j21SPSA"
      },
      {
        "category": "Normal",
        "name": "Safari",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "magikarp",
    "id": 129,
    "name": "Magikarp",
    "types": [
      "Water"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "gyarados",
    "id": 130,
    "name": "Gyarados",
    "types": [
      "Water",
      "Flying"
    ],
    "locations": [
      "Wildscape",
      "Outland"
    ],
    "areas": [
      {
        "category": "Wildscape",
        "name": "Encontrado no Wildscape",
        "image": "https://imgur.com/a/mfds9di"
      },
      {
        "category": "Outland",
        "name": "Encontrado na Outland",
        "image": "https://imgur.com/a/KvCMFGK"
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "lapras",
    "id": 131,
    "name": "Lapras",
    "types": [
      "Water",
      "Ice"
    ],
    "locations": [
      "Wildscape",
      "Normal"
    ],
    "areas": [
      {
        "category": "Wildscape",
        "name": "Encontrado no Wildscape",
        "image": "https://imgur.com/a/ca4NlMA"
      },
      {
        "category": "Normal",
        "name": "Ao redor da DG de Lapras",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "ditto",
    "id": 132,
    "name": "Ditto",
    "types": [
      "Normal"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "eevee",
    "id": 133,
    "name": "Eevee",
    "types": [
      "Normal"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Sul da wildscape de Umbreon/Espeon",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "vaporeon",
    "id": 134,
    "name": "Vaporeon",
    "types": [
      "Water"
    ],
    "locations": [
      "Wildscape",
      "Normal"
    ],
    "areas": [
      {
        "category": "Wildscape",
        "name": "Encontrado no Wildscape",
        "image": "https://imgur.com/a/RI7U1mv"
      },
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "jolteon",
    "id": 135,
    "name": "Jolteon",
    "types": [
      "Electric"
    ],
    "locations": [
      "Wildscape",
      "Normal"
    ],
    "areas": [
      {
        "category": "Wildscape",
        "name": "Encontrado no Wildscape",
        "image": "https://imgur.com/a/clP3jSD"
      },
      {
        "category": "Normal",
        "name": "Direita de Saffron (\u00faltimo andar)",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "flareon",
    "id": 136,
    "name": "Flareon",
    "types": [
      "Fire"
    ],
    "locations": [
      "Wildscape",
      "Normal"
    ],
    "areas": [
      {
        "category": "Wildscape",
        "name": "Encontrado no Wildscape",
        "image": "https://imgur.com/a/0QTUhoj"
      },
      {
        "category": "Normal",
        "name": "Ilha esquerda de Cinnabar",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "porygon",
    "id": 137,
    "name": "Porygon",
    "types": [
      "Normal"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "omanyte",
    "id": 138,
    "name": "Omanyte",
    "types": [
      "Rock",
      "Water"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Ilha norte de Pewter",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "omastar",
    "id": 139,
    "name": "Omastar",
    "types": [
      "Rock",
      "Water"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Ilha norte de Pewter (Dive)",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "kabuto",
    "id": 140,
    "name": "Kabuto",
    "types": [
      "Rock",
      "Water"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Ilha direita de Lavender",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "kabutops",
    "id": 141,
    "name": "Kabutops",
    "types": [
      "Rock",
      "Water"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Ilha direita de Lavender",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "aerodactyl",
    "id": 142,
    "name": "Aerodactyl",
    "types": [
      "Rock",
      "Flying"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "snorlax",
    "id": 143,
    "name": "Snorlax",
    "types": [
      "Normal"
    ],
    "locations": [
      "Wildscape",
      "Normal",
      "Outland"
    ],
    "areas": [
      {
        "category": "Wildscape",
        "name": "Encontrado no Wildscape",
        "image": "https://imgur.com/a/j21SPSA"
      },
      {
        "category": "Outland",
        "name": "Encontrado na Outland",
        "image": "https://imgur.com/a/whJq4SX"
      },
      {
        "category": "Normal",
        "name": "Esquerda de Cerulean",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "articuno",
    "id": 144,
    "name": "Articuno",
    "types": [
      "Ice",
      "Flying"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "zapdos",
    "id": 145,
    "name": "Zapdos",
    "types": [
      "Electric",
      "Flying"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "moltres",
    "id": 146,
    "name": "Moltres",
    "types": [
      "Fire",
      "Flying"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "dratini",
    "id": 147,
    "name": "Dratini",
    "types": [
      "Dragon"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Ilha de gelo sudeste de Kanto",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "dragonair",
    "id": 148,
    "name": "Dragonair",
    "types": [
      "Dragon"
    ],
    "locations": [
      "Normal",
      "Outland"
    ],
    "areas": [
      {
        "category": "Outland",
        "name": "Encontrado na Outland",
        "image": "https://imgur.com/a/nM1sc6D"
      },
      {
        "category": "Normal",
        "name": "Ilha de gelo sudeste de Kanto",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "dragonite",
    "id": 149,
    "name": "Dragonite",
    "types": [
      "Dragon",
      "Flying"
    ],
    "locations": [
      "Wildscape",
      "Normal"
    ],
    "areas": [
      {
        "category": "Wildscape",
        "name": "Encontrado no Wildscape",
        "image": "https://imgur.com/a/eJHK8SE"
      },
      {
        "category": "Normal",
        "name": "Norte da Wildscape",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "mewtwo",
    "id": 150,
    "name": "Mewtwo",
    "types": [
      "Psychic"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "mew",
    "id": 151,
    "name": "Mew",
    "types": [
      "Psychic"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "chikorita",
    "id": 152,
    "name": "Chikorita",
    "types": [
      "Grass"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Noroeste de Olivine",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "bayleef",
    "id": 153,
    "name": "Bayleef",
    "types": [
      "Grass"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Noroeste de Olivine",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "meganium",
    "id": 154,
    "name": "Meganium",
    "types": [
      "Grass"
    ],
    "locations": [
      "Wildscape",
      "Normal",
      "Outland"
    ],
    "areas": [
      {
        "category": "Wildscape",
        "name": "Encontrado no Wildscape",
        "image": "https://imgur.com/uw0XICj"
      },
      {
        "category": "Outland",
        "name": "Encontrado na Outland",
        "image": "https://imgur.com/a/jPUELsO"
      },
      {
        "category": "Normal",
        "name": "Noroeste de Olivine",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "cyndaquil",
    "id": 155,
    "name": "Cyndaquil",
    "types": [
      "Fire"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "quilava",
    "id": 156,
    "name": "Quilava",
    "types": [
      "Fire"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "typhlosion",
    "id": 157,
    "name": "Typhlosion",
    "types": [
      "Fire"
    ],
    "locations": [
      "Wildscape",
      "Normal",
      "Outland"
    ],
    "areas": [
      {
        "category": "Wildscape",
        "name": "Encontrado no Wildscape",
        "image": "https://imgur.com/a/nmnNuO5"
      },
      {
        "category": "Outland",
        "name": "Encontrado na Outland",
        "image": "https://imgur.com/a/I77ZMiY"
      },
      {
        "category": "Normal",
        "name": "Localiza\u00e7\u00e3o Normal",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "totodile",
    "id": 158,
    "name": "Totodile",
    "types": [
      "Water"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "croconaw",
    "id": 159,
    "name": "Croconaw",
    "types": [
      "Water"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "feraligatr",
    "id": 160,
    "name": "Feraligatr",
    "types": [
      "Water"
    ],
    "locations": [
      "Wildscape",
      "Normal",
      "Outland"
    ],
    "areas": [
      {
        "category": "Wildscape",
        "name": "Encontrado no Wildscape",
        "image": "https://imgur.com/a/H98mIzg"
      },
      {
        "category": "Outland",
        "name": "Encontrado na Outland",
        "image": "https://imgur.com/a/M50ZSem"
      },
      {
        "category": "Normal",
        "name": "Ilha sudeste de Azalea",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "sentret",
    "id": 161,
    "name": "Sentret",
    "types": [
      "Normal"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Sul de Violet",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "furret",
    "id": 162,
    "name": "Furret",
    "types": [
      "Normal"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Sul de Violet",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "hoothoot",
    "id": 163,
    "name": "Hoothoot",
    "types": [
      "Normal",
      "Flying"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "noctowl",
    "id": 164,
    "name": "Noctowl",
    "types": [
      "Normal",
      "Flying"
    ],
    "locations": [
      "Outland"
    ],
    "areas": [
      {
        "category": "Outland",
        "name": "Encontrado na Outland",
        "image": "https://imgur.com/a/oeFCJAc"
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "ledyba",
    "id": 165,
    "name": "Ledyba",
    "types": [
      "Bug",
      "Flying"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Esquerda de Ecruteak",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "ledian",
    "id": 166,
    "name": "Ledian",
    "types": [
      "Bug",
      "Flying"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Esquerda de Ecruteak",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "spinarak",
    "id": 167,
    "name": "Spinarak",
    "types": [
      "Bug",
      "Poison"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Norte de Olivine",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "ariados",
    "id": 168,
    "name": "Ariados",
    "types": [
      "Bug",
      "Poison"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Norte de Olivine",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "crobat",
    "id": 169,
    "name": "Crobat",
    "types": [
      "Poison",
      "Flying"
    ],
    "locations": [
      "Normal",
      "Outland"
    ],
    "areas": [
      {
        "category": "Outland",
        "name": "Encontrado na Outland",
        "image": "https://imgur.com/a/qxs31P4"
      },
      {
        "category": "Normal",
        "name": "Localiza\u00e7\u00e3o Normal",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "chinchou",
    "id": 170,
    "name": "Chinchou",
    "types": [
      "Water",
      "Electric"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "lanturn",
    "id": 171,
    "name": "Lanturn",
    "types": [
      "Water",
      "Electric"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "pichu",
    "id": 172,
    "name": "Pichu",
    "types": [
      "Electric"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Direita de Ecruteak",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "cleffa",
    "id": 173,
    "name": "Cleffa",
    "types": [
      "Fairy"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Ilha direita de Fuchsia",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "igglybuff",
    "id": 174,
    "name": "Igglybuff",
    "types": [
      "Normal",
      "Fairy"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Ilha direita de Fuchsia",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "togepi",
    "id": 175,
    "name": "Togepi",
    "types": [
      "Fairy"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "togetic",
    "id": 176,
    "name": "Togetic",
    "types": [
      "Fairy",
      "Flying"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "natu",
    "id": 177,
    "name": "Natu",
    "types": [
      "Psychic",
      "Flying"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Ilha norte de Ecruteak",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "xatu",
    "id": 178,
    "name": "Xatu",
    "types": [
      "Psychic",
      "Flying"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Ilha norte de Ecruteak",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "mareep",
    "id": 179,
    "name": "Mareep",
    "types": [
      "Electric"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Norte de Olivine",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "flaaffy",
    "id": 180,
    "name": "Flaaffy",
    "types": [
      "Electric"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Norte de Olivine",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "ampharos",
    "id": 181,
    "name": "Ampharos",
    "types": [
      "Electric"
    ],
    "locations": [
      "Wildscape",
      "Normal",
      "Outland"
    ],
    "areas": [
      {
        "category": "Wildscape",
        "name": "Encontrado no Wildscape",
        "image": "https://imgur.com/a/O7GKc00"
      },
      {
        "category": "Outland",
        "name": "Encontrado na Outland",
        "image": "https://imgur.com/a/mXWBecs"
      },
      {
        "category": "Normal",
        "name": "Norte de Olivine",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "bellossom",
    "id": 182,
    "name": "Bellossom",
    "types": [
      "Grass"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Nordeste de Olivine",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "marill",
    "id": 183,
    "name": "Marill",
    "types": [
      "Water",
      "Fairy"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "azumarill",
    "id": 184,
    "name": "Azumarill",
    "types": [
      "Water",
      "Fairy"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "sudowoodo",
    "id": 185,
    "name": "Sudowoodo",
    "types": [
      "Rock"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "politoed",
    "id": 186,
    "name": "Politoed",
    "types": [
      "Water"
    ],
    "locations": [
      "Wildscape",
      "Normal"
    ],
    "areas": [
      {
        "category": "Wildscape",
        "name": "Encontrado no Wildscape",
        "image": "https://imgur.com/a/zMl0ekj"
      },
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "hoppip",
    "id": 187,
    "name": "Hoppip",
    "types": [
      "Grass",
      "Flying"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Esquerda de Cianwood",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "skiploom",
    "id": 188,
    "name": "Skiploom",
    "types": [
      "Grass",
      "Flying"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Esquerda de Cianwood",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "jumpluff",
    "id": 189,
    "name": "Jumpluff",
    "types": [
      "Grass",
      "Flying"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Norte de Olivine",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "aipom",
    "id": 190,
    "name": "Aipom",
    "types": [
      "Normal"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Direita de Mahogany",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "sunkern",
    "id": 191,
    "name": "Sunkern",
    "types": [
      "Grass"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Nordeste de Olivine",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "sunflora",
    "id": 192,
    "name": "Sunflora",
    "types": [
      "Grass"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "yanma",
    "id": 193,
    "name": "Yanma",
    "types": [
      "Bug",
      "Flying"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "wooper",
    "id": 194,
    "name": "Wooper",
    "types": [
      "Water",
      "Ground"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Ilha noroeste de Johto",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "quagsire",
    "id": 195,
    "name": "Quagsire",
    "types": [
      "Water",
      "Ground"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Ilha noroeste de Johto",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "espeon",
    "id": 196,
    "name": "Espeon",
    "types": [
      "Psychic"
    ],
    "locations": [
      "Wildscape",
      "Normal"
    ],
    "areas": [
      {
        "category": "Wildscape",
        "name": "Encontrado no Wildscape",
        "image": "https://imgur.com/a/CkBSqXN"
      },
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "umbreon",
    "id": 197,
    "name": "Umbreon",
    "types": [
      "Dark"
    ],
    "locations": [
      "Wildscape",
      "Normal"
    ],
    "areas": [
      {
        "category": "Wildscape",
        "name": "Encontrado no Wildscape",
        "image": "https://imgur.com/a/CkBSqXN"
      },
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "murkrow",
    "id": 198,
    "name": "Murkrow",
    "types": [
      "Dark",
      "Flying"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "slowking",
    "id": 199,
    "name": "Slowking",
    "types": [
      "Water",
      "Psychic"
    ],
    "locations": [
      "Wildscape",
      "Normal"
    ],
    "areas": [
      {
        "category": "Wildscape",
        "name": "Encontrado no Wildscape",
        "image": "https://imgur.com/a/XUZFbv9"
      },
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "misdreavus",
    "id": 200,
    "name": "Misdreavus",
    "types": [
      "Ghost"
    ],
    "locations": [
      "Wildscape",
      "Normal",
      "Outland"
    ],
    "areas": [
      {
        "category": "Wildscape",
        "name": "Encontrado no Wildscape",
        "image": "https://imgur.com/a/xfYPzTw"
      },
      {
        "category": "Outland",
        "name": "Encontrado na Outland",
        "image": "https://imgur.com/a/TfsoS7G"
      },
      {
        "category": "Normal",
        "name": "Perto da hunt de Golduck",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "unown",
    "id": 201,
    "name": "Unown",
    "types": [
      "Psychic"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "wobbuffet",
    "id": 202,
    "name": "Wobbuffet",
    "types": [
      "Psychic"
    ],
    "locations": [
      "Wildscape",
      "Normal"
    ],
    "areas": [
      {
        "category": "Wildscape",
        "name": "Encontrado no Wildscape",
        "image": "https://imgur.com/a/ZlGOsvk"
      },
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "girafarig",
    "id": 203,
    "name": "Girafarig",
    "types": [
      "Normal",
      "Psychic"
    ],
    "locations": [
      "Normal",
      "Outland"
    ],
    "areas": [
      {
        "category": "Outland",
        "name": "Encontrado na Outland",
        "image": "https://imgur.com/a/gkFxbhB"
      },
      {
        "category": "Normal",
        "name": "Localiza\u00e7\u00e3o Normal",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "pineco",
    "id": 204,
    "name": "Pineco",
    "types": [
      "Bug"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "forretress",
    "id": 205,
    "name": "Forretress",
    "types": [
      "Bug",
      "Steel"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Escada nas docas entre Azalea e Cherrygrove",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "dunsparce",
    "id": 206,
    "name": "Dunsparce",
    "types": [
      "Normal"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Direita de Mahogany",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "gligar",
    "id": 207,
    "name": "Gligar",
    "types": [
      "Ground",
      "Flying"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Norte de New Bark",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "steelix",
    "id": 208,
    "name": "Steelix",
    "types": [
      "Steel",
      "Ground"
    ],
    "locations": [
      "Wildscape",
      "Normal",
      "Outland"
    ],
    "areas": [
      {
        "category": "Wildscape",
        "name": "Encontrado no Wildscape",
        "image": "https://imgur.com/a/GWp5vC7"
      },
      {
        "category": "Outland",
        "name": "Encontrado na Outland",
        "image": "https://imgur.com/a/TlMsshv"
      },
      {
        "category": "Normal",
        "name": "Localiza\u00e7\u00e3o Normal",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "snubbull",
    "id": 209,
    "name": "Snubbull",
    "types": [
      "Fairy"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Ilha direita de Fuchsia",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "granbull",
    "id": 210,
    "name": "Granbull",
    "types": [
      "Fairy"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Norte de Olivine",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "qwilfish",
    "id": 211,
    "name": "Qwilfish",
    "types": [
      "Water",
      "Poison"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "scizor",
    "id": 212,
    "name": "Scizor",
    "types": [
      "Bug",
      "Steel"
    ],
    "locations": [
      "Wildscape",
      "Outland"
    ],
    "areas": [
      {
        "category": "Wildscape",
        "name": "Encontrado no Wildscape",
        "image": "https://imgur.com/a/TXJL5sM"
      },
      {
        "category": "Outland",
        "name": "Encontrado na Outland",
        "image": "https://imgur.com/a/jWTIE98"
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "shuckle",
    "id": 213,
    "name": "Shuckle",
    "types": [
      "Bug",
      "Rock"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "heracross",
    "id": 214,
    "name": "Heracross",
    "types": [
      "Bug",
      "Fighting"
    ],
    "locations": [
      "Normal",
      "Outland"
    ],
    "areas": [
      {
        "category": "Outland",
        "name": "Encontrado na Outland",
        "image": "https://imgur.com/a/1Z7SzRF"
      },
      {
        "category": "Normal",
        "name": "Localiza\u00e7\u00e3o Normal",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "sneasel",
    "id": 215,
    "name": "Sneasel",
    "types": [
      "Dark",
      "Ice"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Andando Norte do CP de Mahogany",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "teddiursa",
    "id": 216,
    "name": "Teddiursa",
    "types": [
      "Normal"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "ursaring",
    "id": 217,
    "name": "Ursaring",
    "types": [
      "Normal"
    ],
    "locations": [
      "Wildscape",
      "Normal",
      "Outland"
    ],
    "areas": [
      {
        "category": "Wildscape",
        "name": "Encontrado no Wildscape",
        "image": "https://imgur.com/a/nBXkwSw"
      },
      {
        "category": "Outland",
        "name": "Encontrado na Outland",
        "image": "https://imgur.com/a/MTHoCGM"
      },
      {
        "category": "Normal",
        "name": "Localiza\u00e7\u00e3o Normal",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "slugma",
    "id": 218,
    "name": "Slugma",
    "types": [
      "Fire"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "magcargo",
    "id": 219,
    "name": "Magcargo",
    "types": [
      "Fire",
      "Rock"
    ],
    "locations": [
      "Wildscape",
      "Normal"
    ],
    "areas": [
      {
        "category": "Wildscape",
        "name": "Encontrado no Wildscape",
        "image": "https://imgur.com/a/PjJgh5m"
      },
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "swinub",
    "id": 220,
    "name": "Swinub",
    "types": [
      "Ice",
      "Ground"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Andando Norte do CP de Blackthorn",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "piloswine",
    "id": 221,
    "name": "Piloswine",
    "types": [
      "Ice",
      "Ground"
    ],
    "locations": [
      "Normal",
      "Outland"
    ],
    "areas": [
      {
        "category": "Outland",
        "name": "Encontrado na Outland",
        "image": "https://imgur.com/a/jBqXy08"
      },
      {
        "category": "Normal",
        "name": "Localiza\u00e7\u00e3o Normal",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "corsola",
    "id": 222,
    "name": "Corsola",
    "types": [
      "Water",
      "Rock"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "remoraid",
    "id": 223,
    "name": "Remoraid",
    "types": [
      "Water"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "octillery",
    "id": 224,
    "name": "Octillery",
    "types": [
      "Water"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "delibird",
    "id": 225,
    "name": "Delibird",
    "types": [
      "Ice",
      "Flying"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Andando Norte do CP de Blackthorn",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "mantine",
    "id": 226,
    "name": "Mantine",
    "types": [
      "Water",
      "Flying"
    ],
    "locations": [
      "Wildscape",
      "Normal",
      "Outland"
    ],
    "areas": [
      {
        "category": "Wildscape",
        "name": "Encontrado no Wildscape",
        "image": "https://imgur.com/a/H98mIzg"
      },
      {
        "category": "Outland",
        "name": "Encontrado na Outland",
        "image": "https://imgur.com/a/OPk6UXZ"
      },
      {
        "category": "Normal",
        "name": "Localiza\u00e7\u00e3o Normal",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "skarmory",
    "id": 227,
    "name": "Skarmory",
    "types": [
      "Steel",
      "Flying"
    ],
    "locations": [
      "Wildscape",
      "Normal",
      "Outland"
    ],
    "areas": [
      {
        "category": "Wildscape",
        "name": "Encontrado no Wildscape",
        "image": "https://imgur.com/a/otQbKEE"
      },
      {
        "category": "Outland",
        "name": "Encontrado na Outland",
        "image": "https://imgur.com/a/oeFCJAc"
      },
      {
        "category": "Normal",
        "name": "Norte de New Bark",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "houndour",
    "id": 228,
    "name": "Houndour",
    "types": [
      "Dark",
      "Fire"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "houndoom",
    "id": 229,
    "name": "Houndoom",
    "types": [
      "Dark",
      "Fire"
    ],
    "locations": [
      "Wildscape",
      "Normal",
      "Outland"
    ],
    "areas": [
      {
        "category": "Wildscape",
        "name": "Encontrado no Wildscape",
        "image": "https://imgur.com/a/kUQvKbL"
      },
      {
        "category": "Outland",
        "name": "Encontrado na Outland",
        "image": "https://imgur.com/a/dLbWKyS"
      },
      {
        "category": "Normal",
        "name": "Localiza\u00e7\u00e3o Normal",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "kingdra",
    "id": 230,
    "name": "Kingdra",
    "types": [
      "Water",
      "Dragon"
    ],
    "locations": [
      "Wildscape",
      "Normal"
    ],
    "areas": [
      {
        "category": "Wildscape",
        "name": "Encontrado no Wildscape",
        "image": "https://imgur.com/a/W6HZl3X"
      },
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "phanpy",
    "id": 231,
    "name": "Phanpy",
    "types": [
      "Ground"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Esquerda de Cianwood",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "donphan",
    "id": 232,
    "name": "Donphan",
    "types": [
      "Ground"
    ],
    "locations": [
      "Normal",
      "Outland"
    ],
    "areas": [
      {
        "category": "Outland",
        "name": "Encontrado na Outland",
        "image": "https://imgur.com/a/MXqzD2I"
      },
      {
        "category": "Normal",
        "name": "Esquerda de Cianwood",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "stantler",
    "id": 234,
    "name": "Stantler",
    "types": [
      "Normal"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Norte de Olivine",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "smeargle",
    "id": 235,
    "name": "Smeargle",
    "types": [
      "Normal"
    ],
    "locations": [
      "Wildscape",
      "Normal"
    ],
    "areas": [
      {
        "category": "Wildscape",
        "name": "Encontrado no Wildscape",
        "image": "https://imgur.com/a/vlWgMyH"
      },
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "tyrogue",
    "id": 236,
    "name": "Tyrogue",
    "types": [
      "Fighting"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Sul de Cherrygrove",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "hitmontop",
    "id": 237,
    "name": "Hitmontop",
    "types": [
      "Fighting"
    ],
    "locations": [
      "Wildscape",
      "Normal",
      "Outland"
    ],
    "areas": [
      {
        "category": "Wildscape",
        "name": "Encontrado no Wildscape",
        "image": "https://imgur.com/a/30cn4iq"
      },
      {
        "category": "Outland",
        "name": "Encontrado na Outland",
        "image": "https://imgur.com/a/xEndETT"
      },
      {
        "category": "Normal",
        "name": "Sul de Cherrygrove",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "smoochum",
    "id": 238,
    "name": "Smoochum",
    "types": [
      "Ice",
      "Psychic"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Ilha de gelo sudeste de Kanto",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "elekid",
    "id": 239,
    "name": "Elekid",
    "types": [
      "Electric"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "Direita de Ecruteak",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "magby",
    "id": 240,
    "name": "Magby",
    "types": [
      "Fire"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "miltank",
    "id": 241,
    "name": "Miltank",
    "types": [
      "Normal"
    ],
    "locations": [
      "Normal",
      "Outland"
    ],
    "areas": [
      {
        "category": "Outland",
        "name": "Encontrado na Outland",
        "image": "https://imgur.com/a/yFnbi79"
      },
      {
        "category": "Normal",
        "name": "Localiza\u00e7\u00e3o Normal",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "blissey",
    "id": 242,
    "name": "Blissey",
    "types": [
      "Normal"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "raikou",
    "id": 243,
    "name": "Raikou",
    "types": [
      "Electric"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "entei",
    "id": 244,
    "name": "Entei",
    "types": [
      "Fire"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "suicune",
    "id": 245,
    "name": "Suicune",
    "types": [
      "Water"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "larvitar",
    "id": 246,
    "name": "Larvitar",
    "types": [
      "Rock",
      "Ground"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "pupitar",
    "id": 247,
    "name": "Pupitar",
    "types": [
      "Rock",
      "Ground"
    ],
    "locations": [
      "Wildscape",
      "Normal"
    ],
    "areas": [
      {
        "category": "Wildscape",
        "name": "Encontrado no Wildscape",
        "image": "https://imgur.com/a/SJntAUa"
      },
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "tyranitar",
    "id": 248,
    "name": "Tyranitar",
    "types": [
      "Rock",
      "Dark"
    ],
    "locations": [
      "Wildscape",
      "Outland"
    ],
    "areas": [
      {
        "category": "Wildscape",
        "name": "Encontrado no Wildscape",
        "image": "https://imgur.com/a/oEyaCY3"
      },
      {
        "category": "Outland",
        "name": "Encontrado na Outland",
        "image": "https://imgur.com/a/TlMsshv"
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "lugia",
    "id": 249,
    "name": "Lugia",
    "types": [
      "Psychic",
      "Flying"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "ho-oh",
    "id": 250,
    "name": "Ho-oh",
    "types": [
      "Fire",
      "Flying"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "celebi",
    "id": 251,
    "name": "Celebi",
    "types": [
      "Psychic",
      "Grass"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "treecko",
    "id": 252,
    "name": "Treecko",
    "types": [
      "Grass"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "grovyle",
    "id": 253,
    "name": "Grovyle",
    "types": [
      "Grass"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "sceptile",
    "id": 254,
    "name": "Sceptile",
    "types": [
      "Grass"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "torchic",
    "id": 255,
    "name": "Torchic",
    "types": [
      "Fire"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "combusken",
    "id": 256,
    "name": "Combusken",
    "types": [
      "Fire",
      "Fighting"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "blaziken",
    "id": 257,
    "name": "Blaziken",
    "types": [
      "Fire",
      "Fighting"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "mudkip",
    "id": 258,
    "name": "Mudkip",
    "types": [
      "Water"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "marshtomp",
    "id": 259,
    "name": "Marshtomp",
    "types": [
      "Water",
      "Ground"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "swampert",
    "id": 260,
    "name": "Swampert",
    "types": [
      "Water",
      "Ground"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "poochyena",
    "id": 261,
    "name": "Poochyena",
    "types": [
      "Dark"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "mightyena",
    "id": 262,
    "name": "Mightyena",
    "types": [
      "Dark"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "zigzagoon",
    "id": 263,
    "name": "Zigzagoon",
    "types": [
      "Normal"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "linoone",
    "id": 264,
    "name": "Linoone",
    "types": [
      "Normal"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "wurmple",
    "id": 265,
    "name": "Wurmple",
    "types": [
      "Bug"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "silcoon",
    "id": 266,
    "name": "Silcoon",
    "types": [
      "Bug"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "beautifly",
    "id": 267,
    "name": "Beautifly",
    "types": [
      "Bug",
      "Flying"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "cascoon",
    "id": 268,
    "name": "Cascoon",
    "types": [
      "Bug"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "dustox",
    "id": 269,
    "name": "Dustox",
    "types": [
      "Bug",
      "Poison"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "lotad",
    "id": 270,
    "name": "Lotad",
    "types": [
      "Water",
      "Grass"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "lombre",
    "id": 271,
    "name": "Lombre",
    "types": [
      "Water",
      "Grass"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "ludicolo",
    "id": 272,
    "name": "Ludicolo",
    "types": [
      "Water",
      "Grass"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "seedot",
    "id": 273,
    "name": "Seedot",
    "types": [
      "Grass"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "nuzleaf",
    "id": 274,
    "name": "Nuzleaf",
    "types": [
      "Grass",
      "Dark"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "shiftry",
    "id": 275,
    "name": "Shiftry",
    "types": [
      "Grass",
      "Dark"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "taillow",
    "id": 276,
    "name": "Taillow",
    "types": [
      "Normal",
      "Flying"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "swellow",
    "id": 277,
    "name": "Swellow",
    "types": [
      "Normal",
      "Flying"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "wingull",
    "id": 278,
    "name": "Wingull",
    "types": [
      "Water",
      "Flying"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "pelipper",
    "id": 279,
    "name": "Pelipper",
    "types": [
      "Water",
      "Flying"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "ralts",
    "id": 280,
    "name": "Ralts",
    "types": [
      "Psychic",
      "Fairy"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "kirlia",
    "id": 281,
    "name": "Kirlia",
    "types": [
      "Psychic",
      "Fairy"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "gardevoir",
    "id": 282,
    "name": "Gardevoir",
    "types": [
      "Psychic",
      "Fairy"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "surskit",
    "id": 283,
    "name": "Surskit",
    "types": [
      "Bug",
      "Water"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "masquerain",
    "id": 284,
    "name": "Masquerain",
    "types": [
      "Bug",
      "Flying"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "shroomish",
    "id": 285,
    "name": "Shroomish",
    "types": [
      "Grass"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "breloom",
    "id": 286,
    "name": "Breloom",
    "types": [
      "Grass",
      "Fighting"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "slakoth",
    "id": 287,
    "name": "Slakoth",
    "types": [
      "Normal"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "vigoroth",
    "id": 288,
    "name": "Vigoroth",
    "types": [
      "Normal"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "slaking",
    "id": 289,
    "name": "Slaking",
    "types": [
      "Normal"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "nincada",
    "id": 290,
    "name": "Nincada",
    "types": [
      "Bug",
      "Ground"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "ninjask",
    "id": 291,
    "name": "Ninjask",
    "types": [
      "Bug",
      "Flying"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "shedinja",
    "id": 292,
    "name": "Shedinja",
    "types": [
      "Bug",
      "Ghost"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "whismur",
    "id": 293,
    "name": "Whismur",
    "types": [
      "Normal"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "loudred",
    "id": 294,
    "name": "Loudred",
    "types": [
      "Normal"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "exploud",
    "id": 295,
    "name": "Exploud",
    "types": [
      "Normal"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "makuhita",
    "id": 296,
    "name": "Makuhita",
    "types": [
      "Fighting"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "hariyama",
    "id": 297,
    "name": "Hariyama",
    "types": [
      "Fighting"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "azurill",
    "id": 298,
    "name": "Azurill",
    "types": [
      "Normal",
      "Fairy"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "nosepass",
    "id": 299,
    "name": "Nosepass",
    "types": [
      "Rock"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "skitty",
    "id": 300,
    "name": "Skitty",
    "types": [
      "Normal"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "delcatty",
    "id": 301,
    "name": "Delcatty",
    "types": [
      "Normal"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "sableye",
    "id": 302,
    "name": "Sableye",
    "types": [
      "Dark",
      "Ghost"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "mawile",
    "id": 303,
    "name": "Mawile",
    "types": [
      "Steel",
      "Fairy"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "aron",
    "id": 304,
    "name": "Aron",
    "types": [
      "Steel",
      "Rock"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "lairon",
    "id": 305,
    "name": "Lairon",
    "types": [
      "Steel",
      "Rock"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "aggron",
    "id": 306,
    "name": "Aggron",
    "types": [
      "Steel",
      "Rock"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "meditite",
    "id": 307,
    "name": "Meditite",
    "types": [
      "Fighting",
      "Psychic"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "medicham",
    "id": 308,
    "name": "Medicham",
    "types": [
      "Fighting",
      "Psychic"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "electrike",
    "id": 309,
    "name": "Electrike",
    "types": [
      "Electric"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "manectric",
    "id": 310,
    "name": "Manectric",
    "types": [
      "Electric"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "plusle",
    "id": 311,
    "name": "Plusle",
    "types": [
      "Electric"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "minun",
    "id": 312,
    "name": "Minun",
    "types": [
      "Electric"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "volbeat",
    "id": 313,
    "name": "Volbeat",
    "types": [
      "Bug"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "illumise",
    "id": 314,
    "name": "Illumise",
    "types": [
      "Bug"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "roselia",
    "id": 315,
    "name": "Roselia",
    "types": [
      "Grass",
      "Poison"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "gulpin",
    "id": 316,
    "name": "Gulpin",
    "types": [
      "Poison"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "swalot",
    "id": 317,
    "name": "Swalot",
    "types": [
      "Poison"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "carvanha",
    "id": 318,
    "name": "Carvanha",
    "types": [
      "Water",
      "Dark"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "sharpedo",
    "id": 319,
    "name": "Sharpedo",
    "types": [
      "Water",
      "Dark"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "wailmer",
    "id": 320,
    "name": "Wailmer",
    "types": [
      "Water"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "wailord",
    "id": 321,
    "name": "Wailord",
    "types": [
      "Water"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "numel",
    "id": 322,
    "name": "Numel",
    "types": [
      "Fire",
      "Ground"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "camerupt",
    "id": 323,
    "name": "Camerupt",
    "types": [
      "Fire",
      "Ground"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "torkoal",
    "id": 324,
    "name": "Torkoal",
    "types": [
      "Fire"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "spoink",
    "id": 325,
    "name": "Spoink",
    "types": [
      "Psychic"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "grumpig",
    "id": 326,
    "name": "Grumpig",
    "types": [
      "Psychic"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "spinda",
    "id": 327,
    "name": "Spinda",
    "types": [
      "Normal"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "trapinch",
    "id": 328,
    "name": "Trapinch",
    "types": [
      "Ground"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "vibrava",
    "id": 329,
    "name": "Vibrava",
    "types": [
      "Ground",
      "Dragon"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "flygon",
    "id": 330,
    "name": "Flygon",
    "types": [
      "Ground",
      "Dragon"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "cacnea",
    "id": 331,
    "name": "Cacnea",
    "types": [
      "Grass"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "cacturne",
    "id": 332,
    "name": "Cacturne",
    "types": [
      "Grass",
      "Dark"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "swablu",
    "id": 333,
    "name": "Swablu",
    "types": [
      "Normal",
      "Flying"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "altaria",
    "id": 334,
    "name": "Altaria",
    "types": [
      "Dragon",
      "Flying"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "zangoose",
    "id": 335,
    "name": "Zangoose",
    "types": [
      "Normal"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "seviper",
    "id": 336,
    "name": "Seviper",
    "types": [
      "Poison"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "lunatone",
    "id": 337,
    "name": "Lunatone",
    "types": [
      "Rock",
      "Psychic"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "solrock",
    "id": 338,
    "name": "Solrock",
    "types": [
      "Rock",
      "Psychic"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "barboach",
    "id": 339,
    "name": "Barboach",
    "types": [
      "Water",
      "Ground"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "whiscash",
    "id": 340,
    "name": "Whiscash",
    "types": [
      "Water",
      "Ground"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "corphish",
    "id": 341,
    "name": "Corphish",
    "types": [
      "Water"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "crawdaunt",
    "id": 342,
    "name": "Crawdaunt",
    "types": [
      "Water",
      "Dark"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "baltoy",
    "id": 343,
    "name": "Baltoy",
    "types": [
      "Ground",
      "Psychic"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "claydol",
    "id": 344,
    "name": "Claydol",
    "types": [
      "Ground",
      "Psychic"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "lileep",
    "id": 345,
    "name": "Lileep",
    "types": [
      "Rock",
      "Grass"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "cradily",
    "id": 346,
    "name": "Cradily",
    "types": [
      "Rock",
      "Grass"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "anorith",
    "id": 347,
    "name": "Anorith",
    "types": [
      "Rock",
      "Bug"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "armaldo",
    "id": 348,
    "name": "Armaldo",
    "types": [
      "Rock",
      "Bug"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "feebas",
    "id": 349,
    "name": "Feebas",
    "types": [
      "Water"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "milotic",
    "id": 350,
    "name": "Milotic",
    "types": [
      "Water"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "castform",
    "id": 351,
    "name": "Castform",
    "types": [
      "Normal"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "kecleon",
    "id": 352,
    "name": "Kecleon",
    "types": [
      "Normal"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "shuppet",
    "id": 353,
    "name": "Shuppet",
    "types": [
      "Ghost"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "banette",
    "id": 354,
    "name": "Banette",
    "types": [
      "Ghost"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "duskull",
    "id": 355,
    "name": "Duskull",
    "types": [
      "Ghost"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "dusclops",
    "id": 356,
    "name": "Dusclops",
    "types": [
      "Ghost"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "tropius",
    "id": 357,
    "name": "Tropius",
    "types": [
      "Grass",
      "Flying"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "chimecho",
    "id": 358,
    "name": "Chimecho",
    "types": [
      "Psychic"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "absol",
    "id": 359,
    "name": "Absol",
    "types": [
      "Dark"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "wynaut",
    "id": 360,
    "name": "Wynaut",
    "types": [
      "Psychic"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "snorunt",
    "id": 361,
    "name": "Snorunt",
    "types": [
      "Ice"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "glalie",
    "id": 362,
    "name": "Glalie",
    "types": [
      "Ice"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "spheal",
    "id": 363,
    "name": "Spheal",
    "types": [
      "Ice",
      "Water"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "sealeo",
    "id": 364,
    "name": "Sealeo",
    "types": [
      "Ice",
      "Water"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "walrein",
    "id": 365,
    "name": "Walrein",
    "types": [
      "Ice",
      "Water"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "clamperl",
    "id": 366,
    "name": "Clamperl",
    "types": [
      "Water"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "huntail",
    "id": 367,
    "name": "Huntail",
    "types": [
      "Water"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "gorebyss",
    "id": 368,
    "name": "Gorebyss",
    "types": [
      "Water"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "relicanth",
    "id": 369,
    "name": "Relicanth",
    "types": [
      "Water",
      "Rock"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "luvdisc",
    "id": 370,
    "name": "Luvdisc",
    "types": [
      "Water"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "bagon",
    "id": 371,
    "name": "Bagon",
    "types": [
      "Dragon"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "shelgon",
    "id": 372,
    "name": "Shelgon",
    "types": [
      "Dragon"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "salamence",
    "id": 373,
    "name": "Salamence",
    "types": [
      "Dragon",
      "Flying"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "beldum",
    "id": 374,
    "name": "Beldum",
    "types": [
      "Steel",
      "Psychic"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "metang",
    "id": 375,
    "name": "Metang",
    "types": [
      "Steel",
      "Psychic"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "metagross",
    "id": 376,
    "name": "Metagross",
    "types": [
      "Steel",
      "Psychic"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "regirock",
    "id": 377,
    "name": "Regirock",
    "types": [
      "Rock"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "regice",
    "id": 378,
    "name": "Regice",
    "types": [
      "Ice"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "registeel",
    "id": 379,
    "name": "Registeel",
    "types": [
      "Steel"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "latias",
    "id": 380,
    "name": "Latias",
    "types": [
      "Dragon",
      "Psychic"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "latios",
    "id": 381,
    "name": "Latios",
    "types": [
      "Dragon",
      "Psychic"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "kyogre",
    "id": 382,
    "name": "Kyogre",
    "types": [
      "Water"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "groudon",
    "id": 383,
    "name": "Groudon",
    "types": [
      "Ground"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "rayquaza",
    "id": 384,
    "name": "Rayquaza",
    "types": [
      "Dragon",
      "Flying"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "jirachi",
    "id": 385,
    "name": "Jirachi",
    "types": [
      "Steel",
      "Psychic"
    ],
    "locations": [
      "Normal"
    ],
    "areas": [
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "toxicroak",
    "id": 454,
    "name": "Toxicroak",
    "types": [
      "Poison",
      "Fighting"
    ],
    "locations": [
      "Wildscape",
      "Normal"
    ],
    "areas": [
      {
        "category": "Wildscape",
        "name": "Encontrado no Wildscape",
        "image": "https://imgur.com/a/voSoRee"
      },
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  },
  {
    "slug": "florges",
    "id": 671,
    "name": "Florges",
    "types": [
      "Fairy"
    ],
    "locations": [
      "Wildscape",
      "Normal"
    ],
    "areas": [
      {
        "category": "Wildscape",
        "name": "Encontrado no Wildscape",
        "image": "https://imgur.com/a/dHnsWqn"
      },
      {
        "category": "Normal",
        "name": "-",
        "image": null
      }
    ],
    "drops": [
      "TBD"
    ],
    "evolutions": []
  }
];

const TALENTS_DATA = [
  {
    "category": "Personagem",
    "id": 1,
    "buff": "CRIT: +1% chance para todos os Pokémon.",
    "requirements": [
      {
        "item": "Fighter Hawk",
        "source": "Machop",
        "quantity": "25"
      },
      {
        "item": "Rock Fist",
        "source": "Geodude",
        "quantity": "25"
      }
    ]
  },
  {
    "category": "Personagem",
    "id": 2,
    "buff": "COOLDOWN: -1s na bag.",
    "requirements": [
      {
        "item": "Bear Claw",
        "source": "Ursaring",
        "quantity": "1500"
      },
      {
        "item": "Cow Tail",
        "source": "Miltank",
        "quantity": "1100"
      },
      {
        "item": "Snorlax Paw",
        "source": "Snorlax",
        "quantity": "1500"
      }
    ]
  },
  {
    "category": "Personagem",
    "id": 3,
    "buff": "COOLDOWN: -1s na bag.",
    "requirements": [
      {
        "item": "Volcano Badge",
        "source": "Cinnabar Gym",
        "quantity": "1"
      },
      {
        "item": "Fire Wing",
        "source": "Charizard",
        "quantity": "1500"
      },
      {
        "item": "Magma Foot",
        "source": "Magmar",
        "quantity": "1500"
      },
      {
        "item": "Giant Piece of Fur",
        "source": "Arcanine",
        "quantity": "1100"
      },
      {
        "item": "Magma Shell",
        "source": "Magcargo",
        "quantity": "900"
      },
      {
        "item": "Fire Stone",
        "source": "Drops",
        "quantity": "1000"
      }
    ]
  },
  {
    "category": "Personagem",
    "id": 4,
    "buff": "COOLDOWN: -1s na bag.",
    "requirements": [
      {
        "item": "Boulder Badge",
        "source": "Pewter Gym",
        "quantity": "1"
      },
      {
        "item": "Stone Rocks",
        "source": "Golem",
        "quantity": "1500"
      },
      {
        "item": "Horn Drill",
        "source": "Rhydon",
        "quantity": "1500"
      },
      {
        "item": "Bone",
        "source": "Marowak",
        "quantity": "1100"
      },
      {
        "item": "Steelix Tail",
        "source": "Steelix",
        "quantity": "900"
      },
      {
        "item": "Rock Stone",
        "source": "Drops",
        "quantity": "500"
      },
      {
        "item": "Earth Stone",
        "source": "Drops",
        "quantity": "500"
      }
    ]
  },
  {
    "category": "Personagem",
    "id": 5,
    "buff": "COOLDOWN: -1s na bag.",
    "requirements": [
      {
        "item": "Cascade Badge",
        "source": "Cerulean Gym",
        "quantity": "1"
      },
      {
        "item": "Lapras Fin",
        "source": "Lapras",
        "quantity": "900"
      },
      {
        "item": "Gyarados Tail",
        "source": "Gyarados",
        "quantity": "1500"
      },
      {
        "item": "Aquatic Tail",
        "source": "Vaporeon",
        "quantity": "1100"
      },
      {
        "item": "Water Cannon",
        "source": "Blastoise",
        "quantity": "1500"
      },
      {
        "item": "Water Stone",
        "source": "Drops",
        "quantity": "500"
      },
      {
        "item": "Ice Stone",
        "source": "Drops",
        "quantity": "500"
      }
    ]
  },
  {
    "category": "Personagem",
    "id": 6,
    "buff": "COOLDOWN: -1s na bag.",
    "requirements": [
      {
        "item": "Thunder Badge",
        "source": "Vermilion Gym",
        "quantity": "1"
      },
      {
        "item": "Electric Sheep Tail",
        "source": "Ampharos",
        "quantity": "1100"
      },
      {
        "item": "Electric Tail",
        "source": "Electabuzz",
        "quantity": "1500"
      },
      {
        "item": "Electric Ear",
        "source": "Raichu",
        "quantity": "1500"
      },
      {
        "item": "Electric Collar",
        "source": "Jolteon",
        "quantity": "900"
      },
      {
        "item": "Thunder Stone",
        "source": "Drops",
        "quantity": "1000"
      }
    ]
  },
  {
    "category": "Personagem",
    "id": 7,
    "buff": "COOLDOWN: -1s na bag.",
    "requirements": [
      {
        "item": "Rainbow Badge",
        "source": "Celadon Gym",
        "quantity": "1"
      },
      {
        "item": "Red Petal",
        "source": "Venusaur",
        "quantity": "1500"
      },
      {
        "item": "Big Petal",
        "source": "Meganium",
        "quantity": "1500"
      },
      {
        "item": "Coconut Leaves",
        "source": "Exeggutor",
        "quantity": "1100"
      },
      {
        "item": "Vine Hair",
        "source": "Tangela",
        "quantity": "900"
      },
      {
        "item": "Leaf Stone",
        "source": "Drops",
        "quantity": "500"
      },
      {
        "item": "Cocoon Stone",
        "source": "Drops",
        "quantity": "500"
      }
    ]
  },
  {
    "category": "Personagem",
    "id": 8,
    "buff": "COOLDOWN: -1s na bag.",
    "requirements": [
      {
        "item": "Soul Badge",
        "source": "Fuchsia Gym",
        "quantity": "1"
      },
      {
        "item": "Queen Ear",
        "source": "Nidoqueen",
        "quantity": "1500"
      },
      {
        "item": "King Ear",
        "source": "Nidoking",
        "quantity": "1500"
      },
      {
        "item": "Giant Bat Wing",
        "source": "Crobat",
        "quantity": "1100"
      },
      {
        "item": "Stinky Hand",
        "source": "Muk",
        "quantity": "900"
      },
      {
        "item": "Venom Stone",
        "source": "Drops",
        "quantity": "1000"
      }
    ]
  },
  {
    "category": "Personagem",
    "id": 9,
    "buff": "COOLDOWN: -1s na bag.",
    "requirements": [
      {
        "item": "Marsh Badge",
        "source": "Saffron Gym",
        "quantity": "1"
      },
      {
        "item": "Psychic Moustache",
        "source": "Alakazam",
        "quantity": "1500"
      },
      {
        "item": "Two-eyed Black Tail",
        "source": "Wobbuffet",
        "quantity": "1500"
      },
      {
        "item": "Xatu Wing",
        "source": "Xatu",
        "quantity": "1100"
      },
      {
        "item": "Giraffe Antenna",
        "source": "Girafarig",
        "quantity": "900"
      },
      {
        "item": "Enigma Stone",
        "source": "Drops",
        "quantity": "1000"
      }
    ]
  },
  {
    "category": "Personagem",
    "id": 10,
    "buff": "CRIT: +10% chance para todos os Pokémon.",
    "requirements": [
      {
        "item": "Electric Screws",
        "source": "Magnemite",
        "quantity": "25"
      },
      {
        "item": "Remains of Voltorb",
        "source": "Voltorb",
        "quantity": "25"
      }
    ]
  },
  {
    "category": "Personagem",
    "id": 11,
    "buff": "SAÚDE: +500 HP máximo.",
    "requirements": [
      {
        "item": "Blue Wings",
        "source": "Shiny Clefable",
        "quantity": "1"
      },
      {
        "item": "Big Cute Ear",
        "source": "Shiny Wigglytuff",
        "quantity": "1"
      }
    ]
  },
  {
    "category": "Personagem",
    "id": 12,
    "buff": "SAÚDE: +300 HP máximo.",
    "requirements": [
      {
        "item": "Wigglytuff Ear",
        "source": "Wigglytuff",
        "quantity": "250"
      },
      {
        "item": "Pink Wings",
        "source": "Clefable",
        "quantity": "250"
      }
    ]
  },
  {
    "category": "Personagem",
    "id": 13,
    "buff": "SAÚDE: +300 HP máximo.",
    "requirements": [
      {
        "item": "Snorlax Paw",
        "source": "Snorlax",
        "quantity": "400"
      },
      {
        "item": "Bear Claw",
        "source": "Ursaring",
        "quantity": "400"
      }
    ]
  },
  {
    "category": "Personagem",
    "id": 14,
    "buff": "SAÚDE: +300 HP máximo.",
    "requirements": [
      {
        "item": "Magikarp Fin",
        "source": "Magikarp",
        "quantity": "10"
      },
      {
        "item": "Mouse Tail",
        "source": "Ratata",
        "quantity": "30"
      }
    ]
  },
  {
    "category": "Personagem",
    "id": 15,
    "buff": "VELOCIDADE: +20 para o jogador.",
    "requirements": [
      {
        "item": "Fire Hair",
        "source": "Ponyta",
        "quantity": "80"
      },
      {
        "item": "Blue Hair",
        "source": "Shiny Ponyta",
        "quantity": "1"
      }
    ]
  },
  {
    "category": "Personagem",
    "id": 16,
    "buff": "VELOCIDADE: +20 para o jogador.",
    "requirements": [
      {
        "item": "Fire Hoof",
        "source": "Rapidash",
        "quantity": "100"
      },
      {
        "item": "Giant Piece of Fur",
        "source": "Arcanine",
        "quantity": "100"
      }
    ]
  },
  {
    "category": "Personagem",
    "id": 17,
    "buff": "VELOCIDADE: +20 para o jogador.",
    "requirements": [
      {
        "item": "Yellow Bird Crest",
        "source": "Shiny Pidgey",
        "quantity": "1"
      },
      {
        "item": "Carmine Wing",
        "source": "Shiny Spearow",
        "quantity": "1"
      }
    ]
  },
  {
    "category": "Personagem",
    "id": 18,
    "buff": "VELOCIDADE: +20 para o jogador.",
    "requirements": [
      {
        "item": "Bird Wing",
        "source": "Spearow",
        "quantity": "5"
      },
      {
        "item": "Bird Crest",
        "source": "Pidgey",
        "quantity": "5"
      }
    ]
  },
  {
    "category": "Pokémon",
    "id": 1,
    "buff": "WATER: Reduz impedimento subaquático em 40%.",
    "requirements": [
      {
        "item": "Mythic Water Orb",
        "source": "Drops",
        "quantity": "3"
      },
      {
        "item": "Giant Ruby",
        "source": "Tentacruel",
        "quantity": "600"
      },
      {
        "item": "Gyarados Tail",
        "source": "Gyarados",
        "quantity": "1000"
      },
      {
        "item": "Big Fist Gloves",
        "source": "Poliwrath",
        "quantity": "600"
      },
      {
        "item": "Aquatic Tail",
        "source": "Vaporeon",
        "quantity": "600"
      },
      {
        "item": "Duck Paw",
        "source": "Golduck",
        "quantity": "500"
      },
      {
        "item": "Water Stone",
        "source": "Drops",
        "quantity": "1000"
      },
      {
        "item": "Crystal Stone",
        "source": "Drops",
        "quantity": "500"
      }
    ]
  },
  {
    "category": "Pokémon",
    "id": 2,
    "buff": "WATER: Reduz impedimento subaquático em 20%.",
    "requirements": [
      {
        "item": "Arcane Water Orb",
        "source": "Drops",
        "quantity": "20"
      },
      {
        "item": "Giant Ruby",
        "source": "Tentacruel",
        "quantity": "525"
      },
      {
        "item": "Gyarados Tail",
        "source": "Gyarados",
        "quantity": "875"
      },
      {
        "item": "Big Fist Gloves",
        "source": "Poliwrath",
        "quantity": "525"
      },
      {
        "item": "Aquatic Tail",
        "source": "Vaporeon",
        "quantity": "525"
      },
      {
        "item": "Duck Paw",
        "source": "Golduck",
        "quantity": "400"
      },
      {
        "item": "Water Stone",
        "source": "Drops",
        "quantity": "800"
      },
      {
        "item": "Crystal Stone",
        "source": "Drops",
        "quantity": "400"
      }
    ]
  },
  {
    "category": "Pokémon",
    "id": 7,
    "buff": "SAND: Reduz impedimento por areia em 40%.",
    "requirements": [
      {
        "item": "Mythic Psychic Orb",
        "source": "Drops",
        "quantity": "3"
      },
      {
        "item": "Giraffe Antenna",
        "source": "Girafarig",
        "quantity": "600"
      },
      {
        "item": "Sea Dragon Fin",
        "source": "Kingdra",
        "quantity": "1000"
      },
      {
        "item": "Red Hair",
        "source": "Feraligatr",
        "quantity": "600"
      },
      {
        "item": "Water Cannon",
        "source": "Blastoise",
        "quantity": "600"
      },
      {
        "item": "Blue Ray Tail",
        "source": "Mantine",
        "quantity": "500"
      },
      {
        "item": "Enigma Stone",
        "source": "Drops",
        "quantity": "1000"
      },
      {
        "item": "Heart Stone",
        "source": "Drops",
        "quantity": "500"
      }
    ]
  },
  {
    "category": "Pokémon",
    "id": 13,
    "buff": "SNOW: Reduz impedimento por neve em 40%.",
    "requirements": [
      {
        "item": "Mythic Ice Orb",
        "source": "Drops",
        "quantity": "3"
      },
      {
        "item": "Pieces of Shell",
        "source": "Cloyster",
        "quantity": "600"
      },
      {
        "item": "Dragonair Tail",
        "source": "Dragonair",
        "quantity": "1000"
      },
      {
        "item": "Psychic Wig",
        "source": "Jynx",
        "quantity": "600"
      },
      {
        "item": "Dewgong Tail",
        "source": "Dewgong",
        "quantity": "600"
      },
      {
        "item": "Dragonite Tail",
        "source": "Dragonite",
        "quantity": "500"
      },
      {
        "item": "Ice Stone",
        "source": "Drops",
        "quantity": "1000"
      },
      {
        "item": "Crystal Stone",
        "source": "Drops",
        "quantity": "500"
      }
    ]
  },
  {
    "category": "Bug",
    "id": 1,
    "buff": "DANO: +3% magias Bug.",
    "requirements": [
      {
        "item": "Mythic Bug Orb",
        "source": "Drops",
        "quantity": "2"
      },
      {
        "item": "Bug Essence",
        "source": "Drops",
        "quantity": "100"
      },
      {
        "item": "Worm Horn",
        "source": "Wurmple",
        "quantity": "500"
      }
    ]
  },
  {
    "category": "Bug",
    "id": 3,
    "buff": "DANO: +5% magias Bug.",
    "requirements": [
      {
        "item": "Simple Bug Orb",
        "source": "Drops",
        "quantity": "5"
      },
      {
        "item": "Yellow Sting",
        "source": "Shiny Weedle",
        "quantity": "3"
      }
    ]
  },
  {
    "category": "Bug",
    "id": 6,
    "buff": "DEFESA: +5% magias Bug.",
    "requirements": [
      {
        "item": "Simple Bug Orb",
        "source": "Drops",
        "quantity": "5"
      },
      {
        "item": "Sparkle Antenna",
        "source": "Shiny Caterpie",
        "quantity": "3"
      }
    ]
  },
  {
    "category": "Dark",
    "id": 1,
    "buff": "DANO: +3% magias Dark.",
    "requirements": [
      {
        "item": "Mythic Dark Orb",
        "source": "Drops",
        "quantity": "2"
      },
      {
        "item": "Dark Essence",
        "source": "Drops",
        "quantity": "100"
      },
      {
        "item": "Pooch Fur",
        "source": "Poochyena",
        "quantity": "500"
      }
    ]
  },
  {
    "category": "Dark",
    "id": 3,
    "buff": "DANO: +5% magias Dark.",
    "requirements": [
      {
        "item": "Simple Dark Orb",
        "source": "Drops",
        "quantity": "5"
      },
      {
        "item": "Smoked Bones",
        "source": "Shiny Houndour",
        "quantity": "3"
      }
    ]
  },
  {
    "category": "Dark",
    "id": 6,
    "buff": "DEFESA: +5% magias Dark.",
    "requirements": [
      {
        "item": "Simple Dark Orb",
        "source": "Drops",
        "quantity": "5"
      },
      {
        "item": "Smoked Bones",
        "source": "Shiny Houndour",
        "quantity": "3"
      }
    ]
  },
  {
    "category": "Dragon",
    "id": 1,
    "buff": "DANO: +3% magias Dragon.",
    "requirements": [
      {
        "item": "Mythic Dragon Orb",
        "source": "Drops",
        "quantity": "2"
      },
      {
        "item": "Dragon Essence",
        "source": "Drops",
        "quantity": "100"
      },
      {
        "item": "Dragon Topknot",
        "source": "Bagon",
        "quantity": "500"
      }
    ]
  },
  {
    "category": "Dragon",
    "id": 5,
    "buff": "DANO: +5% magias Dragon.",
    "requirements": [
      {
        "item": "Arcane Dragon Orb",
        "source": "Shiny Dragonair",
        "quantity": "3"
      },
      {
        "item": "Shiny Dragon Ears",
        "source": "Shiny Dratini",
        "quantity": "10"
      },
      {
        "item": "Dratini Ear",
        "source": "Dratini",
        "quantity": "120"
      }
    ]
  },
  {
    "category": "Electric",
    "id": 4,
    "buff": "DEFESA: +3% magias Electric.",
    "requirements": [
      {
        "item": "Mythic Electric Orb",
        "source": "Drops",
        "quantity": "2"
      },
      {
        "item": "Electric Essence",
        "source": "Drops",
        "quantity": "100"
      },
      {
        "item": "Green Crest",
        "source": "Electrike",
        "quantity": "500"
      }
    ]
  },
  {
    "category": "Electric",
    "id": 5,
    "buff": "DANO: +5% magias Electric.",
    "requirements": [
      {
        "item": "Arcane Electric Orb",
        "source": "Drops",
        "quantity": "3"
      },
      {
        "item": "Big Green Piece",
        "source": "Shiny Electrode",
        "quantity": "1"
      },
      {
        "item": "Electric Sheep Tail",
        "source": "Ampharos",
        "quantity": "500"
      }
    ]
  },
  {
    "category": "Fairy",
    "id": 1,
    "buff": "DANO: +3% magias Fairy.",
    "requirements": [
      {
        "item": "Mythic Fairy Orb",
        "source": "Drops",
        "quantity": "2"
      },
      {
        "item": "Fighter Essence",
        "source": "Drops",
        "quantity": "100"
      }
    ]
  },
  {
    "category": "Fairy",
    "id": 5,
    "buff": "DANO: +5% magias Fairy.",
    "requirements": [
      {
        "item": "Arcane Fairy Orb",
        "source": "Drops",
        "quantity": "3"
      },
      {
        "item": "Pink Dainty Wing",
        "source": "Shiny Togetic",
        "quantity": "1"
      },
      {
        "item": "Pink Wings",
        "source": "Clefable",
        "quantity": "500"
      }
    ]
  },
  {
    "category": "Fire",
    "id": 1,
    "buff": "DANO: +3% magias Fire.",
    "requirements": [
      {
        "item": "Mythic Fire Orb",
        "source": "Drops",
        "quantity": "2"
      },
      {
        "item": "Fighter Essence",
        "source": "Drops",
        "quantity": "100"
      },
      {
        "item": "Fire Plume",
        "source": "Torchic",
        "quantity": "500"
      }
    ]
  },
  {
    "category": "Fire",
    "id": 5,
    "buff": "DANO: +5% magias Fire.",
    "requirements": [
      {
        "item": "Arcane Fire Orb",
        "source": "Drops",
        "quantity": "3"
      },
      {
        "item": "Black Lizard Tail",
        "source": "Shiny Charmelion",
        "quantity": "3"
      },
      {
        "item": "Lizard Tail",
        "source": "Charmelion",
        "quantity": "120"
      }
    ]
  },
  {
    "category": "Ghost",
    "id": 1,
    "buff": "DANO: +3% magias Ghost.",
    "requirements": [
      {
        "item": "Mythic Ghost Orb",
        "source": "Drops",
        "quantity": "2"
      },
      {
        "item": "Ghost Essence",
        "source": "Drops",
        "quantity": "100"
      },
      {
        "item": "Gray Cloth",
        "source": "Shuppet",
        "quantity": "500"
      }
    ]
  },
  {
    "category": "Ghost",
    "id": 3,
    "buff": "DANO: +5% magias Ghost.",
    "requirements": [
      {
        "item": "Simple Ghost Orb",
        "source": "Shiny Gastly",
        "quantity": "5"
      },
      {
        "item": "Dark Claw",
        "source": "Shiny Haunter",
        "quantity": "3"
      },
      {
        "item": "Ectoplasm",
        "source": "Gengar",
        "quantity": "1000"
      }
    ]
  },
  {
    "category": "Grass",
    "id": 1,
    "buff": "DANO: +3% magias Grass.",
    "requirements": [
      {
        "item": "Mythic Grass Orb",
        "source": "Drops",
        "quantity": "2"
      },
      {
        "item": "Grass Essence",
        "source": "Drops",
        "quantity": "100"
      },
      {
        "item": "Reptilian Tail",
        "source": "Treecko",
        "quantity": "500"
      }
    ]
  },
  {
    "category": "Grass",
    "id": 5,
    "buff": "DANO: +5% magias Grass.",
    "requirements": [
      {
        "item": "Arcane Grass Orb",
        "source": "Drops",
        "quantity": "3"
      },
      {
        "item": "Purple Leaf",
        "source": "Shiny Ivysaur",
        "quantity": "3"
      },
      {
        "item": "Leaf",
        "source": "Ivysaur",
        "quantity": "120"
      }
    ]
  },
  {
    "category": "Ground",
    "id": 4,
    "buff": "DANO: +3% magias Ground.",
    "requirements": [
      {
        "item": "Mythic Ground Orb",
        "source": "Drops",
        "quantity": "2"
      },
      {
        "item": "Ground Essence",
        "source": "Drops",
        "quantity": "100"
      },
      {
        "item": "Strange Ball",
        "source": "Trapinch",
        "quantity": "500"
      }
    ]
  },
  {
    "category": "Ground",
    "id": 8,
    "buff": "DANO: +5% magias Ground.",
    "requirements": [
      {
        "item": "Arcane Ground Orb",
        "source": "Drops",
        "quantity": "3"
      },
      {
        "item": "Golden Shell",
        "source": "Shiny Rhyhorn",
        "quantity": "3"
      },
      {
        "item": "Bone",
        "source": "Marowak",
        "quantity": "120"
      }
    ]
  },
  {
    "category": "Ice",
    "id": 4,
    "buff": "DANO: +3% magias Ice.",
    "requirements": [
      {
        "item": "Mythic Ice Orb",
        "source": "Drops",
        "quantity": "2"
      },
      {
        "item": "Ice Essence",
        "source": "Drops",
        "quantity": "100"
      },
      {
        "item": "Short Tail",
        "source": "Spheal",
        "quantity": "500"
      }
    ]
  },
  {
    "category": "Ice",
    "id": 8,
    "buff": "DANO: +5% magias Ice.",
    "requirements": [
      {
        "item": "Arcane Ice Orb",
        "source": "Drops",
        "quantity": "3"
      },
      {
        "item": "Blue Seel Tail",
        "source": "Shiny Seel",
        "quantity": "3"
      },
      {
        "item": "Dewgong Tail",
        "source": "Dewgong",
        "quantity": "120"
      }
    ]
  },
  {
    "category": "Normal",
    "id": 1,
    "buff": "DANO: +3% magias Normal.",
    "requirements": [
      {
        "item": "Mythic Normal Orb",
        "source": "Drops",
        "quantity": "2"
      },
      {
        "item": "Normal Essence",
        "source": "Drops",
        "quantity": "100"
      },
      {
        "item": "Cute Ball",
        "source": "Whismur",
        "quantity": "500"
      }
    ]
  },
  {
    "category": "Normal",
    "id": 5,
    "buff": "DANO: +5% magias Normal.",
    "requirements": [
      {
        "item": "Arcane Normal Orb",
        "source": "Drops",
        "quantity": "3"
      },
      {
        "item": "Loud Microphone",
        "source": "Shiny Jigglypuff",
        "quantity": "3"
      },
      {
        "item": "Bull Tail",
        "source": "Tauros",
        "quantity": "120"
      }
    ]
  },
  {
    "category": "Poison",
    "id": 1,
    "buff": "DANO: +3% magias Poison.",
    "requirements": [
      {
        "item": "Mythic Poison Orb",
        "source": "Drops",
        "quantity": "2"
      },
      {
        "item": "Poison Essence",
        "source": "Drops",
        "quantity": "100"
      },
      {
        "item": "Toxic Thing",
        "source": "Gulpin",
        "quantity": "500"
      }
    ]
  },
  {
    "category": "Poison",
    "id": 5,
    "buff": "DANO: +5% magias Poison.",
    "requirements": [
      {
        "item": "Arcane Poison Orb",
        "source": "Drops",
        "quantity": "3"
      },
      {
        "item": "Contagious Pore",
        "source": "Shiny Koffing",
        "quantity": "3"
      },
      {
        "item": "Cobra Tail",
        "source": "Arbok",
        "quantity": "120"
      }
    ]
  },
  {
    "category": "Psychic",
    "id": 1,
    "buff": "DANO: +3% magias Psychic.",
    "requirements": [
      {
        "item": "Mythic Psychic Orb",
        "source": "Drops",
        "quantity": "2"
      },
      {
        "item": "Psychic Essence",
        "source": "Drops",
        "quantity": "100"
      },
      {
        "item": "Bowl Hair",
        "source": "Ralts",
        "quantity": "500"
      }
    ]
  },
  {
    "category": "Psychic",
    "id": 5,
    "buff": "DANO: +5% magias Psychic.",
    "requirements": [
      {
        "item": "Arcane Psychic Orb",
        "source": "Drops",
        "quantity": "3"
      },
      {
        "item": "Enchanted Spoon",
        "source": "Shiny Kadabra",
        "quantity": "3"
      },
      {
        "item": "Psychic Spoon",
        "source": "Kadabra",
        "quantity": "120"
      }
    ]
  },
  {
    "category": "Rock",
    "id": 4,
    "buff": "DANO: +3% magias Rock.",
    "requirements": [
      {
        "item": "Mythic Rock Orb",
        "source": "Drops",
        "quantity": "2"
      },
      {
        "item": "Rock Essence",
        "source": "Drops",
        "quantity": "100"
      },
      {
        "item": "Rock Nose",
        "source": "Nosepass",
        "quantity": "500"
      }
    ]
  },
  {
    "category": "Rock",
    "id": 8,
    "buff": "DEFESA: +5% magias Rock.",
    "requirements": [
      {
        "item": "Arcane Rock Orb",
        "source": "Drops",
        "quantity": "3"
      },
      {
        "item": "Purple Stone Forehead",
        "source": "Shiny Graveler",
        "quantity": "3"
      },
      {
        "item": "Rock Forehead",
        "source": "Graveler",
        "quantity": "120"
      }
    ]
  },
  {
    "category": "Steel",
    "id": 4,
    "buff": "DANO: +3% magias Steel.",
    "requirements": [
      {
        "item": "Mythic Metal Orb",
        "source": "Drops",
        "quantity": "2"
      },
      {
        "item": "Steel Essence",
        "source": "Drops",
        "quantity": "100"
      },
      {
        "item": "Aron Helmet",
        "source": "Aron",
        "quantity": "500"
      }
    ]
  },
  {
    "category": "Steel",
    "id": 8,
    "buff": "DANO: +5% magias Steel.",
    "requirements": [
      {
        "item": "Arcane Metal Orb",
        "source": "Drops",
        "quantity": "3"
      },
      {
        "item": "Blue Screws",
        "source": "Shiny Magnemite",
        "quantity": "3"
      },
      {
        "item": "Magnet",
        "source": "Magneton",
        "quantity": "120"
      }
    ]
  },
  {
    "category": "Water",
    "id": 1,
    "buff": "DEFESA: +3% magias Water.",
    "requirements": [
      {
        "item": "Frog Tail",
        "source": "Poliwag",
        "quantity": "50"
      }
    ]
  },
  {
    "category": "Water",
    "id": 3,
    "buff": "DEFESA: +5% magias Water.",
    "requirements": [
      {
        "item": "Arcane Water Orb",
        "source": "Drops",
        "quantity": "3"
      },
      {
        "item": "Cyan Ear",
        "source": "Shiny Wartortle",
        "quantity": "3"
      },
      {
        "item": "Wartortle Ear",
        "source": "Wartortle",
        "quantity": "120"
      }
    ]
  },
  {
    "category": "Water",
    "id": 4,
    "buff": "DANO: +3% magias Water.",
    "requirements": [
      {
        "item": "Mythic Water Orb",
        "source": "Drops",
        "quantity": "2"
      },
      {
        "item": "Water Essence",
        "source": "Drops",
        "quantity": "100"
      },
      {
        "item": "Mud Tail",
        "source": "Shiny Quagsire/Mudkip",
        "quantity": "500"
      }
    ]
  },
  {
    "category": "Water",
    "id": 8,
    "buff": "DANO: +5% magias Water.",
    "requirements": [
      {
        "item": "Arcane Water Orb",
        "source": "Drops",
        "quantity": "3"
      },
      {
        "item": "Blue Mohawk",
        "source": "Shiny Croconaw",
        "quantity": "3"
      },
      {
        "item": "Crocodile Hair",
        "source": "Croconaw",
        "quantity": "120"
      }
    ]
  }
];


// ============================================================================
// STATE MANAGEMENT
// ============================================================================

const State = {
  shiny: new Set(),

  init() {
    this.loadFromStorage();
  },

  loadFromStorage() {
    try {
      const shinies = JSON.parse(localStorage.getItem('shiny') || '[]');
      this.shiny = new Set(shinies);
    } catch (e) {
      console.error('Failed to load state:', e);
    }
  },

  saveToStorage() {
    try {
      localStorage.setItem('shiny', JSON.stringify([...this.shiny]));
    } catch (e) {
      console.error('Failed to save state:', e);
    }
  },

  toggleShiny(slug) {
    if (this.shiny.has(slug)) {
      this.shiny.delete(slug);
    } else {
      this.shiny.add(slug);
    }
    this.saveToStorage();
  }
};

// ============================================================================
// UTILITIES
// ============================================================================

const ADMIN_ITEMS_KEY = "admin_items";
const ADMIN_DROPS_KEY = "admin_drops";
const ADMIN_SITE_KEY = "admin_site";
const ADMIN_PASSWORD_KEY = "admin_password";
const ADMIN_SESSION_KEY = "admin_session";
const ADMIN_REMOTE_URL_KEY = "admin_remote_url";
const ADMIN_REMOTE_KEY_KEY = "admin_remote_key";
const ADMIN_REMOTE_TABLE_KEY = "admin_remote_table";

function readStorage(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw);
    return parsed ?? fallback;
  } catch (e) {
    return fallback;
  }
}

function writeStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error('Failed to save storage:', e);
  }
}

function getRemoteConfig() {
  const url = normalizeItemName(readStorage(ADMIN_REMOTE_URL_KEY, ""));
  const key = normalizeItemName(readStorage(ADMIN_REMOTE_KEY_KEY, ""));
  const table = normalizeItemName(readStorage(ADMIN_REMOTE_TABLE_KEY, "wiki_kv")) || "wiki_kv";
  return {
    url: url.replace(/\/+$/, ""),
    key,
    table
  };
}

function setRemoteConfig(config) {
  writeStorage(ADMIN_REMOTE_URL_KEY, normalizeItemName(config.url));
  writeStorage(ADMIN_REMOTE_KEY_KEY, normalizeItemName(config.key));
  writeStorage(ADMIN_REMOTE_TABLE_KEY, normalizeItemName(config.table || "wiki_kv"));
}

function isRemoteEnabled() {
  const config = getRemoteConfig();
  return Boolean(config.url && config.key);
}

function remoteHeaders() {
  const { key } = getRemoteConfig();
  return {
    "Content-Type": "application/json",
    apikey: key,
    Authorization: `Bearer ${key}`
  };
}

async function remoteRead(key) {
  if (!isRemoteEnabled()) return null;
  try {
    const { url, table } = getRemoteConfig();
    const endpoint = `${url}/rest/v1/${table}?select=value&key=eq.${encodeURIComponent(key)}`;
    const res = await fetch(endpoint, {
      headers: remoteHeaders()
    });
    if (!res.ok) return null;
    const data = await res.json();
    if (!Array.isArray(data) || !data.length) return null;
    return data[0]?.value ?? null;
  } catch (e) {
    return null;
  }
}

async function remoteWrite(key, value) {
  if (!isRemoteEnabled()) return false;
  try {
    const { url, table } = getRemoteConfig();
    const endpoint = `${url}/rest/v1/${table}?on_conflict=key`;
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        ...remoteHeaders(),
        Prefer: "resolution=merge-duplicates,return=minimal"
      },
      body: JSON.stringify({ key, value })
    });
    return res.ok;
  } catch (e) {
    return false;
  }
}

function persistStorage(key, value) {
  writeStorage(key, value);
  remoteWrite(key, value);
}

async function syncFromRemote() {
  if (!isRemoteEnabled()) return false;
  const keys = [ADMIN_ITEMS_KEY, ADMIN_DROPS_KEY, ADMIN_SITE_KEY];
  let updated = false;
  for (const key of keys) {
    const incoming = await remoteRead(key);
    if (incoming === null) continue;
    const current = readStorage(key, null);
    const same = JSON.stringify(current) === JSON.stringify(incoming);
    if (!same) {
      writeStorage(key, incoming);
      updated = true;
    }
  }
  return updated;
}

async function pushToRemote() {
  if (!isRemoteEnabled()) return false;
  const keys = [ADMIN_ITEMS_KEY, ADMIN_DROPS_KEY, ADMIN_SITE_KEY];
  const results = await Promise.all(keys.map(key => remoteWrite(key, readStorage(key, null))));
  return results.every(Boolean);
}

function getAdminDataSnapshot() {
  return {
    items: listAdminItems(),
    drops: readDropsMap(),
    site: getSiteContent()
  };
}

function applyAdminDataSnapshot(data) {
  if (data && Array.isArray(data.items)) {
    saveAdminItems(data.items);
  }
  if (data && data.drops && typeof data.drops === "object") {
    saveDropsMap(data.drops);
  }
  if (data && data.site && typeof data.site === "object") {
    saveSiteContent(data.site);
  }
}

function downloadAdminData() {
  const payload = JSON.stringify(getAdminDataSnapshot(), null, 2);
  const blob = new Blob([payload], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "wiki-data.json";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

async function loadBackupFromFile() {
  try {
    const res = await fetch("wiki-data.json", { cache: "no-store" });
    if (!res.ok) return false;
    const data = await res.json();
    applyAdminDataSnapshot(data);
    showToast("Backup carregado.");
    return true;
  } catch (e) {
    showToast("Falha ao carregar backup.", "error");
    return false;
  }
}

function readSession(key) {
  try {
    return sessionStorage.getItem(key);
  } catch (e) {
    return null;
  }
}

function writeSession(key, value) {
  try {
    sessionStorage.setItem(key, value);
  } catch (e) {
    return;
  }
}

function removeSession(key) {
  try {
    sessionStorage.removeItem(key);
  } catch (e) {
    return;
  }
}

function getAdminPassword() {
  const pass = readStorage(ADMIN_PASSWORD_KEY, "");
  return typeof pass === "string" ? pass : "";
}

function setAdminPassword(pass) {
  writeStorage(ADMIN_PASSWORD_KEY, pass);
}

function isAdminUnlocked() {
  return readSession(ADMIN_SESSION_KEY) === "1";
}

function unlockAdmin(pass) {
  const saved = getAdminPassword();
  if (!saved) return false;
  if (pass !== saved) return false;
  writeSession(ADMIN_SESSION_KEY, "1");
  return true;
}

function lockAdmin() {
  removeSession(ADMIN_SESSION_KEY);
}

function normalizeItemName(name) {
  return String(name || "").trim();
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatChangelogText(text) {
  const lines = String(text || "")
    .split(/\r?\n/)
    .map(line => line.trim())
    .filter(Boolean);
  if (!lines.length) {
    return `<p class="changelog-line">Sem atualizações no momento.</p>`;
  }
  let html = "";
  let list = [];
  const flushList = () => {
    if (!list.length) return;
    html += `<ul class="changelog-list">${list.map(item => `<li>${item}</li>`).join("")}</ul>`;
    list = [];
  };
  lines.forEach(line => {
    const match = line.match(/^[-*+]\s+(.*)$/);
    if (match) {
      list.push(escapeHtml(match[1]));
      return;
    }
    flushList();
    html += `<p class="changelog-line">${escapeHtml(line)}</p>`;
  });
  flushList();
  return html;
}

function slugifyItemName(name) {
  return String(name || "")
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function listAdminItems() {
  const items = readStorage(ADMIN_ITEMS_KEY, []);
  return Array.isArray(items) ? items : [];
}

function saveAdminItems(items) {
  persistStorage(ADMIN_ITEMS_KEY, items);
}

function addAdminItem(name) {
  const cleaned = normalizeItemName(name);
  if (!cleaned) return null;
  const items = listAdminItems();
  const exists = items.find(i => i.name.toLowerCase() === cleaned.toLowerCase());
  if (exists) return exists;
  const id = slugifyItemName(cleaned) || `${Date.now()}`;
  const item = { id, name: cleaned };
  items.push(item);
  saveAdminItems(items);
  return item;
}

function removeAdminItem(id) {
  const items = listAdminItems().filter(i => i.id !== id);
  saveAdminItems(items);
  return items;
}

function readDropsMap() {
  const map = readStorage(ADMIN_DROPS_KEY, {});
  return map && typeof map === 'object' ? map : {};
}

function saveDropsMap(map) {
  persistStorage(ADMIN_DROPS_KEY, map);
}

function getDropsForSlug(slug) {
  const map = readDropsMap();
  const entry = map[slug] || { normal: [], shiny: [] };
  return {
    normal: Array.isArray(entry.normal) ? entry.normal : [],
    shiny: Array.isArray(entry.shiny) ? entry.shiny : []
  };
}

function setDropsForSlug(slug, entry) {
  const map = readDropsMap();
  map[slug] = {
    normal: Array.isArray(entry.normal) ? entry.normal : [],
    shiny: Array.isArray(entry.shiny) ? entry.shiny : []
  };
  saveDropsMap(map);
}

function addDropForSlug(slug, variant, drop) {
  const entry = getDropsForSlug(slug);
  const list = variant === 'shiny' ? entry.shiny : entry.normal;
  list.push(drop);
  if (variant === 'shiny') {
    entry.shiny = list;
  } else {
    entry.normal = list;
  }
  setDropsForSlug(slug, entry);
}

function removeDropForSlug(slug, variant, index) {
  const entry = getDropsForSlug(slug);
  const list = variant === 'shiny' ? entry.shiny : entry.normal;
  if (index >= 0 && index < list.length) {
    list.splice(index, 1);
  }
  if (variant === 'shiny') {
    entry.shiny = list;
  } else {
    entry.normal = list;
  }
  setDropsForSlug(slug, entry);
}

function dropMetaText(drop) {
  const parts = [];
  if (drop.qty) parts.push(`Qtd: ${drop.qty}`);
  if (drop.chance) parts.push(`Chance: ${drop.chance}%`);
  return parts.join(' • ');
}

function renderDropsList(drops) {
  if (!drops.length) {
    return `<div class="drop-empty">Nenhum drop cadastrado.</div>`;
  }
  return drops.map(drop => {
    const meta = dropMetaText(drop);
    return `
      <div class="drop-row">
        <span class="drop-item">${drop.itemName}</span>
        ${meta ? `<span class="drop-meta">${meta}</span>` : ''}
      </div>
    `;
  }).join("");
}

function dropsForView(slug) {
  const stored = getDropsForSlug(slug);
  const p = getPokemon(slug);
  const fallback = (p?.drops || [])
    .filter(d => d && d !== 'TBD')
    .map(name => ({ itemName: name, qty: "", chance: "" }));
  const hasStored = stored.normal.length || stored.shiny.length;
  if (State.shiny.has(slug)) {
    return stored.shiny;
  }
  return hasStored ? stored.normal : fallback;
}

function renderDropsPanel(slug) {
  const title = State.shiny.has(slug) ? "Shiny" : "Normal";
  const list = dropsForView(slug);
  return `
    <div class="drops-panel">
      <div class="drops-title">Drops ${title}</div>
      <div class="drops-list">
        ${renderDropsList(list)}
      </div>
    </div>
  `;
}

function defaultSiteContent() {
  return {
    event: {
      tag: "Evento Ativo",
      title: "Carnaval Alliance 🎊",
      description: "A folia invadiu o PokeAlliance! Glitter, serpentina e bônus especiais estão ativos para todos os treinadores.",
      banner: "imgs/Evento/Banner.png"
    },
    bonuses: [
      { label: "Shiny Charm", value: "+20%" },
      { label: "Drop Rate", value: "+20%" },
      { label: "Experiência", value: "+20%" },
      { label: "Treino", value: "+20%" }
    ],
    highlight: {
      tag: "Novo Pokémon",
      title: "Leafeon & Shiny Leafeon",
      description: "A espera acabou! Leafeon e sua variante Shiny já estão disponíveis. Desafie a dungeon de acesso e conquiste o seu.",
      image: "imgs/Evento/chega da leafon e shiny leafon.png",
      meta: [
        { icon: "shield-check", text: "Nível 150+" },
        { icon: "key", text: "2 Chaves/Dia" }
      ]
    },
    changelog: {
      title: "Changelog",
      body: "Sem atualizações no momento."
    }
  };
}

function getSiteContent() {
  const stored = readStorage(ADMIN_SITE_KEY, null);
  if (!stored || typeof stored !== "object") return defaultSiteContent();
  const base = defaultSiteContent();
  return {
    ...base,
    ...stored,
    event: { ...base.event, ...(stored.event || {}) },
    highlight: { ...base.highlight, ...(stored.highlight || {}) },
    changelog: { ...base.changelog, ...(stored.changelog || {}) },
    bonuses: Array.isArray(stored.bonuses) && stored.bonuses.length ? stored.bonuses : base.bonuses
  };
}

function saveSiteContent(content) {
  persistStorage(ADMIN_SITE_KEY, content);
}

function getPokemon(slug) {
  return DATA.find(p => p.slug === slug);
}

function imageUrl(slug) {
  const p = getPokemon(slug);
  if (!p) return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png';

  if (State.shiny.has(slug)) {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${p.id}.png`;
  }
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${p.id}.png`;
}

function officialArtUrl(slug) {
  const p = getPokemon(slug);
  return p
    ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${p.id}.png`
    : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png';
}

function uniqueTypes() {
  const set = new Set();
  DATA.forEach(p => p.types.forEach(t => set.add(t)));
  return Array.from(set).sort();
}

function uniqueCategories() {
  const set = new Set();
  DATA.forEach(p => areasOf(p).forEach(a => set.add(a.category)));
  return Array.from(set).sort();
}

const AREA_IMAGE_ROOT = "imgs/localizacao-pokes";
const AREA_IMAGE_FILES = {
  wildscape: "wildscape.png",
  outland: "outland.png"
};

function autoAreaImage(slug, category) {
  if (!slug || !category) return null;
  const key = String(category).toLowerCase();
  const file = AREA_IMAGE_FILES[key];
  if (!file) return null;
  return `${AREA_IMAGE_ROOT}/${slug}/${file}`;
}

function isLikelyImageUrl(url) {
  if (!url || typeof url !== 'string') return false;
  if (url.startsWith('data:image/')) return true;
  const lower = url.toLowerCase();
  return lower.endsWith('.png') || lower.endsWith('.jpg') || lower.endsWith('.jpeg') || lower.endsWith('.webp') || lower.endsWith('.gif');
}

function areasOf(pokemon) {
  const baseAreas = pokemon.areas
    ? pokemon.areas
    : (pokemon.locations || []).map(name => ({
    category: "Normal",
    name,
    image: `https://via.placeholder.com/640x320/6366f1/ffffff?text=${encodeURIComponent(pokemon.name)}+em+${encodeURIComponent(name)}`
    }));

  return baseAreas.map(area => ({
    ...area,
    image: (area.image && isLikelyImageUrl(area.image))
      ? area.image
      : (autoAreaImage(pokemon.slug, area.category) || area.image || null)
  }));
}

function groupAreas(areas) {
  const map = new Map();
  areas.forEach(a => {
    const cat = a.category || "Normal";
    const entry = map.get(cat) || { items: [], groups: new Map() };
    if (a.sub) {
      const arr = entry.groups.get(a.sub) || [];
      arr.push(a);
      entry.groups.set(a.sub, arr);
    } else {
      entry.items.push(a);
    }
    map.set(cat, entry);
  });
  return map;
}

function evolutionChain(slug) {
  const bySlug = new Map(DATA.map(p => [p.slug, p]));
  let current = bySlug.get(slug);
  if (!current) return [slug];

  while (true) {
    const from = current.evolutions.find(e => e.from);
    if (!from || !bySlug.get(from.from)) break;
    current = bySlug.get(from.from);
  }

  const chain = [current.slug];
  while (true) {
    const to = bySlug.get(chain[chain.length - 1]).evolutions.find(e => e.to);
    if (!to || !bySlug.get(to.to)) break;
    chain.push(to.to);
  }
  return chain;
}

function countersFor(types) {
  const map = {
    grass: ["Fire", "Flying", "Ice"],
    poison: ["Ground", "Psychic"],
    fire: ["Water", "Rock"],
    flying: ["Electric", "Ice"],
    water: ["Electric", "Grass"],
    electric: ["Ground"],
    ice: ["Fire", "Rock"],
    rock: ["Water", "Grass"],
    ground: ["Water", "Ice"],
    psychic: ["Poison"]
  };
  const set = new Set();
  types.forEach(t => (map[t.toLowerCase()] || []).forEach(x => set.add(x)));
  return Array.from(set);
}

function resistancesFor(types) {
  const map = {
    grass: ["Water", "Electric", "Grass", "Ground"],
    poison: ["Grass", "Fighting", "Poison", "Bug", "Fairy"],
    fire: ["Fire", "Grass", "Ice", "Bug", "Steel", "Fairy"],
    flying: ["Grass", "Fighting", "Bug"],
    water: ["Fire", "Water", "Ice", "Steel"],
    electric: ["Electric", "Flying", "Steel"],
    ice: ["Ice"],
    rock: ["Normal", "Fire", "Poison", "Flying"],
    ground: ["Poison", "Rock"],
    psychic: ["Fighting", "Psychic"]
  };
  const set = new Set();
  types.forEach(t => (map[t.toLowerCase()] || []).forEach(x => set.add(x)));
  return Array.from(set);
}

function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// ============================================================================
// ROUTING
// ============================================================================

function parseRoute() {
  const raw = location.hash || "#/";
  const [path, query] = raw.replace(/^#/, "").split("?");
  const params = {};
  if (query) {
    query.split("&").forEach(kv => {
      const [k, v] = kv.split("=");
      params[decodeURIComponent(k)] = decodeURIComponent(v || "");
    });
  }
  const parts = path.split("/").filter(Boolean);
  return { path, parts, params };
}

function navigate(path) {
  location.hash = path;
}

function updateActiveNav() {
  const { parts } = parseRoute();
  const currentPath = parts[0] ? `#/${parts[0]}` : '#/';

  document.querySelectorAll('.nav-item').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// ============================================================================
// LIGHTBOX (Deprecated/Removed)
// ============================================================================

function openLightbox(src) {
  const existing = document.getElementById('global-lightbox');
  const lb = existing || document.createElement('div');
  lb.className = 'lightbox';
  lb.id = 'global-lightbox';
  lb.innerHTML = `
    <span class="lightbox-close" aria-label="Fechar">×</span>
    <div class="lightbox-inner">
      <img class="lightbox-content" src="${src}" alt="Mapa">
    </div>
  `;
  if (!existing) document.body.appendChild(lb);
  lb.style.display = 'block';

  const img = lb.querySelector('.lightbox-content');
  img.draggable = false;

  let dragging = false;
  let currentX = 0;
  let currentY = 0;
  let startX = 0;
  let startY = 0;

  const updateTransform = () => {
    img.style.transform = `translate(${currentX}px, ${currentY}px)`;
  };

  const onMouseDown = (e) => {
    dragging = true;
    startX = e.clientX - currentX;
    startY = e.clientY - currentY;
    img.classList.add('dragging');
  };

  const onMouseMove = (e) => {
    if (!dragging) return;
    currentX = e.clientX - startX;
    currentY = e.clientY - startY;
    updateTransform();
  };

  const stopDrag = () => {
    dragging = false;
    img.classList.remove('dragging');
  };

  img.addEventListener('mousedown', onMouseDown);
  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', stopDrag);

  const esc = (e) => {
    if (e.key === 'Escape') close();
  };
  const close = () => {
    lb.style.display = 'none';
    document.removeEventListener('keydown', esc);
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', stopDrag);
    img.removeEventListener('mousedown', onMouseDown);
  };
  lb.querySelector('.lightbox-close').onclick = close;
  lb.onclick = (e) => {
    if (e.target === lb) close();
  };
  document.addEventListener('keydown', esc);

  updateTransform();
}
function closeLightbox() {
  const lb = document.getElementById('global-lightbox');
  if (lb) lb.style.display = 'none';
}
window.openLightbox = openLightbox;

// ============================================================================
// COMPONENTS
// ============================================================================

function HomeIsland() {
  const currentHash = window.location.hash || "#/";
  if (currentHash === "#/") return ""; // Don't show on Home page

  return `
    <div class="home-island">
      <div class="island-dock">
        <a href="#/" class="island-item" title="Voltar ao Início">
          <span class="icon">🏠</span>
          <span class="label">Início</span>
        </a>
      </div>
    </div>
  `;
}

function Sidebar() {
  const navItems = [
    { label: "Início", hash: "#/", icon: "home" },
    { label: "Pokédex", hash: "#/pokedex", icon: "book-open" },
    { label: "Talentos", hash: "#/talents", icon: "sparkles" },
    { label: "Estatísticas", hash: "#/stats", icon: "bar-chart-2" },
    { label: "Guia Inicial", hash: "#/guide", icon: "map" },
  ];

  const externalLinks = [
    { label: "Site Oficial", url: "https://pokealliance.com.br", icon: "globe" },
    { label: "Discord", url: "https://discord.gg/pokealliance", icon: "message-square" },
  ];

  return `
    <div class="sidebar-inner">
      <div class="sidebar-header">
        <a href="#/" class="sidebar-logo">
          <img src="imgs/Logo/logo.png" alt="PokeAlliance">
          <span>PokeAlliance</span>
        </a>
      </div>

      <nav class="sidebar-nav">
        <div class="nav-section">
          <span class="section-label">Wiki Hub</span>
          ${navItems.map(item => `
            <a href="${item.hash}" class="nav-item ${window.location.hash === item.hash || (window.location.hash === "" && item.hash === "#/") ? 'active' : ''}" data-hash="${item.hash}">
              <i data-lucide="${item.icon}"></i>
              <span>${item.label}</span>
            </a>
          `).join("")}
        </div>

        <div class="nav-section">
          <span class="section-label">Oficial</span>
          ${externalLinks.map(item => `
            <a href="${item.url}" target="_blank" class="nav-item external">
              <i data-lucide="${item.icon}"></i>
              <span>${item.label}</span>
            </a>
          `).join("")}
        </div>
      </nav>

      <div class="sidebar-footer">
        <div class="player-count">
          <span class="status-dot"></span>
          <span>PokeAlliance Wiki v1.0</span>
        </div>
      </div>
    </div>
  `;
}

function Home() {
  const content = getSiteContent();
  const bonuses = Array.isArray(content.bonuses) ? content.bonuses : [];
  const metaItems = Array.isArray(content.highlight?.meta) ? content.highlight.meta : [];

  return `
    <div class="content-container">
      <div class="home-dashboard">
        <section class="spotlight-banner">
          <div class="spotlight-bg" style="background-image: url('${content.event.banner}');"></div>
          <div class="spotlight-overlay">
            <div class="spotlight-content">
              <span class="spotlight-tag">${content.event.tag}</span>
              <h1 class="spotlight-title">${content.event.title}</h1>
              <p class="spotlight-desc">${content.event.description}</p>
              <div class="bonus-grid">
                ${bonuses.map(b => `
                  <div class="bonus-card">
                    <span class="bonus-value">${b.value}</span>
                    <span class="bonus-label">${b.label}</span>
                  </div>
                `).join("")}
              </div>
            </div>
          </div>
        </section>

        <div class="home-main-grid">
          <main class="news-feed">
            <div class="section-header">
              <i data-lucide="zap"></i>
              <h2>Destaque de Conteúdo</h2>
            </div>
            
            <div class="content-highlight">
              <div class="highlight-image" style="background-image: url('${content.highlight.image}');"></div>
              <div class="highlight-info">
                <span class="highlight-tag">${content.highlight.tag}</span>
                <h3 class="highlight-title">${content.highlight.title}</h3>
                <p class="highlight-desc">${content.highlight.description}</p>
                <div class="highlight-meta">
                  ${metaItems.map(m => `
                    <div class="meta-item">
                      <i data-lucide="${m.icon}"></i>
                      <span>${m.text}</span>
                    </div>
                  `).join("")}
                </div>
              </div>
            </div>
            <div class="content-highlight content-highlight-single">
              <div class="highlight-info">
                <span class="highlight-tag">${content.changelog.title}</span>
                <h3 class="highlight-title">Atualizações do Jogo</h3>
                <div class="highlight-desc">${formatChangelogText(content.changelog.body)}</div>
              </div>
            </div>
          </main>
        </div>
      </div>
      
      ${Footer()}
    </div>
  `;
}

function Footer() {
  return `
    <footer class="app-footer">
      <div class="footer-content">
        <div class="footer-brand">
          <span class="brand-name">PokeAlliance</span>
          <p class="brand-disclaimer">Este é um projeto feito por fãs e jogadores para a comunidade. Todos os direitos de nome e marca pertencem ao @PokeAlliance.</p>
        </div>
        
        <div class="footer-social">
          <a href="#" class="social-icon" title="Instagram">
            <i data-lucide="instagram"></i>
          </a>
          <a href="#" class="social-icon" title="TikTok">
            <i data-lucide="music-2"></i>
          </a>
          <a href="#" class="social-icon" title="YouTube">
            <i data-lucide="youtube"></i>
          </a>
        </div>
      </div>
      
      <div class="footer-bottom">
        <span>© 2026 PokeAlliance - Guia de Jogadores</span>
      </div>
    </footer>
  `;
}

const areaCategoryCache = new Map();

function categoriesFor(pokemon) {
  const cached = areaCategoryCache.get(pokemon.slug);
  if (cached) return cached;
  const set = new Set(areasOf(pokemon).map(a => a.category));
  areaCategoryCache.set(pokemon.slug, set);
  return set;
}

function normalizePokedexParams(params) {
  return {
    q: (params.q || "").trim(),
    type: params.type || "",
    category: params.cat || params.category || "",
    sort: params.sort || "id-asc"
  };
}

function filterAndSortPokedex(state) {
  const q = state.q.toLowerCase();
  const type = state.type;
  const category = state.category;
  const sort = state.sort || "id-asc";

  const filtered = DATA.filter(p => {
    const matchName = p.name.toLowerCase().includes(q);
    const matchType = type ? p.types.includes(type) : true;
    const cats = categoriesFor(p);
    const matchCat = category ? cats.has(category) : true;
    return matchName && matchType && matchCat;
  });

  filtered.sort((a, b) => {
    switch (sort) {
      case 'id-asc': return a.id - b.id;
      case 'id-desc': return b.id - a.id;
      case 'name-asc': return a.name.localeCompare(b.name);
      case 'name-desc': return b.name.localeCompare(a.name);
      default: return 0;
    }
  });

  return filtered;
}

function renderPokedexCards(list) {
  return list.map(p => `
    <article class="card" data-slug="${p.slug}">
      <div class="card-media">
        <img src="${imageUrl(p.slug)}" alt="${p.name}" loading="lazy">
        <div class="badge-id">#${String(p.id).padStart(3, "0")}</div>
        <button class="shiny-toggle ${State.shiny.has(p.slug) ? 'active' : ''}" 
                data-slug="${p.slug}" 
                data-action="shiny"
                title="Alternar Shiny">✨</button>
      </div>
      <div class="card-header">
        <h3>${p.name}</h3>
      </div>
      <div class="types">
        ${p.types.map(t => `<span class="type type-${t.toLowerCase()}">${t}</span>`).join("")}
      </div>
      <div class="card-body">
        <!-- Categories and Meta removed as per user request -->
      </div>
    </article>
  `).join("");
}

function renderPokedexGrid(state) {
  const filtered = filterAndSortPokedex(state);
  return filtered.length ? renderPokedexCards(filtered) : `<p class="empty">Nenhum resultado encontrado.</p>`;
}

function PokedexList(params) {
  const state = normalizePokedexParams(params);
  const types = uniqueTypes();
  const categories = uniqueCategories();
  const list = renderPokedexGrid(state);

  const html = `
    <section class="toolbar">
      <input id="search" type="search" placeholder="🔍 Pesquisar por nome..." value="${state.q}">
      <select id="type">
        <option value="">Todos os tipos</option>
        ${types.map(t => `<option value="${t}" ${t === state.type ? "selected" : ""}>${t}</option>`).join("")}
      </select>
      <select id="category">
        <option value="">Todas as categorias</option>
        ${categories.map(c => `<option value="${c}" ${c === state.category ? "selected" : ""}>${c}</option>`).join("")}
      </select>
      <select id="sort">
        <option value="id-asc" ${state.sort === "id-asc" ? "selected" : ""}>ID ↑</option>
        <option value="id-desc" ${state.sort === "id-desc" ? "selected" : ""}>ID ↓</option>
        <option value="name-asc" ${state.sort === "name-asc" ? "selected" : ""}>Nome A-Z</option>
        <option value="name-desc" ${state.sort === "name-desc" ? "selected" : ""}>Nome Z-A</option>
      </select>
    </section>
    <section class="pokedex-maps">
      <div class="section-title">
        <i data-lucide="map"></i>
        <span>Mapas</span>
      </div>
      <div class="map-actions">
        <button class="map-button" data-map="imgs/mapas/ilhaslaranjas.png">
          Ilhas Laranjas
        </button>
        <button class="map-button" data-map="imgs/mapas/hoen.png">
          Hoenn
        </button>
      </div>
    </section>
    <section class="grid" id="pokedex-grid">
      ${list}
    </section>
  `;

  setTimeout(() => attachPokedexListeners(params), 0);
  return html;
}

function attachPokedexListeners(params) {
  const search = document.getElementById("search");
  const typeSel = document.getElementById("type");
  const catSel = document.getElementById("category");
  const sortSel = document.getElementById("sort");
  const grid = document.getElementById("pokedex-grid");

  const readFilters = () => ({
    q: search.value.trim(),
    type: typeSel.value,
    category: catSel.value,
    sort: sortSel.value
  });

  const updateFilters = debounce(() => {
    if (!grid) return;
    grid.innerHTML = renderPokedexGrid(readFilters());
  }, 150);

  search.addEventListener("input", updateFilters);
  typeSel.addEventListener("change", updateFilters);
  catSel.addEventListener("change", updateFilters);
  sortSel.addEventListener("change", updateFilters);

  if (grid) {
    grid.addEventListener("click", (e) => {
      const shinyBtn = e.target.closest('[data-action="shiny"]');
      if (shinyBtn) {
        e.stopPropagation();
        e.preventDefault();
        const slug = shinyBtn.getAttribute("data-slug");
        State.toggleShiny(slug);
        if (State.shiny.has(slug)) {
          shinyBtn.classList.add('active');
        } else {
          shinyBtn.classList.remove('active');
        }
        const card = shinyBtn.closest('.card');
        const img = card ? card.querySelector('.card-media img') : null;
        if (img) {
          img.src = imageUrl(slug);
        }
        return;
      }

      const card = e.target.closest(".card");
      if (card) {
        const slug = card.getAttribute("data-slug");
        navigate(`#/pokemon/${slug}`);
      }
    });
  }

  document.querySelectorAll(".map-button").forEach(btn => {
    btn.addEventListener("click", () => {
      const src = btn.getAttribute("data-map");
      if (src) openLightbox(src);
    });
  });
}

function renderAdminDropList(drops, variant) {
  if (!drops.length) {
    return `<div class="admin-empty">Nenhum drop cadastrado.</div>`;
  }
  return drops.map((drop, index) => {
    const meta = dropMetaText(drop);
    return `
      <div class="admin-drop-item">
        <div class="admin-drop-main">
          <span class="admin-drop-name">${drop.itemName}</span>
          ${meta ? `<span class="admin-drop-meta">${meta}</span>` : ''}
        </div>
        <button class="admin-remove" data-remove-drop="1" data-variant="${variant}" data-index="${index}">Remover</button>
      </div>
    `;
  }).join("");
}

function renderAdminItemsList(items) {
  if (!items.length) {
    return `<div class="admin-empty">Nenhum item cadastrado.</div>`;
  }
  return items.map(i => `
    <div class="admin-item">
      <span>${i.name}</span>
      <button class="admin-remove" data-remove-item="${i.id}">Remover</button>
    </div>
  `).join("");
}

function AdminAuthPage() {
  const hasPassword = Boolean(getAdminPassword());
  return `
    <div class="content-container">
      <div class="section-title">
        <i data-lucide="lock"></i>
        <span>Administração</span>
      </div>
      <div class="admin-panel admin-auth">
        <div class="admin-panel-title">${hasPassword ? "Acesso restrito" : "Definir acesso"}</div>
        <form class="admin-form-column" id="admin-auth-form">
          <input id="admin-auth-pass" type="password" placeholder="${hasPassword ? "Digite sua senha" : "Crie uma senha"}">
          <button class="button" type="submit">${hasPassword ? "Entrar" : "Salvar senha"}</button>
        </form>
        <div class="admin-auth-error" id="admin-auth-error"></div>
      </div>
      ${Footer()}
    </div>
  `;
}

function renderAdminItemsPanel() {
  const items = listAdminItems();
  const itemsList = renderAdminItemsList(items);

  return `
    <div class="admin-panel">
      <div class="admin-panel-title">Itens</div>
      <form class="admin-form" id="admin-item-form">
        <input id="admin-item-name" type="text" placeholder="Nome do item">
        <button class="button" type="submit">Adicionar</button>
      </form>
      <div class="admin-list" id="admin-item-list">
        ${itemsList}
      </div>
    </div>
  `;
}

function renderAdminPokemonPanel(params) {
  const pokemonList = [...DATA].sort((a, b) => a.id - b.id);
  const selected = params.pokemon || (pokemonList[0] ? pokemonList[0].slug : "");
  const items = listAdminItems();
  const hasItems = items.length > 0;
  const drops = selected ? getDropsForSlug(selected) : { normal: [], shiny: [] };

  const itemOptions = hasItems
    ? items.map(i => `<option value="${i.id}">${i.name}</option>`).join("")
    : `<option value="">Cadastre um item primeiro</option>`;

  const pokemonOptions = pokemonList.map(p => `
    <option value="${p.slug}" ${p.slug === selected ? "selected" : ""}>#${String(p.id).padStart(3, "0")} ${p.name}</option>
  `).join("");

  return `
    <div class="admin-panel">
      <div class="admin-panel-title">Pokémons</div>
      <div class="admin-row">
        <label for="admin-pokemon">Pokémon</label>
        <select id="admin-pokemon">
          ${pokemonOptions}
        </select>
      </div>
      <div class="admin-drops-grid" id="admin-drops-container">
        <div class="admin-drop-panel">
          <div class="admin-drop-title">Normal</div>
          <form class="admin-drop-form" data-variant="normal">
            <select name="item" ${hasItems ? "" : "disabled"}>
              ${itemOptions}
            </select>
            <input type="text" name="qty" placeholder="Qtd">
            <input type="text" name="chance" placeholder="%">
            <button class="button" type="submit" ${hasItems ? "" : "disabled"}>Adicionar</button>
          </form>
          <div class="admin-drop-list">
            ${renderAdminDropList(drops.normal, "normal")}
          </div>
        </div>
        <div class="admin-drop-panel">
          <div class="admin-drop-title">Shiny</div>
          <form class="admin-drop-form" data-variant="shiny">
            <select name="item" ${hasItems ? "" : "disabled"}>
              ${itemOptions}
            </select>
            <input type="text" name="qty" placeholder="Qtd">
            <input type="text" name="chance" placeholder="%">
            <button class="button" type="submit" ${hasItems ? "" : "disabled"}>Adicionar</button>
          </form>
          <div class="admin-drop-list">
            ${renderAdminDropList(drops.shiny, "shiny")}
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderAdminHomePanel() {
  const content = getSiteContent();
  const bonuses = Array.isArray(content.bonuses) ? content.bonuses : [];
  const metaItems = Array.isArray(content.highlight?.meta) ? content.highlight.meta : [];
  const bonusInputs = bonuses.map((b, index) => `
    <div class="admin-row admin-bonus-row">
      <input type="text" data-bonus-label="${index}" value="${b.label}" placeholder="Nome do bônus">
      <input type="text" data-bonus-value="${index}" value="${b.value}" placeholder="Valor">
    </div>
  `).join("");
  const metaInputs = metaItems.map((m, index) => `
    <div class="admin-row admin-meta-row">
      <input type="text" data-meta-icon="${index}" value="${m.icon}" placeholder="Ícone">
      <input type="text" data-meta-text="${index}" value="${m.text}" placeholder="Texto">
    </div>
  `).join("");

  return `
    <div class="admin-panel">
      <div class="admin-panel-title">Página Inicial</div>
      <form class="admin-form-column" id="admin-home-form">
        <div class="admin-block-title">Evento</div>
        <input type="text" id="admin-event-tag" value="${content.event.tag}" placeholder="Tag do evento">
        <input type="text" id="admin-event-title" value="${content.event.title}" placeholder="Título do evento">
        <textarea id="admin-event-desc" placeholder="Descrição do evento">${content.event.description}</textarea>
        <input type="text" id="admin-event-banner" value="${content.event.banner}" placeholder="URL do banner">
        <div class="admin-block-title">Bônus</div>
        ${bonusInputs}
        <div class="admin-block-title">Novo Pokémon</div>
        <input type="text" id="admin-highlight-tag" value="${content.highlight.tag}" placeholder="Tag do destaque">
        <input type="text" id="admin-highlight-title" value="${content.highlight.title}" placeholder="Título do destaque">
        <textarea id="admin-highlight-desc" placeholder="Descrição do destaque">${content.highlight.description}</textarea>
        <input type="text" id="admin-highlight-image" value="${content.highlight.image}" placeholder="URL da imagem">
        <div class="admin-block-title">Detalhes do destaque</div>
        ${metaInputs}
        <div class="admin-block-title">Changelog</div>
        <input type="text" id="admin-changelog-title" value="${content.changelog.title}" placeholder="Título">
        <textarea id="admin-changelog-body" placeholder="Texto do changelog">${content.changelog.body}</textarea>
        <button class="button" type="submit">Salvar alterações</button>
      </form>
    </div>
  `;
}

function renderAdminSyncPanel() {
  const config = getRemoteConfig();
  return `
    <div class="admin-panel">
      <div class="admin-panel-title">Sincronização</div>
      <form class="admin-form-column" id="admin-sync-form">
        <input id="admin-sync-url" type="text" value="${config.url}" placeholder="URL do projeto Supabase">
        <input id="admin-sync-key" type="text" value="${config.key}" placeholder="Anon key">
        <input id="admin-sync-table" type="text" value="${config.table}" placeholder="Tabela (padrão: wiki_kv)">
        <button class="button" type="submit">Salvar configuração</button>
      </form>
      <div class="admin-helper">Tabela esperada: wiki_kv com colunas key (text) e value (jsonb).</div>
      <div class="admin-sync-actions">
        <button class="button button-secondary" type="button" id="admin-sync-pull">Importar do servidor</button>
        <button class="button" type="button" id="admin-sync-push">Enviar para o servidor</button>
      </div>
      <div class="admin-block-title">Backup manual</div>
      <div class="admin-sync-actions">
        <button class="button button-secondary" type="button" id="admin-export-json">Exportar JSON</button>
        <label class="button" for="admin-import-json">Importar JSON</label>
        <input id="admin-import-json" type="file" accept="application/json" />
      </div>
    </div>
  `;
}

function AdminPage(params) {
  const tab = params.tab || "items";
  const content = tab === "pokemon"
    ? renderAdminPokemonPanel(params)
    : tab === "home"
    ? renderAdminHomePanel()
    : tab === "sync"
    ? renderAdminSyncPanel()
    : renderAdminItemsPanel();

  const html = `
    <div class="content-container">
      <div class="section-title">
        <i data-lucide="settings"></i>
        <span>Administração</span>
      </div>
      <div class="admin-tabs">
        <a class="admin-tab ${tab === "items" ? "active" : ""}" href="#/admin?tab=items">Itens</a>
        <a class="admin-tab ${tab === "pokemon" ? "active" : ""}" href="#/admin?tab=pokemon">Pokémons</a>
        <a class="admin-tab ${tab === "home" ? "active" : ""}" href="#/admin?tab=home">Página Inicial</a>
        <a class="admin-tab ${tab === "sync" ? "active" : ""}" href="#/admin?tab=sync">Sincronização</a>
      </div>
      <div class="admin-grid admin-grid-single">
        ${content}
      </div>
      ${Footer()}
    </div>
  `;

  setTimeout(() => initAdminPageListeners(params), 0);
  return html;
}

function initAdminAuthListeners() {
  const form = document.getElementById("admin-auth-form");
  const input = document.getElementById("admin-auth-pass");
  const error = document.getElementById("admin-auth-error");
  if (!form || !input) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const pass = normalizeItemName(input.value);
    if (!pass) return;
    const stored = getAdminPassword();
    let ok = false;
    if (!stored) {
      setAdminPassword(pass);
      writeSession(ADMIN_SESSION_KEY, "1");
      ok = true;
    } else {
      ok = unlockAdmin(pass);
    }
    if (!ok) {
      if (error) error.textContent = "Senha inválida.";
      return;
    }
    if (error) error.textContent = "";
    navigate("#/admin?tab=items");
  });
}

function initAdminPageListeners(params) {
  const pokemonList = [...DATA].sort((a, b) => a.id - b.id);
  const currentSlug = params.pokemon || (pokemonList[0] ? pokemonList[0].slug : "");
  const itemForm = document.getElementById("admin-item-form");
  const itemInput = document.getElementById("admin-item-name");
  const itemList = document.getElementById("admin-item-list");
  const pokemonSelect = document.getElementById("admin-pokemon");
  const dropsContainer = document.getElementById("admin-drops-container");
  const homeForm = document.getElementById("admin-home-form");
  const syncForm = document.getElementById("admin-sync-form");
  const syncUrl = document.getElementById("admin-sync-url");
  const syncKey = document.getElementById("admin-sync-key");
  const syncTable = document.getElementById("admin-sync-table");
  const syncPull = document.getElementById("admin-sync-pull");
  const syncPush = document.getElementById("admin-sync-push");
  const tab = params.tab || "items";
  const updateItemsList = () => {
    if (!itemList) return;
    itemList.innerHTML = renderAdminItemsList(listAdminItems());
  };

  if (tab === "items" && itemForm) {
    itemForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = normalizeItemName(itemInput.value);
      if (!name) return;
      addAdminItem(name);
      itemInput.value = "";
      updateItemsList();
    });
  }

  if (tab === "items" && itemList) {
    itemList.addEventListener("click", (e) => {
      const btn = e.target.closest('[data-remove-item]');
      if (!btn) return;
      const id = btn.getAttribute('data-remove-item');
      if (!id) return;
      removeAdminItem(id);
      updateItemsList();
    });
  }

  if (tab === "pokemon" && pokemonSelect) {
    pokemonSelect.addEventListener("change", () => {
      const slug = pokemonSelect.value;
      navigate(`#/admin?tab=pokemon&pokemon=${slug}`);
    });
  }

  if (tab === "pokemon") {
    document.querySelectorAll(".admin-drop-form").forEach(form => {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const variant = form.getAttribute("data-variant") || "normal";
        const itemId = form.querySelector('select[name="item"]')?.value;
        const qty = normalizeItemName(form.querySelector('input[name="qty"]')?.value);
        const chance = normalizeItemName(form.querySelector('input[name="chance"]')?.value);
        if (!itemId || !currentSlug) return;
        const items = listAdminItems();
        const item = items.find(i => i.id === itemId);
        if (!item) return;
        addDropForSlug(currentSlug, variant, {
          itemId: item.id,
          itemName: item.name,
          qty,
          chance
        });
        const list = getDropsForSlug(currentSlug)[variant];
        const listEl = form.closest(".admin-drop-panel")?.querySelector(".admin-drop-list");
        if (listEl) {
          listEl.innerHTML = renderAdminDropList(list, variant);
        }
        const qtyInput = form.querySelector('input[name="qty"]');
        const chanceInput = form.querySelector('input[name="chance"]');
        if (qtyInput) qtyInput.value = "";
        if (chanceInput) chanceInput.value = "";
      });
    });
  }

  if (tab === "pokemon" && dropsContainer) {
    dropsContainer.addEventListener("click", (e) => {
      const btn = e.target.closest('[data-remove-drop]');
      if (!btn) return;
      const variant = btn.getAttribute('data-variant') || "normal";
      const index = Number(btn.getAttribute('data-index'));
      if (!currentSlug || Number.isNaN(index)) return;
      removeDropForSlug(currentSlug, variant, index);
      const list = getDropsForSlug(currentSlug)[variant];
      const listEl = btn.closest(".admin-drop-panel")?.querySelector(".admin-drop-list");
      if (listEl) {
        listEl.innerHTML = renderAdminDropList(list, variant);
      }
    });
  }

  if (tab === "home" && homeForm) {
    homeForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const content = getSiteContent();
      content.event.tag = normalizeItemName(document.getElementById("admin-event-tag")?.value);
      content.event.title = normalizeItemName(document.getElementById("admin-event-title")?.value);
      content.event.description = normalizeItemName(document.getElementById("admin-event-desc")?.value);
      content.event.banner = normalizeItemName(document.getElementById("admin-event-banner")?.value);

      const bonusLabels = Array.from(document.querySelectorAll("[data-bonus-label]"));
      const bonusValues = Array.from(document.querySelectorAll("[data-bonus-value]"));
      content.bonuses = bonusLabels.map((input, index) => ({
        label: normalizeItemName(input.value),
        value: normalizeItemName(bonusValues[index]?.value)
      })).filter(b => b.label || b.value);

      content.highlight.tag = normalizeItemName(document.getElementById("admin-highlight-tag")?.value);
      content.highlight.title = normalizeItemName(document.getElementById("admin-highlight-title")?.value);
      content.highlight.description = normalizeItemName(document.getElementById("admin-highlight-desc")?.value);
      content.highlight.image = normalizeItemName(document.getElementById("admin-highlight-image")?.value);

      const metaIcons = Array.from(document.querySelectorAll("[data-meta-icon]"));
      const metaTexts = Array.from(document.querySelectorAll("[data-meta-text]"));
      content.highlight.meta = metaIcons.map((input, index) => ({
        icon: normalizeItemName(input.value),
        text: normalizeItemName(metaTexts[index]?.value)
      })).filter(m => m.icon || m.text);

      content.changelog.title = normalizeItemName(document.getElementById("admin-changelog-title")?.value);
      content.changelog.body = normalizeItemName(document.getElementById("admin-changelog-body")?.value);

      saveSiteContent(content);
      navigate(`#/admin?tab=home`);
    });
  }

  if (tab === "sync" && syncForm) {
    syncForm.addEventListener("submit", (e) => {
      e.preventDefault();
      setRemoteConfig({
        url: syncUrl?.value,
        key: syncKey?.value,
        table: syncTable?.value
      });
      showToast("Configuração salva.");
    });
  }

  if (tab === "sync" && syncPull) {
    syncPull.addEventListener("click", async () => {
      const updated = await syncFromRemote();
      if (updated) {
        showToast("Dados importados.");
      } else {
        showToast("Nenhuma alteração encontrada.", "warning");
      }
      handleRoute();
    });
  }

  if (tab === "sync" && syncPush) {
    syncPush.addEventListener("click", async () => {
      const ok = await pushToRemote();
      if (ok) {
        showToast("Dados enviados.");
      } else {
        showToast("Falha ao enviar.", "error");
      }
    });
  }

  if (tab === "sync") {
    const exportBtn = document.getElementById("admin-export-json");
    const importInput = document.getElementById("admin-import-json");
    if (exportBtn) {
      exportBtn.addEventListener("click", () => {
        downloadAdminData();
        showToast("Arquivo gerado.");
      });
    }
    if (importInput) {
      importInput.addEventListener("change", async (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        try {
          const text = await file.text();
          const data = JSON.parse(text);
          applyAdminDataSnapshot(data);
          showToast("Dados importados.");
          handleRoute();
        } catch (err) {
          showToast("Arquivo inválido.", "error");
        } finally {
          importInput.value = "";
        }
      });
    }
  }
}

function ItemsPage() {
  return `
    <section class="hero">
      <h2>Itens</h2>
      <p>Esta seção está em desenvolvimento. Em breve você poderá explorar todos os itens do jogo.</p>
      <a class="button" href="#/">Voltar ao Início</a>
    </section>
  `;
}

function SystemPage() {
  return `
    <section class="hero">
      <h2>Sistema</h2>
      <p>Esta seção está em desenvolvimento. Em breve você poderá aprender sobre todas as mecânicas do jogo.</p>
      <a class="button" href="#/">Voltar ao Início</a>
    </section>
  `;
}

function ComingSoon(title) {
  return `
    <div class="content-container">
      <div style="text-align: center; padding: 100px 0;">
        <div style="font-size: 64px; margin-bottom: 24px;">🚧</div>
        <h1>${title}</h1>
        <p style="color: var(--text-secondary); font-size: 18px; margin-bottom: 32px;">
          Esta página está em construção. Em breve teremos novidades!
        </p>
        <a href="#/" class="button">Voltar ao Início</a>
      </div>
    </div>
  `;
}

function StatsView() {
  const typeStats = {};
  const categoryStats = {};

  DATA.forEach(p => {
    p.types.forEach(t => {
      typeStats[t] = (typeStats[t] || 0) + 1;
    });
    areasOf(p).forEach(a => {
      categoryStats[a.category] = (categoryStats[a.category] || 0) + 1;
    });
  });

  const typeList = Object.entries(typeStats)
    .sort((a, b) => b[1] - a[1])
    .map(([type, count]) => `
      <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px; background: var(--surface); border-radius: var(--radius-md); border: 1px solid var(--border-medium);">
        <span class="type type-${type.toLowerCase()}">${type}</span>
        <strong>${count} Pokémon</strong>
      </div>
    `).join("");

  const categoryList = Object.entries(categoryStats)
    .sort((a, b) => b[1] - a[1])
    .map(([cat, count]) => `
      <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px; background: var(--surface); border-radius: var(--radius-md); border: 1px solid var(--border-medium);">
        <span class="chip">${cat}</span>
        <strong>${count} aparições</strong>
      </div>
    `).join("");

  return `
    <section class="hero" style="padding: 24px 0;">
      <h2>Estatísticas</h2>
      <p>Análise completa dos dados da Pokédex</p>
    </section>
    
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px; margin-bottom: 32px;">
      <div style="background: var(--surface); backdrop-filter: blur(12px); border: 1px solid var(--border-medium); border-radius: var(--radius-lg); padding: 24px;">
        <h3 style="margin-bottom: 16px;">📊 Total de Pokémon</h3>
        <div style="font-size: 48px; font-weight: 700; background: var(--gradient-primary); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">${DATA.length}</div>
      </div>
      
      <div style="background: var(--surface); backdrop-filter: blur(12px); border: 1px solid var(--border-medium); border-radius: var(--radius-lg); padding: 24px;">
        <h3 style="margin-bottom: 16px;">🎨 Tipos Únicos</h3>
        <div style="font-size: 48px; font-weight: 700; color: var(--accent-secondary);">${Object.keys(typeStats).length}</div>
      </div>
      
      <div style="background: var(--surface); backdrop-filter: blur(12px); border: 1px solid var(--border-medium); border-radius: var(--radius-lg); padding: 24px;">
        <h3 style="margin-bottom: 16px;">📍 Categorias</h3>
        <div style="font-size: 48px; font-weight: 700; color: var(--accent-tertiary);">${Object.keys(categoryStats).length}</div>
      </div>
    </div>
    
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 24px;">
      <div style="background: var(--surface); backdrop-filter: blur(12px); border: 1px solid var(--border-medium); border-radius: var(--radius-lg); padding: 24px;">
        <h3 style="margin-bottom: 16px;">Distribuição por Tipo</h3>
        <div style="display: grid; gap: 12px;">
          ${typeList}
        </div>
      </div>
      
      <div style="background: var(--surface); backdrop-filter: blur(12px); border: 1px solid var(--border-medium); border-radius: var(--radius-lg); padding: 24px;">
        <h3 style="margin-bottom: 16px;">Distribuição por Categoria</h3>
        <div style="display: grid; gap: 12px;">
          ${categoryList}
        </div>
      </div>
    </div>
  `;
}

function PokemonDetail(slug) {
  const p = getPokemon(slug);
  if (!p) {
    return `
      <div class="modal-overlay">
        <div class="dex-window">
          <div class="dex-header">
            <div>Pokédex</div>
            <a class="back" href="#/pokedex">✕ Fechar</a>
          </div>
          <div class="dex-body">
            <p class="empty">Pokémon não encontrado</p>
          </div>
        </div>
      </div>
    `;
  }

  const chain = evolutionChain(slug);
  const areas = areasOf(p);
  const grouped = groupAreas(areas);

  const html = `
    <div class="modal-overlay">
      <div class="dex-window">
        <div class="dex-header">
          <div>Pokédex - ${p.name}</div>
          <a class="back" href="#/pokedex">✕ Fechar</a>
        </div>
        <div class="dex-body">
          <!-- Left Panel -->
          <div class="dex-left-panel">
            <div class="dex-sprite">
              <img src="${imageUrl(p.slug)}" 
                   alt="${p.name}">
            </div>
            
            <div class="dex-info">
              <div class="dex-info-row">
                <span class="dex-info-label">ID</span>
                <span class="dex-info-value">#${String(p.id).padStart(3, '0')}</span>
              </div>
              <div class="dex-info-row">
                <span class="dex-info-label">Nome</span>
                <span class="dex-info-value">${p.name}</span>
              </div>
            </div>
            
            <div class="types">
              ${p.types.map(t => `<span class="type type-${t.toLowerCase()}">${t}</span>`).join("")}
            </div>
            
            <button class="shiny-toggle-large ${State.shiny.has(p.slug) ? 'active' : ''}" 
                    data-slug="${p.slug}" 
                    data-action="shiny-detail">
              ✨ ${State.shiny.has(p.slug) ? 'Versão Normal' : 'Versão Shiny'}
            </button>
          </div>
          
          <!-- Right Panel -->
          <div class="dex-right-panel">
            <div class="dex-tabs">
              <div class="dex-tab active" data-tab="local">📍 Local</div>
              <div class="dex-tab" data-tab="drops">💎 Drops</div>
              <div class="dex-tab" data-tab="combate">⚔️ Combate</div>
            </div>
            
            <div class="dex-panel active" data-panel="local">
            ${Array.from(grouped.keys()).map(cat => {
    const section = grouped.get(cat);

    // Check if category is "Normal" to skip generic image placeholders if any remain, 
    // though our data update script should have handled it. 
    // We also remove the category chip as requested.

    const direct = section.items.map(a => `
                <div class="area-card ${!a.image ? 'no-image' : ''}">
                  ${a.image ? `
                  <div class="area-image">
                    <img src="${a.image}" alt="${p.name} em ${a.name}" loading="lazy">
                  </div>` : ''}
                  <div class="area-meta">
                    <!-- Category chip removed -->
                    <span>${a.name}</span>
                  </div>
                </div>
              `).join("");

    const groupsHtml = Array.from(section.groups.keys()).map(sub => {
      const items = section.groups.get(sub).map(a => `
                  <div class="area-card ${!a.image ? 'no-image' : ''}">
                    ${a.image ? `
                    <div class="area-image">
                      <img src="${a.image}" alt="${p.name} em ${a.name}" loading="lazy">
                    </div>` : ''}
                    <div class="area-meta">
                      <!-- Category chip removed -->
                      <span>${sub} • ${a.name}</span>
                    </div>
                  </div>
                `).join("");
      return `
                  <div class="sub-header">${sub}</div>
                  <div class="areas-grid">${items}</div>
                `;
    }).join("");

    return `
                <div class="cat-section">
                  <div class="cat-header"><h4>${cat}</h4></div>
                  ${direct ? `<div class="areas-grid">${direct}</div>` : ''}
                  ${groupsHtml}
                </div>
              `;
  }).join("")}
          </div>
          
          <div class="dex-panel" data-panel="drops">
              <div id="drops-panel">
                ${renderDropsPanel(slug)}
              </div>
          </div>
          
          <div class="dex-panel" data-panel="combate">
            <div class="combat-section">
              <h4>⚡ Cadeia Evolutiva</h4>
              <div class="evo-chain">
                ${chain.map((s, i) => `
                  <div class="evo-item">
                    <a href="#/pokemon/${s}">
                      <img src="${imageUrl(s)}" alt="${getPokemon(s)?.name || s}">
                      <div class="evo-name">${getPokemon(s)?.name || s}</div>
                    </a>
                  </div>
                  ${i < chain.length - 1 ? '<div class="evo-arrow">→</div>' : ''}
                `).join("")}
              </div>
            </div>
            
            <div class="combat-section">
              <div class="weakness-section">
                <h4>❌ Fraquezas Analisadas</h4>
                <div class="types">
                  ${countersFor(p.types).map(t => `<span class="type type-${t.toLowerCase()}">${t}</span>`).join("")}
                </div>
              </div>
            </div>
            
            <div class="combat-section">
              <div class="resistance-section">
                <h4>✅ Resistências Táticas</h4>
                <div class="types">
                  ${resistancesFor(p.types).map(t => `<span class="type type-${t.toLowerCase()}">${t}</span>`).join("")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  setTimeout(() => initDetailListeners(slug), 0);
  return html;
}

function TalentsView(params) {
  const q = (params.q || "").toLowerCase();
  const category = params.cat || "";

  const filtered = TALENTS_DATA.filter(t => {
    const matchSearch = t.buff.toLowerCase().includes(q) ||
      t.requirements.some(r => r.item.toLowerCase().includes(q));
    const matchCat = category ? t.category === category : true;
    return matchSearch && matchCat;
  });

  const categories = Array.from(new Set(TALENTS_DATA.map(t => t.category))).sort();

  const list = filtered.map(t => `
    <div class="talent-card">
      <div class="talent-header">
        <span class="talent-category">${t.category} #${t.id}</span>
        <div class="talent-buff">${t.buff}</div>
      </div>
      <div class="talent-requirements">
        <div class="req-title">Requisitos:</div>
        <div class="req-grid">
          ${t.requirements.map(r => `
            <div class="req-item">
              <span class="req-qty">${r.quantity}x</span>
              <div class="req-meta">
                <span class="req-name">${r.item}</span>
                <span class="req-source">${r.source}</span>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    </div>
  `).join("");

  const html = `
    <div class="content-container">
      <section class="toolbar">
        <input id="talent-search" type="search" placeholder="🔍 Buscar por buff ou item..." value="${params.q || ""}">
        <select id="talent-category">
          <option value="">Todas as categorias</option>
          ${categories.map(c => `<option value="${c}" ${c === category ? "selected" : ""}>${c}</option>`).join("")}
        </select>
      </section>

      <div class="talents-grid">
        ${list || '<p class="empty">Nenhum talento encontrado.</p>'}
      </div>
    </div>
  `;

  setTimeout(() => {
    const search = document.getElementById("talent-search");
    if (search) {
      search.addEventListener("input", debounce(() => {
        const qv = encodeURIComponent(search.value.trim());
        const cv = encodeURIComponent(document.getElementById("talent-category").value);
        navigate(`#/talents?q=${qv}&cat=${cv}`);
      }, 300));
    }
    const catSel = document.getElementById("talent-category");
    if (catSel) {
      catSel.addEventListener("change", () => {
        const qv = encodeURIComponent(document.getElementById("talent-search").value.trim());
        const cv = encodeURIComponent(catSel.value);
        navigate(`#/talents?q=${qv}&cat=${cv}`);
      });
    }
  }, 0);

  return html;
}

function initDetailListeners(slug) {
  const tabs = document.querySelectorAll(".dex-tab");
  const panels = document.querySelectorAll(".dex-panel");

  tabs.forEach(t => {
    t.addEventListener("click", () => {
      const name = t.getAttribute("data-tab");
      tabs.forEach(x => x.classList.toggle("active", x === t));
      panels.forEach(p => p.classList.toggle("active", p.getAttribute("data-panel") === name));
    });
  });

  // Zoom Pan Effect (Interactive)
  const areaImages = document.querySelectorAll('.area-image');
  areaImages.forEach(container => {
    const img = container.querySelector('img');
    if (!img) return;

    container.addEventListener('mousemove', (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      img.style.transformOrigin = `${x}% ${y}%`;
    });

    container.addEventListener('mouseleave', () => {
      img.style.transformOrigin = 'center center';
    });
  });

  const shinyBtn = document.querySelector('[data-action="shiny-detail"]');
  if (shinyBtn) {
    shinyBtn.addEventListener("click", () => {
      State.toggleShiny(slug);
      const isShiny = State.shiny.has(slug);
      shinyBtn.classList.toggle('active', isShiny);
      shinyBtn.textContent = `✨ ${isShiny ? 'Versão Normal' : 'Versão Shiny'}`;

      const mainImg = document.querySelector('.dex-sprite img');
      if (mainImg) {
        mainImg.src = imageUrl(slug);
      }

      document.querySelectorAll('.evo-item a').forEach(link => {
        const href = link.getAttribute('href') || '';
        const parts = href.split('/');
        const evoSlug = parts[parts.length - 1];
        const img = link.querySelector('img');
        if (img && evoSlug) {
          img.src = imageUrl(evoSlug);
        }
      });

      const dropsPanel = document.getElementById("drops-panel");
      if (dropsPanel) {
        dropsPanel.innerHTML = renderDropsPanel(slug);
      }
    });
  }




}

// ============================================================================
// ROUTER
// ============================================================================

function render(html) {
  const app = document.getElementById("app");
  app.innerHTML = html;
  // Re-run Lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function handleRoute() {
  const { parts, params } = parseRoute();
  const part = parts[0];

  const titleMap = {
    intro: "Introdução",
    guide: "Guia Inicial",
    talents: "Talentos",
    moves: "Lista de Moves",
    items: "Itens",
    helds: "Helds",
    npcs: "NPCs",
    mechanics: "Mecânicas"
  };

  // Route handling logic
  const content = document.getElementById("app");

  // Force Sidebar update on every route change
  const sidebar = document.getElementById('sidebar');
  if (sidebar && sidebar.innerHTML.trim() === "") {
    sidebar.innerHTML = Sidebar();
    if (window.lucide) window.lucide.createIcons();
  }

  // Clean up floating island if it exists
  const existingIsland = document.querySelector(".home-island");
  if (existingIsland) existingIsland.remove();

  if (parts.length === 0) {
    render(Home());
  } else if (part === "pokedex") {
    render(PokedexList(params) + `<div class="content-container">${Footer()}</div>`);
    document.body.insertAdjacentHTML('beforeend', HomeIsland());
  } else if (part === "stats") {
    render(StatsView() + `<div class="content-container">${Footer()}</div>`);
    document.body.insertAdjacentHTML('beforeend', HomeIsland());
  } else if (part === "pokemon" && parts[1]) {
    render(PokemonDetail(parts[1]));
    document.body.insertAdjacentHTML('beforeend', HomeIsland());
  } else if (part === "talents") {
    render(TalentsView(params) + `<div class="content-container">${Footer()}</div>`);
    document.body.insertAdjacentHTML('beforeend', HomeIsland());
  } else if (part === "admin") {
    if (!isAdminUnlocked()) {
      render(AdminAuthPage());
      setTimeout(() => initAdminAuthListeners(), 0);
    } else {
      render(AdminPage(params));
    }
    document.body.insertAdjacentHTML('beforeend', HomeIsland());
  } else if (titleMap[part]) {
    render(ComingSoon(titleMap[part]));
    document.body.insertAdjacentHTML('beforeend', HomeIsland());
  } else {
    render(Home());
  }

  updateActiveNav();
  window.scrollTo(0, 0);
}

// Make openLightbox global (optional now, but keeping for compatibility)
window.openLightbox = openLightbox;

// ============================================================================
// INITIALIZATION
// ============================================================================

window.addEventListener("hashchange", handleRoute);
window.addEventListener("DOMContentLoaded", async () => {
  try {
    State.init();

    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
      const sidebarHtml = Sidebar();
      sidebar.innerHTML = sidebarHtml;

      if (window.lucide) {
        window.lucide.createIcons();
      }
    }

    handleRoute();
    const fileUpdated = await loadBackupFromFile();
    if (fileUpdated) {
      handleRoute();
    }
    const remoteUpdated = await syncFromRemote();
    if (remoteUpdated) {
      handleRoute();
    }
  } catch (err) {
    console.error("Initialization error:", err);
  }

  // Hide loading screen
  setTimeout(() => {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
      loadingScreen.classList.add('hidden');
    }
  }, 500);
});
