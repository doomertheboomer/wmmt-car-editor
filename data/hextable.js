// Hex Address Table
const HEXTABLE = {
    wmmt5: { 
        name: "WMMT 5",
        location: {

            // Indexes are [y, x]

            // 00000020

            //'plate-prefecture': [2, 0],
            'cars': [2, 12],

            // 00000030
        
            'colour': [3, 0],
            'colour-custom': [3, 4],
            'rims': [3, 8],
            'rims-colour': [3, 12],
        
            // 00000040

            'aero': [4, 0],
            'hood': [4, 4],

            // 00000050
        
            'wing': [5, 0],
            'mirror': [5, 4],
        
            //'body-sticker': [5, 8],
            //'japan-sticker': [5, 9],
            //'sticker-colour': [5, 12],

            // 00000080
        
            'trunk': [8, 0],
        
            'plate-frame': [8, 4],
            //'special-plate-frame': [8, 5],
            'plate-frame-colour': [8, 10],
            //'plate-number': [8, 12],

            // 00000090

            'power': [9, 8],
            'handling': [9, 12],

            // 000000A0

            'rank': [10, 4],
        }, 
        value: {

            cars: { // Car IDs
                "00": "Corvette ZR1", 
                "01": "Corvette ZR1 Taxi", 
                "02": "Corvette Camaro SS",
                "03": "Corvette Camaro SS (Matte)",
                "04": "Corvette Stingray",
                "05": "Mazda MX5",
                "06": "Mazda RX7 (FD)",
                "07": "Mazda RX7 (FC)",
                "08": "Mazda RX8",
                "09": "Eunos Cosmo",
                "0A": "Mazda 6MPS",
                "0B": "Mazda 6MPS School",
                "0C": "Mazda RX7 Turbo SA",
                "0D": "Mazda 110S Cosmo",
                "0E": "Mitsubishi EVO X",
                "0F": "Mitsubishi EVO 9",
                "10": "Mitsubishi EVO 8", 
                "11": "Mitsubishi EVO 8 RS", 
                "12": "Mitsubishi EVO 6",
                "13": "Mitsubishi EVO 6 RS",
                "14": "Mitsubishi EVO 5",
                "15": "Mitsubishi EVO 5 RS",
                "16": "Mitsubishi EVO 3",
                "17": "Mitsubishi EVO 3 RS",
                "18": "Mitsubishi GTO",
                "19": "Mitsubishi Starion",
                "1A": "Mitsubishi Pajero Evo",
                "1B": "Nissan GT-R",
                "1C": "Nissan GT-R Spec V",
                "1D": "Nissan GT-R R34",
                "1E": "Nissan GT-R R34 VSpec 2 NUR",
                "1F": "Nissan GT-R R33",
                "20": "Nissan GT-R R32", 
                "21": "Nissan Skyline GT-R", 
                "22": "Nissan 370Z",
                "23": "Nissan 350Z",
                "24": "Nissan 300ZX (Z32)",
                "25": "Nissan 200ZX (Z31)",
                // "26": "",
                "27": "Nissan Fairlady Z",
                "28": "Nissan Sylvia S15",
                "29": "Nissan 180SX",
                "2A": "Nissan Skyline 370GT",
                "2B": "Nissan Fuga",
                "2C": "Ruf CTR",
                "2D": "Ruf RGT",
                "2E": "Ruf RK",
                "2F": "Subaru WRX GRB",
                "30": "Subaru WRX GDB-F", 
                "31": "Subaru WRX GDB-C", 
                "32": "Subaru WRX GDB-C Spec C",
                "33": "Subaru WRX GC8",
                "34": "Subaru WRX GC8 RS",
                "35": "Subaru Legacy",
                "36": "Subaru SVX",
                "37": "Subaru R2",
                "38": "Subaru Legacy",
                "39": "Toyota Supra",
                "3A": "Toyota Supra JZA 70",
                "3B": "Toyota MR2",
                "3C": "Toyota Chaser",
                "3D": "Toyota Celsior",
                // "3E": "",
                // "3F": "",
                // "40": "", 
                // "41": "", 
                "42": "Toyota Celsior Taxi",
                // "43": "",
                // "44": "",
                // "45": "",
                // "46": "",
                "47": "Toyota Aristo",
                "48": "Toyota Aristo Taxi",
                "49": "Toyota Corrola",
                "4A": "Toyota Hiace",
                "4B": "Toyota Hiace Lift",
                "4C": "Toyota Crown",
                "4D": "Toyota AE86",
                "4E": "Toyota Celica",
                "4F": "Toyota 2000GT",
                "50": "Toyota 2000GT", 
                "51": "Nissan R34", 
                "52": "BMW M3",
                // "53": "Crash",
                "54": "Corvette Stingray",
                "55": "Mazda Miata",
                "56": "Mazda Savanna",
                "57": "Mercedes 500E",
                "58": "Mercedes SLK",
                "59": "Mitsubishi Galant",
                "5A": "Nissan Gloria",
                "5B": "Nissan Skyline",
                "5C": "Nissan Stagea",
                "5D": "RUF RT35",
                "5E": "Subaru (GVB)",
                "5F": "Subaru BRZ",
                "60": "Toyota Soarer", 
                "61": "Toyota 86", 
                "62": "Hiace Super GL",
                "63": "Maxi G Truck",
                // "64": "Crash",
                "65": "BMW M3 (Matte)",
                // "66": "Crash",
                "67": "SLK Taxi",
                "68": "Hiace Super GL Lift",
                "69": "BMW M1 (Test)",
                "6A": "BMW M3 CSL (Test)",
                "6B": "Mercedes SLS (Test)",
                "6C": "Audi R8 (Test)",
                "6D": "Audi RS4 (Test)",
                "6E": "Dodge Viper (Test)",
                "6F": "Dodge Charger (Test)",
                // "71": "Crash (Wheel-less GT-R)",
                "72": "Mazda Miata (Test, Big Wheels)",
                // "73": "",
                // "74": "",
                // "75": "",
                // "76": "",
                // "77": "",
                // "78": "",
                // "79": "",
                // "7A": "",
                // "7B": "",
                // "7C": "",
                // "7D": "",
                // "7E": "",
                // "7F": "",
            }, 
            aero: { // Body Kits
                "00": "Stock",
                "01": "Aero Set A",
                "02": "Aero Set B",
                "03": "Aero Set C",
                "04": "Aero Set D",
                "05": "Aero Set E",
                "06": "Aero Set F",
                "07": "Aero Set G",
                "08": "Aero Set H"
            }, 
            wing: { // Rear Wings
                "00": "Stock",
                "01": "GT Wing Straight",
                "02": "GT Wing 3D",
                "03": "Exclusive Wing A",
                "04": "GT Wing Twin",
                "05": "GT Wing 3D 2",
                "06": "Exclusive Wing B",
                "07": "Exclusive Wing B",
                "08": "GT Wing Swan",
                "09": "No Wing",
            }, 
            hood: { // Bonnet / Hood
                "00": "Stock",
                "01": "Carbon Hood Original Style",
                "02": "FRP Bonnet A",
                "03": "Carbon Bonnet (with duct 1)",
                "04": "FRP Bonnet B",
                "05": "FRP Bonnet C",
                "06": "FRP Bonnet D",
                "07": "Carbon Bonnet (with duct 2)",
                "08": "Carbon Bonnet (with duct 3)"
            }, 
            mirror: { // Mirror
                "00": "Stock Mirror",
                "01": "Aero Mirror"
            }, 
            trunk: { // Trunk
                "00": "Stock Trunk",
                "01": "Carbon Trunk"
            }, 
            neon: { // Neon / Underglow
                "00": "No Neon", 
                "01": "Green Straight", 
                "02": "Blue Straight", 
                "03": "Purple Straight", 
                "04": "Red Straight", 
                "05": "Yellow Straight", 
                "06": "Light Purple Straight", 
                "07": "Green Dotted", 
                "08": "Blue Dotted", 
                "09": "Purple Dotted", 
                "0A": "Purple Dotted", 
                "0B": "Yellow Dotted", 
                "0C": "Light Purple Dotted", 
            }, 
            frame: { // License Plate Frame
                "00": "Stock", 
                "01": "Green (L/R Lights)",
                "02": "Red Stripes", 
                "03": "YM Speed Blue"
            }, 
            rims: {
                "00": "Stock",
                "0A": "Yokohama Model T5 (T5)",
                "0B": "Watanabe Eight Spoke (EIGHT)",
                "0C": "Watanabe Forged Mg Cyclone (CYCL)",
                "0D": "Watanabe Stellar (STEL)",
                "0E": "Watanabe GR-8",
                "0F": "Watanabe New RS8 (RS8)",
                "01": "Yokohama Advan Racing RCIII (RC3)",
                "02": "Yokohama Advan Racing TCIII (TC3)",
                "03": "Yokohama Super Advan Racing ver.2",
                "04": "Yokohama Advan Racing RG-D2 (RGD2)",
                "05": "Yokohama Advan Racing RGIII (RG3)",
                "06": "Yokohama Advan Racing RSII (RS2)",
                "07": "Yokohama Advan Racing RS-D (RSD)",
                "08": "Yokohama AVS Model T6",
                "09": "Yokohama Advan Racing GT (ARGT)",
                "10": "Rays VR CE28N (CE28)",
                "11": "Rays Gram Lights 57ANA (57ANA)",
                "12": "Rays Lucianna Stratagia (LUCI)",
                "13": "Rays Gram Lights 57D (57D)",
                "14": "Rays VR TE37 Saga (37SAGA)",
                "15": "Rays VR TE037 DURA (37DURA)",
                "16": "Rays VR GT-Type M (GTM)",
                "17": "Rays Gabbana (GABB)",
                "18": "Rays VR RE30 (RE30)",
                "19": "Rays Gram Lights 57F (57F)",
                "1A": "Rays 57 Accelerate (57AC)",
                "1B": "Rays ZE40 (ZE40)",
                "1C": "(Unknown)",
                "1D": "Enkei Racing RPF1 (RPF1)",
                "1E": "Enkei Racing Revolution NT03R (NT03RR)",
                "1F": "Enkei WPS JL01",
                "20": "Enkei Racing RS05 (RS05)",
                "21": "Enkei Racing JS+M",
                "22": "Enkei ES-TARMAC (TARMAC)",
                "23": "Enkei Performance Line PF07",
                "24": "(Unknown)",
                "25": "OZ Crono 3",
                "26": "OZ Rally Racing (RR)",
                "27": "OZ ForgiataGT (ForGT)",
                "28": "OZ Leggenda (LEGG)",
                "29": "OZ Superturismo LM (SUPE)",
                "2A": "OZ Formula HLT",
                "2B": "OZ Zeus HLT Forged (ZEUS)",
                "2C": "OZ Torino (TRIN)",
                "2D": "OZ Versilia (VERS)",
                "2E": "OZ Ultraleggera (ULEG)",
                "2F": "BBS RI-D",
                "30": "BBS RI-A",
                "31": "BBS FS",
                "32": "BBS RG-R",
                "33": "BBS Super-RS (SRS)",
                "34": "BBS RI-D",
                "35": "BBS LM",
                "36": "BBS FZ-MG",
                "37": "Yokohama Advan Racing RG-D (RGD)",
                "38": "Yokohama Advan Racing TC II (TC2)",
                "39": "Yokohama Racing Model T7 (T7)",
                "3A": "(Unknown)",
                "3B": "Yokohama Advan Racing RSII",
                "3C": "Yokohama Advan Racing RZ",
                "3D": "Yokohama AVS Model T6 (T6)",
                "3E": "Enkei Racing RS+M",
                "3F": "(Unknown)",
                "40": "Yokohama Kreutzer Vi",
                "41": "Yokohama Advan Racing RZ-DF (RZDF)",
                "42": "Yokohama Advan Model F50 (F50)",
                "43": "Rays VR TE37 (TE37)",
                "44": "Rays GT Type C",
                "45": "Rays BL-10-SX",
                "46": "Rays Shotgun (SHOT)",
                "47": "Rays X401 (X401)",
                "48": "(Unknown)",
                "49": "Rays 77NTL (77NTL)",
                "4A": "Rays G10 (G10)",
                "4B": "Rays SPR-EX",
                "4C": "Rays F2B",
                "4E": "(Unknown)",
                "4F": "Rays Arpione (ARPI)",
                "50": "Rays V350 (V350)",
                "51": "(Unknown)",
                "52": "Rays Scudo (SCUD)",
                "53": "(Unknown)",
                "54": "Rays Homura 2X8GT"
            }, 
            power: {
                "00": "0 Points (Stock)", // No mods
                "01": "1 Point (360 HP)",
                "02": "2 Points", 
                "03": "3 Points", 
                "04": "4 Points", 
                "05": "5 Points", 
                "06": "6 Points", 
                "07": "7 Points", 
                "08": "8 Points", 
                "09": "9 Points",
                "0A": "10 Points (600 HP)", // 600 HP
                "0B": "11 Points (620 HP)", // 620 HP
                "0C": "12 Points (640 HP)", // 640 HP
                "0D": "13 Points (660 HP)", // 660 HP
                "0E": "14 Points (680 HP)", // 680 HP
                "0F": "15 Points (700 HP)", // 700 HP
                "10": "16 Points (720 HP)", // 720 HP
                "11": "17 Points (740 HP)", // 740 HP
                "12": "18 Points (760 HP)", // 760 HP
                "13": "19 Points (780 HP)", // 780 HP
                "14": "20 Points (800 HP)", // 800 HP
                "15": "21 Points (815 HP)", // 815 HP
                "16": "22 Points (830 HP)", // 830 HP
            }, 
            handling: {
                "00": "0 Points (Stock)", // No mods
                "01": "1 Point",
                "02": "2 Points", 
                "03": "3 Points", 
                "04": "4 Points", 
                "05": "5 Points", 
                "06": "6 Points", 
                "07": "7 Points", 
                "08": "8 Points", 
                "09": "9 Points",
                "0A": "10 Points",
                "0B": "11 Points",
                "0C": "12 Points",
                "0D": "13 Points",
                "0E": "14 Points",
                "0F": "15 Points",
                "10": "16 Points",
                "11": "17 Points",
                "12": "18 Points",
                "13": "19 Points",
                "14": "20 Points",
                "15": "21 Points",
                "16": "22 Points",
            }, 
            rank: {
                "01": "N", 
                "02": "C9", 
                "03": "C8", 
                "04": "C7", 
                "05": "C6", 
                "06": "C5", 
                "07": "C4", 
                "08": "C3", 
                "09": "C2", 
                "0A": "C1", 
                "0B": "B9", 
                "0C": "B8", 
                "0D": "B7", 
                "0E": "B6", 
                "0F": "B5", 
                "10": "B4", 
                "11": "B3", 
                "12": "B2", 
                "13": "B1", 
                "14": "A9", 
                "15": "A8", 
                "16": "A7", 
                "17": "A6", 
                "18": "A5", 
                "19": "A4", 
                "1A": "A3", 
                "1B": "A2", 
                "1C": "A1", 
                "1D": "S9", 
                "1E": "S8", 
                "1F": "S7", 
                "20": "S6", 
                "21": "S5", 
                "22": "S4", 
                "23": "S3", 
                "24": "S2", 
                "25": "S1", 
                "26": "SS9", 
                "27": "SS8", 
                "28": "SS7", 
                "29": "SS6", 
                "2A": "SS5", 
                "2B": "SS4", 
                "2C": "SS3", 
                "2D": "SS2", 
                "2E": "SS1", 
                "2F": "SSS9", 
                "30": "SSS8", 
                "31": "SSS7", 
                "32": "SSS6", 
                "33": "SSS5", 
                "34": "SSS4", 
                "35": "SSS3", 
                "36": "SSS2", 
                "37": "SSS1", 
                "38": "SSSS", 
            }, 
            sticker: {
                body: { 
                    // Body stickers
                    "00": {
                        // No stickers
                    },
                    "01": {
                        // Racing Stripe
                        "00": "Red",
                        "01": "Orange",
                        "02": "Yellow",
                        "03": "Green",
                        "04": "Pink",
                        "05": "Light Blue",
                        "06": "Purple",
                        "07": "Black",
                        "08": "Silver",
                        "09": "White",
                    }, 
                    "02": {
                        // Fire Pattern 1
                        "00": "Red",
                        "01": "Orange",
                        "02": "Yellow",
                        "03": "Green",
                        "04": "Pink",
                        "05": "Light Blue",
                        "06": "Purple",
                        "07": "Black",
                        "08": "Silver",
                        "09": "White",
                    }, 
                    "03": {
                        // Racing Stripe 2
                        "00": "Red",
                        "01": "Orange",
                        "02": "Yellow",
                        "03": "Green",
                        "04": "Pink",
                        "05": "Light Blue",
                        "06": "Purple",
                        "07": "Black",
                        "08": "Silver",
                        "09": "White",
                    }, 
                    "04": {
                        // Fire Pattern 2
                        "00": "Red",
                        "01": "Orange",
                        "02": "Yellow",
                        "03": "Green",
                        "04": "Pink",
                        "05": "Light Blue",
                        "06": "Purple",
                        "07": "Black",
                        "08": "Silver",
                        "09": "White",
                    }, 
                    "05": { // Pac Man
                        "00": "Pac Man"
                    }, 
                    "06": { // Namco
                        "00": "Namco"
                    }, 
                    "07": { // Works
                        "00": "Works"
                    }, 
                    "08": {
                        // Racing Stripe 3
                        "00": "Red",
                        "01": "Orange",
                        "02": "Yellow",
                        "03": "Green",
                        "04": "Pink",
                        "05": "Light Blue",
                        "06": "Purple",
                        "07": "Black",
                        "08": "Silver",
                        "09": "White",
                    }, 
                    "09": {
                        // Fire Pattern 3
                        "00": "Red",
                        "01": "Orange",
                        "02": "Yellow",
                        "03": "Green",
                        "04": "Pink",
                        "05": "Light Blue",
                        "06": "Purple",
                        "07": "Black",
                        "08": "Silver",
                        "09": "White",
                    }, 
                    "0A": {
                        // Tribal 1
                        "00": "Red",
                        "01": "Orange",
                        "02": "Yellow",
                        "03": "Green",
                        "04": "Pink",
                        "05": "Light Blue",
                        "06": "Purple",
                        "07": "Black",
                        "08": "Silver",
                        "09": "White",
                    }, 
                    "0B": {
                        // Camo 1
                        "00": "Camo 1"
                    }, 
                    "0C": {
                        // One Point 1
                        "00": "Number",
                        "01": "Number",
                        "02": "Number",
                        "03": "Number",
                        "04": "Number",
                        "05": "Number",
                        "06": "Number",
                        "07": "Number",
                        "08": "Number",
                        "09": "Number",
                    }, 
                    "0D": {
                        // Fire Pattern 4
                        "00": "Red",
                        "01": "Yellow",
                        "02": "Green",
                        "03": "Pink",
                        "04": "Blue",
                    }, 
                    "0E": {
                        // Japonism 1
                        "00": "Red",
                        "01": "Orange",
                        "02": "Yellow",
                        "03": "Green",
                        "04": "Pink",
                        "05": "Light Blue",
                        "06": "Purple",
                        "07": "Black",
                        "08": "Silver",
                        "09": "White",
                    }, 
                    "0F": {
                        // Competition 1
                        "00": "Red",
                        "01": "Orange",
                        "02": "Yellow",
                        "03": "Green",
                        "04": "Pink",
                        "05": "Light Blue",
                        "06": "Purple",
                        "07": "Black",
                        "08": "Silver",
                        "09": "White",
                    }, 
                    "10": {
                        // Racing Stripe 4
                        "00": "Red",
                        "01": "Orange",
                        "02": "Yellow",
                        "03": "Green",
                        "04": "Pink",
                        "05": "Light Blue",
                        "06": "Purple",
                        "07": "Black",
                        "08": "Silver",
                        "09": "White",
                    }, 
                    "11": {
                        // Animal 1
                        "00": "Yellow", 
                        "01": "Black"
                    }, 
                    "12": {
                        // Tribal 2 (For RUF Custom Stripe 2)
                        "00": "Red",
                        "01": "Orange",
                        "02": "Yellow",
                        "03": "Green",
                        "04": "Pink",
                        "05": "Light Blue",
                        "06": "Purple",
                        "07": "Black",
                        "08": "Silver",
                        "09": "White",
                    }, 
                    "13": {
                        // Graffiti 1
                        "00": "Graffiti"
                    }, 
                    "14": {
                        // Checker 1
                        "00": "Red",
                        "01": "Orange",
                        "02": "Yellow",
                        "03": "Green",
                        "04": "Pink",
                        "05": "Light Blue",
                        "06": "Purple",
                        "07": "Black",
                        "08": "Silver",
                        "09": "White",
                    }, 
                    "15": {
                        // Camo 2
                        "00": "Camo 2"
                    }, 
                    "16": {
                        // Japonism 2
                        "00": "Japonism 2"
                    }, 
                    "17": {
                        // Animal 2
                        "00": "Red",
                        "01": "Orange",
                        "02": "Yellow",
                        "03": "Green",
                        "04": "Pink",
                        "05": "Light Blue",
                        "06": "Purple",
                        "07": "Black",
                        "08": "Silver",
                        "09": "White",
                    },
                    "18": {
                        // One Point 2
                        "00": "Red",
                        "01": "Orange",
                        "02": "Yellow",
                        "03": "Green",
                        "04": "Pink",
                        "05": "Light Blue",
                        "06": "Purple",
                        "07": "Black",
                        "08": "Silver",
                        "09": "White",
                    },
                    "19": {
                        // Graffiti 2
                        "00": "Graffiti 2"
                    }, 
                    "1A": {
                        // Tribal 3
                        "00": "Red",
                        "01": "Orange",
                        "02": "Yellow",
                        "03": "Green",
                        "04": "Pink",
                        "05": "Light Blue",
                        "06": "Purple",
                        "07": "Black",
                        "08": "Silver",
                        "09": "White",
                    },
                    "1B": {
                        // Galaga
                        "00": "Galaga"
                    }, 
                    "1C": {
                        // One Point 3
                        "00": "Red",
                        "01": "Orange",
                        "02": "Yellow",
                        "03": "Green",
                        "04": "Pink",
                        "05": "Light Blue",
                        "06": "Purple",
                        "07": "Black",
                        "08": "Silver",
                        "09": "White",
                    },
                    "1D": {
                        // Graffiti 1
                        "00": "Graffiti 1"
                    }, 
                    "1E": {
                        // Pin Stripe
                        "00": "Red",
                        "01": "Orange",
                        "02": "Yellow",
                        "03": "Green",
                        "04": "Pink",
                        "05": "Light Blue",
                        "06": "Purple",
                        "07": "Black",
                        "08": "Silver",
                        "09": "White",
                    },
                    "1F": {
                        // Competition 1
                        "00": "Red",
                        "01": "Orange",
                        "02": "Yellow",
                        "03": "Green",
                        "04": "Pink",
                        "05": "Light Blue",
                        "06": "Purple",
                        "07": "Black",
                        "08": "Silver",
                        "09": "White",
                    },
                    "20": {
                        // Racing Stripe 5
                        "00": "Red",
                        "01": "Orange",
                        "02": "Yellow",
                        "03": "Green",
                        "04": "Pink",
                        "05": "Light Blue",
                        "06": "Purple",
                        "07": "Black",
                        "08": "Silver",
                        "09": "White",
                    },
                    "21": {
                        // Racing Stripe 6
                        "00": "Red",
                        "01": "Orange",
                        "02": "Yellow",
                        "03": "Green",
                        "04": "Pink",
                        "05": "Light Blue",
                        "06": "Purple",
                        "07": "Black",
                        "08": "Silver",
                        "09": "White",
                    },
                    "22": {
                        // Racing Stripe 7
                        "00": "Red",
                        "01": "Orange",
                        "02": "Yellow",
                        "03": "Green",
                        "04": "Pink",
                        "05": "Light Blue",
                        "06": "Purple",
                        "07": "Black",
                        "08": "Silver",
                        "09": "White",
                    },
                    "23": {
                        // Thunder Bolt 1
                        "00": "Thunder Bolt 1"
                    }, 
                    "24": {
                        // Thunder Bolt 2
                        "00": "Thunder Bolt 2"
                    }, 
                    "25": {
                        // Thunder Bolt 5
                        "00": "Thunder Bolt 5"
                    }, 
                    "26": {
                        // Tribal 4
                        "00": "Red",
                        "01": "Orange",
                        "02": "Yellow",
                        "03": "Green",
                        "04": "Pink",
                        "05": "Light Blue",
                        "06": "Purple",
                        "07": "Black",
                        "08": "Silver",
                        "09": "White",
                    },
                    "27": {
                        // Tribal 5
                        "00": "Red",
                        "01": "Orange",
                        "02": "Yellow",
                        "03": "Green",
                        "04": "Pink",
                        "05": "Light Blue",
                        "06": "Purple",
                        "07": "Black",
                        "08": "Silver",
                        "09": "White",
                    },
                    "28": {
                        // Checker 2
                        "00": "Red",
                        "01": "Orange",
                        "02": "Yellow",
                        "03": "Green",
                        "04": "Pink",
                        "05": "Light Blue",
                        "06": "Purple",
                        "07": "Black",
                        "08": "Silver",
                        "09": "White",
                    },
                    "29": {
                        // Competition 3
                        "00": "Red",
                        "01": "Orange",
                        "02": "Yellow",
                        "03": "Green",
                        "04": "Pink",
                        "05": "Light Blue",
                        "06": "Purple",
                        "07": "Black",
                        "08": "Silver",
                        "09": "White",
                    },
                    "2A": {
                        // Two Tone ?
                        "00": "Red",
                        "01": "Orange",
                        "02": "Yellow",
                        "03": "Green",
                        "04": "Pink",
                        "05": "Light Blue",
                        "06": "Purple",
                        "07": "Black",
                        "08": "Silver",
                        "09": "White",
                    },
                }, 
                roof: {
                    // Roof Stickers
                    "00": {
                        // Stock
                        "00": "Stock",
                    }, 
                    "01": {
                        // Stripes ?
                        "00": "Red", 
                        "01": "Blue", 
                        "02": "Orange"
                    }, 
                    "02": {
                        // Stripes ?
                        "01": "Green & Black"
                    }, 
                    "03": {
                        // Checker Pattern ?
                        "01": "Yellow & Black"
                    }
                }, 
                japan: {
                    // Japan Challenge Stickers
                    // CANNOT BE USED WITH NORMAL STICKERS!
                    "00": {
                        // Stock
                        "00": "Stock"
                    }, 
                    "01": {
                        // Japan Challenge Stickers 1
                        "00": "Red",
                        "01": "Orange",
                        "02": "Yellow",
                        "03": "Green",
                        "04": "Pink",
                        "05": "Light Blue",
                        "06": "Purple",
                        "07": "Black",
                        "08": "Silver",
                        "09": "White",
                    }, 
                    "02": {
                        // Japan Challenge Stickers 2
                        "00": "Red",
                        "01": "Orange",
                        "02": "Yellow",
                        "03": "Green",
                        "04": "Pink",
                        "05": "Light Blue",
                        "06": "Purple",
                        "07": "Black",
                        "08": "Silver",
                        "09": "White",
                    }, 
                    "03": {
                        // Japan Challenge Stickers 3
                        "00": "Red",
                        "01": "Orange",
                        "02": "Yellow",
                        "03": "Green",
                        "04": "Pink",
                        "05": "Light Blue",
                        "06": "Purple",
                        "07": "Black",
                        "08": "Silver",
                        "09": "White",
                    }, 
                    "04": {
                        // Japan Challenge Stickers 4
                        "00": "Red",
                        "01": "Orange",
                        "02": "Yellow",
                        "03": "Green",
                        "04": "Pink",
                        "05": "Light Blue",
                        "06": "Purple",
                        "07": "Black",
                        "08": "Silver",
                        "09": "White",
                    }, 
                    "05": {
                        // Japan Challenge Stickers 5
                        "00": "Red",
                        "01": "Orange",
                        "02": "Yellow",
                        "03": "Green",
                        "04": "Pink",
                        "05": "Light Blue",
                        "06": "Purple",
                        "07": "Black",
                        "08": "Silver",
                        "09": "White",
                    }, 
                    "06": {
                        // Japan Challenge 6 Summer
                        "00": "Japan Challenge 6 Summer"
                    }, 
                    "07": {
                        // Japan Challenge 7 Fall
                        "00": "Japan Challenge 7 Fall"
                    }, 
                    "08": {
                        // Japan Challenge 1 Spring
                        "00": "Japan Challenge 1 Spring"
                    }, 
                    "09": {
                        // Japan Challenge 2 Summer
                        "00": "Japan Challenge 2 Summer"
                    }, 
                    "0A": {
                        // Japan Challenge 3 Fall
                        "00": "Japan Challenge 3 Fall"
                    }, 
                    "0B": {
                        // Japan Challenge 4 Winter
                        "00": "Japan Challenge 4 Winter"
                    }, 
                    "0C": {
                        // Japan Challenge 5 Spring
                        "00": "Japan Challenge 5 Spring"
                    }, 
                    "0D": {
                        // Japan Challenge 6 Summer
                        "00": "Japan Challenge 8 Winter"
                    }, 
                    "0E": {
                        // Japan Challenge 7 Fall
                        "00": "Japan Challenge 7 Fall"
                    }, 
                    "0F": {
                        // Japan Challenge 8 Winter
                        "00": "Japan Challenge 8 Winter"
                    }, 
                }
            }, 
            colour: {
                // Custom Colour
                "00": "No Custom Colour",
                "01": "Custom Colour 1",
                "02": "Custom Colour 2",
                "03": "Custom Colour 3",
                "04": "Custom Colour 4",
                "05": "Custom Colour 5",
                "06": "Custom Colour 6",
                "07": "Custom Colour 7",
                "08": "Custom Colour 8",
                "09": "Custom Colour 9",
                "0A": "Custom Colour 10",
                "0B": "Custom Colour 11",
                "0C": "Custom Colour 12",
                "0D": "Custom Colour 13",
                "0E": "Custom Colour 14",
                "0F": "Custom Colour 15",
                "10": "Custom Colour 16",
                "11": "Custom Colour 17",
                "12": "Custom Colour 18",
                "13": "Custom Colour 19",
                "14": "Custom Colour 20",
                "15": "Custom Colour 21",
                "16": "Custom Colour 22",
                "17": "Custom Colour 23",
                "18": "Custom Colour 24",
                "19": "Custom Colour 25",
                "1A": "Custom Colour 26",
                "1B": "Custom Colour 27",
                "1C": "Custom Colour 28",
                "1D": "Custom Colour 29",
                "1E": "Custom Colour 30",
                "1F": "Custom Colour 31",
                "20": "Custom Colour 32",
                "21": "Custom Colour 33",
                "22": "Custom Colour 34",
                "23": "Custom Colour 35",
                "24": "Custom Colour 36",
                "25": "Custom Colour 37",
                "26": "Custom Colour 38",
                "27": "Custom Colour 39",
                "28": "Custom Colour 40",
            }         
        }
    }, 
    wmmt5dx: {
        name: "WMMT 5DX/DX+",
        location: {

            // Indexes are [y, x]

            // 00000020

            'region': [2, 8],

            // 00000030

            'cars': [3, 4],        
            
            'colour': [3, 8],
            'colour-custom': [3, 12],
        
            // 00000040

            'rims': [4, 0],
            'rims-colour': [4, 4],

            'aero': [4, 8],
            'hood': [4, 12],

            // 00000050
        
            'wing': [5, 8],
            'mirror': [5, 12],

            // 00000060
        
            //'body-sticker': [5, 8],
            //'japan-sticker': [5, 9],
            //'sticker-colour': [5, 12],

            // 00000090

            'neon': [9, 0],
        
            'trunk': [9, 4],
        
            'plate-frame': [9, 8],

            // 000000A0

            'plate-number0': [10, 0],
            'plate-number1': [10, 1],
            'plate-number2': [10, 2],
            'plate-number3': [10, 3],

            // 000000A0
            'power': [10, 12],

            // 000000B0

            'handling': [11, 8],
            'rank': [11, 12]
        }, 
        value: {

            cars: { // Car IDs
                "00": "Corvette ZR1", 
                "01": "Corvette ZR1 Taxi", 
                "02": "Corvette Camaro SS",
                "03": "Corvette Camaro SS (Matte)",
                "04": "Corvette Stingray",
                "05": "Mazda MX5",
                "06": "Mazda RX7 (FD)",
                "07": "Mazda RX7 (FC)",
                "08": "Mazda RX8",
                "09": "Eunos Cosmo",
                "0A": "Mazda 6MPS",
                "0B": "Mazda 6MPS School",
                "0C": "Mazda RX7 Turbo SA",
                "0D": "Mazda 110S Cosmo",
                "0E": "Mitsubishi EVO X",
                "0F": "Mitsubishi EVO 9",
                "10": "Mitsubishi EVO 8", 
                "11": "Mitsubishi EVO 8 RS", 
                "12": "Mitsubishi EVO 6",
                "13": "Mitsubishi EVO 6 RS",
                "14": "Mitsubishi EVO 5",
                "15": "Mitsubishi EVO 5 RS",
                "16": "Mitsubishi EVO 3",
                "17": "Mitsubishi EVO 3 RS",
                "18": "Mitsubishi GTO",
                "19": "Mitsubishi Starion",
                "1A": "Mitsubishi Pajero Evo",
                "1B": "Nissan GT-R",
                "1C": "Nissan GT-R Spec V",
                "1D": "Nissan GT-R R34",
                "1E": "Nissan GT-R R34 VSpec 2 NUR",
                "1F": "Nissan GT-R R33",
                "20": "Nissan GT-R R32", 
                "21": "Nissan Skyline GT-R", 
                "22": "Nissan 370Z",
                "23": "Nissan 350Z",
                "24": "Nissan 300ZX (Z32)",
                "25": "Nissan 200ZX (Z31)",
                // "26": "",
                "27": "Nissan Fairlady Z",
                "28": "Nissan Sylvia S15",
                "29": "Nissan 180SX",
                "2A": "Nissan Skyline 370GT",
                "2B": "Nissan Fuga",
                "2C": "Ruf CTR",
                "2D": "Ruf RGT",
                "2E": "Ruf RK",
                "2F": "Subaru WRX GRB",
                "30": "Subaru WRX GDB-F", 
                "31": "Subaru WRX GDB-C", 
                "32": "Subaru WRX GDB-C Spec C",
                "33": "Subaru WRX GC8",
                "34": "Subaru WRX GC8 RS",
                "35": "Subaru Legacy",
                "36": "Subaru SVX",
                "37": "Subaru R2",
                "38": "Subaru Legacy",
                "39": "Toyota Supra",
                "3A": "Toyota Supra JZA 70",
                "3B": "Toyota MR2",
                "3C": "Toyota Chaser",
                "3D": "Toyota Celsior",
                // "3E": "",
                // "3F": "",
                // "40": "", 
                // "41": "", 
                "42": "Toyota Celsior Taxi",
                // "43": "",
                // "44": "",
                // "45": "",
                // "46": "",
                "47": "Toyota Aristo",
                "48": "Toyota Aristo Taxi",
                "49": "Toyota Corrola",
                "4A": "Toyota Hiace",
                "4B": "Toyota Hiace Lift",
                "4C": "Toyota Crown",
                "4D": "Toyota AE86",
                "4E": "Toyota Celica",
                "4F": "Toyota 2000GT",
                "50": "Toyota 2000GT", 
                "51": "Nissan R34", 
                "52": "BMW M3",
                // "53": "Crash",
                "54": "Corvette Stingray",
                "55": "Mazda Miata",
                "56": "Mazda Savanna",
                "57": "Mercedes 500E",
                "58": "Mercedes SLK",
                "59": "Mitsubishi Galant",
                "5A": "Nissan Gloria",
                "5B": "Nissan Skyline",
                "5C": "Nissan Stagea",
                "5D": "RUF RT35",
                "5E": "Subaru (GVB)",
                "5F": "Subaru BRZ",
                "60": "Toyota Soarer", 
                "61": "Toyota 86", 
                "62": "Hiace Super GL",
                "63": "Maxi G Truck",
                // "64": "Crash",
                "65": "BMW M3 (Matte)",
                // "66": "Crash",
                "67": "SLK Taxi",
                "68": "Hiace Super GL Lift",
                "69": "BMW M1 (Test)",
                "6A": "BMW M3 CSL (Test)",
                "6B": "Mercedes SLS (Test)",
                "6C": "Audi R8 (Test)",
                "6D": "Audi RS4 (Test)",
                "6E": "Dodge Viper (Test)",
                "6F": "Dodge Charger (Test)",
                // "71": "Crash (Wheel-less GT-R)",
                "72": "Mazda Miata (Test, Big Wheels)",
                // "73": "",
                // "74": "",
                // "75": "",
                // "76": "",
                // "77": "",
                // "78": "",
                // "79": "",
                // "7A": "",
                // "7B": "",
                // "7C": "",
                // "7D": "",
                // "7E": "",
                // "7F": "",
            }, 
            aero: { // Body Kits
                "00": "Stock",
                "01": "Aero Set A",
                "02": "Aero Set B",
                "03": "Aero Set C",
                "04": "Aero Set D",
                "05": "Aero Set E",
                "06": "Aero Set F",
                "07": "Aero Set G",
                "08": "Aero Set H"
            }, 
            wing: { // Rear Wings
                "00": "Stock",
                "01": "GT Wing Straight",
                "02": "GT Wing 3D",
                "03": "Exclusive Wing A",
                "04": "GT Wing Twin",
                "05": "GT Wing 3D 2",
                "06": "Exclusive Wing B",
                "07": "Exclusive Wing B",
                "08": "GT Wing Swan",
                "09": "No Wing",
            }, 
            hood: { // Bonnet / Hood
                "00": "Stock",
                "01": "Carbon Hood Original Style",
                "02": "FRP Bonnet A",
                "03": "Carbon Bonnet (with duct 1)",
                "04": "FRP Bonnet B",
                "05": "FRP Bonnet C",
                "06": "FRP Bonnet D",
                "07": "Carbon Bonnet (with duct 2)",
                "08": "Carbon Bonnet (with duct 3)"
            }, 
            mirror: { // Mirror
                "00": "Stock Mirror",
                "01": "Aero Mirror"
            }, 
            trunk: { // Trunk
                "00": "Stock Trunk",
                "01": "Carbon Trunk"
            }, 
            neon: { // Neon / Underglow
                "00": "No Neon", 
                "01": "Green Straight", 
                "02": "Blue Straight", 
                "03": "Purple Straight", 
                "04": "Red Straight", 
                "05": "Yellow Straight", 
                "06": "Light Purple Straight", 
                "07": "Green Dotted", 
                "08": "Blue Dotted", 
                "09": "Purple Dotted", 
                "0A": "Purple Dotted", 
                "0B": "Yellow Dotted", 
                "0C": "Light Purple Dotted", 
            }, 
            frame: { // License Plate Frame
                "00": "Stock", 
                "01": "Green (L/R Lights)",
                "02": "Red Stripes", 
                "03": "YM Speed Blue"
            }, 
            rims: { // Car Rims
                "00": "Stock",
                "0A": "Yokohama Model T5 (T5)",
                "0B": "Watanabe Eight Spoke (EIGHT)",
                "0C": "Watanabe Forged Mg Cyclone (CYCL)",
                "0D": "Watanabe Stellar (STEL)",
                "0E": "Watanabe GR-8",
                "0F": "Watanabe New RS8 (RS8)",
                "01": "Yokohama Advan Racing RCIII (RC3)",
                "02": "Yokohama Advan Racing TCIII (TC3)",
                "03": "Yokohama Super Advan Racing ver.2",
                "04": "Yokohama Advan Racing RG-D2 (RGD2)",
                "05": "Yokohama Advan Racing RGIII (RG3)",
                "06": "Yokohama Advan Racing RSII (RS2)",
                "07": "Yokohama Advan Racing RS-D (RSD)",
                "08": "Yokohama AVS Model T6",
                "09": "Yokohama Advan Racing GT (ARGT)",
                "10": "Rays VR CE28N (CE28)",
                "11": "Rays Gram Lights 57ANA (57ANA)",
                "12": "Rays Lucianna Stratagia (LUCI)",
                "13": "Rays Gram Lights 57D (57D)",
                "14": "Rays VR TE37 Saga (37SAGA)",
                "15": "Rays VR TE037 DURA (37DURA)",
                "16": "Rays VR GT-Type M (GTM)",
                "17": "Rays Gabbana (GABB)",
                "18": "Rays VR RE30 (RE30)",
                "19": "Rays Gram Lights 57F (57F)",
                "1A": "Rays 57 Accelerate (57AC)",
                "1B": "Rays ZE40 (ZE40)",
                "1C": "(Unknown)",
                "1D": "Enkei Racing RPF1 (RPF1)",
                "1E": "Enkei Racing Revolution NT03R (NT03RR)",
                "1F": "Enkei WPS JL01",
                "20": "Enkei Racing RS05 (RS05)",
                "21": "Enkei Racing JS+M",
                "22": "Enkei ES-TARMAC (TARMAC)",
                "23": "Enkei Performance Line PF07",
                "24": "(Unknown)",
                "25": "OZ Crono 3",
                "26": "OZ Rally Racing (RR)",
                "27": "OZ ForgiataGT (ForGT)",
                "28": "OZ Leggenda (LEGG)",
                "29": "OZ Superturismo LM (SUPE)",
                "2A": "OZ Formula HLT",
                "2B": "OZ Zeus HLT Forged (ZEUS)",
                "2C": "OZ Torino (TRIN)",
                "2D": "OZ Versilia (VERS)",
                "2E": "OZ Ultraleggera (ULEG)",
                "2F": "BBS RI-D",
                "30": "BBS RI-A",
                "31": "BBS FS",
                "32": "BBS RG-R",
                "33": "BBS Super-RS (SRS)",
                "34": "BBS RI-D",
                "35": "BBS LM",
                "36": "BBS FZ-MG",
                "37": "Yokohama Advan Racing RG-D (RGD)",
                "38": "Yokohama Advan Racing TC II (TC2)",
                "39": "Yokohama Racing Model T7 (T7)",
                "3A": "(Unknown)",
                "3B": "Yokohama Advan Racing RSII",
                "3C": "Yokohama Advan Racing RZ",
                "3D": "Yokohama AVS Model T6 (T6)",
                "3E": "Enkei Racing RS+M",
                "3F": "(Unknown)",
                "40": "Yokohama Kreutzer Vi",
                "41": "Yokohama Advan Racing RZ-DF (RZDF)",
                "42": "Yokohama Advan Model F50 (F50)",
                "43": "Rays VR TE37 (TE37)",
                "44": "Rays GT Type C",
                "45": "Rays BL-10-SX",
                "46": "Rays Shotgun (SHOT)",
                "47": "Rays X401 (X401)",
                "48": "(Unknown)",
                "49": "Rays 77NTL (77NTL)",
                "4A": "Rays G10 (G10)",
                "4B": "Rays SPR-EX",
                "4C": "Rays F2B",
                "4E": "(Unknown)",
                "4F": "Rays Arpione (ARPI)",
                "50": "Rays V350 (V350)",
                "51": "(Unknown)",
                "52": "Rays Scudo (SCUD)",
                "53": "(Unknown)",
                "54": "Rays Homura 2X8GT"
            }, 
            power: { // Power Stats
                "00": "0 Points (Stock)", // No mods
                "01": "1 Point (360 HP)",
                "02": "2 Points", 
                "03": "3 Points", 
                "04": "4 Points", 
                "05": "5 Points", 
                "06": "6 Points", 
                "07": "7 Points", 
                "08": "8 Points", 
                "09": "9 Points",
                "0A": "10 Points (600 HP)", // 600 HP
                "0B": "11 Points (620 HP)", // 620 HP
                "0C": "12 Points (640 HP)", // 640 HP
                "0D": "13 Points (660 HP)", // 660 HP
                "0E": "14 Points (680 HP)", // 680 HP
                "0F": "15 Points (700 HP)", // 700 HP
                "10": "16 Points (720 HP)", // 720 HP
                "11": "17 Points (740 HP)", // 740 HP
                "12": "18 Points (760 HP)", // 760 HP
                "13": "19 Points (780 HP)", // 780 HP
                "14": "20 Points (800 HP)", // 800 HP
                "15": "21 Points (815 HP)", // 815 HP
                "16": "22 Points (830 HP)", // 830 HP
            }, 
            handling: { // Handling Stats
                "00": "0 Points (Stock)", // No mods
                "01": "1 Point",
                "02": "2 Points", 
                "03": "3 Points", 
                "04": "4 Points", 
                "05": "5 Points", 
                "06": "6 Points", 
                "07": "7 Points", 
                "08": "8 Points", 
                "09": "9 Points",
                "0A": "10 Points",
                "0B": "11 Points",
                "0C": "12 Points",
                "0D": "13 Points",
                "0E": "14 Points",
                "0F": "15 Points",
                "10": "16 Points",
                "11": "17 Points",
                "12": "18 Points",
                "13": "19 Points",
                "14": "20 Points",
                "15": "21 Points",
                "16": "22 Points",
            }, 
            rank: { // Car Rank
                "01": "N", 
                "02": "C9", 
                "03": "C8", 
                "04": "C7", 
                "05": "C6", 
                "06": "C5", 
                "07": "C4", 
                "08": "C3", 
                "09": "C2", 
                "0A": "C1", 
                "0B": "B9", 
                "0C": "B8", 
                "0D": "B7", 
                "0E": "B6", 
                "0F": "B5", 
                "10": "B4", 
                "11": "B3", 
                "12": "B2", 
                "13": "B1", 
                "14": "A9", 
                "15": "A8", 
                "16": "A7", 
                "17": "A6", 
                "18": "A5", 
                "19": "A4", 
                "1A": "A3", 
                "1B": "A2", 
                "1C": "A1", 
                "1D": "S9", 
                "1E": "S8", 
                "1F": "S7", 
                "20": "S6", 
                "21": "S5", 
                "22": "S4", 
                "23": "S3", 
                "24": "S2", 
                "25": "S1", 
                "26": "SS9", 
                "27": "SS8", 
                "28": "SS7", 
                "29": "SS6", 
                "2A": "SS5", 
                "2B": "SS4", 
                "2C": "SS3", 
                "2D": "SS2", 
                "2E": "SS1", 
                "2F": "SSS9", 
                "30": "SSS8", 
                "31": "SSS7", 
                "32": "SSS6", 
                "33": "SSS5", 
                "34": "SSS4", 
                "35": "SSS3", 
                "36": "SSS2", 
                "37": "SSS1", 
                "38": "SSSS", 
            }, 
            sticker: { // Body stickers
                body: { 
                    "00": {
                        // No stickers
                    },
                    "01": {
                        // Racing Stripe
                        "00": "Red",
                        "01": "Orange",
                        "02": "Yellow",
                        "03": "Green",
                        "04": "Pink",
                        "05": "Light Blue",
                        "06": "Purple",
                        "07": "Black",
                        "08": "Silver",
                        "09": "White",
                    }, 
                    "02": {
                        // Fire Pattern 1
                        "00": "Red",
                        "01": "Orange",
                        "02": "Yellow",
                        "03": "Green",
                        "04": "Pink",
                        "05": "Light Blue",
                        "06": "Purple",
                        "07": "Black",
                        "08": "Silver",
                        "09": "White",
                    }, 
                    "03": {
                        // Racing Stripe 2
                        "00": "Red",
                        "01": "Orange",
                        "02": "Yellow",
                        "03": "Green",
                        "04": "Pink",
                        "05": "Light Blue",
                        "06": "Purple",
                        "07": "Black",
                        "08": "Silver",
                        "09": "White",
                    }, 
                    "04": {
                        // Fire Pattern 2
                        "00": "Red",
                        "01": "Orange",
                        "02": "Yellow",
                        "03": "Green",
                        "04": "Pink",
                        "05": "Light Blue",
                        "06": "Purple",
                        "07": "Black",
                        "08": "Silver",
                        "09": "White",
                    }, 
                    "05": { // Pac Man
                        "00": "Pac Man"
                    }, 
                    "06": { // Namco
                        "00": "Namco"
                    }, 
                    "07": { // Works
                        "00": "Works"
                    }, 
                    "08": {
                        // Racing Stripe 3
                        "00": "Red",
                        "01": "Orange",
                        "02": "Yellow",
                        "03": "Green",
                        "04": "Pink",
                        "05": "Light Blue",
                        "06": "Purple",
                        "07": "Black",
                        "08": "Silver",
                        "09": "White",
                    }, 
                    "09": {
                        // Fire Pattern 3
                        "00": "Red",
                        "01": "Orange",
                        "02": "Yellow",
                        "03": "Green",
                        "04": "Pink",
                        "05": "Light Blue",
                        "06": "Purple",
                        "07": "Black",
                        "08": "Silver",
                        "09": "White",
                    }, 
                    "0A": {
                        // Tribal 1
                        "00": "Red",
                        "01": "Orange",
                        "02": "Yellow",
                        "03": "Green",
                        "04": "Pink",
                        "05": "Light Blue",
                        "06": "Purple",
                        "07": "Black",
                        "08": "Silver",
                        "09": "White",
                    }, 
                    "0B": {
                        // Camo 1
                        "00": "Camo 1"
                    }, 
                    "0C": {
                        // One Point 1
                        "00": "Number",
                        "01": "Number",
                        "02": "Number",
                        "03": "Number",
                        "04": "Number",
                        "05": "Number",
                        "06": "Number",
                        "07": "Number",
                        "08": "Number",
                        "09": "Number",
                    }, 
                    "0D": {
                        // Fire Pattern 4
                        "00": "Red",
                        "01": "Yellow",
                        "02": "Green",
                        "03": "Pink",
                        "04": "Blue",
                    }, 
                    "0E": {
                        // Japonism 1
                        "00": "Red",
                        "01": "Orange",
                        "02": "Yellow",
                        "03": "Green",
                        "04": "Pink",
                        "05": "Light Blue",
                        "06": "Purple",
                        "07": "Black",
                        "08": "Silver",
                        "09": "White",
                    }, 
                    "0F": {
                        // Competition 1
                        "00": "Red",
                        "01": "Orange",
                        "02": "Yellow",
                        "03": "Green",
                        "04": "Pink",
                        "05": "Light Blue",
                        "06": "Purple",
                        "07": "Black",
                        "08": "Silver",
                        "09": "White",
                    }, 
                    "10": {
                        // Racing Stripe 4
                        "00": "Red",
                        "01": "Orange",
                        "02": "Yellow",
                        "03": "Green",
                        "04": "Pink",
                        "05": "Light Blue",
                        "06": "Purple",
                        "07": "Black",
                        "08": "Silver",
                        "09": "White",
                    }, 
                    "11": {
                        // Animal 1
                        "00": "Yellow", 
                        "01": "Black"
                    }, 
                    "12": {
                        // Tribal 2 (For RUF Custom Stripe 2)
                        "00": "Red",
                        "01": "Orange",
                        "02": "Yellow",
                        "03": "Green",
                        "04": "Pink",
                        "05": "Light Blue",
                        "06": "Purple",
                        "07": "Black",
                        "08": "Silver",
                        "09": "White",
                    }, 
                    "13": {
                        // Graffiti 1
                        "00": "Graffiti"
                    }, 
                    "14": {
                        // Checker 1
                        "00": "Red",
                        "01": "Orange",
                        "02": "Yellow",
                        "03": "Green",
                        "04": "Pink",
                        "05": "Light Blue",
                        "06": "Purple",
                        "07": "Black",
                        "08": "Silver",
                        "09": "White",
                    }, 
                    "15": {
                        // Camo 2
                        "00": "Camo 2"
                    }, 
                    "16": {
                        // Japonism 2
                        "00": "Japonism 2"
                    }, 
                    "17": {
                        // Animal 2
                        "00": "Red",
                        "01": "Orange",
                        "02": "Yellow",
                        "03": "Green",
                        "04": "Pink",
                        "05": "Light Blue",
                        "06": "Purple",
                        "07": "Black",
                        "08": "Silver",
                        "09": "White",
                    },
                    "18": {
                        // One Point 2
                        "00": "Red",
                        "01": "Orange",
                        "02": "Yellow",
                        "03": "Green",
                        "04": "Pink",
                        "05": "Light Blue",
                        "06": "Purple",
                        "07": "Black",
                        "08": "Silver",
                        "09": "White",
                    },
                    "19": {
                        // Graffiti 2
                        "00": "Graffiti 2"
                    }, 
                    "1A": {
                        // Tribal 3
                        "00": "Red",
                        "01": "Orange",
                        "02": "Yellow",
                        "03": "Green",
                        "04": "Pink",
                        "05": "Light Blue",
                        "06": "Purple",
                        "07": "Black",
                        "08": "Silver",
                        "09": "White",
                    },
                    "1B": {
                        // Galaga
                        "00": "Galaga"
                    }, 
                    "1C": {
                        // One Point 3
                        "00": "Red",
                        "01": "Orange",
                        "02": "Yellow",
                        "03": "Green",
                        "04": "Pink",
                        "05": "Light Blue",
                        "06": "Purple",
                        "07": "Black",
                        "08": "Silver",
                        "09": "White",
                    },
                    "1D": {
                        // Graffiti 1
                        "00": "Graffiti 1"
                    }, 
                    "1E": {
                        // Pin Stripe
                        "00": "Red",
                        "01": "Orange",
                        "02": "Yellow",
                        "03": "Green",
                        "04": "Pink",
                        "05": "Light Blue",
                        "06": "Purple",
                        "07": "Black",
                        "08": "Silver",
                        "09": "White",
                    },
                    "1F": {
                        // Competition 1
                        "00": "Red",
                        "01": "Orange",
                        "02": "Yellow",
                        "03": "Green",
                        "04": "Pink",
                        "05": "Light Blue",
                        "06": "Purple",
                        "07": "Black",
                        "08": "Silver",
                        "09": "White",
                    },
                    "20": {
                        // Racing Stripe 5
                        "00": "Red",
                        "01": "Orange",
                        "02": "Yellow",
                        "03": "Green",
                        "04": "Pink",
                        "05": "Light Blue",
                        "06": "Purple",
                        "07": "Black",
                        "08": "Silver",
                        "09": "White",
                    },
                    "21": {
                        // Racing Stripe 6
                        "00": "Red",
                        "01": "Orange",
                        "02": "Yellow",
                        "03": "Green",
                        "04": "Pink",
                        "05": "Light Blue",
                        "06": "Purple",
                        "07": "Black",
                        "08": "Silver",
                        "09": "White",
                    },
                    "22": {
                        // Racing Stripe 7
                        "00": "Red",
                        "01": "Orange",
                        "02": "Yellow",
                        "03": "Green",
                        "04": "Pink",
                        "05": "Light Blue",
                        "06": "Purple",
                        "07": "Black",
                        "08": "Silver",
                        "09": "White",
                    },
                    "23": {
                        // Thunder Bolt 1
                        "00": "Thunder Bolt 1"
                    }, 
                    "24": {
                        // Thunder Bolt 2
                        "00": "Thunder Bolt 2"
                    }, 
                    "25": {
                        // Thunder Bolt 5
                        "00": "Thunder Bolt 5"
                    }, 
                    "26": {
                        // Tribal 4
                        "00": "Red",
                        "01": "Orange",
                        "02": "Yellow",
                        "03": "Green",
                        "04": "Pink",
                        "05": "Light Blue",
                        "06": "Purple",
                        "07": "Black",
                        "08": "Silver",
                        "09": "White",
                    },
                    "27": {
                        // Tribal 5
                        "00": "Red",
                        "01": "Orange",
                        "02": "Yellow",
                        "03": "Green",
                        "04": "Pink",
                        "05": "Light Blue",
                        "06": "Purple",
                        "07": "Black",
                        "08": "Silver",
                        "09": "White",
                    },
                    "28": {
                        // Checker 2
                        "00": "Red",
                        "01": "Orange",
                        "02": "Yellow",
                        "03": "Green",
                        "04": "Pink",
                        "05": "Light Blue",
                        "06": "Purple",
                        "07": "Black",
                        "08": "Silver",
                        "09": "White",
                    },
                    "29": {
                        // Competition 3
                        "00": "Red",
                        "01": "Orange",
                        "02": "Yellow",
                        "03": "Green",
                        "04": "Pink",
                        "05": "Light Blue",
                        "06": "Purple",
                        "07": "Black",
                        "08": "Silver",
                        "09": "White",
                    },
                    "2A": {
                        // Two Tone ?
                        "00": "Red",
                        "01": "Orange",
                        "02": "Yellow",
                        "03": "Green",
                        "04": "Pink",
                        "05": "Light Blue",
                        "06": "Purple",
                        "07": "Black",
                        "08": "Silver",
                        "09": "White",
                    },
                }, 
                roof: {
                    // Roof Stickers
                    "00": {
                        // Stock
                        "00": "Stock",
                    }, 
                    "01": {
                        // Stripes ?
                        "00": "Red", 
                        "01": "Blue", 
                        "02": "Orange"
                    }, 
                    "02": {
                        // Stripes ?
                        "01": "Green & Black"
                    }, 
                    "03": {
                        // Checker Pattern ?
                        "01": "Yellow & Black"
                    }
                }, 
                japan: {
                    // Japan Challenge Stickers
                    // CANNOT BE USED WITH NORMAL STICKERS!
                    "00": {
                        // Stock
                        "00": "Stock"
                    }, 
                    "01": {
                        // Japan Challenge Stickers 1
                        "00": "Red",
                        "01": "Orange",
                        "02": "Yellow",
                        "03": "Green",
                        "04": "Pink",
                        "05": "Light Blue",
                        "06": "Purple",
                        "07": "Black",
                        "08": "Silver",
                        "09": "White",
                    }, 
                    "02": {
                        // Japan Challenge Stickers 2
                        "00": "Red",
                        "01": "Orange",
                        "02": "Yellow",
                        "03": "Green",
                        "04": "Pink",
                        "05": "Light Blue",
                        "06": "Purple",
                        "07": "Black",
                        "08": "Silver",
                        "09": "White",
                    }, 
                    "03": {
                        // Japan Challenge Stickers 3
                        "00": "Red",
                        "01": "Orange",
                        "02": "Yellow",
                        "03": "Green",
                        "04": "Pink",
                        "05": "Light Blue",
                        "06": "Purple",
                        "07": "Black",
                        "08": "Silver",
                        "09": "White",
                    }, 
                    "04": {
                        // Japan Challenge Stickers 4
                        "00": "Red",
                        "01": "Orange",
                        "02": "Yellow",
                        "03": "Green",
                        "04": "Pink",
                        "05": "Light Blue",
                        "06": "Purple",
                        "07": "Black",
                        "08": "Silver",
                        "09": "White",
                    }, 
                    "05": {
                        // Japan Challenge Stickers 5
                        "00": "Red",
                        "01": "Orange",
                        "02": "Yellow",
                        "03": "Green",
                        "04": "Pink",
                        "05": "Light Blue",
                        "06": "Purple",
                        "07": "Black",
                        "08": "Silver",
                        "09": "White",
                    }, 
                    "06": {
                        // Japan Challenge 6 Summer
                        "00": "Japan Challenge 6 Summer"
                    }, 
                    "07": {
                        // Japan Challenge 7 Fall
                        "00": "Japan Challenge 7 Fall"
                    }, 
                    "08": {
                        // Japan Challenge 1 Spring
                        "00": "Japan Challenge 1 Spring"
                    }, 
                    "09": {
                        // Japan Challenge 2 Summer
                        "00": "Japan Challenge 2 Summer"
                    }, 
                    "0A": {
                        // Japan Challenge 3 Fall
                        "00": "Japan Challenge 3 Fall"
                    }, 
                    "0B": {
                        // Japan Challenge 4 Winter
                        "00": "Japan Challenge 4 Winter"
                    }, 
                    "0C": {
                        // Japan Challenge 5 Spring
                        "00": "Japan Challenge 5 Spring"
                    }, 
                    "0D": {
                        // Japan Challenge 6 Summer
                        "00": "Japan Challenge 8 Winter"
                    }, 
                    "0E": {
                        // Japan Challenge 7 Fall
                        "00": "Japan Challenge 7 Fall"
                    }, 
                    "0F": {
                        // Japan Challenge 8 Winter
                        "00": "Japan Challenge 8 Winter"
                    }, 
                }
            }, 
            colour: { // Custom Colour
                "00": "No Custom Colour",
                "01": "Custom Colour 1",
                "02": "Custom Colour 2",
                "03": "Custom Colour 3",
                "04": "Custom Colour 4",
                "05": "Custom Colour 5",
                "06": "Custom Colour 6",
                "07": "Custom Colour 7",
                "08": "Custom Colour 8",
                "09": "Custom Colour 9",
                "0A": "Custom Colour 10",
                "0B": "Custom Colour 11",
                "0C": "Custom Colour 12",
                "0D": "Custom Colour 13",
                "0E": "Custom Colour 14",
                "0F": "Custom Colour 15",
                "10": "Custom Colour 16",
                "11": "Custom Colour 17",
                "12": "Custom Colour 18",
                "13": "Custom Colour 19",
                "14": "Custom Colour 20",
                "15": "Custom Colour 21",
                "16": "Custom Colour 22",
                "17": "Custom Colour 23",
                "18": "Custom Colour 24",
                "19": "Custom Colour 25",
                "1A": "Custom Colour 26",
                "1B": "Custom Colour 27",
                "1C": "Custom Colour 28",
                "1D": "Custom Colour 29",
                "1E": "Custom Colour 30",
                "1F": "Custom Colour 31",
                "20": "Custom Colour 32",
                "21": "Custom Colour 33",
                "22": "Custom Colour 34",
                "23": "Custom Colour 35",
                "24": "Custom Colour 36",
                "25": "Custom Colour 37",
                "26": "Custom Colour 38",
                "27": "Custom Colour 39",
                "28": "Custom Colour 40",
            }, 
            'plate-number0': { // First Plate Number
                "30": "0",
                "31": "1", 
                "32": "2", 
                "33": "3", 
                "34": "4", 
                "35": "5", 
                "36": "6", 
                "37": "7", 
                "38": "8", 
                "39": "9", 
            },
            'plate-number1': { // Second Plate Number
                "30": "0",
                "31": "1", 
                "32": "2", 
                "33": "3", 
                "34": "4", 
                "35": "5", 
                "36": "6", 
                "37": "7", 
                "38": "8", 
                "39": "9", 
            },
            'plate-number2': { // Third Plate Number
                "30": "0",
                "31": "1", 
                "32": "2", 
                "33": "3", 
                "34": "4", 
                "35": "5", 
                "36": "6", 
                "37": "7", 
                "38": "8", 
                "39": "9", 
            },
            'plate-number3': { // Fourth Plate Number
                "30": "0",
                "31": "1", 
                "32": "2", 
                "33": "3", 
                "34": "4", 
                "35": "5", 
                "36": "6", 
                "37": "7", 
                "38": "8", 
                "39": "9", 
            }
        }
    }, 
    wmmt6: {
        name: "WMMT 6",
        location: {

            // Indexes are [y, x]

            // CAR & COLOUR SECTION
            
            'cars': [3, 4],
            'colour': [3, 8], // Does not work for Tekno
            'rims-colour': [4, 4],

            // AERO SECTION
            
            'rims': [4, 0],
            'aero': [4, 8],
            'hood': [4, 12],
            'wing': [5, 8],
            'mirror': [5, 12],
            'neon': [6, 0],
            'trunk': [6, 4],

            // PLATE SECTION

            'plate-frame': [6, 8],
            'plate-frame-colour': [6, 12],
            //'plate-number0': [7, 0], // Have not tested
            //'plate-number1': [7, 1], // Have not tested

            // OTHER SECTION

            'power': [7, 4],
            'handling': [8, 0],
            'rank': [8, 4],
        }, 
        value: {

            cars: { // Car IDs
                "86": "ACURA New NSX (ACURA)",
                "87": "ACURA NSX (ACURA)",
                "6D": "Audi R8 5.2 FSI quattro [R8]",
                "6E": "Audi RS 4 Avant [RS4]",
                "73": "BMW 2002 TURBO [2002]",
                "69": "BMW M1 [E26]",
                "65": "BMW M3 [E92_MAT]",
                "52": "BMW M3 [E92]",
                "6A": "BMW M3 CSL [E46]",
                "72": "BMW M6 Gran Coupe [M6]",
                "7A": "BMW MINI Cooper S Crossover [R60]",
                "64": "BMW Z4 S DRIVE 35is [E89P]",
                "51": "BMW Z4 S DRIVE 35is [E89]",
                "66": "CHEVROLET CAMARO SS RS [CAMAROT]",
                "03": "CHEVROLET CAMARO SS RS [CAMARO_MAT]",
                "02": "CHEVROLET CAMARO SS RS [CAMARO]",
                "53": "CHEVROLET Camaro Z28 [Z28]",
                "54": "CHEVROLET Corvette STING RAY [C2]",
                "04": "CHEVROLET CORVETTE Stingray [C3]",
                "01": "CHEVROLET ZR1 [ZR1T]",
                "00": "CHEVROLET ZR1 [ZR1]",
                "70": "Dodge Charger SRT8 [SRT8]",
                "6F": "Dodge Viper SRT10 [SRT-10]",
                "88": "HONDA INTEGRA TYPE R [DC2]",
                "7F": "HONDA New NSX [NC1]",
                "80": "HONDA NSX [NA1]",
                "81": "HONDA NSX-R [NA2]",
                "83": "HONDA S2000 [AP2]",
                "82": "HONDA S660 [JW5]",
                "7B": "Lamborghini Aventador LP700-4 [LP700]",
                "7C": "Lamborghini Countach LP400 [LP400]",
                "7E": "Lamborghini Diablo VT [DIABLO]",
                "7D": "Lamborghini Miura P400S [P400S]",
                "0D": "MAZDA COSMO SPORT <110S> [L10B]",
                "09": "MAZDA EUNOS COSMO TYPE|S [JCESE]",
                "55": "MAZDA EUNOS ROADSTER <MX-5> [NA6CE]",
                "0B": "MAZDA MAZDASPEED ATENZA [GG3PS]",
                "0A": "MAZDA MAZDASPEED ATENZA [GG3P]",
                "74": "MAZDA ROADSTER ND [ND5RC]",
                "89": "MAZDA ROADSTER ND RF [NDERC]",
                "05": "MAZDA ROADSTER RS RHT [NCEC]",
                "06": "MAZDA RX-7 Type R [FD3S]",
                "08": "MAZDA RX-8 Type S [SE3P]",
                "56": "MAZDA SAVANNA GT <RX-3> [S124A]",
                "07": "MAZDA SAVANNA RX-7 <RX-7 GT-X> [FC3S]",
                "0C": "MAZDA SAVANNA RX-7 TURBO SE | Limited [SA22]",
                "6C": "Mercedes-Benz 190E 2.5-16 Evolution2 [W201]",
                "57": "Mercedes-Benz 500E [W124]",
                "67": "Mercedes-Benz SLK 350 BlueEFFICIENCY [R172P]",
                "58": "Mercedes-Benz SLK 350 BlueEFFICIENCY [R172]",
                "6B": "Mercedes-Benz SLS AMG [C197]",
                "59": "MITSUBISHI GALANT VR-4 [E39A]",
                "18": "MITSUBISHI GTO TWIN TURBO [Z16A]",
                "16": "MITSUBISHI LANCER Evolution III GSR [CE9A_GSR]",
                "17": "MITSUBISHI LANCER Evolution III RS [CE9A_RS]",
                "0F": "MITSUBISHI LANCER Evolution IX MR GSR [CT9A9_MR]",
                "14": "MITSUBISHI LANCER Evolution V GSR [CP9A5_GSR]",
                "15": "MITSUBISHI LANCER Evolution V RS [CP9A5_RS]",
                "13": "MITSUBISHI LANCER Evolution VI GSR [CP9A6_GSR]",
                "12": "MITSUBISHI LANCER Evolution VI RS [CP9A6_RS]",
                "10": "MITSUBISHI LANCER Evolution VIII MR GSR [CT9A8_GSR]",
                "11": "MITSUBISHI LANCER Evolution VIII MR RS [CT9A8_RS]",
                "0E": "MITSUBISHI LANCER EvolutionX GSR [CZ4A]",
                "1A": "MITSUBISHI PAJERO EVOLUTION [V55W]",
                "19": "MITSUBISHI STARION GSR|VR [A187A]",
                "29": "NISSAN 180SX TYPEIII [RPS13]",
                "27": "NISSAN FAIRLADY Z [S30]",
                "25": "NISSAN FAIRLADY Z 300ZX [Z31 / Z31ANIV]",
                "24": "NISSAN FAIRLADY Z 300ZX [Z32]",
                "77": "NISSAN FAIRLADY Z NISMO [Z34N]",
                "8B": "NISSAN FAIRLADY Z S130 [GS130]",
                "22": "NISSAN FAIRLADY Z Version ST [Z34]",
                "23": "NISSAN FAIRLADY Z VersionS [Z33]",
                "2B": "NISSAN FUGA 370GT Type S [Y51]",
                "5A": "NISSAN GLORIA Gran Turismo ULTIMA [Y33]",
                "1B": "NISSAN GT-R [BNR35]",
                "84": "NISSAN GT-R MC [BNR35MC]",
                "76": "NISSAN GT-R NISMO [BNR35N]",
                "1C": "NISSAN GT-R SpecV [BNR35V]",
                "75": "NISSAN LAUREL 25 CLUB|S [C35]",
                "8A": "NISSAN LEOPARD Ultima [UF31]",
                "85": "NISSAN SILVIA K's [PS13]",
                "28": "NISSAN SILVIA spec DR [S15]",
                "2A": "NISSAN SKYLINE COUPE 370GT Type S [CV36]",
                "20": "NISSAN SKYLINE GT-R [BNR32]",
                "21": "NISSAN SKYLINE GT-R [KPGC10]",
                "1F": "NISSAN SKYLINE GT-R Vspec [BCNR33]",
                "1D": "NISSAN SKYLINE GT-R VspecII [BNR34]",
                "1E": "NISSAN SKYLINE GT-R VspecII nur [BNR34_NUR]",
                "5B": "NISSAN SKYLINE RS X [R30]",
                "5C": "NISSAN STAGEA Autech Version 260RS [WC34]",
                "90": "PORSCHE 718 CAYMAN S [718CS]",
                "8F": "PORSCHE 928GT [928GT]",
                "8C": "PORSCHE 930 911 Turbo S [930TS]",
                "8D": "PORSCHE 964 911 Turbo 3.6 [964T36]",
                "8E": "PORSCHE 991 911 Turbo S [991TS]",
                "2C": "RUF CTR [R964]",
                "78": "RUF RCT [RCT]",
                "2D": "RUF RGT [R997]",
                "2E": "RUF RK coupe [RKC]",
                "5D": "RUF Rt35 [R991]",
                "36": "SUBARU ALCYONE SVX Version L [CXD]",
                "5F": "SUBARU BRZ [ZC6]",
                "31": "SUBARU IMPREZA WRX Sti [GDB]",
                "30": "SUBARU IMPREZA WRX STI [GDBF]",
                "2F": "SUBARU IMPREZA WRX STI [GRB]",
                "32": "SUBARU IMPREZA WRX Sti specC Limited [GDB_C]",
                "34": "SUBARU IMPREZA WRX Sti VersionVI [GC8]",
                "33": "SUBARU IMPREZA WRX typeRA Sti VersionVI [GC8_RA]",
                "35": "SUBARU LEGACY B4 2.0GT spec DB [BL5]",
                "38": "SUBARU LEGACY B4 2.5GT S Package [BM9]",
                "71": "SUBARU LEVORG [VMG]",
                "37": "SUBARU R2 [RC2]",
                "5E": "SUBARU WRX STI [GVB]",
                "50": "TOYOTA 2000GT [MF10_MAT]",
                "4F": "TOYOTA 2000GT [MF10]",
                "61": "TOYOTA 86 GT [ZN6]",
                "48": "TOYOTA ARISTO V300 VERTEX EDITION [JZS161T]",
                "47": "TOYOTA ARISTO V300 VERTEX EDITION [JZS161]",
                "4E": "TOYOTA CELICA SUPRA [MA61_US]",
                "42": "TOYOTA CELSIOR [UCF10T/_V1/_V2/_V3/_V4]",
                "3D": "TOYOTA CELSIOR [UCF10/_V1/_V2/_V3/_V4]",
                "3C": "TOYOTA CHASER Tourer V [JZX100]",
                "49": "TOYOTA COROLLA [NZE121]",
                "4C": "TOYOTA CROWN ATHLETE [GRS204]",
                "68": "TOYOTA HIACE VAN [KDH201VH]",
                "62": "TOYOTA HIACE VAN [KDH201V]",
                "4B": "TOYOTA HIACE WAGON [KZH100GH]",
                "4A": "TOYOTA HIACE WAGON [KZH100G]",
                "79": "TOYOTA MARKII TOURER V [MARK2]",
                "3B": "TOYOTA MR2 GT-S [SW20]",
                "60": "TOYOTA SOARER 2.5GT-TWIN TURBO [JZZ30]",
                "4D": "TOYOTA SPRINTER TRUENO GT APEX [AE86]",
                "3A": "TOYOTA SUPRA 2.5GT TWIN TURBO R [JZA70]",
                "39": "TOYOTA SUPRA RZ [JZA80]",
            }, 
            aero: { // Body Kits
                "00": 'Stock',
                "01": 'Aero Set I (New)', 
                "02": 'Aero Set J (New)', 
                "03": 'Aero Set K (New)', 
                "04": 'Aero Set A',
                "05": 'Aero Set B',
                "06": 'Aero Set C',
                "07": 'Aero Set D',
                "08": 'Aero Set E',
                "09": 'Aero Set F',
                "0A": 'Aero Set G',
                "0B": 'Aero Set H'
            }, 
            wing: { // Rear Wings
                "00": 'Stock Wing',
                "01": 'GT Wing Straight',
                "02": 'Exclusive Wing A',
                "03": 'GT Wing 3D',
                "04": 'Exclusive Wing B',
                "05": 'GT Wing Twin',
                "06": 'GT Wing 3D 2',
                "07": 'Exclusive Wing C',
                "08": 'GT Wing Swan',
                "09": 'No Wing'
            },
            hood: { // Bonnet / Hood
                "00": 'Stock',
                "01": 'FRP Bonnet A',
                "02": 'FRP Bonnet B',
                "03": 'FRP Bonnet C',
                "04": 'Original Style Bonnet (Carbon)',
                "05": 'Carbon Bonnet (with duct 1)',
                "06": 'Carbon Bonnet (with duct 2)',
                "07": 'Carbon Bonnet (with duct 3)',
                "08": 'FRP Bonnet D'
            }, 
            mirror: { // Mirror
                "00": 'Stock',
                "01": 'Aero Mirror',
                "02": 'Carbon Aero Mirror'
            },
            trunk: { // Trunks / Boots
                "00": 'Stock',
                "01": 'Carbon Trunk'
            }, 
            neon: { // Neon / Underglow
                "00": 'No Neon',
                "01": 'Green',
                "02": 'Blue',
                "03": 'Red',
                "04": 'Yellow',
                "05": 'Purple',
                "06": 'Green Tribal',
                "07": 'Blue Tribal',
                "08": 'Red Tribal',
                "09": 'Yellow Tribal',
                "10": 'Purple Tribal'
            }, 
            frame: { // Plate Frame
                "00": {
                    "00": "Stock"
                }, 
                "01": {
                    "00": "Blue YM Speed",
                    "01": "Purple MACH",
                    "02": "Pink RGO",
                    "03": "White Garage ACE",
                    "04": "Red R200 Club",
                    "05": "Silver FLAT",
                    "06": "Black Bird",
                    "07": "Yellow ZERO",
                    "08": "Green Auto",
                    "09": "Light Blue GT Cars"
                },
                "02": {
                    "00": "Black with Red Stripe",
                    "01": "Black with Orange Stripe",
                    "02": "Black with Yellow Stripe",
                    "03": "Black with Green Stripe",
                    "04": "Black with Purple Stripe",
                    "05": "Black with Light Blue Stripe",
                    "06": "Black with Dark Blue Stripe",
                    "07": "Black with White Stripe",
                },  
                "03": {
                    "00": "White Light Surround (Left, Right, Top, Bottom)"
                }, 
                "04": {
                    "00": "Green Light (Left Right Only)",
                    "01": "Blue",
                    "02": "Purple",
                    "03": "Pink",
                    "04": "Yellow"
                } 
            }, 
            rims: { // Wheels / Rims
                "00": "Stock",
                "0A": "Yokohama Model T5 (T5)",
                "0B": "Watanabe Eight Spoke (EIGHT)",
                "0C": "Watanabe Forged Mg Cyclone (CYCL)",
                "0D": "Watanabe Stellar (STEL)",
                "0E": "Watanabe GR-8",
                "0F": "Watanabe New RS8 (RS8)",
                "01": "Yokohama Advan Racing RCIII (RC3)",
                "02": "Yokohama Advan Racing TCIII (TC3)",
                "03": "Yokohama Super Advan Racing ver.2",
                "04": "Yokohama Advan Racing RG-D2 (RGD2)",
                "05": "Yokohama Advan Racing RGIII (RG3)",
                "06": "Yokohama Advan Racing RSII (RS2)",
                "07": "Yokohama Advan Racing RS-D (RSD)",
                "08": "Yokohama AVS Model T6",
                "09": "Yokohama Advan Racing GT (ARGT)",
                "10": "Rays VR CE28N (CE28)",
                "11": "Rays Gram Lights 57ANA (57ANA)",
                "12": "Rays Lucianna Stratagia (LUCI)",
                "13": "Rays Gram Lights 57D (57D)",
                "14": "Rays VR TE37 Saga (37SAGA)",
                "15": "Rays VR TE037 DURA (37DURA)",
                "16": "Rays VR GT-Type M (GTM)",
                "17": "Rays Gabbana (GABB)",
                "18": "Rays VR RE30 (RE30)",
                "19": "Rays Gram Lights 57F (57F)",
                "1A": "Rays 57 Accelerate (57AC)",
                "1B": "Rays ZE40 (ZE40)",
                "1C": "(Unknown)",
                "1D": "Enkei Racing RPF1 (RPF1)",
                "1E": "Enkei Racing Revolution NT03R (NT03RR)",
                "1F": "Enkei WPS JL01",
                "20": "Enkei Racing RS05 (RS05)",
                "21": "Enkei Racing JS+M",
                "22": "Enkei ES-TARMAC (TARMAC)",
                "23": "Enkei Performance Line PF07",
                "24": "(Unknown)",
                "25": "OZ Crono 3",
                "26": "OZ Rally Racing (RR)",
                "27": "OZ ForgiataGT (ForGT)",
                "28": "OZ Leggenda (LEGG)",
                "29": "OZ Superturismo LM (SUPE)",
                "2A": "OZ Formula HLT",
                "2B": "OZ Zeus HLT Forged (ZEUS)",
                "2C": "OZ Torino (TRIN)",
                "2D": "OZ Versilia (VERS)",
                "2E": "OZ Ultraleggera (ULEG)",
                "2F": "BBS RI-D",
                "30": "BBS RI-A",
                "31": "BBS FS",
                "32": "BBS RG-R",
                "33": "BBS Super-RS (SRS)",
                "34": "BBS RI-D",
                "35": "BBS LM",
                "36": "BBS FZ-MG",
                "37": "Yokohama Advan Racing RG-D (RGD)",
                "38": "Yokohama Advan Racing TC II (TC2)",
                "39": "Yokohama Racing Model T7 (T7)",
                "3A": "(Unknown)",
                "3B": "Yokohama Advan Racing RSII",
                "3C": "Yokohama Advan Racing RZ",
                "3D": "Yokohama AVS Model T6 (T6)",
                "3E": "Enkei Racing RS+M",
                "3F": "(Unknown)",
                "40": "Yokohama Kreutzer Vi",
                "41": "Yokohama Advan Racing RZ-DF (RZDF)",
                "42": "Yokohama Advan Model F50 (F50)",
                "43": "Rays VR TE37 (TE37)",
                "44": "Rays GT Type C",
                "45": "Rays BL-10-SX",
                "46": "Rays Shotgun (SHOT)",
                "47": "Rays X401 (X401)",
                "48": "(Unknown)",
                "49": "Rays 77NTL (77NTL)",
                "4A": "Rays G10 (G10)",
                "4B": "Rays SPR-EX",
                "4C": "Rays F2B",
                "4E": "(Unknown)",
                "4F": "Rays Arpione (ARPI)",
                "50": "Rays V350 (V350)",
                "51": "(Unknown)",
                "52": "Rays Scudo (SCUD)",
                "53": "(Unknown)",
                "54": "Rays Homura 2X8GT"
            },
            power: { // Car Power
                "00": "0 Points (Stock)", // No mods
                "01": "1 Point (360 HP)",
                "02": "2 Points", 
                "03": "3 Points", 
                "04": "4 Points", 
                "05": "5 Points", 
                "06": "6 Points", 
                "07": "7 Points", 
                "08": "8 Points", 
                "09": "9 Points",
                "0A": "10 Points (600 HP)", // 600 HP
                "0B": "11 Points (620 HP)", // 620 HP
                "0C": "12 Points (640 HP)", // 640 HP
                "0D": "13 Points (660 HP)", // 660 HP
                "0E": "14 Points (680 HP)", // 680 HP
                "0F": "15 Points (700 HP)", // 700 HP
                "10": "16 Points (720 HP)", // 720 HP
                "11": "17 Points (740 HP)", // 740 HP
                "12": "18 Points (760 HP)", // 760 HP
                "13": "19 Points (780 HP)", // 780 HP
                "14": "20 Points (800 HP)", // 800 HP
                "15": "21 Points (815 HP)", // 815 HP
                "16": "22 Points (830 HP)", // 830 HP
                "17": "23 Points (835 HP)", // 835 HP
                "18": "24 Points (840 HP)" // 840 HP
            }, 
            handling: { // Car Handling
                "00": "0 Points (Stock)", // No mods
                "01": "1 Point",
                "02": "2 Points", 
                "03": "3 Points", 
                "04": "4 Points", 
                "05": "5 Points", 
                "06": "6 Points", 
                "07": "7 Points", 
                "08": "8 Points", 
                "09": "9 Points",
                "0A": "10 Points",
                "0B": "11 Points",
                "0C": "12 Points",
                "0D": "13 Points",
                "0E": "14 Points",
                "0F": "15 Points",
                "10": "16 Points",
                "11": "17 Points",
                "12": "18 Points",
                "13": "19 Points",
                "14": "20 Points",
                "15": "21 Points",
                "16": "22 Points",
                "17": "23 Points",
                "18": "24 Points"
            }, 
            rank: { // Car Ranking
                "01": "N", 
                "02": "C9", 
                "03": "C8", 
                "04": "C7", 
                "05": "C6", 
                "06": "C5", 
                "07": "C4", 
                "08": "C3", 
                "09": "C2", 
                "0A": "C1", 
                "0B": "B9", 
                "0C": "B8", 
                "0D": "B7", 
                "0E": "B6", 
                "0F": "B5", 
                "10": "B4", 
                "11": "B3", 
                "12": "B2", 
                "13": "B1", 
                "14": "A9", 
                "15": "A8", 
                "16": "A7", 
                "17": "A6", 
                "18": "A5", 
                "19": "A4", 
                "1A": "A3", 
                "1B": "A2", 
                "1C": "A1", 
                "1D": "S9", 
                "1E": "S8", 
                "1F": "S7", 
                "20": "S6", 
                "21": "S5", 
                "22": "S4", 
                "23": "S3", 
                "24": "S2", 
                "25": "S1", 
                "26": "SS9", 
                "27": "SS8", 
                "28": "SS7", 
                "29": "SS6", 
                "2A": "SS5", 
                "2B": "SS4", 
                "2C": "SS3", 
                "2D": "SS2", 
                "2E": "SS1", 
                "2F": "SSS9", 
                "30": "SSS8", 
                "31": "SSS7", 
                "32": "SSS6", 
                "33": "SSS5", 
                "34": "SSS4", 
                "35": "SSS3", 
                "36": "SSS2", 
                "37": "SSS1", 
                "38": "SSSS", 
                "39": "SSSS9", 
                "40": "SSSS8", 
                "41": "SSSS7", 
                "42": "SSSS6", 
                "43": "SSSS5", 
                "44": "SSSS4", 
                "45": "SSSS3", 
                "46": "SSSS2", 
                "47": "SSSS1", 
                "48": "SSSSS", 
            },
        }
    }
}