function evdragstart(ev){
    ev.	dataTransfer.setData("text", ev.target.id);
}

function evdragover(ev){
    ev.preventDefault();
}

function evdrop(ev,el) {
    ev.stopPropagation();
    ev.preventDefault();
    data=ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

document.getElementById("Start").addEventListener('click', empezar) 

function empezar() {
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
                    
                }console.log(barcosEnemigos) 
            }
        }        //alert("salio del segundo ciclo for")
    }
    //alert("salio del primer ciclo for") 
}
