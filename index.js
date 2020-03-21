var carne = 0;
var vegetais = 0;
var bebida = 0;
var refri = 0;

setInterval(function(){
    var numP = document.getElementById("numP").value;
    var horas = document.getElementById("horas").value;
    var veg = document.getElementById("veg").value;

    carne = (((numP-veg)*50)*horas)/1000;
    vegetais = ((((numP-veg)*50)+(veg*100))*horas)/1000;
    bebida = (numP*365*horas)/1000;
    refri = ((numP*100)*horas)/1000;

    document.getElementById("carne").innerHTML = `${carne} Kg`;
    document.getElementById("vegetal").innerHTML = `${vegetais} Kg` ;
    document.getElementById("bebida").innerHTML = ` ${bebida} L`;
    document.getElementById("refri").innerHTML = `${refri} L`;

}, 1000)





