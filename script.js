$(".homerun").click(function() {
    var answer1 = $(".answer1").val();
     var answer2 = $(".answer2").val();
    if (answer1 === "shy"&& answer2==="wise") {
        $(".result").html("<img src='https://vignette.wikia.nocookie.net/thesandlot/images/6/6f/514_chauncey_leopardi_03.jpg/revision/latest/scale-to-width-down/180?cb=20120917004616'><h2> You are Squints </h2>");
    }else if(answer1==="shy"&& answer2==="naive") {
            $(".result").html("<img src='https://hobbydb-production.s3.amazonaws.com/processed_uploads/subject_photo/subject_photo/image/38685/1522692994-11564-6176/Tom-Guiry-as-Scotty-Smalls-in-The-Sandlot-tom-guiry-24441600-1360-768_large.jpg'><h2> You Are Scotty Smalls </h2>");
    }else if(answer1==="confident"&& answer2==="wise") {
            $(".result").html("<img src='https://images.tmz.com/2017/01/10/0110-sandlot-memba-04-480w.jpg'><h2> You Are Benjamin </h2>");
    }else if(answer1==="confident"&& answer2==="naive") {
            $(".result").html("<img src='https://ih1.redbubble.net/image.601582931.2790/flat,1000x1000,075,f.u2.jpg'><h2> You Are Ham Porter </h2>");
    } else {
        $(".result").html("<img src='https://media.giphy.com/media/PtQrzJUJ7Q9d6/giphy.gif'>");    
    }
     
});