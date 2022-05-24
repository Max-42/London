
function navlistner(){
    //hinterlegt die aktuelle seite in der navbar farbig.
    var pfad = window.location.pathname;
    console.log(pfad);
    var dateiname = pfad.replace(/^.*[\\\/]/, '');
    

    if(dateiname == "History.html"){
        var geschichte = document.getElementById("geschichte")
        geschichte.className += " aktiv";
    } else if (dateiname == "Startpage.html"){
        var start = document.getElementById("start")
        start.className += " aktiv";   
    } else if (dateiname == "Facts.html"){
        var fakten = document.getElementById("fakten")
        fakten.className += " aktiv";   
    } else if (dateiname == "Sights.html"){
        var sehen = document.getElementById("sehen")
        sehen.className += " aktiv";
    } else if (dateiname == "Transport.html"){
        var sehen = document.getElementById("transport")
        sehen.className += " aktiv";
    } else if (dateiname == "Impressum.html"){
        var impressum = document.getElementById("impressum")
        impressum.className += " aktiv";
    }

    
}


function zurueck(){
    window.history.go(-1)
}

function navBar() {
    var x = document.getElementById("nav");
    if (x.className === "topnav") {
      x.className += " klein";
    } else {
      x.className = "topnav";
    }
  }

window.onload = function () {
    navlistner();
    redirect();
    
}

function redirect(){
    // prüft ob wir weiteleiten sollen.

    const urlParams = new URLSearchParams(window.location.search);
    const url = urlParams.get('url');
    if(url !== null){
        if (confirm('[Warning] \n Do you wish to continue to ' + url + ' ? \n Which is an external site! ')){
            window.location.href = url;
        } else {
            if(history.length != 0)
            {
                history.go(-1);
            } else {
                window.alert("Error - You did not get redirected.")
            }
        }


    }
    
}
