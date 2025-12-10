"use strict";

    let voornaamTxt;    
    let emailTxt;    
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
            document.getElementById("email_error").innerHTML="dit is geen geldig email-adres ";

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
        voornaamTxt = document.getElementById("voornaam").value;

        allescorrectingevuld = true;

        if (voornaamTxt.length == 0) {
            document.getElementById("voornaam_error").innerHTML = "Vul in a.u.b.";
            allescorrectingevuld = false;
        }
        else {
            controleerVoorwaardenVoornaam()
        }


        

        // email validatie
        emailTxt = document.getElementById("email").value;

        if(emailTxt.length == 0){
            document.getElementById("email_error").innerHTML="vul in a.u.b.";
            allescorrectingevuld= false;
        }
        else{
            controleerVoorwaardenemail()
        }

        // textbericht

        berichtTxt = document.getElementById("bericht").value;

        if(berichtTxt.length == 0){
            document.getElementById("textbericht_error").innerHTML ="vul in a.u.b.";
            allescorrectingevuld = false;
        }
        else{
            controleerVoorwaardenbericht()
        }
        


        if (allescorrectingevuld) {
            let link = "mailto:" + encodeURIComponent("info@cvo.be")
                + "?cc=" + encodeURIComponent("kopie@cvo.be")
                + "&subject=" + encodeURIComponent("Formulier validatie")
                + "&body="
                + "voornaam:"
                + encodeURIComponent(voornaamTxt)
                + encodeURIComponent("\r\n\n")
                + "email:"
                + encodeURIComponent(emailTxt)
                + encodeURIComponent("\r\n\n")
                + "bericht:"
                + encodeURIComponent(berichtTxt)
                + encodeURIComponent("\r\n\n")
                
            window.location.href = link;
        }

    }


   