const background = document.querySelector('.background');

document.body.classList.add("background");

const btn = document.querySelector('#btn');
const img = document.getElementById('parat');

btn.addEventListener('click', (e) => {
    console.log('helo');
    parat.classList.add("message2")
})


const theme = document.querySelectorAll('.theme')  // queryAll nous permet de prendre tout les class theme


theme.forEach((item) => {                        // Ici on fait un Foreach de tout nos class theme. J'appelle dans les (item) jaurais pu appeler comme je veux. Donc la place un event click sur tout mes class theme 
    item.addEventListener('click', (e) => {
        console.log(e.target.id);
        document.body.classList.remove("darkTheme", "yellowTheme", "grisTheme");

        switch (e.target.id) {
            case "dark":
                document.body.classList.add("darkTheme");
                break;
            case "yellow":
                document.body.classList.add("yellowTheme");
                break;
            case "gris":
                document.body.classList.add("grisTheme");
                break;
            default:
                null;

        }
    })
})


// ***********************CLICK EVENTS FOR BACKGROUND BODY*******************************


const cursor = document.querySelectorAll('.cursor');

theme.forEach((items) => {                        // Ici on fait un Foreach de tout nos class theme. J'appelle dans les (item) jaurais pu appeler comme je veux. Donc la place un event click sur tout mes class theme 
    items.addEventListener('click', (e) => {
        // console.log(e.target.id);
        // document.body.classList.remove("darkTheme", "yellowTheme", "grisTheme");

        switch (e.target.id) {
            case "darke":
                document.body.classList.add("darkTheme");
                break;
            case "yellows":
                document.body.classList.add("yellowTheme");
                break;
            case "gray":
                document.body.classList.add("grisTheme");
                break;
            default:
                null;

        }
    })
})


// ***************************************************************************************************************************



const theme1 = document.querySelectorAll('.theme1')
const colora = document.querySelector('.colors')

theme1.forEach((item) => {                        // Ici on fait un Foreach de tout nos class theme. J'appelle dans les (item) jaurais pu appeler comme je veux. Donc la place un event click sur tout mes class theme 
    item.addEventListener('mousemove', (e) => {
        console.log(e.target.id);
        colora.classList.remove("pinkTheme", "greenTheme", "redTheme");
        colora.classList.remove('baseColor');

        switch (e.target.id) {
            case "pink":
                colora.classList.add("pinkTheme");
                break;
            case "green":
                colora.classList.add("greenTheme");
                break;
            case "red":
                colora.classList.add("redTheme");
                break;
            default:
                null;

        }
    })

    item.addEventListener('mouseleave', (e) => {
        colora.classList.add('baseColor')
        colora.classList.remove("pinkTheme", "greenTheme", "redTheme");

    })

})


const writeTototo = document.getElementById('writeTototo');

var myText = "Voila un text que j'ai directement ecrit et injecter via JavaScript, en lui donnant un effet machine a ecrire";

var myArray = myText.split("");

var timeLooper;


function loop() {
    if (myArray.length > 0) {
        document.getElementById("writeTo").innerHTML += myArray.shift();
        writeTo.classList.add('padding')
    } else {
        clearTimeout(timeLooper);
    }
    timeLooper = setTimeout('loop()', 80);

}

writeTototo.addEventListener('click', (e) => {
    writeTototo.remove();
    loop();
})
