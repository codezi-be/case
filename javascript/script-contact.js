"use strict;"

    let voornaamTxt;
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
            document.write("Naam is correct ingevuld");
        }
    }//einde verstuur()


   
