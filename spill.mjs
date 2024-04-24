//#region 
// ALDRI ENDRE NOE INNEN FOR Regionen
import * as Blocks from "./barneprat/blocks.mjs";
import * as Actions from "./barneprat/actions.mjs";
import * as Utils from "./barneprat/utils.mjs";
import { removeAll } from "./barneprat/globalTimer.mjs";

const GaaTil = (maal) => {
    document.body.innerHTML = "";
    removeAll();
    maal();
}

const Start = (maal) => {
    if (window.location.hash) {
        maal = window.location.hash.replace("#", "")
        eval(maal)();
    } else {
        GaaTil(maal);
    }
}
//#endregion
Start(startskjerm);

function nesteSide(anElement, aPage) {
    Actions.Click(anElement, () => {
        GaaTil(aPage);
    })
}

function tryAgainText() {
    const prøvigjen = new Blocks.Image("bilder/prøv igjen.png", { x: 0, y: 0, width: 1180, height: 820 });
    Actions.Click(prøvigjen, () => {
        prøvigjen.hide();
    })
}

function correctText() {
    const response = new Blocks.Text("Riktig", { style: "riktigAlternativ", x: 150, y: 0, width: "100%", height: 100 });
    Actions.Click(response, () => {
        GaaTil(hovedside);
    })
}

function startskjerm() {
    const image = new Blocks.Image("bilder/start skjerm.png", { x: 0, y: 0, width: 1180, height: 820 });
    Actions.Click(image, () => { GaaTil(hovedside) })

}

const tittelStyle = "kortTittel";
const tekstKort = "kortTekst";

function hovedside() {
    const bakgrunn = new Blocks.Image("bilder/bilde bakgrunn startside.jpg", { x: 0, y: 0, width: 1180, height: 820 })
    
    const kortbrønn = new Blocks.Image("bilder/Bilde6.png", { style: "forsideKort", x: 60, y: 60, width: 220, height: 305 });
    Actions.Click(kortbrønn, () => {
        GaaTil(trykkpåbrønn)
    })
    const kortSKOG = new Blocks.Image("bilder/Bilde7.png", { style: "forsideKort", x: 850, y: 50, width: 255, height: 325 });
    Actions.Click(kortSKOG, () => {
        GaaTil(trykkpåskogen)
    })
    const kortSTUBBE = new Blocks.Image("bilder/Bilde8.png", { style: "forsideKort", x: 850, y: 450, width: 255, height: 325 });
    Actions.Click(kortSTUBBE, () => {
        GaaTil(trykkpåstubben)
    })

    const kortBERG = new Blocks.Image("bilder/Bilde5.png", { style: "forsideKort", x: 20, y: 420, width: 255, height: 305  });
    Actions.Click(kortBERG, () => {
        GaaTil(trykkpåberget);
    })
    const kortSTIG = new Blocks.Image("bilder/Bilde9.png", { style: "forsideKort", x: 420, y: 250, width: 300, height: 340 });
    Actions.Click(kortSTIG, () => {
        GaaTil(trykkpåstien);
    })
}


// Disse scenene er her som eksempler. Du kan ta dem bort eller endre dem. 

function forside() {
    const forside = new Blocks.Image("bilder/Bilde5.png", { x: 0, y: 0, width: 1180, height: 820 });
    Actions.Click(forside, () => {
        GaaTil(Hoppepåettbein);
    })
}

function trykkpåstien() {
    const alleKortSti = [kortSTIG1, kortSTIG2, kortSTIG3, kortSTIG4, KortSTIG5, KortSTIG6, kortmedalternivstig1, kortmedalternivstig2, kortmedalternativstig3, kortmedalternativstig4, kortmedalternativstig5, kortmedalternativstig6, kortmedalternativstig7, kortmedalternativstig8, kortmedalternativstig9, kortmedalternativstig10, kortmedalternativstig11, kortSti12,];
    const tilfeldig = Math.floor(Math.random() * alleKortSti.length);

    alleKortSti[tilfeldig]();
}

function trykkpåbrønn() {
    const alleKorbrønn = [kortbrønn1, kortbrønn2, kortbrønn3];
    const tilfeldig = Math.floor(Math.random() * alleKorbrønn.length);

    alleKorbrønn[tilfeldig]();
}
function trykkpåstubben() {
    const alleKortstubbe = [Kortstubbe1, Kortstubbe2];
    const tilfeldig = Math.floor(Math.random() * alleKortstubbe.length);

    alleKortstubbe[tilfeldig]();
}

function trykkpåskogen() {
    const alleKortskogen = [kortSKOG1, kortSKOG2, kortSKOG3];
    const tilfeldig = Math.floor(Math.random() * alleKortskogen.length);

    alleKortskogen[tilfeldig]();
}
function trykkpåberget() {
    const allekortberg = [kortBERG1, kortBERG2];
    const tilfeldig = Math.floor(Math.random() * allekortberg.length);

    allekortberg[tilfeldig]();
}
function kortSti12() {

    const forside = new Blocks.Image("kortstig.png", { x: 0, y: 0, width: 1180, height: 820 });
    const alternativ1 = new Blocks.Text("Hoppe på et bein", { style: "tittelkort", x: 200, y: 0, width: 100, height: 100 });

    const randomnumber = Math.floor(Math.random() * 20);

    const alternativ2 = new Blocks.Text(randomnumber + " Ganger", { style: "Alternativkort", x: 200, y: 500, width: 100, height: 100 });

    Actions.Click(forside, () => {
        GaaTil(hovedside)
    })

}

function kortbrønn1() {
    const kortbrønn = new Blocks.Image("Bilder/kortbrønn.png", { x: 0, y: 0, width: 1280, height: 820 });
    const txt6 = new Blocks.Text("Ved brønnen står du stille og ser. På medfølgt kort ser du et bilde av en brønn, og på baksiden et bilde av en lønn. Når du ser brønnen reiser du opp, og når du ser lønnen, setter du deg ned. Her må du agera, fortest mulig reagere. (Voksen tar frem kort med brønn og lønn og vekselvis sier Lønn eller brønn)", { style: "kortTekst", x: 85, y: -150, width:"100%", height: 10 });
    Actions.Click (kortbrønn, ()=>{
        GaaTil(hovedside)
    })
}

function kortbrønn2() {
    const kortbrønn = new Blocks.Image("Bilder/kortbrønn.png", { x: 0, y: 0, width: 1280, height: 820 });
    const txt6 = new Blocks.Text("I spillets labyrint, hvor mysterier skjer, En nøtt som er rund, gjemt blant busker og trær. Med et skall som er hardt, og en smak så fin, Den lille nøtten venter, på å bli funnet, så vennlig og blid!", { style: "kortTekst", x: 80, y: -150, width: "100%", height: 40 });
    Actions.Click(txt6, () => {
        GaaTil(hovedside)
    })
}

function kortbrønn3() {
    const kortbrønn = new Blocks.Image("Bilder/kortbrønn.png", { x: 0, y: 0, width: 1280, height: 820 });
    const txt6 = new Blocks.Text("Askeladden vil ha vann, han er så tørst,Trykk her fort, så får han en skvett først.Vannet kommer opp fra brønnen og blir klar,Askeladden blir glad når han får sin drikke, så rar!", { style: "kortTekst", x: 80, y: -150, width: "100%", height: 40 });
    Actions.Click(kortbrønn, () => { GaaTil(klikkepåbrønn) })



}
function klikkepåbrønn() {
    const bakgrunn = new Blocks.Image("bilder/bilde bakgrunn startside.jpg", { x: 0, y: 0, width: 1180, height: 820 })
    let bilde1 = new Blocks.Image("bilder/brønn tom.png", { x: 250, y: 200, width: 600, height: 700 });
    let bilde2 = null;
    let bilde3 = null;

    let antalltrykk = 0
    Actions.Click(bilde1, () => {
        antalltrykk = antalltrykk + 1;
        if (antalltrykk === 30) {
            bilde1.hide();
            bilde2 = new Blocks.Image("bilder/brønn halvfull.png", { x: 250, y: 200, width: 600, height: 700 });
            Actions.Click(bilde2, () => {
                antalltrykk = antalltrykk + 1;
                if (antalltrykk === 60) {
                    bilde2.hide();
                    bilde3 = new Blocks.Image("bilder/brønn full.png", { x: 300, y: 200, width: 600, height: 700 });
                    const tekst = new Blocks.Text("HURRA!", { style: "riktigAlternativ", x: 0, y: 0, width: 400, height: 400 });
                    Actions.Click(bakgrunn, () => { GaaTil(hovedside) })
                }
            })
        }
    })
}
function kortBERG1() {
    const kortBERG = new Blocks.Image("Bilder/kortberg.png", { x: 0, y: 0, width: 1280, height: 820 });
    const Txt6 = new Blocks.Text("Askeladden trenger din hjelp til å komme seg til toppen av fjellet! Kast terningen for å bestemme hvor mange pinner du kan sette inn, og hjelp Askeladden med å bygge veien oppover.En prikk på terningen, en pinne vi setter, Stadig oppover, det blir bedre og bedre. Med rett antall pinner, stigen blir vår venn, klatringen starter, kom igjen! ", { style: "kortTekst", x: 90, y: -60, width: "100%", height: 40 });
    Actions.Click(Txt6, () => {
        GaaTil(hovedside)
    })
}
function kortBERG2() {
    const kortBERG = new Blocks.Image("kortberg.png", { x: 0, y: 0, width: 1280, height: 820 });
    const txt6 = new Blocks.Text("Hmmm... Dette fjellet var for glatt til å klatre opp. Kan vi finne noe på brettet som kan hjelpe? Kanskje en gjyllend firebent venn?", { style: "kortTekst", x: 80, y:-80, width: "100%", height: 40 });
    Actions.Click(kortBERG, () => {
        GaaTil(hovedside)
    })
}
function Kortstubbe1() {
    const kortSTUBBE = new Blocks.Image("stubbekort.png", { x: 0, y: 0, width: 1280, height: 820 });
    const txt6 = new Blocks.Text("Å nei! Den gamle damen har satt nesa si fast i stubben! Hva kan vi finne på brettet som kan hjelpe henne? (Ungene peker ut ett av objektene som er på brettet de syntes kan funke)", { style: "kortTekst", x: 60, y: -80, width: "100%", height: 40 });
    Actions.Click(kortSTUBBE, () => {
        GaaTil(hovedside)
    })
}
function Kortstubbe2() {
    const kortSTUBBE = new Blocks.Image("stubbekort.png", { x: 0, y: 0, width: 1280, height: 820 });
    const txt6 = new Blocks.Text("Jeg er skarp, av stål, en glitrende stjerne, For å hjelpe i nød, er det dette jeg lærer. Med meg kan man felle, trærne gir gjenlyd, Damens nese fra stubben, vi frigjør med fryd, Hva er jeg?", { style: "kortTekst", x: 60, y: .80, width: "100%", height: 40 });
    Actions.Click(kortSTUBBE, () => {
        GaaTil(hovedside)
    })
}




function kortSKOG1() {
    const kortSKOG = new Blocks.Image("kortskog.png", { x: 0, y: 0, width: 1280, height: 820 });
    const txt6 = new Blocks.Text("Trollet nærmer seg, klar til å skape trøbbel! Er dere klare til å vise deres beste dansemoves og danse ham vekk? Musikken er på vei, så la oss danse! (Voksen, sett på musikk!)", { style: "kortTekst", x: 80, y: -70, width: "100%", height: 40 });
    Actions.Click(kortSKOG, () => {
        GaaTil(hovedside)
    })
}
function kortSKOG2() {
    const kortSKOG = new Blocks.Image("kortskog.png", { x: 0, y: 0, width: 1280, height: 820 });
    const txt6 = new Blocks.Text("I skogens hjerte, der mørket bor, Bak trærnes dans, ved stier av jord. En skapning lur, med skritt så tunge, Bak skygger og busker, der han gjemmer sin lunge. Med brøl som buldrer, og øyne som gløder, Han vokter sitt rike, i skogens skjøder. Hvem er jeg?", { style: "kortTekst", x: 80, y:-60, width: "100%", height: 40 });
    Actions.Click(kortSKOG, () => {
        GaaTil(hovedside)
    })
}


function kortSKOG3() {
    const kortSKOG = new Blocks.Image("kortskog.png", { x: 0, y: 0, width: 1280, height: 820 });
    const txt6 = new Blocks.Text("Trollet utfordrer deg til å kapp spise! Trykk på grøt bollen så fort du kan. Du har 30 sekunder på deg.)", { style: "kortTekst", x: 80, y: -70, width: "100%", height: 40 })
    Actions.Click(kortSKOG, () => {
        GaaTil(klikkepågrøt)
    })
}
function klikkepågrøt() {
    const bakgrunn = new Blocks.Image("bilder/bilde bakgrunn startside.jpg", { x: 0, y: 0, width: 1180, height: 820 })
    let bilde1 = new Blocks.Image("bilder/grøtskål full.png", { x: 250, y: 100, width: 600, height: 700 });
    let bilde2 = null;
    let bilde3 = null;

    let antalltrykk = 0
    Actions.Click(bilde1, () => {
        antalltrykk = antalltrykk + 1;
        if (antalltrykk === 30) {
            bilde1.hide();
            bilde2 = new Blocks.Image("bilder/grøtskåll halvfull.png", { x: 250, y: 100, width: 600, height: 700 });
            Actions.Click(bilde2, () => {
                antalltrykk = antalltrykk + 1;
                if (antalltrykk === 60) {
                    bilde2.hide();
                    bilde3 = new Blocks.Image("bilder/tom grøtskål.png", { x: 250, y: 100, width: 600, height: 700 });
                    const tekst = new Blocks.Text("HURRA!", { style: "riktigAlternativ", x: 0, y: 0, width: 400, height: 400 });
                    nesteSide(bakgrunn, hovedside) //nesteside (her skal det du viltrykke på , her skal den siden du vil til)
                }
            })
        }
    })
}
function kortSTIG1() {
    const kortSTIG = new Blocks.Image("kortstig.png", { x: 0, y: 0, width: 1280, height: 820 });
    const txt6 = new Blocks.Text("Du glemte å mate grisene før du gikk! Gå tilbake til start.", { style: "kortTekst", x: 80, y: -60, width: "100%", height: 40 })
    Actions.Click(txt6, () => {
        GaaTil(hovedside)
    })
}

function kortSTIG2() {
    const kortSTIG = new Blocks.Image("kortstig.png", { x: 0, y: 0, width: 1280, height: 820 });
    const txt6 = new Blocks.Text("Brøl som et troll", { style: "kortTekst", x: 150, y: 50, width: "100%", height: 40 })
    Actions.Click(txt6, () => {
        GaaTil(hovedside)
    })
}
function kortSTIG3() {
    const kortSTIG = new Blocks.Image("kortstig.png", { x: 0, y: 0, width: 1180, height: 820 });
    const txt6 = new Blocks.Text("Kast en gang til", { style: "kortTekst", x: 110, y: 40, width: "100%", height: 40 })
    Actions.Click(txt6, () => {
        GaaTil(hovedside)
    })
}
function kortSTIG4() {
    const kortSTIG = new Blocks.Image("kortstig.png", { x: 0, y: 0, width: 1280, height: 820 });
    const txt6 = new Blocks.Text("Askeladden ble veldig sliten, gå tilbake 2 steg ", { style: "kortTekst", x: 80, y: -30, width: "100%", height: 40 })
    Actions.Click(txt6, () => {
        GaaTil(hovedside)
    })
}
function KortSTIG5() {
    const kortSTIG = new Blocks.Image("kortstig.png", { x: 0, y: 0, width: 1280, height: 820 });
    const kortalt = new Blocks.Text("Hurra! Du kan gå frem ", { style: "kortTekst", x: 120, y: 0, width: 40, height: 40 })
    const randomnumber = Math.floor(Math.random() * 5) + 1
    const alternativ2 = new Blocks.Text(+ randomnumber + " Ganger", { style: "Alternativkort", x: 200, y: 500, width: 100, height: 100 });

    Actions.Click(kortSTIG, () => {
        GaaTil(hovedside)
    })
}
function KortSTIG6() {
    const kortSTIG = new Blocks.Image("kortstig.png", { x: 0, y: 0, width: 1180, height: 820 });
    const txt6 = new Blocks.Text("Du datt i vannet! Gå tilbake:", { style: "kortTekst", x: 80, y: 0, width: 40, height: 40 })
    const randomnumber = Math.floor(Math.random() * 6) + 1
    const alternativ2 = new Blocks.Text(+ randomnumber + " Ganger", { style: "Alternativkort", x: 200, y: 500, width: 100, height: 100 });

    Actions.Click(kortstig, () => {
        GaaTil(hovedside)
    })
}
function kortmedalternivstig1() {
    const kortSTIG = new Blocks.Image("kortstig.png", { x: 0, y: 0, width: 1180, height: 820 });
    const spørsmål = new Blocks.Text("Hva er det Espen Askeladd sier når han finner noe?", { style: "kortTekst", x: 50, y: 20, width: "100%", height: 100 });
    let alternativ2 = new Blocks.Text("1.Jeg fant, jeg fant", { style: "kortTekst", x: 50, y: 100, width: "100%", height: 100 });
    let alternativ3 = new Blocks.Text("2.Hva er det?", { style: "kortTekst", x: 50, y: 150, width: "100%", height: 100 });
    let alternativ4 = new Blocks.Text("3.Min min min!", { style: "kortTekst", x: 50, y: 200, width: "100%", height: 100 });



    Actions.Click(alternativ2, () => {
        correctText();
    })
    Actions.Click(alternativ3, () => {
        tryAgainText();
    })
    Actions.Click(alternativ4, () => {
        tryAgainText();
    })

}
    
    Actions.Click(alternativ2, () => {
        GaaTil(hovedside)
    
    
    })


function kortmedalternivstig2() {
    const kortSTIG = new Blocks.Image("kortstig.png", { x: 0, y: 0, width: 1180, height: 820 });

    const spørsmål = new Blocks.Text("Hva heter brødene til Espen Askeladd?", { style: "kortTekst", x: 50, y: 20, width: "100%", height: 100 });
    let alternativ2 = new Blocks.Text("1.Pelle og Pysa", { style: "kortTekst", x: 50, y: 100, width: "100%", height: 100 });
    let alternativ3 = new Blocks.Text("2.Bob og Per", { style: "kortTekst", x: 50, y: 150, width: "100%", height: 100 });
    let alternativ4 = new Blocks.Text("3.Per og Pål", { style: "kortTekst", x: 50, y: 200, width: "100%", height: 100 });



    Actions.Click(alternativ4, () => {
        correctText();
    })
    Actions.Click(alternativ2, () => {
        tryAgainText();
    })
    Actions.Click(alternativ3, () => {
        tryAgainText();
    })

}



function kortmedalternativstig3() {
    const bakgrunn = new Blocks.Image("kortstig.png", { x: 0, y: 0, width: 1180, height: 820 });
    const tekst = "Let etter på spillbrettet: "
    const alternativ1 = "Hamburger"
    const alternativ2 = "Gullhest"
    const alternativ3 = "Båt"
    const alternativ4 = "Klokke"
    const alternativ5 = "Øks"
    const alternativ6 = "Bil"
    const alternativ7 = "Ost"
    const alternativ8 = "Iskrem"
    const alternativ9 = "Sverd"
    const alleAlternativ = [alternativ1, alternativ2, alternativ3, alternativ4, alternativ5, alternativ6, alternativ7, alternativ8, alternativ9]
    const randomnumber = Math.floor(Math.random() * 8);
    const randomalternativ = alleAlternativ[randomnumber];
    const heleteksten = new Blocks.Text(tekst + randomalternativ, { style: "kortTekst", x: 150, y: 0, width: "100%", height: 100 });

    nesteSide(bakgrunn, hovedside)
}


function kortmedalternativstig4() {
    const kortSTIG = new Blocks.Image("kortstig.png", { x: 0, y: 0, width: 1180, height: 820 });
    const tekst = "Flytt til nærmeste:"
    const alternativ1 = "Fyrkant"
    const alternativ2 = "Trekant"
    const alternativ3 = "Cirkel"
    const alleAlternativ = [alternativ1, alternativ2, alternativ3,]
    const randomnumber = Math.floor(Math.random() * 3);
    const randomalternativ = alleAlternativ[randomnumber];
    const heleteksten = new Blocks.Text(tekst+ randomalternativ, { style: "kortTekst", x: 150, y: 0, width: "100%", height: 100 });
    nesteSide(bakgrunn, hovedside)

}

function kortmedalternativstig5() {
    const kortSTIG = new Blocks.Image("kortstig.png", { x: 0, y: 0, width: 1180, height: 820 });
    const tekst = "Hvordan starter ett eventyr?"
    let alternativ = new Blocks.Text("Hvordan starter et eventyr?", { style: "kortitel", x: 20, y: 0, width: "100%", height: 20 });
    let alternativ2 = new Blocks.Text("1.Snipp snapp snutte", { style: "kortTekst", x: 50, y: 100, width: "100%", height: 100 });
    let alternativ3 = new Blocks.Text("2.Hei hei!", { style: "kortTekst", x: 50, y: 150, width: "100%", height: 100 });
    let alternativ4 = new Blocks.Text("3.Hejsan hoppsan", { style: "kortTekst", x: 50, y: 200, width: "100%", height: 100 });
    let alternativ5 = new Blocks.Text("4.Det var en gang", { style: "kortTekst", x: 50, y: 250, width: "100%", height: 100 });

    Actions.Click(alternativ5, () => {
        correctText();
    })
    Actions.Click(alternativ3, () => {
        tryAgainText();
    })
    Actions.Click(alternativ2, () => {
        tryAgainText();
    })
    Actions.Click(alternativ4, () => {
        tryAgainText();
    })



}

function kortmedalternativstig6() {
    const kortSTIG = new Blocks.Image("kortstig.png", { x: 0, y: 0, width: 1180, height: 820 });
    const spørsmål = new Blocks.Text("Hvordan avsluttes ett eventyr?", { style: "kortTekst", x: 50, y: 20, width: "100%", height: 100 });
    let alternativ1 = new Blocks.Text("1.Snipp Snapp Snutte", { style: "kortTekst", x: 50, y: 250, width: "100%", height: 100 });
    let alternativ2 = new Blocks.Text("2.Hade bra!", { style: "kortTekst", x: 50, y: 100, width: "100%", height: 100 });
    let alternativ3 = new Blocks.Text("3.Vi snakkes!", { style: "kortTekst", x: 50, y: 150, width: "100%", height: 100 });
    let alternativ4 = new Blocks.Text("4.Abrakadabra", { style: "kortTekst", x: 50, y: 200, width: "100%", height: 100 });


    Actions.Click(alternativ1, () => {
        correctText();
    })
    Actions.Click(alternativ2, () => {
        tryAgainText();
    })
    Actions.Click(alternativ3, () => {
        tryAgainText();
    })
    Actions.Click(alternativ4, () => {
        tryAgainText();
    })


}



function kortmedalternativstig7() {
    const kortSTIG = new Blocks.Image("kortstig.png", { x: 0, y: 0, width: 1180, height: 820 });
    const spørsmål = "Hva rimer på:"
    const alternativ1 = "Dag?"
    const alternativ2 = "Natt?"
    const alternativ3 = "Troll?"
    const alternativ4 = "Brønn?"
    const alternativ5 = "Gris?"
    const alleAlternativ = [alternativ1, alternativ2, alternativ3, alternativ4, alternativ5,]
    const randomnumber = Math.floor(Math.random()* 5);
    const randomalternativ = alleAlternativ[randomnumber];
    const tekstElement = new Blocks.Text(spørsmål + randomalternativ, { style: "kortTekst", x: 100, y: 0, width: "100%", height: 100 });
    
    nesteSide(kortstig, hovedside)
}

function kortmedalternativstig8() {
    const kortSTIG = new Blocks.Image("kortstig.png", { x: 0, y: 0, width: 1180, height: 820 });
    const spørsmål = new Blocks.Text("Hvor bor trollet?", { style: "kortTekst", x: 50, y: 20, width: "100%", height: 100 });
    let alternativ1 = new Blocks.Text("1.På do", { style: "kortTekst", x: 50, y: 100, width: "100%", height: 100 });
    let alternativ2 = new Blocks.Text("4.I skogen", { style: "kortTekst", x: 50, y: 250, width: "100%", height: 100 });
    let alternativ3 = new Blocks.Text("2.På butikken", { style: "kortTekst", x: 50, y: 150, width: "100%", height: 100 });
    let alternativ4 = new Blocks.Text("3.På slottet", { style: "kortTekst", x: 50, y: 200, width: "100%", height: 100 });
    
    
    Actions.Click(alternativ2, () => {
        correctText();
    })
    Actions.Click(alternativ1, () => {
        tryAgainText();
    })
    Actions.Click(alternativ3, () => {
        tryAgainText();
    })
    Actions.Click(alternativ4, () => {
        tryAgainText();
    })

    nesteSide(bakgrunn, hovedside)
}



function kortmedalternativstig9() {
    const kortSTIG = new Blocks.Image("kortstig.png", { x: 0, y: 0, width: 1180, height: 820 });
    const tekst = "ÅH nei! du må gå tilbake:"
    const randomnumber = Math.floor(Math.random() * 6) + 1
    const alternativ2 = new Blocks.Text(tekst + randomnumber + " Steg", { style: "korttekst", x: 10, y: 100, width: "100%", height: 100 });
    nesteSide(kortSTIG, hovedside)

}

function kortmedalternativstig10() {
    const kortSTIG = new Blocks.Image("kortstig.png", { x: 0, y: 0, width: 1180, height: 820 });
    const tekst = "Hurra! Du kan gå frem:"
    const randomnumber = Math.floor(Math.random() * 6) + 1
    const alternativ2 = new Blocks.Text(tekst + randomnumber + " Steg", { style: "korttekst", x: 10, y: 100, width: "100%", height: 100 });
    nesteSide(kortSTIG, hovedside)

}

function kortmedalternativstig11() {
    const kortSTIG = new Blocks.Image("kortstig.png", { x: 0, y: 0, width: 1180, height: 820 });
    const tekst = "Du ser et stort troll! løp frem:"
    const randomnumber = Math.floor(Math.random() * 6) + 1
    const alternativ2 = new Blocks.Text(tekst + randomnumber + " steg", { style: "korttekst", x: 10, y: 100, width: "100%", height: 100 });
    nesteSide(bakgrunn, hovedside)
}






