"use strict";

    let achternaamTxt;
    let voornaamTxt;    
    let telefoonTxt;
    let emailTxt;    
    let datumTxt;
    let aantalPersoonTxt;
    let tijdslotTxt;
    let prijsTxt;
    let berichtTxt;


    let allescorrectingevuld = true;


    // bovenaan onder gobale vars / voor verstuur)
    function controleerVoorwaardenVoornaam() {
        if (voornaamTxt.length < 2) {
            document.getElementById("voornaam_error").innerHTML = "Minstens 2 karakters lang!";
            allescorrectingevuld = false;
        }
        else {
            document.getElementById("voornaam_error").innerHTML = "";
        }
    }

    // email voorwaarden
    function controleerVoorwaardenemail(){
        const regExp = /^[A-Za-z][\.A-Za-z0-9+_-]+@[\.A-Za-z0-9-]+\.[A-Za-z]{2,20}$/;
        if (!regExp.test(emailTxt)){
            document.getElementById("email_error").innerHTML="dit is niet correct ";

            allescorrectingevuld = false;
        }
        else{
            document.getElementById("email_error").innerHTML="";
        }
    }

    // textbericht voorwaarden
    function controleerVoorwaardenbericht(){
        berichtTxt = document.getElementById("bericht").value;

        if (berichtTxt.length < 10) {
            document.getElementById("textbericht_error").innerHTML = "vul a.u.b. minimum 10 karakters in";
            allescorrectingevuld = false;
        }
        else {
            document.getElementById("textbericht_error").innerHTML = "";
        }
    }



    function verstuur() {
        achternaamTxt = document.getElementById('achternaam').value;
        voornaamTxt = document.getElementById("voornaam").value;
        telefoonTxt = document.getElementById("telefoon").value;
        emailTxt = document.getElementById("email").value;
        datumTxt = document.getElementById("datum").value;
        aantalPersoonTxt = document.getElementById("aantal").value;
        tijdslotTxt = document.getElementById("tijden").value;
        prijsTxt =document.getElementById("tijden").value;
        berichtTxt = document.getElementById("bericht").value;

        allescorrectingevuld = true;



        if (achternaamTxt.length == 0){
            document.getElementById("achternaam_error").innerHTML="Vul in a.u.b."

            allescorrectingevuld = false
        }
        else {
            controleerVoorwaardenAchternaam()
        }


        if (voornaamTxt.length == 0) {
            document.getElementById("voornaam_error").innerHTML = "Vul in a.u.b.";
            allescorrectingevuld = false;
        }
        else {
            controleerVoorwaardenVoornaam()
        }


        if (telefoonTxt.length == 0){
            document.getElementById("telefoon_error").innerHTML="Vul in a.u.b."

            allescorrectingevuld = false
        }
        else {
            controleerVoorwaardenTelefoon()
        }

        // email validatie
        if(emailTxt.length == 0){
            document.getElementById("email_error").innerHTML="Vul in a.u.b.";
            allescorrectingevuld= false;
        }
        else{
            controleerVoorwaardenemail()
        }


        if (datumTxt.length == 0){
            document.getElementById("datum_error").innerHTML="Vul in a.u.b."

            allescorrectingevuld = false
        }
        else {
            controleerVoorwaardenDatum()
        }


        if (aantalPersoonTxt.length == 0){
            document.getElementById("aantal_error").innerHTML="Vul in a.u.b."

            allescorrectingevuld = false
        }
        else {
            controleerVoorwaardenAantal()
        }

        // textbericht
        if(berichtTxt.length == 0){
            document.getElementById("textbericht_error").innerHTML ="Vul in a.u.b.";
            allescorrectingevuld = false;
        }
        else{
            controleerVoorwaardenbericht()
        }
        


        if (allescorrectingevuld) {
            alert(" is correct ingevuld");
        }

    }


   function jarigeVeld(){
    let verjaardag = document.getElementById("verjaardag");
    let hidden = document.getElementById("jarigeVeld");
    let hidden1 = document.getElementById("jarigeVeld2");
    


    if (verjaardag.checked == true){
        hidden.style.display = "block";
        hidden1.style.display = "block";
    }
    else {
        hidden.style.display = "none";
        hidden1.style.display = "none";
    }
   }
