"use strict";

    let achternaamTxt;
    let voornaamTxt;    
    let telefoonTxt;
    let emailTxt;    
    let datumTxt;
    let aantalPersoonTxt;
    let tijdslotTxt;
    let prijsTxt;
    let verjaardagTxt;
    let naamJarigeTxt;
    let leeftijdJarigeTxt;
    let berichtTxt;


    let allescorrectingevuld = true;


    function controleerVoorwaardenAchternaam() {
        if (achternaamTxt.length < 2) {
            document.getElementById("achternaam_error").innerHTML="Minstens 2 karakters";

            allescorrectingevuld = false
        }
        else {
            document.getElementById("achternaam_error").innerHTML="";
        }
    }


    function controleerVoorwaardenVoornaam() {
        if (voornaamTxt.length < 2) {
            document.getElementById("voornaam_error").innerHTML = "Minstens 2 karakters lang!";
            allescorrectingevuld = false;
        }
        else {
            document.getElementById("voornaam_error").innerHTML = "";
        }
    }


    function controleerVoorwaardenTelefoon() {
        const regTel = /^\+(32[0-9]{8}|31[0-9]{9}|33[0-9]{9}|49[0-9]{9,11}|352[0-9]{8,10})$/;
        if (!regTel.test(telefoonTxt)) {
            document.getElementById("telefoon_error").innerHTML="Voer geldig nummer in";

            allescorrectingevuld = false
        }
        else {
            document.getElementById("telefoon_error").innerHTML="";
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


    function controleerVoorwaardenDatum() {
        const regDatum = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/;
        if (!regDatum.test(datumTxt)) {
            document.getElementById("datum_error").innerHTML="Geef geldige datum in";

            allescorrectingevuld = false
        }
        else {
            document.getElementById("datum_error").innerHTML="";
        }
    }


    function controleerVoorwaardenNaamJarige() {
        if (naamJarigeTxt.length < 2) {
            document.getElementById("naamJarige_error").innerHTML="Minstens 2 karakters";

            allescorrectingevuld = false
        }
        else {
            document.getElementById("naamJarige_error").innerHTML="";
        }
    }

    function controleerVoorwaardenLeeftijdJarige() {
        const regLeeftijdJarige = /^\d{1,3}$/;
        if (!regLeeftijdJarige.test(leeftijdJarigeTxt)) {
            document.getElementById("leeftijdJarige_error").innerHTML="Ben je zeker dat je zo oud wordt?"

            allescorrectingevuld = false
        }
        else {
            document.getElementById("leeftijdJarige_error").innerHTML=""
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



    function verstuur() {
        achternaamTxt = document.getElementById('achternaam').value;
        voornaamTxt = document.getElementById("voornaam").value;
        telefoonTxt = document.getElementById("telefoon").value;
        emailTxt = document.getElementById("email").value;
        datumTxt = document.getElementById("datum").value;
        aantalPersoonTxt = document.getElementById("aantal").value;
        tijdslotTxt = document.getElementById("tijden").value;
        prijsTxt = document.getElementById("tijden").value;
        verjaardagTxt = document.getElementById("verjaardag");
        naamJarigeTxt = document.getElementById("naamJarige").value;
        leeftijdJarigeTxt = document.getElementById("leeftijdJarige").value;
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
            document.getElementById("aantal_error").innerHTML="Maak een keuze"

            allescorrectingevuld = false
        }
        else {
            controleerVoorwaardenAantal()
        }


        if (tijdslotTxt.length == 0){
            document.getElementById("tijdslot_error").innerHTML="Maak een keuze"

            allescorrectingevuld = false
        }
        else {
            controleerVoorwaardenTijd()
        }


        if (prijsTxt.length == 0){
            document.getElementById("prijs_error").innerHTML="Maak een keuze"

            allescorrectingevuld = false
        }
        else {
            controleerVoorwaardenPrijs()
        }


        if (verjaardagTxt.checked == true){
             if (naamJarigeTxt.length == 0){
                document.getElementById("naamJarige_error").innerHTML="Vul in a.u.b."

                allescorrectingevuld = false
            }
            else {
                controleerVoorwaardenNaamJarige()
            }


            if (leeftijdJarigeTxt.length == 0){
                document.getElementById("leeftijdJarige_error").innerHTML="Vul in a.u.b."

                allescorrectingevuld = false
            }
            else {
                controleerVoorwaardenLeeftijdJarige()
            }
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


  

