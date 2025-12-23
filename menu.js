const menuData = {
    "categories": [
        {
            "id": "pizze",
            "name": "Pizze e Pinse",
            "sections": [
                {
                    "name": "Classiche",
                    "items": [
                        {
                            "name": "4 Stagioni",
                            "description": "Pomodoro, mozzarella, prosciutto cotto, funghi trifolati, carciofi, salsiccia",
                            "pricing": { "type": "single", "price": 10.00 }
                        },
                        {
                            "name": "Bufala",
                            "description": "Pomodoro, mozzarella di bufala campana, basilico",
                            "pricing": { "type": "single", "price": 9.50 }
                        },
                        {
                            "name": "Capricciosa",
                            "description": "Pomodoro, mozzarella, prosciutto cotto, funghi trifolati, carciofi, olive",
                            "pricing": { "type": "single", "price": 10.00 }
                        },
                        {
                            "name": "Cotto",
                            "description": "Pomodoro, mozzarella, prosciutto cotto",
                            "pricing": { "type": "single", "price": 8.50 }
                        },
                        {
                            "name": "Crudo",
                            "description": "Pomodoro, mozzarella, prosciutto crudo",
                            "pricing": { "type": "single", "price": 8.50 }
                        },
                        {
                            "name": "Diavola",
                            "description": "Pomodoro, mozzarella, salame piccante",
                            "pricing": { "type": "single", "price": 8.50 }
                        },
                        {
                            "name": "Funghi e Salsiccia",
                            "description": "Pomodoro, mozzarella, funghi trifolati, salsiccia",
                            "pricing": { "type": "single", "price": 9.50 }
                        },
                        {
                            "name": "Funghi Freschi",
                            "description": "Pomodoro, mozzarella, funghi freschi",
                            "pricing": { "type": "single", "price": 8.00 }
                        },
                        {
                            "name": "Funghi Porcini",
                            "description": "Pomodoro, mozzarella, funghi porcini",
                            "pricing": { "type": "single", "price": 8.50 }
                        },
                        {
                            "name": "Funghi Trifolati",
                            "description": "Pomodoro, mozzarella, funghi trifolati",
                            "pricing": { "type": "single", "price": 8.00 }
                        },
                        {
                            "name": "Funghi Trifolati e Cotto",
                            "description": "Pomodoro, mozzarella, funghi trifolati, prosciutto cotto",
                            "pricing": { "type": "single", "price": 9.50 }
                        },
                        {
                            "name": "Gorgonzola",
                            "description": "Pomodoro, mozzarella, gorgonzola",
                            "pricing": { "type": "single", "price": 8.50 }
                        },
                        {
                            "name": "Margherita",
                            "description": "Pomodoro, mozzarella",
                            "pricing": { "type": "single", "price": 6.50 }
                        },
                        {
                            "name": "Marinara",
                            "description": "Pomodoro, aglio, olio, origano",
                            "pricing": { "type": "single", "price": 6.50 }
                        },
                        {
                            "name": "Melanzane",
                            "description": "Pomodoro, mozzarella, melanzane al forno",
                            "pricing": { "type": "single", "price": 8.50 }
                        },
                        {
                            "name": "Napoli",
                            "description": "Pomodoro, mozzarella, acciughe, origano",
                            "pricing": { "type": "single", "price": 8.00 }
                        },
                        {
                            "name": "Ortolana",
                            "description": "Pomodoro, mozzarella, melanzane trifolate, peperoni, zucchine",
                            "pricing": { "type": "single", "price": 10.00 }
                        },
                        {
                            "name": "Pomodoro",
                            "description": "Pomodoro",
                            "pricing": { "type": "single", "price": 6.00 }
                        },
                        {
                            "name": "Romana",
                            "description": "Pomodoro, mozzarella, acciughe, capperi, origano",
                            "pricing": { "type": "single", "price": 8.50 }
                        },
                        {
                            "name": "Salsiccia e Patatine",
                            "description": "Pomodoro, mozzarella, salsiccia, patatine",
                            "pricing": { "type": "single", "price": 9.50 }
                        },
                        {
                            "name": "Tonno e Cipolla",
                            "description": "Pomodoro, mozzarella, tonno, cipolla",
                            "pricing": { "type": "single", "price": 9.50 }
                        },
                        {
                            "name": "Würstel e Patate",
                            "description": "Pomodoro, mozzarella, wurstel, patatine fritte",
                            "pricing": { "type": "single", "price": 9.50 }
                        }
                    ]
                },
                {
                    "name": "Bianche",
                    "items": [
                        {
                            "name": "4 Formaggi",
                            "description": "Mozzarella, fontina, gorgonzola, grana",
                            "pricing": { "type": "single", "price": 10.00 }
                        },
                        {
                            "name": "Faina",
                            "description": "Olio, prosciutto crudo",
                            "pricing": { "type": "single", "price": 7.50 }
                        },
                        {
                            "name": "Insolita",
                            "description": "Mozzarella, salsiccia, cipolla rossa, patate al forno, funghi trifolati, olio piccante",
                            "pricing": { "type": "single", "price": 11.00 }
                        },
                        {
                            "name": "Inverno",
                            "description": "Mozzarella, crema tartufata, salsiccia, speck, grana",
                            "pricing": { "type": "single", "price": 10.50 }
                        },
                        {
                            "name": "La Burrata",
                            "description": "Mozzarella, burrata, mortadella, pistacchi",
                            "pricing": { "type": "single", "price": 10.50 }
                        },
                        {
                            "name": "Noci, Miele, Speck",
                            "description": "Mozzarella, noci, miele di acacia, speck",
                            "pricing": { "type": "single", "price": 9.50 }
                        },
                        {
                            "name": "Schiacciatina Bianca/Rossa",
                            "description": "Olio, sale, rosmarino",
                            "pricing": { "type": "single", "price": 5.00 }
                        },
                        {
                            "name": "Tricolore",
                            "description": "Mozzarella, pomodorini pugliesi. In uscita: squacquerone e rucola",
                            "pricing": { "type": "single", "price": 9.50 }
                        }
                    ]
                },
                {
                    "name": "Speciali",
                    "items": [
                        {
                            "name": "Affumicata",
                            "description": "Pomodoro, mozzarella, melanzana al forno, scamorza, salsiccia",
                            "pricing": { "type": "single", "price": 10.50 }
                        },
                        {
                            "name": "Amatriciana",
                            "description": "Pomodoro, mozzarella, pancetta, peperoncino in cottura, cipolla",
                            "pricing": { "type": "single", "price": 10.00 }
                        },
                        {
                            "name": "Briosa",
                            "description": "Pomodoro, mozzarella, brie, rucola, funghi freschi",
                            "pricing": { "type": "single", "price": 10.00 }
                        },
                        {
                            "name": "Collina",
                            "description": "Pomodoro, mozzarella, funghi porcini, pomodorini, rucola, grana",
                            "pricing": { "type": "single", "price": 10.50 }
                        },
                        {
                            "name": "Contadina",
                            "description": "Pomodoro, mozzarella, salame piccante, funghi porcini, gorgonzola, salsiccia",
                            "pricing": { "type": "single", "price": 11.00 }
                        },
                        {
                            "name": "Dama Piccante",
                            "description": "Pomodoro, bufala, salame piccante, pomodorini",
                            "pricing": { "type": "single", "price": 10.00 }
                        },
                        {
                            "name": "Delizia",
                            "description": "Pomodoro, mozzarella. In uscita: pomodorini pugliesi, prosciutto crudo, basilico",
                            "pricing": { "type": "single", "price": 10.50 }
                        },
                        {
                            "name": "Desiderio",
                            "description": "Pomodoro, mozzarella, gorgonzola, salame dolce, melanzane al forno",
                            "pricing": { "type": "single", "price": 10.50 }
                        },
                        {
                            "name": "Friarielli e Salsiccia",
                            "description": "Pomodoro, mozzarella, friarielli, salsiccia",
                            "pricing": { "type": "single", "price": 9.50 }
                        },
                        {
                            "name": "Gorgò",
                            "description": "Pomodoro, mozzarella, radicchio, gorgonzola, noci",
                            "pricing": { "type": "single", "price": 9.50 }
                        },
                        {
                            "name": "La Patata",
                            "description": "Pomodoro, mozzarella, patate al forno, salsiccia",
                            "pricing": { "type": "single", "price": 9.50 }
                        },
                        {
                            "name": "Marinaio",
                            "description": "Pomodoro, mozzarella, tonno, cipolla, capperi, acciughe, origano",
                            "pricing": { "type": "single", "price": 9.50 }
                        },
                        {
                            "name": "Mediterranea",
                            "description": "Pomodoro, bufala, pomodorini, origano, olive",
                            "pricing": { "type": "single", "price": 9.50 }
                        },
                        {
                            "name": "Messico",
                            "description": "Pomodoro, mozzarella, salame piccante, fagioli piccanti, cipolla tropea",
                            "pricing": { "type": "single", "price": 10.00 }
                        },
                        {
                            "name": "Montanara",
                            "description": "Pomodoro, mozzarella, funghi trifolati, salsiccia, pecorino",
                            "pricing": { "type": "single", "price": 10.50 }
                        },
                        {
                            "name": "Parmigiana",
                            "description": "Pomodoro, mozzarella, melanzane al forno, prosciutto cotto, grana",
                            "pricing": { "type": "single", "price": 10.50 }
                        },
                        {
                            "name": "Piccantella",
                            "description": "Pomodoro, mozzarella, patate al forno, gorgonzola, salame piccante",
                            "pricing": { "type": "single", "price": 10.50 }
                        },
                        {
                            "name": "Puglia",
                            "description": "Pomodoro, mozzarella, melanzane trifolate, salsiccia, pomodorini, basilico",
                            "pricing": { "type": "single", "price": 10.50 }
                        },
                        {
                            "name": "Regina Margherita",
                            "description": "Pomodoro, bufala, basilico, pomodorini, grana grattuggiato in cottura, olio d'oliva",
                            "pricing": { "type": "single", "price": 10.50 }
                        },
                        {
                            "name": "Rustica",
                            "description": "Pomodoro, mozzarella, zucchine, patate al forno, pancetta",
                            "pricing": { "type": "single", "price": 10.50 }
                        },
                        {
                            "name": "Saporita",
                            "description": "Pomodoro, mozzarella, salame piccante, cipolla, peperoni, salsiccia, origano",
                            "pricing": { "type": "single", "price": 11.00 }
                        },
                        {
                            "name": "Stuzzichina",
                            "description": "Pomodoro, mozzarella, peperoni, cipolla tropea, olive, pancetta",
                            "pricing": { "type": "single", "price": 10.50 }
                        },
                        {
                            "name": "Vulcano",
                            "description": "Pomodoro, mozzarella, nduja, burrata",
                            "pricing": { "type": "single", "price": 10.00 }
                        },
                        {
                            "name": "Zingara",
                            "description": "Pomodoro, mozzarella, scamorza, patate al forno, peperoni",
                            "pricing": { "type": "single", "price": 10.50 }
                        },
                    ]
                },
                {
                    "name": "Variazioni in Aggiunta",
                    "items": [
                        {
                            "name": "Integrale al Farro",
                            "description": "",
                            "pricing": { "type": "single", "price": 1.50 }
                        },
                        {
                            "name": "Stesa",
                            "description": "",
                            "pricing": { "type": "single", "price": 2.00 }
                        },
                        {
                            "name": "Stesa",
                            "description": "",
                            "pricing": {
                                "type": "multiple",
                                "options": [
                                    { "size": "270 gr", "price": 1.50 },
                                    { "size": "320 gr", "price": 2.00 },
                                ]
                            }
                        },
                        {
                            "name": "Verdure",
                            "description": "",
                            "pricing": { "type": "single", "price": 1.00 }
                        },
                        {
                            "name": "Bufala",
                            "description": "",
                            "pricing": { "type": "single", "price": 2.50 }
                        },
                        {
                            "name": "Formaggi",
                            "description": "",
                            "pricing": { "type": "single", "price": 2.00 }
                        },
                        {
                            "name": "Affettati",
                            "description": "",
                            "pricing": { "type": "single", "price": 2.00 }
                        },
                    ]
                }
            ]
        },
        {
            "id": "calzone",
            "name": "Calzone fritto",
            "items": [
                {
                    "name": "Pomodoro, mozzarella",
                    "description": "Pomodoro, mozzarella",
                    "pricing": { "type": "single", "price": 8.00 }
                },
                {
                  "name": "1",
                    "description": "mozzarella, scamorza,  melanzane trifolate ",
                    "pricing": { "type": "single", "price": 10.00 }
                 },
                {
                  "name": "2",
                    "description": "pomodoro, mozzarella, salame piccante ",
                    "pricing": { "type": "single", "price": 10.00}
                 },
                {
                  "name": "3",
                    "description": "mozzarella, mortadella, grana ",
                    "pricing": { "type": "single", "price": 10.00}
                },
               {
                  "name": "4",
                   "description": "pomodoro, mozzarella, prosciutto cotto ",
                    "pricing": { "type": "single", "price": 10.00}
                },
               {
                  "name": "5",
                    "description": "Quattro formaggi: gorgonzola, mozzarella, fontina, grana, nduja ",
                    "pricing": { "type": "single", "price": 10.00}
                        ]
        },
        {
            "id": "stuzzicheria",
            "name": "Stuzzicheria",
            "items": [
                {
                    "name": "Anelli di cipolla fritti",
                    "description": "",
                    "pricing": { "type": "single", "price": 6.00 }
                },
                {
                    "name": "Patate fritte",
                    "description": "",
                    "pricing": { "type": "single", "price": 5.50 }
                },
                {
                    "name": "Patatone al sale grosso, rosmarino e alloro",
                    "description": "",
                    "pricing": { "type": "single", "price": 6.00 }
                },
                {
                    "name": "Crocchette di pollo",
                    "description": "",
                    "pricing": { "type": "single", "price": 6.50 }
                },
                {
                    "name": "Verdure pastellate",
                    "description": "",
                    "pricing": { "type": "single", "price": 7.00 }
                },
                {
                    "name": "Olive all'ascolana",
                    "description": "",
                    "pricing": { "type": "single", "price": 7.00 }
                }
            ]
        },
        {
            "id": "bruschette",
            "name": "Bruschette",
            "sections": [
                {
                    "name": "Le Bruschette",
                    "description": "Base di cm 40 circa (a richiesta anche senza aglio).<br>Con possibilità di 2 abbinamenti + € 1",
                    "items": [
                        {
                            "name": "Afrodisiaca",
                            "description": "Salsa piccante, salame piccante, squacquerone, pancetta",
                            "pricing": { "type": "single", "price": 9.00 }
                        },
                        {
                            "name": "Americana",
                            "description": "Maionese, würstel / patatine e fontina",
                            "pricing": { "type": "single", "price": 9.00 }
                        },
                        {
                            "name": "Asiago",
                            "description": "Salame dolce, porcini, scamorza",
                            "pricing": { "type": "single", "price": 9.00 }
                        },
                        {
                            "name": "Autunno",
                            "description": "Crema di verdure, peperoni, mozzarella, salsiccia con cipolla",
                            "pricing": { "type": "single", "price": 9.00 }
                        },
                        {
                            "name": "Bologna",
                            "description": "Salsa ai fegatini, salsiccia con cipolla, pomodori secchi, bufala",
                            "pricing": { "type": "single", "price": 9.00 }
                        },
                        {
                            "name": "Brie",
                            "description": "Brie, mozzarella, funghi freschi, rucola",
                            "pricing": { "type": "single", "price": 9.00 }
                        },
                        {
                            "name": "Bud Spencer",
                            "description": "Tonno, fagioli, cipolla",
                            "pricing": { "type": "single", "price": 9.00 }
                        },
                        {
                            "name": "Campagnola",
                            "description": "Funghi misti, prosciutto crudo, squacquerone, rucola",
                            "pricing": { "type": "single", "price": 9.00 }
                        },
                        {
                            "name": "Ciccio",
                            "description": "Funghi trifolati, mozzarella, salsiccia con cipolla",
                            "pricing": { "type": "single", "price": 9.00 }
                        },
                        {
                            "name": "Delicata",
                            "description": "Prosciutto crudo, pomodorini, rucola, squacquerone",
                            "pricing": { "type": "single", "price": 9.00 }
                        },
                        {
                            "name": "Fisarmonica",
                            "description": "Speck, funghi porcini, gorgonzola",
                            "pricing": { "type": "single", "price": 9.00 }
                        },
                        {
                            "name": "Friarielli",
                            "description": "Mozzarella, friarielli, salsiccia con cipolla",
                            "pricing": { "type": "single", "price": 9.00 }
                        },
                        {
                            "name": "Gentile",
                            "description": "Crema di carciofi, zucchine, squacquerone",
                            "pricing": { "type": "single", "price": 9.00 }
                        },
                        {
                            "name": "Gustosa",
                            "description": "Patate al forno, salsiccia con cipolla, mozzarella",
                            "pricing": { "type": "single", "price": 9.00 }
                        },
                        {
                            "name": "Maya",
                            "description": "Salame piccante, gorgonzola, pomodorini",
                            "pricing": { "type": "single", "price": 9.00 }
                        },
                        {
                            "name": "Messicana",
                            "description": "Fagioli piccanti, salame piccante, fontina",
                            "pricing": { "type": "single", "price": 9.00 }
                        },
                        {
                            "name": "My Italy",
                            "description": "Salsa di pomodoro, zucchine, mozzarella",
                            "pricing": { "type": "single", "price": 9.00 }
                        },
                        {
                            "name": "Norma",
                            "description": "Melanzane al forno, zucchine, mozzarella",
                            "pricing": { "type": "single", "price": 9.00 }
                        },
                        {
                            "name": "Parigina",
                            "description": "Crema di funghi, mozzarella, funghi misti",
                            "pricing": { "type": "single", "price": 9.00 }
                        },
                        {
                            "name": "Profumata",
                            "description": "Melanzane trifolate, crema tartufata, mozzarella",
                            "pricing": { "type": "single", "price": 9.00 }
                        },
                        {
                            "name": "4 Formaggi",
                            "description": "Gorgonzola, mozzarella, grana, fontina",
                            "pricing": { "type": "single", "price": 9.00 }
                        },
                        {
                            "name": "Rossa",
                            "description": "Crema di verdure, radicchio, pomodori secchi, cipolla dolce di tropea, pancetta",
                            "pricing": { "type": "single", "price": 9.00 }
                        },
                        {
                            "name": "Scamorza",
                            "description": "Crema di carciofi, melanzane trifolate, scamorza",
                            "pricing": { "type": "single", "price": 9.00 }
                        },
                        {
                            "name": "Sfiziosa",
                            "description": "Crema tartufata, funghi porcini, speck, grana",
                            "pricing": { "type": "single", "price": 9.00 }
                        },
                        {
                            "name": "Sottobosco",
                            "description": "Funghi misti, crema di funghi, prosciutto crudo",
                            "pricing": { "type": "single", "price": 9.00 }
                        },
                        {
                            "name": "Summer",
                            "description": "Crema di carciofi, funghi freschi, radicchio, pomodorini, mozzarella",
                            "pricing": { "type": "single", "price": 9.00 }
                        },
                        {
                            "name": "Tirolese",
                            "description": "Crema tartufata, speck, funghi trifolati, grana, mozzarella",
                            "pricing": { "type": "single", "price": 9.00 }
                        },
                        {
                            "name": "Treviso",
                            "description": "Crema tartufata, peperoni, radicchio, funghi freschi, mozzarella, gorgonzola",
                            "pricing": { "type": "single", "price": 9.00 }
                        },
                        {
                            "name": "Vegetariana",
                            "description": "Crema di carciofi, zucchine, pomodori secchi, cipolla dolce di tropea",
                            "pricing": { "type": "single", "price": 9.00 }
                        },
                        {
                            "name": "Verde",
                            "description": "Zucchine, crema di carciofi, pancetta, fontina",
                            "pricing": { "type": "single", "price": 9.00 }
                        },
                        {
                            "name": "Verona",
                            "description": "Crema di verdure, prosciutto crudo, melanzane trifolate, squacquerone",
                            "pricing": { "type": "single", "price": 9.00 }
                        },
                        {
                            "name": "Viola",
                            "description": "Melanzane al forno, mozzarella, crema di carciofi, funghi freschi",
                            "pricing": { "type": "single", "price": 9.00 }
                        }
                    ]
                },
                {
                    "name": "Le Bruschette Miste della Casa",
                    "description": "Base di cm 40 circa (a richiesta anche senza aglio).<br>Con possibilità di 2 abbinamenti + € 1",
                    "items": [
                        {
                            "name": "Mista dell'orto",
                            "description": "Gentile, Viola, Profumata, Vegetariana",
                            "pricing": { "type": "single", "price": 10.50 }
                        },
                        {
                            "name": "Mista della casa",
                            "description": "Delicata, Parigina, Autunno, Sottobosco",
                            "pricing": { "type": "single", "price": 10.50 }
                        },
                        {
                            "name": "Mista Piccante",
                            "description": "Afrodisiaca, Maya, Messicana",
                            "pricing": { "type": "single", "price": 10.50 }
                        },
                        {
                            "name": "Mista Lago Max",
                            "description": "- Crudo, squacquerone, melanzana, grana <br> - Crudo, squacquerone, zucchine, grana <br> - Crudo, squacquerone, funghi freschi, grana",
                            "pricing": { "type": "single", "price": 10.50 }
                        },
                        {
                            "name": "Mista Milano",
                            "description": "- Salame dolce, porcini, scamorza <br> - Salame dolce, peperoni, mozzarella <br> - Salame dolce, melanzane, gorgonzola",
                            "pricing": { "type": "single", "price": 10.50 }
                        },
                        {
                            "name": "Vegana",
                            "description": "- Crema di carciofi, funghi freschi, pomodorini <br> - Melanzane al forno e pomodoro a fetta <br> - Zucchine, radicchio, ristretto aceto balsamico",
                            "pricing": { "type": "single", "price": 10.50 }
                        }
                    ]
                }
            ]
        },
        {
            "id": "contorni",
            "name": "Vuoto",
            "items": []
        },
        {
            "id": "primi",
            "name": "Vuoto",
            "items": []
        },
        {
            "id": "dessert",
            "name": "Dessert",
            "items": [
                {
                    "name": "Cheesecake ai frutti di bosco / pistacchio",
                    "description": "",
                    "pricing": { "type": "single", "price": 5.50 }
                },
                {
                    "name": "Cuore caldo",
                    "description": "Tortino al cioccolato",
                    "pricing": { "type": "single", "price": 5.50 }
                },
                {
                    "name": "Semifreddo mascarpone con amaretto",
                    "description": "",
                    "pricing": { "type": "single", "price": 5.50 }
                },
                {
                    "name": "Torino al pistacchio",
                    "description": "",
                    "pricing": { "type": "single", "price": 5.50 }
                },
                {
                    "name": "Tiramisù",
                    "description": "",
                    "pricing": { "type": "single", "price": 5.50 }
                },
                {
                    "name": "Profiterole",
                    "description": "",
                    "pricing": { "type": "single", "price": 5.50 }
                },
                {
                    "name": "Tartufo Bianco / Nero",
                    "description": "",
                    "pricing": { "type": "single", "price": 4.50 }
                },
                {
                    "name": "Sorbetto al caffè / limone",
                    "description": "",
                    "pricing": { "type": "single", "price": 3.50 }
                },
                {
                    "name": "Bruschetta alla Nutella (~ 40 cm)",
                    "description": "Panna aggiuntiva: 1.00 €",
                    "pricing": { "type": "single", "price": 6.00 }
                },
                {
                    "name": "Pizza alla Nutella",
                    "description": "Panna aggiuntiva: 1.00 €",
                    "pricing": { "type": "single", "price": 8.00 }
                }
            ]
        },
        {
            "id": "menu_bimbo",
            "name": "Menu Bimbo",
            "items": [
                {
                    "name": "Happy baby",
                    "description": "Crocchette di pollo e patate fritte",
                    "pricing": { "type": "single", "price": 9.50 }
                }
            ]
        },
        {
            "id": "bevande",
            "name": "Bevande",
            "sections": [
                {
                    "name": "Analcoliche",
                    "items": [
                        {
                            "name": "Acqua in bottiglia",
                            "description": "",
                            "pricing": {
                                "type": "multiple",
                                "options": [
                                    { "size": "1/2", "price": 1.50 },
                                    { "size": "Litro", "price": 2.50 }
                                ]
                            }
                        },
                        {
                            "name": "Pepsi alla spina",
                            "description": "",
                            "pricing": {
                                "type": "multiple",
                                "options": [
                                    { "size": "Piccola", "price": 2.50 },
                                    { "size": "Media", "price": 4.00 },
                                    { "size": "Litro", "price": 7.50 }
                                ]
                            }
                        },
                        {
                            "name": "Pepsi in bottiglia di vetro",
                            "description": "",
                            "pricing": { "type": "single", "price": 7.50 }
                        },
                        {
                            "name": "Bibite in lattina",
                            "description": "Pepsi, Pepsi Zero, 7 Up, Aranciata, Tè al limone/pesca",
                            "pricing": { "type": "single", "price": 2.50 }
                        },
                        {
                            "name": "Bibite in lattina",
                            "description": "Coca Cola, Coca Cola Zero",
                            "pricing": { "type": "single", "price": 3.00 }
                        }
                    ]
                },
                {
                    "name": "Birre alla Spina",
                    "items": [
                        {
                            "name": "Birra Dab alla spina",
                            "description": "Bionda / Tedesca",
                            "pricing": {
                                "type": "multiple",
                                "options": [
                                    { "size": "Piccola", "price": 3.50 },
                                    { "size": "Media", "price": 5.00 },
                                    { "size": "Litro", "price": 9.50 }
                                ]
                            }
                        },
                        {
                            "name": "Birra alla spina",
                            "description": "Rossa / ambrata / tedesca",
                            "pricing": {
                                "type": "multiple",
                                "options": [
                                    { "size": "Piccola", "price": 4.00 },
                                    { "size": "Media", "price": 5.00 },
                                    { "size": "Litro", "price": 10.00 }
                                ]
                            }
                        }
                    ]
                },
                {
                    "name": "Birre in Bottiglia",
                    "items": [
                        {
                            "name": "Moretti",
                            "description": "50 cl",
                            "pricing": { "type": "single", "price": 5.50 }
                        },
                        {
                            "name": "Nastro Azzurro",
                            "description": "50 cl",
                            "pricing": { "type": "single", "price": 5.50 }
                        },
                        {
                            "name": "Weissbier",
                            "description": "50 cl",
                            "pricing": { "type": "single", "price": 5.50 }
                        },
                        {
                            "name": "Rosé",
                            "description": "50 cl",
                            "pricing": { "type": "single", "price": 5.50 }
                        },
                        {
                            "name": "Blonde",
                            "description": "33 cl",
                            "pricing": { "type": "single", "price": 4.50 }
                        },
                        {
                            "name": "Moretti (analcolica)",
                            "description": "33 cl",
                            "pricing": { "type": "single", "price": 4.50 }
                        },
                        {
                            "name": "Moretti",
                            "description": "66 cl",
                            "pricing": { "type": "single", "price": 5.50 }
                        },
                        {
                            "name": "Stella Rossa Friuli",
                            "description": "50 cl",
                            "pricing": { "type": "single", "price": 4.50 }
                        },
                        {
                            "name": "Lager Chiara",
                            "description": "50 cl",
                            "pricing": { "type": "single", "price": 5.00 }
                        },
                        {
                            "name": "Birra nel Borgo, Lager Chiara",
                            "description": "50 cl",
                            "pricing": { "type": "single", "price": 5.50 }
                        },
                        {
                            "name": "Weizen non filtrata",
                            "description": "50 cl",
                            "pricing": { "type": "single", "price": 5.00 }
                        }
                    ]
                },
                {
                    "name": "Vini",
                    "items": [
                        {
                            "name": "Vino alla spina (Rosso)",
                            "description": "",
                            "pricing": {
                                "type": "multiple",
                                "options": [
                                    { "size": "1/4", "price": 4.00 },
                                    { "size": "1/2", "price": 5.50 },
                                    { "size": "Litro", "price": 10.00 }
                                ]
                            }
                        },
                        {
                            "name": "Vino Fermo / Frizzante (Bianco)",
                            "description": "",
                            "pricing": {
                                "type": "multiple",
                                "options": [
                                    { "size": "1/4", "price": 4.00 },
                                    { "size": "1/2", "price": 5.50 },
                                    { "size": "Litro", "price": 9.00 }
                                ]
                            }
                        },
                        {
                            "name": "Sangiovese La Mora (Rosso)",
                            "description": "75 cl",
                            "pricing": { "type": "single", "price": 15.00 }
                        },
                        {
                            "name": "Greco di Tufo (Bianco)",
                            "description": "75 cl",
                            "pricing": { "type": "single", "price": 15.00 }
                        },
                        {
                            "name": "Vino spumante (Dolce)",
                            "description": "75 cl",
                            "pricing": { "type": "single", "price": 15.00 }
                        },
                        {
                            "name": "Vino spumante (Secco)",
                            "description": "75 cl",
                            "pricing": { "type": "single", "price": 15.00 }
                        }
                    ]
                },
                {
                    "name": "Bar",
                    "items": [
                        {
                            "name": "Caffè / Decaffeinato",
                            "description": "",
                            "pricing": { "type": "single", "price": 1.50 }
                        },
                        {
                            "name": "Correzione",
                            "description": "",
                            "pricing": { "type": "single", "price": 1.00 }
                        },
                        {
                            "name": "Orzo",
                            "description": "Tazza Piccola / Grande",
                            "pricing": { "type": "single", "price": 1.50 }
                        },
                        {
                            "name": "Amari e liquori",
                            "description": "",
                            "pricing": { "type": "single", "price": 4.00 }
                        }
                    ]
                }
            ]
        },
        {
            "id": "vuoto",
            "name": "Vuoto",
            "items": []
        }
    ]

};





