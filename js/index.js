var eleBack = null, eleFront = null, eleList = $("#android .list");
var iosEleBack, iosEleFront, iosEleList = $("#ios .list");
var pcEleBack, pcEleFront, pcEleList = $("#pc .list");

function funBackOrFront() {
    eleList.each(function() {
        if ($(this).hasClass("out")) {
            eleBack = $(this);
        } else {
            eleFront = $(this);
        }
    });

    iosEleList.each(function () {
        if ($(this).hasClass("out")) {
            iosEleBack = $(this);
        } else {
            iosEleFront = $(this);
        }
    });

    pcEleList.each(function () {
        if ($(this).hasClass("out")) {
            pcEleBack = $(this);
        } else {
            pcEleFront = $(this);
        }
    });
};

funBackOrFront();

$("#android").hover(function() {
    doFlip($(this), eleFront, eleBack);
});

$("#ios").hover(function() {
    doFlip($(this), iosEleFront, iosEleBack);
});

$("#pc").hover(function () {
    //doFlip($(this), pcEleFront, pcEleFront);
    $("#pc img").attr("src","img/pc2.png");
}, function () {
    $("#pc img").attr("src","img/pc.png");
});

function doFlip(parent, eleFront, eleBack) {
    if (parent.hasClass("filpping")) {
        return;
    }
    parent.addClass("filpping");

    eleFront.addClass("out").removeClass("in");
    setTimeout(function() {
        eleBack.addClass("in").removeClass("out");
        funBackOrFront();

        parent.removeClass("filpping");
    }, 225);
}
