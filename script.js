
    (function(){
      emailjs.init("JoWwb55PrWhPg3wTG");
    })();
        function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        message : document.getElementById("message").value,
        email : document.getElementById("email").value,
        phone : document.getElementById("phone").value,
        weddingdate : document.getElementById("weddingdate").value,
    }
    emailjs.send("service_l11awzn","template_ost5mh8",parms).then(alert("sent sucessfully"))
}