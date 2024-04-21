var dsayi = 0;

function S1() {
    return Math.floor(Math.random() * ( 20 - 10 + 1 )) + 20;
}

function S2() {
    return Math.floor(Math.random() * 10) + 1;
}

function bOlasilik() {
    return Math.floor(Math.random() * 3);
}

function yeniSoru() {
    var s1 = S1();
    var s2 = S2();

    var bölüm = Math.floor(s1 / s2) + " ( " + s1 % s2 + " ) ";

    $(".soru").html(s1 + " / " + s2 + " =  ?");

    var sonuc = bOlasilik();

    if (sonuc == 0) {
        $(".yanit1").html(Math.floor(Math.random() * 10) + " ( " +  Math.floor(Math.random() * 10) + " ) ");
        $(".yanit2").html(Math.floor(Math.random() * 10) + " ( " +  Math.floor(Math.random() * 10) + " ) ");
        $(".yanit3").html(bölüm);
    } else if (sonuc == 1) {
        $(".yanit2").html(bölüm);
        $(".yanit3").html(Math.floor(Math.random() * 10) + " ( " +  Math.floor(Math.random() * 10) + " ) ");
    } else if (sonuc == 2) {
        $(".yanit1").html(bölüm);
        $(".yanit2").html(Math.floor(Math.random() * 10) + " ( " +  Math.floor(Math.random() * 10) + " ) ");
        $(".yanit3").html(Math.floor(Math.random() * 10) + " ( " +  Math.floor(Math.random() * 10) + " ) ");
    }

    $(".yanit1, .yanit2, .yanit3").off("click").on("click", function () {
        var secilenCevap = $(this).html();

        if (secilenCevap == bölüm) {
            dsayi++;
            $(".dsayi").html(dsayi + " Doğru!");
            yeniSoru();
        }

        else {
            window.alert("Oyun Bitti Doğru Sayın " + dsayi + " !");
            $("body").css("display","none");
        }
    });
}

yeniSoru();