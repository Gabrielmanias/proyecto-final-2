function ronaldo(){
    var messi=document.getElementById("messi").value
    messi=parseInt(messi)

    if(messi==0) alert("Felicitaciones, eres un verdadero comunista, no puedes tener un auto porque es propiedad privada")
    else if(messi>0) alert("Acaso quieres un auto eso es propiedad privada seras ejecutado")
    else alert("ta mal, numero negativo o caracter especial")

}



document.addEventListener('mousemove', handleMouseMove)

function handleMouseMove(event) {
    let audio = document.getElementById("audio");

        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }

}