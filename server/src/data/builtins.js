
const europeCapitals = [
  ["Amsterdam",52.3740,4.8897],["Andorra la Vella",42.5078,1.5211],["Athene",37.9534,23.7490],["Belgrado",44.8176,20.4633],
  ["Berlijn",52.5244,13.4105],["Bern",46.9481,7.4474],["Bratislava",48.1482,17.1067],["Brussel",50.8467,4.3499],
  ["Boedapest",47.4980,19.0399],["Boekarest",44.4328,26.1043],["Chisinau",47.0056,28.8575],["Dublin",53.3331,-6.2489],
  ["Helsinki",60.1692,24.9402],["Kiev",50.4501,30.5234],["Kopenhagen",55.6759,12.5655],["Lissabon",38.7169,-9.1399],
  ["Ljubljana",46.0511,14.5051],["Londen",51.5074,-0.1278],["Luxemburg",49.6117,6.1300],["Madrid",40.4165,-3.7026],
  ["Minsk",53.9000,27.5667],["Monaco",43.7333,7.4167],["Moskou",55.7550,37.6218],["Nicosia",35.1595,33.3669],
  ["Oslo",59.9127,10.7461],["Parijs",48.8534,2.3488],["Podgorica",42.4411,19.2636],["Praag",50.0880,14.4208],
  ["Pristina",42.6629,21.1655],["Reykjavik",64.1355,-21.8954],["Riga",56.9460,24.1059],["Rome",41.8947,12.4811],
  ["San Marino",43.9333,12.4500],["Sarajevo",43.8486,18.3564],["Skopje",42.0000,21.4333],["Sofia",42.6975,23.3242],
  ["Stockholm",59.3326,18.0649],["Tallinn",59.4370,24.7535],["Tbilisi",41.6941,44.8337],["Tirana",41.3275,19.8189],
  ["Vaduz",47.1415,9.5215],["Valletta",35.8997,14.5147],["Vaticaanstad",41.9024,12.4533],["Warschau",52.2298,21.0118],
  ["Wenen",48.2064,16.3707],["Vilnius",54.6892,25.2798],["Zagreb",45.8144,15.9780]
].map(([name,lat,lng])=>({name,lat,lng}));

const africaCapitals = [
  ["Algiers",36.7525,3.0420],["Luanda",-8.8368,13.2343],["Porto-Novo",6.4969,2.6289],["Gaborone",-24.6545,25.9086],
  ["Ouagadougou",12.3642,-1.5383],["Gitega",-3.4264,29.9306],["Praia",14.9215,-23.5087],["Yaounde",3.8667,11.5167],
  ["Bangui",4.3612,18.5550],["N'Djamena",12.1067,15.0444],["Moroni",-11.7022,43.2551],["Kinshasa",-4.3276,15.3136],
  ["Brazzaville",-4.2658,15.2832],["Yamoussoukro",6.8161,-5.2767],["Djibouti",11.5877,43.1447],["Caïro",30.0392,31.2394],
  ["Malabo",3.7500,8.7833],["Asmara",15.3333,38.9333],["Mbabane",-26.3167,31.1333],["Addis Abeba",9.0250,38.7469],
  ["Libreville",0.3925,9.4537],["Banjul",13.4531,-16.6794],["Accra",5.5560,-0.1969],["Conakry",9.5716,-13.6476],
  ["Bissau",11.8636,-15.5977],["Nairobi",-1.2833,36.8167],["Maseru",-29.3167,27.4833],["Monrovia",6.3005,-10.7969],
  ["Tripoli",32.8752,13.1875],["Antananarivo",-18.9137,47.5361],["Lilongwe",-13.9669,33.7873],["Bamako",12.6500,-8.0000],
  ["Nouakchott",18.0858,-15.9785],["Port Louis",-20.1619,57.4989],["Rabat",34.0133,-6.8326],["Maputo",-25.9653,32.5892],
  ["Windhoek",-22.5594,17.0832],["Niamey",13.5137,2.1098],["Abuja",9.0574,7.4898],["Kigali",-1.9474,30.0579],
  ["Sao Tome",0.3365,6.7273],["Dakar",14.6937,-17.4441],["Victoria",-4.6167,55.4500],["Freetown",8.4840,-13.2299],
  ["Mogadishu",2.0416,45.3435],["Pretoria",-25.7479,28.2293],["Juba",4.8517,31.5825],["Khartoem",15.5518,32.5324],
  ["Dodoma",-6.1630,35.7516],["Lome",6.1375,1.2123],["Tunis",36.8065,10.1815],["Kampala",0.3476,32.5825],
  ["Lusaka",-15.4134,28.2771],["Harare",-17.8292,31.0522]
].map(([name,lat,lng])=>({name,lat,lng}));

const nlBigCities40 = [
  ["Amsterdam",52.3676,4.9041],["Rotterdam",51.9244,4.4777],["Den Haag",52.0705,4.3007],["Utrecht",52.0907,5.1214],
  ["Eindhoven",51.4416,5.4697],["Groningen",53.2194,6.5665],["Tilburg",51.5555,5.0913],["Almere",52.3508,5.2647],
  ["Breda",51.5719,4.7683],["Nijmegen",51.8126,5.8372],["Apeldoorn",52.2112,5.9699],["Haarlem",52.3874,4.6462],
  ["Arnhem",51.9851,5.8987],["Zaanstad",52.4385,4.8260],["Amersfoort",52.1561,5.3878],["Haarlemmermeer",52.3000,4.7000],
  ["s-Hertogenbosch",51.6978,5.3037],["Zoetermeer",52.0607,4.4936],["Zwolle",52.5168,6.0830],["Maastricht",50.8514,5.6900],
  ["Leiden",52.1601,4.4970],["Dordrecht",51.8133,4.6901],["Ede",52.0452,5.6640],["Westland",52.0010,4.2747],
  ["Leeuwarden",53.2012,5.7999],["Alphen aan den Rijn",52.1292,4.6558],["Emmen",52.7858,6.8976],["Delft",52.0116,4.3571],
  ["Venlo",51.3704,6.1724],["Deventer",52.2550,6.1639],["Heerlen",50.8882,5.9795],["Helmond",51.4793,5.6570],
  ["Oss",51.7650,5.5184],["Enschede",52.2215,6.8937],["Hilversum",52.2292,5.1669],["Hengelo",52.2650,6.7931],
  ["Purmerend",52.5050,4.9597],["Roosendaal",51.5310,4.4653],["Schiedam",51.9194,4.3889],["Lelystad",52.5185,5.4714]
].map(([name,lat,lng])=>({name,lat,lng}));

const countriesEasy60 = [
  ["Nederland",52.1326,5.2913],["België",50.5039,4.4699],["Luxemburg",49.8153,6.1296],["Frankrijk",46.2276,2.2137],["Spanje",40.4637,-3.7492],["Portugal",39.3999,-8.2245],
  ["Duitsland",51.1657,10.4515],["Italië",41.8719,12.5674],["Verenigd Koninkrijk",55.3781,-3.4360],["Ierland",53.1424,-7.6921],["Noorwegen",60.4720,8.4689],["Zweden",60.1282,18.6435],
  ["Finland",61.9241,25.7482],["Denemarken",56.2639,9.5018],["Polen",51.9194,19.1451],["Tsjechië",49.8175,15.4730],["Oostenrijk",47.5162,14.5501],["Zwitserland",46.8182,8.2275],
  ["Griekenland",39.0742,21.8243],["Turkije",38.9637,35.2433],["Oekraïne",48.3794,31.1656],["Rusland",61.5240,105.3188],["Egypte",26.8206,30.8025],["Marokko",31.7917,-7.0926],
  ["Algerije",28.0339,1.6596],["Nigeria",9.0820,8.6753],["Kenia",-0.0236,37.9062],["Ethiopië",9.1450,40.4897],["Tanzania",-6.3690,34.8888],["Zuid-Afrika",-30.5595,22.9375],
  ["Saudi-Arabië",23.8859,45.0792],["Israël",31.0461,34.8516],["Iran",32.4279,53.6880],["Irak",33.2232,43.6793],["India",20.5937,78.9629],["Pakistan",30.3753,69.3451],
  ["Bangladesh",23.6850,90.3563],["China",35.8617,104.1954],["Mongolië",46.8625,103.8467],["Kazachstan",48.0196,66.9237],["Japan",36.2048,138.2529],["Zuid-Korea",35.9078,127.7669],
  ["Thailand",15.8700,100.9925],["Vietnam",14.0583,108.2772],["Indonesië",-0.7893,113.9213],["Filipijnen",12.8797,121.7740],["Australië",-25.2744,133.7751],["Nieuw-Zeeland",-40.9006,174.8860],
  ["Canada",56.1304,-106.3468],["Verenigde Staten",37.0902,-95.7129],["Mexico",23.6345,-102.5528],["Cuba",21.5218,-77.7812],["Brazilië",-14.2350,-51.9253],["Argentinië",-38.4161,-63.6167],
  ["Chili",-35.6751,-71.5430],["Peru",-9.1900,-75.0152],["Colombia",4.5709,-74.2973],["Venezuela",6.4238,-66.5897],["Suriname",3.9193,-56.0278],["IJsland",64.9631,-19.0208]
].map(([name,lat,lng])=>({name,lat,lng}));

const countries100 = countriesEasy60.concat([
  ["Afghanistan",33.9391,67.7100],["Albanië",41.1533,20.1683],["Andorra",42.5063,1.5218],["Angola",-11.2027,17.8739],["Armenië",40.0691,45.0382],
  ["Azerbeidzjan",40.1431,47.5769],["Bahrein",25.9304,50.6378],["Belarus",53.7098,27.9534],["Benin",9.3077,2.3158],["Bolivia",-16.2902,-63.5887],
  ["Bosnië en Herzegovina",43.9159,17.6791],["Botswana",-22.3285,24.6849],["Bulgarije",42.7339,25.4858],["Cambodja",12.5657,104.9910],["Kameroen",7.3697,12.3547],
  ["Costa Rica",9.7489,-83.7534],["Kroatië",45.1000,15.2000],["Cyprus",35.1264,33.4299],["Dominicaanse Republiek",18.7357,-70.1627],["Ecuador",-1.8312,-78.1834],
  ["El Salvador",13.7942,-88.8965],["Estland",58.5953,25.0136],["Georgië",42.3154,43.3569],["Ghana",7.9465,-1.0232],["Guatemala",15.7835,-90.2308],
  ["Honduras",15.2000,-86.2419],["Hongarije",47.1625,19.5033],["Jordanië",30.5852,36.2384],["Koeweit",29.3117,47.4818],["Laos",19.8563,102.4955],
  ["Letland",56.8796,24.6032],["Libanon",33.8547,35.8623],["Libië",26.3351,17.2283],["Litouwen",55.1694,23.8813],["Maleisië",4.2105,101.9758],
  ["Mali",17.5707,-3.9962],["Moldavië",47.4116,28.3699],["Namibië",-22.9576,18.4904],["Nepal",28.3949,84.1240],["Nicaragua",12.8654,-85.2072]
].map(([name,lat,lng])=>({name,lat,lng})));

const countriesAll = countries100.concat([
  ["Oman",21.4735,55.9754],["Panama",8.5380,-80.7821],["Paraguay",-23.4425,-58.4438],["Qatar",25.3548,51.1839],["Roemenië",45.9432,24.9668],
  ["Servië",44.0165,21.0059],["Slowakije",48.6690,19.6990],["Slovenië",46.1512,14.9955],["Somalië",5.1521,46.1996],["Sri Lanka",7.8731,80.7718],
  ["Syrië",34.8021,38.9968],["Tunesië",33.8869,9.5375],["Verenigde Arabische Emiraten",23.4241,53.8478],["Uruguay",-32.5228,-55.7658],["Oezbekistan",41.3775,64.5853],
  ["Jemen",15.5527,48.5164],["Zambia",-13.1339,27.8493],["Zimbabwe",-19.0154,29.1549],["Bhutan",27.5142,90.4336],["Brunei",4.5353,114.7277],
  ["Burkina Faso",12.2383,-1.5616],["Burundi",-3.3731,29.9189],["Centraal-Afrikaanse Republiek",6.6111,20.9394],["Tsjaad",15.4542,18.7322],["Comoren",-11.8750,43.8722],
  ["Congo",-0.2280,15.8277],["Democratische Republiek Congo",-4.0383,21.7587],["Djibouti",11.8251,42.5903],["Equatoriaal-Guinea",1.6508,10.2679],["Eritrea",15.1794,39.7823],
  ["Gabon",-0.8037,11.6094],["Gambia",13.4432,-15.3101],["Guinee",9.9456,-9.6966],["Guinee-Bissau",11.8037,-15.1804],["Ivoorkust",7.5400,-5.5471],
  ["Lesotho",-29.6100,28.2336],["Liberia",6.4281,-9.4295],["Madagaskar",-18.7669,46.8691],["Malawi",-13.2543,34.3015],["Mauritanië",21.0079,-10.9408],
  ["Mauritius",-20.3484,57.5522],["Mozambique",-18.6657,35.5296],["Niger",17.6078,8.0817],["Rwanda",-1.9403,29.8739],["Sao Tomé en Principe",0.1864,6.6131],
  ["Senegal",14.4974,-14.4524],["Seychellen",-4.6796,55.4920],["Sierra Leone",8.4606,-11.7799],["Soedan",12.8628,30.2176],["Zuid-Soedan",6.8770,31.3070],
  ["Togo",8.6195,0.8248],["Oeganda",1.3733,32.2903],["Antigua en Barbuda",17.0608,-61.7964],["Bahama's",25.0343,-77.3963],["Barbados",13.1939,-59.5432],
  ["Belize",17.1899,-88.4976],["Dominica",15.4150,-61.3710],["Grenada",12.1165,-61.6790],["Guyana",4.8604,-58.9302],["Haïti",18.9712,-72.2852],
  ["Jamaica",18.1096,-77.2975],["Saint Kitts en Nevis",17.3578,-62.7830],["Saint Lucia",13.9094,-60.9789],["Saint Vincent en de Grenadines",12.9843,-61.2872],["Trinidad en Tobago",10.6918,-61.2225],
  ["Kirgizië",41.2044,74.7661],["Tadzjikistan",38.8610,71.2761],["Turkmenistan",38.9697,59.5563],["Myanmar",21.9162,95.9560],["Noord-Korea",40.3399,127.5101],
  ["Papoea-Nieuw-Guinea",-6.3149,143.9555],["Singapore",1.3521,103.8198],["Oost-Timor",-8.8742,125.7275],["Micronesië",7.4256,150.5508],["Fiji",-17.7134,178.0650],
  ["Samoa",-13.7590,-172.1046],["Tonga",-21.1790,-175.1982],["Vanuatu",-15.3767,166.9592],["Solomonseilanden",-9.6457,160.1562],["Malediven",3.2028,73.2207],
  ["Mongolië",46.8625,103.8467],["Palestina",31.9522,35.2332],["Kosovo",42.6026,20.9030],["Montenegro",42.7087,19.3744],["Noord-Macedonië",41.6086,21.7453],
  ["Liechtenstein",47.1660,9.5554],["Malta",35.9375,14.3754],["Monaco",43.7384,7.4246],["San Marino",43.9424,12.4578],["Vaticaanstad",41.9029,12.4534],
  ["Palau",7.5150,134.5825],["Kiribati",-3.3704,-168.7340],["Nauru",-0.5228,166.9315],["Tuvalu",-7.1095,177.6493],["Marshalleilanden",7.1315,171.1845]
].map(([name,lat,lng])=>({name,lat,lng})));

const europeWaters = [
  ["Donau",48.2,16.8],
  ["Rijn",51.95,4.2],
  ["Elbe",53.55,9.98],
  ["Taag",39.0,-8.8],
  ["Seine",49.43,0.23],
  ["Loire",47.27,-2.2],
  ["Rhône",43.3,4.8],
  ["Oder",53.55,14.6],
  ["Maas",51.73,5.69],
  ["Moezel",49.76,6.64],
  ["Main",50.12,8.68],
  ["Saône",46.78,4.85],
  ["Tiber",41.9,12.47],
  ["Theems",51.5,0.0],
  ["Ebro",41.35,0.35],
  ["Middellandse Zee",36.5,15.0],
  ["Noordzee",56.0,3.0],
  ["Oostzee",57.7,20.5],
  ["Zwarte Zee",43.2,34.0],
  ["Adriatische Zee",43.5,15.5],
  ["Egeïsche Zee",38.8,25.0],
  ["Ionische Zee",37.7,19.5],
  ["Tyrrheense Zee",40.1,11.8],
  ["Noorse Zee",66.0,2.0],
  ["Barentszzee",74.0,40.0],
  ["Keltische Zee",50.2,-8.5],
  ["Ierse Zee",53.7,-5.0],
  ["Ligurische Zee",43.8,9.5],
  ["Balearische Zee",39.4,2.0],
  ["Alboránzee",35.8,-3.3],
  ["Botnische Golf",62.7,19.5],
  ["Finse Golf",59.9,26.5],
  ["Zee van Marmara",40.75,27.75],
  ["Witte Zee",65.6,38.0],
  ["Skagerrak",58.2,9.0],
  ["Straat van Gibraltar",35.95,-5.6],
  ["Bosporus",41.15,29.1],
  ["Kattegat",57.6,11.2],
  ["Het Kanaal",50.2,-1.8],
  ["Gardameer",45.65,10.63],
  ["Comomeer",46.0,9.26],
  ["IJsselmeer",52.8,5.4]
].map(([name,lat,lng])=>({name,lat,lng}));

const nlProvincesAndCapitalsMixed = [
  ["Groningen",53.2194,6.5665],["Friesland",53.1642,5.7818],["Leeuwarden",53.2012,5.7999],["Drenthe",52.9476,6.6231],
  ["Assen",52.9928,6.5642],["Overijssel",52.4388,6.5016],["Zwolle",52.5168,6.0830],["Flevoland",52.5279,5.5954],
  ["Lelystad",52.5185,5.4714],["Gelderland",52.0452,5.8718],["Arnhem",51.9851,5.8987],["Utrecht",52.0907,5.1214],
  ["Noord-Holland",52.5206,4.7880],["Haarlem",52.3874,4.6462],["Zuid-Holland",52.0116,4.3571],["Den Haag",52.0705,4.3007],
  ["Zeeland",51.4940,3.8497],["Middelburg",51.4988,3.6109],["Noord-Brabant",51.5540,5.0000],["s-Hertogenbosch",51.6978,5.3037],
  ["Limburg",51.2093,5.9334],["Maastricht",50.8514,5.6900]
].map(([name,lat,lng])=>({name,lat,lng}));


export const builtInAssignments = [
  { key:"europe-capitals", name:"Alle Europese hoofdsteden", region:"Europa", difficulty:null, payload:{center:[54,16],zoom:6.05,kind:"capital",items:europeCapitals} },
  { key:"africa-capitals", name:"Alle Afrikaanse hoofdsteden", region:"Afrika", difficulty:null, payload:{center:[2,20],zoom:5.65,kind:"capital",items:africaCapitals} },
  { key:"nl-big-cities", name:"De 40 grootste steden van Nederland", region:"Nederland", difficulty:null, payload:{center:[52.15,5.3],zoom:10.05,kind:"city",items:nlBigCities40} },
  { key:"nl-provinces-capitals-mixed", name:"Provincies en provinciehoofdsteden", region:"Nederland", difficulty:"door elkaar", payload:{center:[52.15,5.3],zoom:8.9,kind:"city",items:nlProvincesAndCapitalsMixed} },
  { key:"world-countries-easy", name:"Landen van de wereld — 60 landen", region:"Wereld", difficulty:"makkelijk", payload:{center:[22,8],zoom:4.75,kind:"country",items:countriesEasy60} },
  { key:"world-countries-normal", name:"Landen van de wereld — 100 landen", region:"Wereld", difficulty:"normaal", payload:{center:[22,8],zoom:4.75,kind:"country",items:countries100} },
  { key:"world-countries-hard", name:"Landen van de wereld — alle landen", region:"Wereld", difficulty:"moeilijk", payload:{center:[22,8],zoom:4.65,kind:"country",items:countriesAll} },
  { key:"europe-waters", name:"Wateren in Europa", region:"Europa", difficulty:null, payload:{center:[54,11],zoom:5.75,kind:"water",items:europeWaters} }
];
