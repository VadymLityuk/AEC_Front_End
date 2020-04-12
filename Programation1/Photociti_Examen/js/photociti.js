



let nbletter = 0;
let colon = "";
let myword = [];
let colopica = "rouge";
let pastcolor = "rouge";
let imagesource = [];
let imagetag = [];
let photocitiword = [];
let i = [];
let validation = false;



$("#enterword").keyup(function() {
     myword = $("#enterword").val();
    if (myword.length < 3 || myword.length > 12) {
        $("#errorlarge").css("display", "block");
        validation = false;
    }

     else {

         $("#errorlarge").css("display", "none");
        validation = true;
        nbletter = myword.length;
    }

});

function slugify (str) {
    let map = {
        'a' : 'á|à|ã|â|À|Á|Ã|Â',
        'e' : 'é|è|ê|É|È|Ê',
        'i' : 'í|ì|î|Í|Ì|Î',
        'o' : 'ó|ò|ô|õ|Ó|Ò|Ô|Õ',
        'u' : 'ú|ù|û|ü|Ú|Ù|Û|Ü',
        'c' : 'ç|Ç',
        'n' : 'ñ|Ñ'
    };

    str = str.toLowerCase();

    for (let pattern in map) {
        str = str.replace(new RegExp(map[pattern], 'g'), pattern);
    };

    return str;
};


// color picker
$(".color").click(function() {
    colopica = $(this).attr("id");
    pastcolor = $(this).attr("id");
    $(".wordsector").css("background-image", "url('background/" + colopica + ".jpg");
});


function wordfunct() {
   myword = $("#enterword").val();

    photocitiword= myword.toUpperCase().split("");

}


function adjustColon() {

    for (i = 0; i < (nbletter); i++) {

        if (nbletter === 3) {
            colon = "col-4";
            $("#letterImg" + (i + 1)).addClass("col-4");

        } else if (nbletter === 4) {
            colon = "col-3";
            $("#letterImg" + (i + 1)).addClass(colon);
        } else if (nbletter === 6 || nbletter === 5) {
            colon = "col-2";
            $("#letterImg" + (i + 1)).addClass(colon);

        } else if (nbletter > 6) {
            $("#letterImg" + (i + 1)).addClass("col-2");
            colon = "col-1";
        }

    }
}
function erase() {
    for (i = 0; i < 13; i++) {
        $("#letterImg" + (i+1)).css("display", "none");
        if ($("#letterImg" + (i+1)).hasClass(colon)) {
            $("#letterImg" + (i+1)).removeClass(colon);
        }
    }
}
function transciti() {
    for (i = 0; i < photocitiword.length; i++) {
        imagetag[i] = photocitiword[i];
        imagesource[i] = "letters/" + photocitiword[i] + "/" + photocitiword[i] + "1.jpg";
    }
}
$("#generetor").submit(function(event) {
    event.preventDefault();
    if (validation) {
        $(".wordsector").removeClass("hide");
        $(".bgchanger").removeClass("hide");
        $(".wordtitle").removeClass("hide");


        erase();
        wordfunct();
        adjustColon();
        transciti();


        for (i = 0; i < photocitiword.length; i++) {
            $("#lettre" + (i+1)).attr("src", imagesource[i]);
            $("#lettre" + (i+1)).attr("alt", imagetag[i]);
            $("#letterImg" + (i+1)).css("display", "flex");
        }
    }
});

let mylet = "";
let letterpica = "";
let cahngemylet = ""; // изменить картинку


$(".mylettre").click(function() {

    for (i = 0; i < 5; i++) {

        ($("#wordimage" + (i+1)));

    }
    mylet = "";
    letterpica = "";

    cahngemylet = $(this).attr("alt");
    mylet = $(this).attr("id");
    for (i = 0; i < 5; i++) {
        $("#wordimage" + (i+1)).attr("src", "letters/" + cahngemylet + "/" + cahngemylet + (i+1) + ".jpg");
    }
});

$(".carousel-item img").click(function () {
    for (i=0;i<5;i++) {
        if ($("#wordimage" + (i + 1)).hasClass("current")) {
            $("#wordimage" + (i + 1)).removeClass("current");
        }
    }
    $("#errorlarge").hide();
    letterpica = $(this).attr("src");
    $(this).addClass("active");
});

$("#save").click(function() {
    if (letterpica!= "") {
        $("#" + mylet).attr("src", letterpica);
        $('#errorlarge').modal('hide');
    }
    else {
        $("#errorlarge").show();
    }
})
