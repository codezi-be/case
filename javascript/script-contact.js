"use strict";

    let voornaamTxt;    
    let emailTxt;    
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
        let regExp = /^[A-Za-z][\.A-Za-z0-9+_-]+@[\.A-Za-z0-9-]+\.[A-Za-z]{2,20}$/;
        if (regExp.test(emailTxt) == false){
            document.getElementById("email_error").innerHTML="dit is niet correct";

            allescorrectingevuld = false;
        }
        else{
            document.getElementById("email_error").innerHTML="";
        }
    }



    function verstuur() {
        voornaamTxt = document.getElementById("voornaam").value;
        //Via JS vraag je het element uit de webpagina op met de id voornaam. Van dat element vraag je de value op, de inhoud
        allescorrectingevuld = true;

        if (voornaamTxt.length == 0) {
            document.getElementById("voornaam_error").innerHTML = "Vul in a.u.b.";
            allescorrectingevuld = false;
        }
        else {
            //aparte functie aanmaken om de voorwaarden te controleren
            controleerVoorwaardenVoornaam()
        }
        //uiteindelijk controleren of alles correct is
        //deze if blijft altijd allerlaatst in de verstuur() functie

        if (allescorrectingevuld) {
            alert("Naam is correct ingevuld");
        }

        // email validatie
        emailTxt = document.getElementById("email").value;

        if(emailTxt.length == 0){
            document.getElementById("email_error").innerHTML="vul in a.u.b.";
            allescorrectingevuld= false;
        }
        else{
            controleerVoorwaardenVoornaam()
        }

    }//einde verstuur()


   
