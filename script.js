//Función para dar movimiento a objetos
function evdragstart(ev){
    ev.	dataTransfer.setData("text", ev.target.id);
}
//Función para dar movimiento a objetos
function evdragover(ev){
    ev.preventDefault();
}
//Función para dar movimiento a objetos
function evdrop(ev,el) {
    ev.stopPropagation();
    ev.preventDefault();
    data=ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}


//Función para controlar los turnos de los jugadores 
function turnos(verificadorBooleano){
    var turnos = parseInt(document.getElementById("turnos").innerHTML);
    var barcosPieMaquina = parseInt(document.getElementById("numBarcosPieEnemigo").innerHTML);
    var barcosPie = parseInt(document.getElementById("numBarcosPie").innerHTML);
    //Evaluamos cuantos barcos hay en pie
    if(barcosPie > 0 && barcosPieMaquina > 0){
        verificacionBooleana();
        empezar();
        if(verificadorBooleano == true){
            barcosPieMaquina--;
            document.getElementById("numBarcosPieEnemigo").innerHTML = barcosPieMaquina;
        }
    }
    else{
        if(barcosPie > 0){
            document.open();
            document.write("<h1>HA GANADO!!!</h1>");
            document.close();
        }
        else{
            document.open();
            document.write("<h1>HA PERDIDO!!!</h1>");
            document.close();
        }
    }
    turnos++;
    document.getElementById("turnos").innerHTML = turnos;
}




document.getElementById("Start").addEventListener('click', empezar) 
document.getElementById("Organizar").addEventListener('click', organizar) 
//Función para comenzar a ordenar los barcos de maquina automaticamente.
function organizar() {
var barcosEnemigos=10
    for (let casillas = 1; casillas <= 100; casillas++) {
        //alert("entro a primer ciclo for")
        var a=casillas
        for (let numero = 1; numero <= 100; numero++) {
            //console.log("hola")//
            //alert("entro a segundo ciclo for")
            var b=numero
                while(barcosEnemigos>0){ 
                if(a==b){
                //console.log("hola2")//
                let ramdN1 = Math.round(Math.random()*99);
                    if(ramdN1==0){
                    //console.log ("entramos a ramdom")//
                    barcosEnemigos--;
                    document.getElementById("a1").innerHTML = "<span></span>"
                    }else if (ramdN1==1) {
                    //console.log ("entramos a ramdom")//
                    barcosEnemigos--;
                    document.getElementById("a2").innerHTML = "<span></span>" 
                    }else if (ramdN1==2) {
                    //console.log ("entramos a ramdom")//
                    barcosEnemigos--;
                    document.getElementById("a3").innerHTML = "<span></span>" 
                    }else if (ramdN1==3) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("a4").innerHTML = "<span></span>" 
                    }else if (ramdN1==4) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("a5").innerHTML = "<span></span>" 
                    }else if (ramdN1==5) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("a6").innerHTML = "<span></span>" 
                    }else if (ramdN1==6) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("a7").innerHTML = "<span></span>" 
                    }else if (ramdN1==7) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("a8").innerHTML = "<span></span>" 
                    }else if (ramdN1==8) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("a9").innerHTML = "<span></span>" 
                    }else if (ramdN1==9) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("a10").innerHTML = "<span></span>" 
                    }else if (ramdN1==10) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("b1").innerHTML = "<span></span>" 
                    }else if (ramdN1==11) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("b2").innerHTML = "<span></span>" 
                    }else if (ramdN1==12) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("b3").innerHTML = "<span></span>" 
                    }else if (ramdN1==13) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("b4").innerHTML = "<span></span>" 
                    }else if (ramdN1==14) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("b5").innerHTML = "<span></span>" 
                    }else if (ramdN1==15) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("b6").innerHTML = "<span></span>" 
                    }else if (ramdN1==16) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("b7").innerHTML = "<span></span>" 
                    }else if (ramdN1==17) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("b8").innerHTML = "<span></span>" 
                    }else if (ramdN1==18) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("b9").innerHTML = "<span></span>" 
                    }else if (ramdN1==19) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("b10").innerHTML = "<span></span>" 
                    }else if (ramdN1==20) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("c1").innerHTML = "<span></span>"
                    }else if (ramdN1==21) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("c2").innerHTML = "<span></span>" 
                    }else if (ramdN1==22) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("c3").innerHTML = "<span></span>" 
                    }else if (ramdN1==23) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("c4").innerHTML = "<span></span>" 
                    }else if (ramdN1==24) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("c5").innerHTML = "<span></span>" 
                    }else if (ramdN1==25) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("c6").innerHTML = "<span></span>" 
                    }else if (ramdN1==26) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("c7").innerHTML = "<span></span>" 
                    }else if (ramdN1==27) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("c8").innerHTML = "<span></span>" 
                    }else if (ramdN1==28) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("c9").innerHTML = "<span></span>" 
                    }else if (ramdN1==29) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("c10").innerHTML = "<span></span>" 
                    }else if (ramdN1==30) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("d1").innerHTML = "<span></span>"
                    }else if (ramdN1==31) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("d2").innerHTML = "<span></span>" 
                    }else if (ramdN1==32) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("d3").innerHTML = "<span></span>" 
                    }else if (ramdN1==33) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("d4").innerHTML = "<span></span>" 
                    }else if (ramdN1==34) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("d5").innerHTML = "<span></span>" 
                    }else if (ramdN1==35) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("d6").innerHTML = "<span></span>" 
                    }else if (ramdN1==36) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("d7").innerHTML = "<span></span>" 
                    }else if (ramdN1==37) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("d8").innerHTML = "<span></span>" 
                    }else if (ramdN1==38) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("d9").innerHTML = "<span></span>" 
                    }else if (ramdN1==39) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("d10").innerHTML = "<span></span>" 
                    }else if (ramdN1==40) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("e1").innerHTML = "<span></span>"
                    }else if (ramdN1==41) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("e2").innerHTML = "<span></span>" 
                    }else if (ramdN1==42) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("e3").innerHTML = "<span></span>" 
                    }else if (ramdN1==43) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("e4").innerHTML = "<span></span>" 
                    }else if (ramdN1==44) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("e5").innerHTML = "<span></span>" 
                    }else if (ramdN1==45) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("e6").innerHTML = "<span></span>" 
                    }else if (ramdN1==46) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("e7").innerHTML = "<span></span>" 
                    }else if (ramdN1==47) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("e8").innerHTML = "<span></span>" 
                    }else if (ramdN1==48) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("e9").innerHTML = "<span></span>" 
                    }else if (ramdN1==49) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("e10").innerHTML = "<span></span>" 
                    }else if (ramdN1==50) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("f1").innerHTML = "<span></span>"
                    }else if (ramdN1==51) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("f2").innerHTML = "<span></span>" 
                    }else if (ramdN1==52) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("f3").innerHTML = "<span></span>" 
                    }else if (ramdN1==53) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("f4").innerHTML = "<span></span>" 
                    }else if (ramdN1==54) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("f5").innerHTML = "<span></span>" 
                    }else if (ramdN1==55) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("f6").innerHTML = "<span></span>" 
                    }else if (ramdN1==56) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("f7").innerHTML = "<span></span>" 
                    }else if (ramdN1==57) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("f8").innerHTML = "<span></span>" 
                    }else if (ramdN1==58) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("f9").innerHTML = "<span></span>" 
                    }else if (ramdN1==59) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("f10").innerHTML = "<span></span>" 
                    }else if (ramdN1==60) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("g1").innerHTML = "<span></span>"
                    }else if (ramdN1==61) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("g2").innerHTML = "<span></span>" 
                    }else if (ramdN1==62) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("g3").innerHTML = "<span></span>" 
                    }else if (ramdN1==63) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("g4").innerHTML = "<span></span>" 
                    }else if (ramdN1==64) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("g5").innerHTML = "<span></span>" 
                    }else if (ramdN1==65) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("g6").innerHTML = "<span></span>" 
                    }else if (ramdN1==66) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("g7").innerHTML = "<span></span>" 
                    }else if (ramdN1==67) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("g8").innerHTML = "<span></span>" 
                    }else if (ramdN1==68) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("g9").innerHTML = "<span></span>" 
                    }else if (ramdN1==69) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("g10").innerHTML = "<span></span>" 
                    }else if (ramdN1==70) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("h1").innerHTML = "<span></span>"
                    }else if (ramdN1==71) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("h2").innerHTML = "<span></span>" 
                    }else if (ramdN1==72) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("h3").innerHTML = "<span></span>" 
                    }else if (ramdN1==73) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("h4").innerHTML = "<span></span>" 
                    }else if (ramdN1==74) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("h5").innerHTML = "<span></span>" 
                    }else if (ramdN1==75) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("h6").innerHTML = "<span></span>" 
                    }else if (ramdN1==76) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("h7").innerHTML = "<span></span>" 
                    }else if (ramdN1==77) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("h8").innerHTML = "<span></span>" 
                    }else if (ramdN1==78) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("h9").innerHTML = "<span></span>" 
                    }else if (ramdN1==79) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("h10").innerHTML = "<span></span>" 
                    }else if (ramdN1==80) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("i1").innerHTML = "<span></span>"
                    }else if (ramdN1==81) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("i2").innerHTML = "<span></span>" 
                    }else if (ramdN1==82) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("i3").innerHTML = "<span></span>" 
                    }else if (ramdN1==83) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("i4").innerHTML = "<span></span>" 
                    }else if (ramdN1==84) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("i5").innerHTML = "<span></span>" 
                    }else if (ramdN1==85) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("i6").innerHTML = "<span></span>" 
                    }else if (ramdN1==86) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("i7").innerHTML = "<span></span>" 
                    }else if (ramdN1==87) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("i8").innerHTML = "<span></span>" 
                    }else if (ramdN1==88) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("i9").innerHTML = "<span></span>" 
                    }else if (ramdN1==89) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("i10").innerHTML = "<span></span>" 
                    }else if (ramdN1==90) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("j1").innerHTML = "<span></span>"
                    }else if (ramdN1==91) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("j2").innerHTML = "<span></span>" 
                    }else if (ramdN1==92) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("j3").innerHTML = "<span></span>" 
                    }else if (ramdN1==93) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("j4").innerHTML = "<span></span>" 
                    }else if (ramdN1==94) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("j5").innerHTML = "<span></span>" 
                    }else if (ramdN1==95) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("j6").innerHTML = "<span></span>" 
                    }else if (ramdN1==96) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("j7").innerHTML = "<span></span>" 
                    }else if (ramdN1==97) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("j8").innerHTML = "<span></span>" 
                    }else if (ramdN1==98) {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("j9").innerHTML = "<span></span>" 
                    }else {
                        //console.log ("entramos a ramdom")//
                        barcosEnemigos--;
                        document.getElementById("j10").innerHTML = "<span></span>" 
                    }
                    
                } 
            }
        }        //alert("salio del segundo ciclo for")
    }
    //alert("salio del primer ciclo for") 
}


function verificacionBooleana(verificadorBooleanoMaquina){
    if(verificadorBooleanoMaquina == true){
        var barcosPie = parseInt(document.getElementById("numBarcosPie").innerHTML);
        barcosPie--;
        return document.getElementById("numBarcosPie").innerHTML = barcosPie;
        
    }
    else{
        //alert("En función else "+ verificadorBooleanoMaquina);
        return verificadorBooleanoMaquina;
    }
}


//Función de atacar a nuestra tabla
function empezar(){
    var barcosEnemigosDestruidos = (0)
    var barcosJugadorDestruidos = (0) 
	var Casillas = [];
	for (let index = 1; index < 100; index++) {
		Casillas.push(index)
	}
   console.log (Casillas)
    var Orden = []  
    var CasillaAleatoria = Math.floor(Math.random()*Casillas.length);
    Orden = CasillaAleatoria;
    delete Casillas.orden;
    console.log(Orden)
    console.log ("Turno maquina")
    if(Orden == 1){
        var celdas = document.getElementById("pa1").innerHTML;
        if(celdas){
        //alert("Le dio al barco");
        document.getElementById("pa1").style.backgroundColor = 'red';
        var verificadorBooleanoMaquina = true;
          verificacionBooleana(verificadorBooleanoMaquina);

        
        } 
        else{
        //alert("Falló el tiro");
        document.getElementById("pa1").style.backgroundColor = 'white';
        var verificadorBooleanoMaquina  = false;
          verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if(Orden == 2){
        var celdas = document.getElementById("pa2").innerHTML;
        if(celdas){
        //alert("Le dio al barco");
        document.getElementById("pa2").style.backgroundColor = 'red';
        var verificadorBooleanoMaquina = true;
          verificacionBooleana(verificadorBooleanoMaquina);

        } 
        else{
        //alert("Falló el tiro");
        document.getElementById("pa2").style.backgroundColor = 'white';
        var verificadorBooleanoMaquina  = false;
          verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if(Orden == 3){
        var celdas = document.getElementById("pa3").innerHTML;
        if(celdas){
        //alert("Le dio al barco");
        document.getElementById("pa3").style.backgroundColor = 'red';
        var verificadorBooleanoMaquina = true;
          verificacionBooleana(verificadorBooleanoMaquina);

        } 
        else{
        //alert("Falló el tiro");
        document.getElementById("pa3").style.backgroundColor = 'white';
        var verificadorBooleanoMaquina  = false;
          verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if(Orden == 4){
        var celdas = document.getElementById("pa4").innerHTML;
        if(celdas){
    //	alert("Le dio al barco");
        document.getElementById("pa4").style.backgroundColor = 'red';
        var verificadorBooleanoMaquina = true;
          verificacionBooleana(verificadorBooleanoMaquina);

        } 
        else{
        //alert("Falló el tiro");
        document.getElementById("pa4").style.backgroundColor = 'white';
       var verificadorBooleanoMaquina  = false;
          verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if(Orden == 5){
        var celdas = document.getElementById("pa5").innerHTML;
        if(celdas){
        //alert("Le dio al barco");
        document.getElementById("pa5").style.backgroundColor = 'red';
        var verificadorBooleanoMaquina = true;
          verificacionBooleana(verificadorBooleanoMaquina);

        } 
        else{
        //alert("Falló el tiro");
        document.getElementById("pa5").style.backgroundColor = 'white';
        var verificadorBooleanoMaquina  = false;
          verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if(Orden == 6){
        var celdas = document.getElementById("pa6").innerHTML;
        if(celdas){
        //alert("Le dio al barco");
        document.getElementById("pa6").style.backgroundColor = 'red';
       var verificadorBooleanoMaquina = true;
          verificacionBooleana(verificadorBooleanoMaquina);

        } 
        else{
        //alert("Falló el tiro");
        document.getElementById("pa6").style.backgroundColor = 'white';
        var verificadorBooleanoMaquina  = false;
          verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if(Orden == 7){
        var celdas = document.getElementById("pa7").innerHTML;
        if(celdas){
        //alert("Le dio al barco");
        document.getElementById("pa7").style.backgroundColor = 'red';
        var verificadorBooleanoMaquina = true;
          verificacionBooleana(verificadorBooleanoMaquina);

        } 
        else{
        //alert("Falló el tiro");
        document.getElementById("pa7").style.backgroundColor = 'white';
        var verificadorBooleanoMaquina  = false;
          verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if(Orden == 8){
        var celdas = document.getElementById("pa8").innerHTML;
        if(celdas){
        //alert("Le dio al barco");
        document.getElementById("pa8").style.backgroundColor = 'red';
       var verificadorBooleanoMaquina = true;
          verificacionBooleana(verificadorBooleanoMaquina);

        } 
        else{
        //alert("Falló el tiro");
        document.getElementById("pa8").style.backgroundColor = 'white';
        var verificadorBooleanoMaquina  = false;
          verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if(Orden == 9){
        var celdas = document.getElementById("pa9").innerHTML;
        if(celdas){
    //	alert("Le dio al barco");
        document.getElementById("pa9").style.backgroundColor = 'red';
       var verificadorBooleanoMaquina = true;
          verificacionBooleana(verificadorBooleanoMaquina);

        } 
        else{
        //alert("Falló el tiro");
        document.getElementById("pa9").style.backgroundColor = 'white';
        var verificadorBooleanoMaquina  = false;
          verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 10) {
        var celdas = document.getElementById("pa10").innerHTML;
        if(celdas){
        //alert("Le dio al barco");
        document.getElementById("pa10").style.backgroundColor = 'red';
        var verificadorBooleanoMaquina = true;
          verificacionBooleana(verificadorBooleanoMaquina);

        } 
        else{
        //alert("Falló el tiro");
        document.getElementById("pa10").style.backgroundColor = 'white';
        var verificadorBooleanoMaquina  = false;
          verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 11) {
        var celdas = document.getElementById("pb1").innerHTML;
        if(celdas){
        //alert("Le dio al barco");
        document.getElementById("pb1").style.backgroundColor = 'red';
       var verificadorBooleanoMaquina = true;
          verificacionBooleana(verificadorBooleanoMaquina);

        } 
        else{
        //alert("Falló el tiro");
        document.getElementById("pb1").style.backgroundColor = 'white';
       var verificadorBooleanoMaquina  = false;
          verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 12) {
        var celdas = document.getElementById("pb2").innerHTML;
        if(celdas){
        //alert("Le dio al barco");
        document.getElementById("pb2").style.backgroundColor = 'red';
       var verificadorBooleanoMaquina = true;
          verificacionBooleana(verificadorBooleanoMaquina);

        } 
        else{
        //alert("Falló el tiro");
        document.getElementById("pb2").style.backgroundColor = 'white';
        var verificadorBooleanoMaquina  = false;
          verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 13) {
        var celdas = document.getElementById("pb3").innerHTML;
        if(celdas){
        //alert("Le dio al barco");
        document.getElementById("pb3").style.backgroundColor = 'red';
        var verificadorBooleanoMaquina = true;
          verificacionBooleana(verificadorBooleanoMaquina);

        } 
        else{
        //alert("Falló el tiro");
        document.getElementById("pb3").style.backgroundColor = 'white';
       var verificadorBooleanoMaquina  = false;
          verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 14) {
        var celdas = document.getElementById("pb4").innerHTML;
        if(celdas){
        //alert("Le dio al barco");
        document.getElementById("pb4").style.backgroundColor = 'red';
       var verificadorBooleanoMaquina = true;
          verificacionBooleana(verificadorBooleanoMaquina);

        } 
        else{
        //alert("Falló el tiro");
        document.getElementById("pb4").style.backgroundColor = 'white';
        var verificadorBooleanoMaquina  = false;
          verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 15) {
        var celdas = document.getElementById("pb5").innerHTML;
        if(celdas){
        //alert("Le dio al barco");
        document.getElementById("pb5").style.backgroundColor = 'red';
       var verificadorBooleanoMaquina = true;
          verificacionBooleana(verificadorBooleanoMaquina);

        } 
        else{
        //alert("Falló el tiro");
        document.getElementById("pb5").style.backgroundColor = 'white';
        var verificadorBooleanoMaquina  = false;
          verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 16) {
        var celdas = document.getElementById("pb6").innerHTML;
        if(celdas){
        //alert("Le dio al barco");
        document.getElementById("pb6").style.backgroundColor = 'red';
       var verificadorBooleanoMaquina = true;
          verificacionBooleana(verificadorBooleanoMaquina);

        } 
        else{
        //alert("Falló el tiro");
        document.getElementById("pb6").style.backgroundColor = 'white';
       var verificadorBooleanoMaquina  = false;
          verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 17) {
        var celdas = document.getElementById("pb7").innerHTML;
        if(celdas){
    //	alert("Le dio al barco");
        document.getElementById("pb7").style.backgroundColor = 'red';
       var verificadorBooleanoMaquina = true;
          verificacionBooleana(verificadorBooleanoMaquina);

        } 
        else{
        //alert("Falló el tiro");
        document.getElementById("pb7").style.backgroundColor = 'white';
        var verificadorBooleanoMaquina  = false;
          verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 18) {
        var celdas = document.getElementById("pb8").innerHTML;
        if(celdas){
        //alert("Le dio al barco");
        document.getElementById("pb8").style.backgroundColor = 'red';
        var verificadorBooleanoMaquina = true;
          verificacionBooleana(verificadorBooleanoMaquina);

        } 
        else{
        //alert("Falló el tiro");
        document.getElementById("pb8").style.backgroundColor = 'white';
        var verificadorBooleanoMaquina  = false;
          verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 19) {
        var celdas = document.getElementById("pb9").innerHTML;
        if(celdas){
        //alert("Le dio al barco");
        document.getElementById("pb9").style.backgroundColor = 'red';
       var verificadorBooleanoMaquina = true;
          verificacionBooleana(verificadorBooleanoMaquina);

        } 
        else{
        //alert("Falló el tiro");
        document.getElementById("pb9").style.backgroundColor = 'white';
       var verificadorBooleanoMaquina  = false;
          verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 20) {
        var celdas = document.getElementById("pb10").innerHTML;
        if(celdas){
        //alert("Le dio al barco");
        document.getElementById("pb10").style.backgroundColor = 'red';
       var verificadorBooleanoMaquina = true;
          verificacionBooleana(verificadorBooleanoMaquina);

        } 
        else{
        //alert("Falló el tiro");
        document.getElementById("pb10").style.backgroundColor = 'white';
        var verificadorBooleanoMaquina  = false;
          verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 21) {
        var celdas = document.getElementById("pc1").innerHTML;
        if(celdas){
        //alert("Le dio al barco");
        document.getElementById("pc1").style.backgroundColor = 'red';
       var verificadorBooleanoMaquina = true;
          verificacionBooleana(verificadorBooleanoMaquina);

        } 
        else{
        //alert("Falló el tiro");
        document.getElementById("pc1").style.backgroundColor = 'white';
       var verificadorBooleanoMaquina  = false;
          verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 22) {
        var celdas = document.getElementById("pc2").innerHTML;
        if(celdas){
        //alert("Le dio al barco");
        document.getElementById("pc2").style.backgroundColor = 'red';
       var verificadorBooleanoMaquina = true;
          verificacionBooleana(verificadorBooleanoMaquina);

        } 
        else{
        //alert("Falló el tiro");
        document.getElementById("pc2").style.backgroundColor = 'white';
        var verificadorBooleanoMaquina  = false;
          verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 23) {
        var celdas = document.getElementById("pc3").innerHTML;
        if(celdas){
        //alert("Le dio al barco");
        document.getElementById("pc3").style.backgroundColor = 'red';
       var verificadorBooleanoMaquina = true;
          verificacionBooleana(verificadorBooleanoMaquina);

        } 
        else{
        //alert("Falló el tiro");
        document.getElementById("pc3").style.backgroundColor = 'white';
        var verificadorBooleanoMaquina  = false;
          verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 24) {
        var celdas = document.getElementById("pc4").innerHTML;
        if(celdas){
        //alert("Le dio al barco");
        document.getElementById("pc4").style.backgroundColor = 'red';
        var verificadorBooleanoMaquina = true;
          verificacionBooleana(verificadorBooleanoMaquina);

        } 
        else{
        //alert("Falló el tiro");
        document.getElementById("pc4").style.backgroundColor = 'white';
        var verificadorBooleanoMaquina  = false;
          verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 25) {
        var celdas = document.getElementById("pc5").innerHTML;
        if(celdas){
        //alert("Le dio al barco");
        document.getElementById("pc5").style.backgroundColor = 'red';
        var verificadorBooleanoMaquina = true;
          verificacionBooleana(verificadorBooleanoMaquina);

        } 
        else{
        //alert("Falló el tiro");
        document.getElementById("pc5").style.backgroundColor = 'white';
       var verificadorBooleanoMaquina  = false;
          verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 26) {
        var celdas = document.getElementById("pc6").innerHTML;
        if(celdas){
        //alert("Le dio al barco");
        document.getElementById("pc6").style.backgroundColor = 'red';
        var verificadorBooleanoMaquina = true;
          verificacionBooleana(verificadorBooleanoMaquina);

        } 
        else{
        //alert("Falló el tiro");
        document.getElementById("pc6").style.backgroundColor = 'white';
        var verificadorBooleanoMaquina  = false;
          verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 27) {
        var celdas = document.getElementById("pc7").innerHTML;
        if(celdas){
        //alert("Le dio al barco");
        document.getElementById("pc7").style.backgroundColor = 'red';
       var verificadorBooleanoMaquina = true;
          verificacionBooleana(verificadorBooleanoMaquina);

        } 
        else{
        //alert("Falló el tiro");
        document.getElementById("pc7").style.backgroundColor = 'white';
       var verificadorBooleanoMaquina  = false;
          verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 28) {
        var celdas = document.getElementById("pc8").innerHTML;
        if(celdas){
        //alert("Le dio al barco");
        document.getElementById("pc8").style.backgroundColor = 'red';
        var verificadorBooleanoMaquina = true;
          verificacionBooleana(verificadorBooleanoMaquina);

        } 
        else{
        //alert("Falló el tiro");
        document.getElementById("pc8").style.backgroundColor = 'white';
       var verificadorBooleanoMaquina  = false;
          verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 29) {
        var celdas = document.getElementById("pc9").innerHTML;
        if(celdas){
        //alert("Le dio al barco");
        document.getElementById("pc9").style.backgroundColor = 'red';
       var verificadorBooleanoMaquina = true;
          verificacionBooleana(verificadorBooleanoMaquina);

        } 
        else{
        //alert("Falló el tiro");
        document.getElementById("pc9").style.backgroundColor = 'white';
       var verificadorBooleanoMaquina  = false;
          verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 30) {
        var celdas = document.getElementById("pc10").innerHTML;
        if(celdas){
        //alert("Le dio al barco");
        document.getElementById("pc10").style.backgroundColor = 'red';
       var verificadorBooleanoMaquina = true;
          verificacionBooleana(verificadorBooleanoMaquina);

        } 
        else{
        //alert("Falló el tiro");
        document.getElementById("pc10").style.backgroundColor = 'white';
       var verificadorBooleanoMaquina  = false;
          verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 31) {
        var celdas = document.getElementById("pd1").innerHTML;
        if(celdas){
        //alert("Le dio al barco");
        document.getElementById("pd1").style.backgroundColor = 'red';
        var verificadorBooleanoMaquina = true;
          verificacionBooleana(verificadorBooleanoMaquina);

        } 
        else{
        //alert("Falló el tiro");
        document.getElementById("pd1").style.backgroundColor = 'white';
        var verificadorBooleanoMaquina  = false;
          verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 32) {
        var celdas = document.getElementById("pd2").innerHTML;
        if(celdas){
        //alert("Le dio al barco");
        document.getElementById("pd2").style.backgroundColor = 'red';
       var verificadorBooleanoMaquina = true;
          verificacionBooleana(verificadorBooleanoMaquina);

        } 
        else{
        //alert("Falló el tiro");
        document.getElementById("pd2").style.backgroundColor = 'white';
       var verificadorBooleanoMaquina  = false;
          verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 33) {
        var celdas = document.getElementById("pd3").innerHTML;
        if(celdas){
        //alert("Le dio al barco");
        document.getElementById("pd3").style.backgroundColor = 'red';
        var verificadorBooleanoMaquina = true;
          verificacionBooleana(verificadorBooleanoMaquina);

        } 
        else{
        //alert("Falló el tiro");
        document.getElementById("pd3").style.backgroundColor = 'white';
       var verificadorBooleanoMaquina  = false;
          verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 34) {
        var celdas = document.getElementById("pd4").innerHTML;
        if(celdas){
        //alert("Le dio al barco");
        document.getElementById("pd4").style.backgroundColor = 'red';
        var verificadorBooleanoMaquina = true;
          verificacionBooleana(verificadorBooleanoMaquina);

        } 
        else{
        //alert("Falló el tiro");
        document.getElementById("pd4").style.backgroundColor = 'white';
        var verificadorBooleanoMaquina  = false;
          verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 35) {
        var celdas = document.getElementById("pd5").innerHTML;
        if(celdas){
        //alert("Le dio al barco");
        document.getElementById("pd5").style.backgroundColor = 'red';
        var verificadorBooleanoMaquina = true;
          verificacionBooleana(verificadorBooleanoMaquina);

        } 
        else{
        //alert("Falló el tiro");
        document.getElementById("pd5").style.backgroundColor = 'white';
        var verificadorBooleanoMaquina  = false;
          verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 36) {
        var celdas = document.getElementById("pd6").innerHTML;
        if(celdas){
        //alert("Le dio al barco");
        document.getElementById("pd6").style.backgroundColor = 'red';
       var verificadorBooleanoMaquina = true;
          verificacionBooleana(verificadorBooleanoMaquina);

        } 
        else{
        //	alert("Falló el tiro");
        document.getElementById("pd6").style.backgroundColor = 'white';
        var verificadorBooleanoMaquina  = false;
          verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 37) {
        var celdas = document.getElementById("pd7").innerHTML;
        if(celdas){
        //alert("Le dio al barco");
        document.getElementById("pd7").style.backgroundColor = 'red';
       var verificadorBooleanoMaquina = true;
          verificacionBooleana(verificadorBooleanoMaquina);

        } 
        else{
        //alert("Falló el tiro");
        document.getElementById("pd7").style.backgroundColor = 'white';
        var verificadorBooleanoMaquina  = false;
          verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 38) {
        var celdas = document.getElementById("pd8").innerHTML;
        if(celdas){
        //alert("Le dio al barco");
        document.getElementById("pd8").style.backgroundColor = 'red';
       var verificadorBooleanoMaquina = true;
          verificacionBooleana(verificadorBooleanoMaquina);

        } 
        else{
        //alert("Falló el tiro");
        document.getElementById("pd8").style.backgroundColor = 'white';
       var verificadorBooleanoMaquina  = false;
          verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 39) {
        var celdas = document.getElementById("pd9").innerHTML;
        if(celdas){
        //	alert("Le dio al barco");
        document.getElementById("pd9").style.backgroundColor = 'red';
       var verificadorBooleanoMaquina = true;
          verificacionBooleana(verificadorBooleanoMaquina);

        } 
        else{
        //alert("Falló el tiro");
        document.getElementById("pd9").style.backgroundColor = 'white';
        var verificadorBooleanoMaquina  = false;
          verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 40) {
        var celdas = document.getElementById("pd10").innerHTML;
        if(celdas){
        //alert("Le dio al barco");
        document.getElementById("pd10").style.backgroundColor = 'red';
       var verificadorBooleanoMaquina = true;
          verificacionBooleana(verificadorBooleanoMaquina);

        } 
        else{
        //alert("Falló el tiro");
        document.getElementById("pd10").style.backgroundColor = 'white';
        var verificadorBooleanoMaquina  = false;
          verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 41) {
        var celdas = document.getElementById("pe1").innerHTML;
        if(celdas){
        //alert("Le dio al barco");
        document.getElementById("pe1").style.backgroundColor = 'red';
       var verificadorBooleanoMaquina = true;
          verificacionBooleana(verificadorBooleanoMaquina);

        } 
        else{
        //alert("Falló el tiro");
        document.getElementById("pe1").style.backgroundColor = 'white';
       var verificadorBooleanoMaquina  = false;
          verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 42) {
        var celdas = document.getElementById("pe2").innerHTML;
        if(celdas){
        //alert("Le dio al barco");
        document.getElementById("pe2").style.backgroundColor = 'red';
       var verificadorBooleanoMaquina = true;
          verificacionBooleana(verificadorBooleanoMaquina);

        } 
        else{
        //alert("Falló el tiro");
        document.getElementById("pe2").style.backgroundColor = 'white';
        var verificadorBooleanoMaquina  = false;
          verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 43) {
        var celdas = document.getElementById("pe3").innerHTML;
        if(celdas){
        //alert("Le dio al barco");
        document.getElementById("pe3").style.backgroundColor = 'red';
       var verificadorBooleanoMaquina = true;
          verificacionBooleana(verificadorBooleanoMaquina);

        } 
        else{
        //alert("Falló el tiro");
        document.getElementById("pe3").style.backgroundColor = 'white';
        var verificadorBooleanoMaquina  = false;
          verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 44) {
        var celdas = document.getElementById("pe4").innerHTML;
        if(celdas){
        //alert("Le dio al barco");
        document.getElementById("pe4").style.backgroundColor = 'red';
       var verificadorBooleanoMaquina = true;
          verificacionBooleana(verificadorBooleanoMaquina);

        } 
        else{
        //alert("Falló el tiro");
        document.getElementById("pe4").style.backgroundColor = 'white';
        var verificadorBooleanoMaquina  = false;
          verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 45) {
        var celdas = document.getElementById("pe5").innerHTML;
        if(celdas){
        //alert("Le dio al barco");
        document.getElementById("pe5").style.backgroundColor = 'red';
       var verificadorBooleanoMaquina = true;
          verificacionBooleana(verificadorBooleanoMaquina);

        } 
        else{
        //alert("Falló el tiro");
        document.getElementById("pe5").style.backgroundColor = 'white';
        var verificadorBooleanoMaquina  = false;
          verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 46) {

        var celdas = document.getElementById("pe6").innerHTML;
        if(celdas){
    //	alert("Le dio al barco");
        document.getElementById("pe6").style.backgroundColor = 'red';
       var verificadorBooleanoMaquina = true;
          verificacionBooleana(verificadorBooleanoMaquina);

        } 
        else{
        //alert("Falló el tiro");
        document.getElementById("pe6").style.backgroundColor = 'white';
       var verificadorBooleanoMaquina  = false;
          verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 47) {
        var celdas = document.getElementById("pe7").innerHTML;
        if(celdas){
        //alert("Le dio al barco");
        document.getElementById("pe7").style.backgroundColor = 'red';
       var verificadorBooleanoMaquina = true;
          verificacionBooleana(verificadorBooleanoMaquina);

        } 
        else{
        //alert("Falló el tiro");
        document.getElementById("pe7").style.backgroundColor = 'white';
        var verificadorBooleanoMaquina  = false;
          verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 48) {
        var celdas = document.getElementById("pe8").innerHTML;
        if(celdas){
        //alert("Le dio al barco");
        document.getElementById("pe8").style.backgroundColor = 'red';
       var verificadorBooleanoMaquina = true;
          verificacionBooleana(verificadorBooleanoMaquina);

        } 
        else{
        //alert("Falló el tiro");
        document.getElementById("pe8").style.backgroundColor = 'white';
        var verificadorBooleanoMaquina  = false;
          verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 49) {
        var celdas = document.getElementById("pe9").innerHTML;
        if(celdas){
        //alert("Le dio al barco");
        document.getElementById("pe9").style.backgroundColor = 'red';
       var verificadorBooleanoMaquina = true;
          verificacionBooleana(verificadorBooleanoMaquina);

        } 
        else{
        //alert("Falló el tiro");
        document.getElementById("pe9").style.backgroundColor = 'white';
       var verificadorBooleanoMaquina  = false;
          verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 50) {
        var celdas = document.getElementById("pe10").innerHTML;
        if(celdas){
        //alert("Le dio al barco");
        document.getElementById("pe10").style.backgroundColor = 'red';
       var verificadorBooleanoMaquina = true;
          verificacionBooleana(verificadorBooleanoMaquina);

        } 
        else{
        //alert("Falló el tiro");
        document.getElementById("pe10").style.backgroundColor = 'white';
        var verificadorBooleanoMaquina  = false;
          verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 51) {
        var celdas = document.getElementById("pf1").innerHTML;
        if(celdas){
        //alert("Le dio al barco");
        document.getElementById("pf1").style.backgroundColor = 'red';
       var verificadorBooleanoMaquina = true;
          verificacionBooleana(verificadorBooleanoMaquina);

        } 
        else{
        //alert("Falló el tiro");
        document.getElementById("pf1").style.backgroundColor = 'white';
       var verificadorBooleanoMaquina  = false;
          verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 52) {
        var celdas = document.getElementById("pf2").innerHTML;
        if(celdas){
        //alert("Le dio al barco");
        document.getElementById("pf2").style.backgroundColor = 'red';
        var verificadorBooleanoMaquina = true;
          verificacionBooleana(verificadorBooleanoMaquina);

        } 
        else{
        //alert("Falló el tiro");
        document.getElementById("pf2").style.backgroundColor = 'white';
        var verificadorBooleanoMaquina  = false;
          verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 53) {
        var celdas = document.getElementById("pf3").innerHTML;
        if(celdas){
        //alert("Le dio al barco");
        document.getElementById("pf3").style.backgroundColor = 'red';
        var verificadorBooleanoMaquina = true;
          verificacionBooleana(verificadorBooleanoMaquina);

        } 
        else{
        //alert("Falló el tiro");
        document.getElementById("pf3").style.backgroundColor = 'white';
        var verificadorBooleanoMaquina  = false;
          verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 54) {
        var celdas = document.getElementById("pf4").innerHTML;
        if(celdas){
        //alert("Le dio al barco");
        document.getElementById("pf4").style.backgroundColor = 'red';
        var verificadorBooleanoMaquina = true;
          verificacionBooleana(verificadorBooleanoMaquina);

        } 
        else{
        //alert("Falló el tiro");
        document.getElementById("pf4").style.backgroundColor = 'white';
        var verificadorBooleanoMaquina  = false;
          verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 55) {
        var celdas = document.getElementById("pf5").innerHTML;
        if(celdas){
        //alert("Le dio al barco");
        document.getElementById("pf5").style.backgroundColor = 'red';
        var verificadorBooleanoMaquina = true;
          verificacionBooleana(verificadorBooleanoMaquina);

        } 
        else{
        //alert("Falló el tiro");
        document.getElementById("pf5").style.backgroundColor = 'white';
         var verificadorBooleanoMaquina  = false;
          verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 56) {
        var celdas = document.getElementById("pf6").innerHTML;
        if(celdas){
        //alert("Le dio al barco");
        document.getElementById("pf6").style.backgroundColor = 'red';
       var verificadorBooleanoMaquina = true;
          verificacionBooleana(verificadorBooleanoMaquina);

        } 
        else{
        //alert("Falló el tiro");
        document.getElementById("pf6").style.backgroundColor = 'white';
         var verificadorBooleanoMaquina  = false;
          verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 57) {
        var celdas = document.getElementById("pf7").innerHTML;
        if(celdas){
        //alert("Le dio al barco");
        document.getElementById("pf7").style.backgroundColor = 'red';
       var verificadorBooleanoMaquina = true;
          verificacionBooleana(verificadorBooleanoMaquina);

        } 
        else{
        //alert("Falló el tiro");
        document.getElementById("pf7").style.backgroundColor = 'white';
        var verificadorBooleanoMaquina  = false;
          verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 58) {
        var celdas = document.getElementById("pf8").innerHTML;
        if(celdas){
        //alert("Le dio al barco");
        document.getElementById("pf8").style.backgroundColor = 'red';
       var verificadorBooleanoMaquina = true;
          verificacionBooleana(verificadorBooleanoMaquina);

        } 
        else{
        //alert("Falló el tiro");
        document.getElementById("pf8").style.backgroundColor = 'white';
         var verificadorBooleanoMaquina  = false;
          verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 59) {
        var celdas = document.getElementById("pf9").innerHTML;
        if(celdas){
        //alert("Le dio al barco");
        document.getElementById("pf9").style.backgroundColor = 'red';
        var verificadorBooleanoMaquina = true;
          verificacionBooleana(verificadorBooleanoMaquina);

        } 
        else{
        //alert("Falló el tiro");
        document.getElementById("pf9").style.backgroundColor = 'white';
         var verificadorBooleanoMaquina  = false;
          verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 60) {
        var celdas = document.getElementById("pf10").innerHTML;
        if(celdas){
        //alert("Le dio al barco");
        document.getElementById("pf10").style.backgroundColor = 'red';
        var verificadorBooleanoMaquina = true;
          verificacionBooleana(verificadorBooleanoMaquina);

        } 
        else{
    //	alert("Falló el tiro");
        document.getElementById("pf10").style.backgroundColor = 'white';
         var verificadorBooleanoMaquina  = false;
          verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 61) {
        var celdas = document.getElementById("pg1").innerHTML;
        if(celdas){
        //alert("Le dio al barco");
        document.getElementById("pg1").style.backgroundColor = 'red';
        var verificadorBooleanoMaquina = true;
          verificacionBooleana(verificadorBooleanoMaquina);

        } 
        else{
        //alert("Falló el tiro");
        document.getElementById("pg1").style.backgroundColor = 'white';
        var verificadorBooleanoMaquina  = false;
          verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 62) {
        var celdas = document.getElementById("pg2").innerHTML;
        if(celdas){
        //alert("Le dio al barco");
        document.getElementById("pg2").style.backgroundColor = 'red';
        var verificadorBooleanoMaquina = true;
          verificacionBooleana(verificadorBooleanoMaquina);

        } 
        else{
        //alert("Falló el tiro");
        document.getElementById("pg2").style.backgroundColor = 'white';
         var verificadorBooleanoMaquina  = false;
          verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 63) {
        var celdas = document.getElementById("pg3").innerHTML;
        if(celdas){
        //alert("Le dio al barco");
        document.getElementById("pg3").style.backgroundColor = 'red';
        var verificadorBooleanoMaquina = true;
          verificacionBooleana(verificadorBooleanoMaquina);

        } 
        else{
        //alert("Falló el tiro");
        document.getElementById("pg3").style.backgroundColor = 'white';
        var verificadorBooleanoMaquina  = false;
          verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 64) {
        var celdas = document.getElementById("pg4").innerHTML;
        if(celdas){
        //alert("Le dio al barco");
        document.getElementById("pg4").style.backgroundColor = 'red';
        var verificadorBooleanoMaquina = true;
          verificacionBooleana(verificadorBooleanoMaquina);

        } 
        else{
        //alert("Falló el tiro");
        document.getElementById("pg4").style.backgroundColor = 'white';
         var verificadorBooleanoMaquina  = false;
          verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 65) {
        var celdas = document.getElementById("pg5").innerHTML;
        if(celdas){
        //alert("Le dio al barco");
        document.getElementById("pg5").style.backgroundColor = 'red';
        var verificadorBooleanoMaquina = true;
          verificacionBooleana(verificadorBooleanoMaquina);

        } 
        else{
        //alert("Falló el tiro");
        document.getElementById("pg5").style.backgroundColor = 'white';
         var verificadorBooleanoMaquina  = false;
          verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 66) {
        var celdas = document.getElementById("pg6").innerHTML;
        if(celdas){
        //alert("Le dio al barco");
        document.getElementById("pg6").style.backgroundColor = 'red';
        var verificadorBooleanoMaquina = true;
          verificacionBooleana(verificadorBooleanoMaquina);

        } 
        else{
        //alert("Falló el tiro");
        document.getElementById("pg6").style.backgroundColor = 'white';
         var verificadorBooleanoMaquina  = false;
          verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 67) {
        var celdas = document.getElementById("pg7").innerHTML;
        if(celdas){
        //alert("Le dio al barco");
        document.getElementById("pg7").style.backgroundColor = 'red';
       var verificadorBooleanoMaquina = true;
          verificacionBooleana(verificadorBooleanoMaquina);

        } 
        else{
        //alert("Falló el tiro");
        document.getElementById("pg7").style.backgroundColor = 'white';
         var verificadorBooleanoMaquina  = false;
          verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 68) {
        var celdas = document.getElementById("pg8").innerHTML;
        if(celdas){
        //alert("Le dio al barco");
        document.getElementById("pg8").style.backgroundColor = 'red';
       var verificadorBooleanoMaquina = true;
          verificacionBooleana(verificadorBooleanoMaquina);

        } 
        else{
        //alert("Falló el tiro");
        document.getElementById("pg8").style.backgroundColor = 'white';
         var verificadorBooleanoMaquina  = false;
          verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 69) {
        var celdas = document.getElementById("pg9").innerHTML;
        if(celdas){
        //alert("Le dio al barco");
        document.getElementById("pg9").style.backgroundColor = 'red';
       var verificadorBooleanoMaquina = true;
          verificacionBooleana(verificadorBooleanoMaquina);

        } 
        else{
        //alert("Falló el tiro");
        document.getElementById("pg9").style.backgroundColor = 'white';
         var verificadorBooleanoMaquina  = false;
          verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 70) {
        var celdas = document.getElementById("pg10").innerHTML;
        if(celdas){
        //alert("Le dio al barco");
        document.getElementById("pg10").style.backgroundColor = 'red';
       var verificadorBooleanoMaquina = true;
          verificacionBooleana(verificadorBooleanoMaquina);

        } 
        else{
        //alert("Falló el tiro");
        document.getElementById("pg10").style.backgroundColor = 'white';
         var verificadorBooleanoMaquina  = false;
          verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 71) {
        var celdas = document.getElementById("ph1").innerHTML;
        if(celdas){
        //alert("Le dio al barco");
        document.getElementById("ph1").style.backgroundColor = 'red';
       var verificadorBooleanoMaquina = true;
          verificacionBooleana(verificadorBooleanoMaquina);

        } 
        else{
        //alert("Falló el tiro");
        document.getElementById("ph1").style.backgroundColor = 'white';
         var verificadorBooleanoMaquina  = false;
          verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 72) {
        var celdas = document.getElementById("ph2").innerHTML;
        if(celdas){
        //alert("Le dio al barco");
        document.getElementById("ph2").style.backgroundColor = 'red';
       var verificadorBooleanoMaquina = true;
          verificacionBooleana(verificadorBooleanoMaquina);

        } 
        else{
        //alert("Falló el tiro");
        document.getElementById("ph2").style.backgroundColor = 'white';
         var verificadorBooleanoMaquina  = false;
          verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 73) {
        var celdas = document.getElementById("ph3").innerHTML;
        if(celdas){
        //alert("Le dio al barco");
        document.getElementById("ph3").style.backgroundColor = 'red';
        var verificadorBooleanoMaquina = true;
          verificacionBooleana(verificadorBooleanoMaquina);

        } 
        else{
        //alert("Falló el tiro");
        document.getElementById("ph3").style.backgroundColor = 'white';
        var verificadorBooleanoMaquina  = false;
          verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 74) {
        var celdas = document.getElementById("ph4").innerHTML;
        if(celdas){
        //alert("Le dio al barco");
        document.getElementById("ph4").style.backgroundColor = 'red';
        var verificadorBooleanoMaquina = true;
          verificacionBooleana(verificadorBooleanoMaquina);

        } 
        else{
        //alert("Falló el tiro");
        document.getElementById("ph4").style.backgroundColor = 'white';
        var verificadorBooleanoMaquina  = false;
          verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 75) {
        var celdas = document.getElementById("ph5").innerHTML;
        if(celdas){
        //alert("Le dio al barco");
        document.getElementById("ph5").style.backgroundColor = 'red';
       var verificadorBooleanoMaquina = true;
          verificacionBooleana(verificadorBooleanoMaquina);

        } 
        else{
        //alert("Falló el tiro");
        document.getElementById("ph5").style.backgroundColor = 'white';
         var verificadorBooleanoMaquina  = false;
          verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 76) {
        var celdas = document.getElementById("ph6").innerHTML;
        if(celdas){
        //alert("Le dio al barco");
        document.getElementById("ph6").style.backgroundColor = 'red';
        var verificadorBooleanoMaquina = true;
          verificacionBooleana(verificadorBooleanoMaquina);

        } 
        else{
        //alert("Falló el tiro");
        document.getElementById("ph6").style.backgroundColor = 'white';
         var verificadorBooleanoMaquina  = false;
          verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 77) {
        var celdas = document.getElementById("ph7").innerHTML;
        if(celdas){
        //alert("Le dio al barco");
        document.getElementById("ph7").style.backgroundColor = 'red';
       var verificadorBooleanoMaquina = true;
          verificacionBooleana(verificadorBooleanoMaquina);

        } 
        else{
        //alert("Falló el tiro");
        document.getElementById("ph7").style.backgroundColor = 'white';
         var verificadorBooleanoMaquina  = false;
          verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 78) {
        var celdas = document.getElementById("ph8").innerHTML;
        if(celdas){
        //alert("Le dio al barco");
        document.getElementById("ph8").style.backgroundColor = 'red';
        var verificadorBooleanoMaquina = true;
          verificacionBooleana(verificadorBooleanoMaquina);

        } 
        else{
        //alert("Falló el tiro");
        document.getElementById("ph8").style.backgroundColor = 'white';
         var verificadorBooleanoMaquina  = false;
          verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 79) {
        var celdas = document.getElementById("ph9").innerHTML;
        if(celdas){
        //alert("Le dio al barco");
        document.getElementById("ph9").style.backgroundColor = 'red';
       var verificadorBooleanoMaquina = true;
          verificacionBooleana(verificadorBooleanoMaquina);

        } 
        else{
        //alert("Falló el tiro");
        document.getElementById("ph9").style.backgroundColor = 'white';
         var verificadorBooleanoMaquina  = false;
          verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 80) {
        var celdas = document.getElementById("ph10").innerHTML;
        if(celdas){
        //alert("Le dio al barco");
        document.getElementById("ph10").style.backgroundColor = 'red';
        var verificadorBooleanoMaquina = true;
          verificacionBooleana(verificadorBooleanoMaquina);

        } 
        else{
        //alert("Falló el tiro");
        document.getElementById("ph10").style.backgroundColor = 'white';
         var verificadorBooleanoMaquina  = false;
          verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 81) {
        var celdas = document.getElementById("pi1").innerHTML;
        if(celdas){
        //alert("Le dio al barco");
        document.getElementById("pi1").style.backgroundColor = 'red';
       var verificadorBooleanoMaquina = true;
          verificacionBooleana(verificadorBooleanoMaquina);

        } 
        else{
        //alert("Falló el tiro");
        document.getElementById("pi1").style.backgroundColor = 'white';
         var verificadorBooleanoMaquina  = false;
          verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 82) {
        var celdas = document.getElementById("pi2").innerHTML;
        if(celdas){
            //alert("Le dio al barco");
            document.getElementById("pi2").style.backgroundColor = 'red';
           var verificadorBooleanoMaquina = true;
          verificacionBooleana(verificadorBooleanoMaquina);

        } 
        else{
            //alert("Falló el tiro");
            document.getElementById("pi2").style.backgroundColor = 'white';
            var verificadorBooleanoMaquina  = false;
          verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 83) {
        var celdas = document.getElementById("pi3").innerHTML;
        if(celdas){
            //alert("Le dio al barco");
            document.getElementById("pi3").style.backgroundColor = 'red';
           var verificadorBooleanoMaquina = true;
          verificacionBooleana(verificadorBooleanoMaquina);

        } 
        else{
            //alert("Falló el tiro");
            document.getElementById("pi3").style.backgroundColor = 'white';
            var verificadorBooleanoMaquina  = false;
          verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 84) {
        var celdas = document.getElementById("pi4").innerHTML;
        if(celdas){
        //alert("Le dio al barco");
        document.getElementById("pi4").style.backgroundColor = 'red';
        var verificadorBooleanoMaquina = true;
          verificacionBooleana(verificadorBooleanoMaquina);

        } 
        else{
        //alert("Falló el tiro");
        document.getElementById("pi4").style.backgroundColor = 'white';
            var verificadorBooleanoMaquina  = false;
          verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 85) {
        var celdas = document.getElementById("pi5").innerHTML;
        if(celdas){
            //alert("Le dio al barco");
            document.getElementById("pi5").style.backgroundColor = 'red';
            var verificadorBooleanoMaquina = true;
          verificacionBooleana(verificadorBooleanoMaquina);

        } 
        else{
            //alert("Falló el tiro");
            document.getElementById("pi5").style.backgroundColor = 'white';
             var verificadorBooleanoMaquina  = false;
          verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 86) {
        var celdas = document.getElementById("pi6").innerHTML;
        if(celdas){
            //alert("Le dio al barco");
            document.getElementById("pi6").style.backgroundColor = 'red';
            var verificadorBooleanoMaquina = true;
            turnos(verificadorBooleanoMaquina)
        } 
        else{
            //alert("Falló el tiro");
            document.getElementById("pi6").style.backgroundColor = 'white';
             var verificadorBooleanoMaquina  = false;
              verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 87) {
        var celdas = document.getElementById("pi7").innerHTML;
            if(celdas){
            //alert("Le dio al barco");
            document.getElementById("pi7").style.backgroundColor = 'red';
            var verificadorBooleanoMaquina = true;
            turnos(verificadorBooleanoMaquina)
        } 
        else{
            //alert("Falló el tiro");
            document.getElementById("pi7").style.backgroundColor = 'white';
             var verificadorBooleanoMaquina  = false;
              verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 88) {
        var celdas = document.getElementById("pi8").innerHTML;
        if(celdas){
            //alert("Le dio al barco");
            document.getElementById("pi8").style.backgroundColor = 'red';
           var verificadorBooleanoMaquina = true;
            turnos(verificadorBooleanoMaquina)
        } 
        else{
            //alert("Falló el tiro");
            document.getElementById("pi8").style.backgroundColor = 'white';
             var verificadorBooleanoMaquina  = false;
              verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 89) {
        var celdas = document.getElementById("pi9").innerHTML;
        if(celdas){
            //alert("Le dio al barco");
            document.getElementById("pi9").style.backgroundColor = 'red';
           var verificadorBooleanoMaquina = true;
            turnos(verificadorBooleanoMaquina)
        } 
        else{
            //alert("Falló el tiro");
            document.getElementById("pi9").style.backgroundColor = 'white';
             var verificadorBooleanoMaquina  = false;
              verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 90) {
        var celdas = document.getElementById("pi10").innerHTML;
        if(celdas){
            //alert("Le dio al barco");
            document.getElementById("pi10").style.backgroundColor = 'red';
           var verificadorBooleanoMaquina = true;
            turnos(verificadorBooleanoMaquina)
        } 
        else{
            //alert("Falló el tiro");
            document.getElementById("pi10").style.backgroundColor = 'white';
             var verificadorBooleanoMaquina  = false;
              verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 91) {
        var celdas = document.getElementById("pj1").innerHTML;
        if(celdas){
            //alert("Le dio al barco");
            document.getElementById("pj1").style.backgroundColor = 'red';
            var verificadorBooleanoMaquina = true;
            turnos(verificadorBooleanoMaquina)
        } 
        else{
            //alert("Falló el tiro");
            document.getElementById("pj1").style.backgroundColor = 'white';
             var verificadorBooleanoMaquina  = false;
              verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 92) {
        var celdas = document.getElementById("pj2").innerHTML;
        if(celdas){
            //alert("Le dio al barco");
            document.getElementById("pj2").style.backgroundColor = 'red';
           var verificadorBooleanoMaquina = true;
            turnos(verificadorBooleanoMaquina)
        } 
        else{
            //alert("Falló el tiro");
            document.getElementById("pj2").style.backgroundColor = 'white';
             var verificadorBooleanoMaquina  = false;
              verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 93) {
        var celdas = document.getElementById("pj3").innerHTML;
        if(celdas){
            //alert("Le dio al barco");
            document.getElementById("pj3").style.backgroundColor = 'red';
            var verificadorBooleanoMaquina = true;
            turnos(verificadorBooleanoMaquina)
        } 
        else{
            //alert("Falló el tiro");
            document.getElementById("pj3").style.backgroundColor = 'white';
             var verificadorBooleanoMaquina  = false;
              verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 94) {
        var celdas = document.getElementById("pj4").innerHTML;
        if(celdas){
            //alert("Le dio al barco");
            document.getElementById("pj4").style.backgroundColor = 'red';
            var verificadorBooleanoMaquina = true;
            turnos(verificadorBooleanoMaquina)
        } 
        else{
            //alert("Falló el tiro");
            document.getElementById("pj4").style.backgroundColor = 'white';
             var verificadorBooleanoMaquina  = false;
              verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 95) {
        var celdas = document.getElementById("pj5").innerHTML;
        if(celdas){
            //alert("Le dio al barco");
            document.getElementById("pj5").style.backgroundColor = 'red';
            var verificadorBooleanoMaquina = true;
            turnos(verificadorBooleanoMaquina)
        } 
        else{
            //alert("Falló el tiro");
            document.getElementById("pj5").style.backgroundColor = 'white';
            var verificadorBooleanoMaquina  = false;
              verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 96) {
        var celdas = document.getElementById("pj6").innerHTML;
        if(celdas){
            //alert("Le dio al barco");
            document.getElementById("pj6").style.backgroundColor = 'red';
            var verificadorBooleanoMaquina = true;
            turnos(verificadorBooleanoMaquina)
        } 
        else{
            //alert("Falló el tiro");
            document.getElementById("pj6").style.backgroundColor = 'white';
             var verificadorBooleanoMaquina  = false;
              verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 97) {
        var celdas = document.getElementById("pj7").innerHTML;
        if(celdas){
            //alert("Le dio al barco");
            document.getElementById("pj7").style.backgroundColor = 'red';
           var verificadorBooleanoMaquina = true;
            turnos(verificadorBooleanoMaquina)
        } 
        else{
            //alert("Falló el tiro");
            document.getElementById("pj7").style.backgroundColor = 'white';
           var verificadorBooleanoMaquina  = false;
              verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 98) {
        var celdas = document.getElementById("pj8").innerHTML;
        if(celdas){
            //alert("Le dio al barco");
            document.getElementById("pj8").style.backgroundColor = 'red';
            var verificadorBooleanoMaquina = true;
            turnos(verificadorBooleanoMaquina)
        } 
        else{
            //alert("Falló el tiro");
            document.getElementById("pj8").style.backgroundColor = 'white';
            var verificadorBooleanoMaquina  = false;
              verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else if (Orden == 99) {
        var celdas = document.getElementById("pj9").innerHTML;
        if(celdas){
            //alert("Le dio al barco");
            document.getElementById("pj9").style.backgroundColor = 'red';
            var verificadorBooleanoMaquina = true;
            turnos(verificadorBooleanoMaquina)
        } 
        else{
            //alert("Falló el tiro");
            document.getElementById("pj9").style.backgroundColor = 'white';
             var verificadorBooleanoMaquina  = false;
              verificacionBooleana(verificadorBooleanoMaquina);

        }
    }else {
        var celdas = document.getElementById("pj10").innerHTML;
        if(celdas){
            //alert("Le dio al barco");
            document.getElementById("pj10").style.backgroundColor = 'red';
            var verificadorBooleanoMaquina = true;
            turnos(verificadorBooleanoMaquina)
        } 
        else{
            //alert("Falló el tiro");
            document.getElementById("pj10").style.backgroundColor = 'white';
             var verificadorBooleanoMaquina  = false;
              verificacionBooleana(verificadorBooleanoMaquina);

        }
    }
}

