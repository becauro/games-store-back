
db = db.getSiblingDB(mongo_name);

db.products.drop();

db.products.insertMany(
[
  {
    "name": "Sony Playstation 5 825gb Digital Edition Cor  Branco E Preto",
    "price": 6499,
    "thumbnail": "http://localhost:3001/D_799755-MLA47058389754_082021-I.jpg",
    "description": "",
    "quantity": 7
  },
  {
    "name": "Cyberpunk 2077 Standard Edition Cd Projekt Red Ps4  Físico",
    "price": 48.2,
    "thumbnail": "http://localhost:3001/D_758983-MLA46557070313_062021-I.jpg",
    "description": "",
    "quantity": 85
  },
  {
    "name": "Microsoft Xbox Series S 512gb Standard Cor  Branco",
    "price": 2580,
    "thumbnail": "http://localhost:3001/D_635605-MLA44492818317_012021-I.jpg",
    "description": "",
    "quantity": 12
  },
  {
    "name": "Fone De Ouvido Gamer Haiz Alpha 1804 Preto E Azul",
    "price": 66.87,
    "thumbnail": "http://localhost:3001/D_627994-MLA43269928138_082020-I.jpg",
    "description": "",
    "quantity": 7
  },
  {
    "name": "Microsoft Xbox Series X 1tb Standard Cor  Preto",
    "price": 5896,
    "thumbnail": "http://localhost:3001/D_794435-MLA45046407331_032021-I.jpg",
    "description": "",
    "quantity": 44
  },
  {
    "name": "Grand Theft Auto V Standard Edition Rockstar Games Xbox 360  Físico",
    "price": 159.89,
    "thumbnail": "http://localhost:3001/D_857968-MLA44384297377_122020-I.jpg",
    "description": "",
    "quantity": 325
  },
  {
    "name": "Sony Playstation 5 825gb Standard Cor  Branco E Preto",
    "price": 6815,
    "thumbnail": "http://localhost:3001/D_669939-MLA44492818154_012021-I.jpg",
    "description": "",
    "quantity": 9
  },
  {
    "name": "Grand Theft Auto V Standard Edition Rockstar Games Ps4  Físico",
    "price": 134.9,
    "thumbnail": "http://localhost:3001/D_938202-MLA44384297373_122020-I.jpg",
    "description": "",
    "quantity": 115
  },
  {
    "name": "Nintendo Switch Lite 32gb Standard Cor  Amarelo",
    "price": 1699,
    "thumbnail": "http://localhost:3001/D_983434-MLA46868661458_072021-I.jpg",
    "description": "",
    "quantity": 7
  },
  {
    "name": "Console Tectoy Sega Master System Evolution Standard Cor  Azul",
    "price": 259.9,
    "thumbnail": "http://localhost:3001/D_755481-MLA32731813512_112019-I.jpg",
    "description": "",
    "quantity": 45
  },
  {
    "name": "Headset Over-ear Gamer Hyperx Cloud Stinger Core Black",
    "price": 239,
    "thumbnail": "http://localhost:3001/D_696228-MLA40782018138_022020-I.jpg",
    "description": "",
    "quantity": 1680
  },
  {
    "name": "Marvel's Spider-man: Miles Morales Standard Edition Sony Ps4  Físico",
    "price": 177.99,
    "thumbnail": "http://localhost:3001/D_944704-MLA44963396558_022021-I.jpg",
    "description": "",
    "quantity": 10
  },
  {
    "name": "Console Luatek Lps-505 Cor  Cinza",
    "price": 91.43,
    "thumbnail": "http://localhost:3001/D_978123-MLA45375278666_032021-I.jpg",
    "description": "",
    "quantity": 168
  },
  {
    "name": "Sony Playstation 4 1tb Standard Cor  Preto Onyx",
    "price": 3699,
    "thumbnail": "http://localhost:3001/D_985484-MLA40671062848_022020-I.jpg",
    "description": "",
    "quantity": 15
  },
  {
    "name": "Marvel's Spider-man Game Of The Year Edition Sony Ps4  Físico",
    "price": 136,
    "thumbnail": "http://localhost:3001/D_663372-MLA43440081326_092020-I.jpg",
    "description": "",
    "quantity": 6
  },
  {
    "name": "Microsoft Xbox One S 1tb Two-controller Bundle Cor  Branco",
    "price": 3700,
    "thumbnail": "http://localhost:3001/D_987070-MLA40186930094_122019-I.jpg",
    "description": "",
    "quantity": 2
  },
  {
    "name": "Fone De Ouvido Gamer Haiz Alpha 1804 Preto E Vermelho",
    "price": 66.87,
    "thumbnail": "http://localhost:3001/D_975756-MLA43269941057_082020-I.jpg",
    "description": "",
    "quantity": 135
  },
  {
    "name": "Console Xbox Series S Com Xbox Game Pass Ultimate 3 Meses",
    "price": 2799,
    "thumbnail": "http://localhost:3001/D_756118-MLB47964495457_102021-O.jpg",
    "description": "",
    "quantity": 200
  },
  {
    "name": "Minecraft  Standard Edition Microsoft Xbox 360  Físico",
    "price": 189.89,
    "thumbnail": "http://localhost:3001/D_901567-MLA45072720953_032021-I.jpg",
    "description": "",
    "quantity": 303
  },
  {
    "name": "Microsoft Xbox One S 1tb Pro Evolution Soccer 2020 Cor  Branco",
    "price": 3200,
    "thumbnail": "http://localhost:3001/D_960717-MLA40540552104_012020-I.jpg",
    "description": "",
    "quantity": 1
  },
  {
    "name": "Fone De Ouvido Over-ear Gamer Tedge Gt-g10 Preto Com Luz Led",
    "price": 129,
    "thumbnail": "http://localhost:3001/D_867559-MLA46711199568_072021-I.jpg",
    "description": "",
    "quantity": 2648
  },
  {
    "name": "Console Super Arcade Box Retro Pro 16gb Retro Pro Cor  Preto",
    "price": 409.89,
    "thumbnail": "http://localhost:3001/D_922947-MLA41890369054_052020-I.jpg",
    "description": "",
    "quantity": 458
  },
  {
    "name": "Fifa 22 Standard Edition Electronic Arts Ps4  Físico",
    "price": 249,
    "thumbnail": "http://localhost:3001/D_946325-MLA48240317465_112021-I.jpg",
    "description": "",
    "quantity": 11
  },
  {
    "name": "Sony Playstation 4 Slim 1tb Mega Pack: Grand Theft Auto V Premium Edition/death Stranding/the Last Of Us Remastered Cor  Preto Onyx",
    "price": 4986,
    "thumbnail": "http://localhost:3001/D_781136-MLA42123426178_062020-I.jpg",
    "description": "",
    "quantity": 1
  },
  {
    "name": "Headset Over-ear Gamer Hyperx Cloudx Stinger Core Preto E Verde",
    "price": 239,
    "thumbnail": "http://localhost:3001/D_984469-MLA44396908884_122020-I.jpg",
    "description": "",
    "quantity": 1161
  },
  {
    "name": "Console Playstation 5 Disco - 2 Controles Ps5 Garantia 1 Ano",
    "price": 8499,
    "thumbnail": "http://localhost:3001/D_674388-MLB46725158008_072021-O.jpg",
    "description": "",
    "quantity": 1
  },
  {
    "name": "Super Mario 3d World + Bowsers Fury Standard Edition Nintendo Switch  Físico",
    "price": 412.9,
    "thumbnail": "http://localhost:3001/D_710282-MLA45076348090_032021-I.jpg",
    "description": "",
    "quantity": 37
  },
  {
    "name": "Console Genérica Sup Cor  Preto",
    "price": 79,
    "thumbnail": "http://localhost:3001/D_903336-MLA45579893036_042021-I.jpg",
    "description": "",
    "quantity": 28
  },
  {
    "name": "Fone De Ouvido Over-ear Gamer Havit H2002d Vermelho",
    "price": 248,
    "thumbnail": "http://localhost:3001/D_738573-MLA42668147408_072020-I.jpg",
    "description": "",
    "quantity": 89
  },
  {
    "name": "Nintendo Switch Lite 32gb Standard Cor  Azul",
    "price": 1808,
    "thumbnail": "http://localhost:3001/D_757994-MLA46868652599_072021-I.jpg",
    "description": "",
    "quantity": 2
  },
  {
    "name": "Mortal Kombat 11 Standard Edition Warner Bros. Ps4  Físico",
    "price": 58.29,
    "thumbnail": "http://localhost:3001/D_965714-MLA46478134635_062021-I.jpg",
    "description": "",
    "quantity": 17
  },
  {
    "name": "Video Game Stick 4k 10mil Jogos Retro 2 Controles Sem Fio",
    "price": 529.7,
    "thumbnail": "http://localhost:3001/D_775807-MLB47763731738_102021-O.jpg",
    "description": "",
    "quantity": 250
  },
  {
    "name": "Controle Joystick Feir Fr-305 Preto",
    "price": 66.25,
    "thumbnail": "http://localhost:3001/D_992783-MLA42269190611_062020-I.jpg",
    "description": "",
    "quantity": 140
  },
  {
    "name": "Console Genérica Sup Cor  Vermelho",
    "price": 89,
    "thumbnail": "http://localhost:3001/D_749429-MLA45579893035_042021-I.jpg",
    "description": "",
    "quantity": 30
  },
  {
    "name": "Pokémon Sword Standard Edition Nintendo Switch  Físico",
    "price": 366,
    "thumbnail": "http://localhost:3001/D_726594-MLA44342030006_122020-I.jpg",
    "description": "",
    "quantity": 5
  },
  {
    "name": "Sony Playstation 4 Slim 1tb Mega Pack: The Last Of Us Remastered/god Of War/horizon Zero Dawn Complete Edition Cor  Preto Onyx",
    "price": 5149,
    "thumbnail": "http://localhost:3001/D_751430-MLA40694328907_022020-I.jpg",
    "description": "",
    "quantity": 36
  },
  {
    "name": "Novo Xbox Series X 1 Tb Ssd - Garantia 1 Ano - Pode Retirar",
    "price": 6999,
    "thumbnail": "http://localhost:3001/D_719264-MLB44478664185_012021-O.jpg",
    "description": "",
    "quantity": 1
  },
  {
    "name": "Lego Marvel Super Heroes 2 Warner Bros. Ps4  Físico",
    "price": 72.98,
    "thumbnail": "http://localhost:3001/D_605211-MLA47492769182_092021-I.jpg",
    "description": "",
    "quantity": 89
  },
  {
    "name": "Console Genérica Sup Cor  Azul",
    "price": 89,
    "thumbnail": "http://localhost:3001/D_893604-MLA45579893038_042021-I.jpg",
    "description": "",
    "quantity": 21
  },
  {
    "name": "Fone De Ouvido Over-ear Gamer Haiz Deneb Preto E Vermelho Com Luz  Vermelho Led",
    "price": 85.94,
    "thumbnail": "http://localhost:3001/D_648768-MLA43139122238_082020-I.jpg",
    "description": "",
    "quantity": 149
  },
  {
    "name": "Mini Super Nintendo 10 Mil Jogos 2 Controles Envio Imediato!",
    "price": 629,
    "thumbnail": "http://localhost:3001/D_828458-MLB47481373195_092021-O.jpg",
    "description": "",
    "quantity": 1
  },
  {
    "name": "Fifa 22 Standard Edition Electronic Arts Xbox One  Físico",
    "price": 277,
    "thumbnail": "http://localhost:3001/D_711937-MLA48240412033_112021-I.jpg",
    "description": "",
    "quantity": 3
  },
  {
    "name": "Playstation 5 C\\ Disco - Ps5 - Garantia 1 Ano - Pode Retirar",
    "price": 8099,
    "thumbnail": "http://localhost:3001/D_671237-MLB44476073512_012021-O.jpg",
    "description": "",
    "quantity": 1
  },
  {
    "name": "Fone De Ouvido Over-ear Logitech H111 Cinza",
    "price": 83.68,
    "thumbnail": "http://localhost:3001/D_627846-MLA41179103761_032020-I.jpg",
    "description": "",
    "quantity": 51
  },
  {
    "name": "Super Mario Odyssey Standard Edition Nintendo Switch  Físico",
    "price": 404.99,
    "thumbnail": "http://localhost:3001/D_867031-MLA40865317687_022020-I.jpg",
    "description": "",
    "quantity": 1
  },
  {
    "name": "Nintendo Switch Lite 32gb Standard Cor  Azul-turquesa",
    "price": 1835,
    "thumbnail": "http://localhost:3001/D_608559-MLA46868652583_072021-I.jpg",
    "description": "",
    "quantity": 1
  },
  {
    "name": "Microsoft Xbox One S 500gb Standard Cor  Branco",
    "price": 2790,
    "thumbnail": "http://localhost:3001/D_820192-MLA40655732619_022020-I.jpg",
    "description": "",
    "quantity": 1
  },
  {
    "name": "Fone De Ouvido Over-ear Gamer Knup Kp-397 Preto E Vermelho",
    "price": 84.9,
    "thumbnail": "http://localhost:3001/D_676151-MLA40944956212_022020-I.jpg",
    "description": "",
    "quantity": 374
  },
  {
    "name": "The Legend Of Zelda: Skyward Sword Hd Standard Edition Nintendo Switch  Físico",
    "price": 315,
    "thumbnail": "http://localhost:3001/D_906898-MLA46792568061_072021-I.jpg",
    "description": "",
    "quantity": 4
  },
  {
    "name": "Nintendo Switch Lite 32gb Standard Cor  Cinza",
    "price": 1866,
    "thumbnail": "http://localhost:3001/D_977008-MLA46868671160_072021-I.jpg",
    "description": "",
    "quantity": 1
  }
]);
