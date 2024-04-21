var dsayi = 0;

function S1() {
    return Math.floor(Math.random() * (150 - 75 + 1)) + 75;
}

function S2() {
    return Math.floor(Math.random() * 75);
}

function bOlasilik() {
    return Math.floor(Math.random() * 3);
}

function yeniSoru() {
    var s1 = S1();
    var s2 = S2();

    var fark = s1 - s2;

    $(".soru").html(s1 + " - " + s2 + " =  ?");

    var sonuc = bOlasilik();

    if (sonuc == 0) {
        $(".yanit1").html(Math.floor(Math.random() * 150));
        $(".yanit2").html(Math.floor(Math.random() * 150));
        $(".yanit3").html(fark);
    } else if (sonuc == 1) {
        $(".yanit1").html(Math.floor(Math.random() * 150));
        $(".yanit2").html(fark);
        $(".yanit3").html(Math.floor(Math.random() * 150));
    } else if (sonuc == 2) {
        $(".yanit1").html(fark);
        $(".yanit2").html(Math.floor(Math.random() * 150));
        $(".yanit3").html(Math.floor(Math.random() * 150));
    }

    $(".yanit1, .yanit2, .yanit3").off("click").on("click", function () {
        var secilenCevap = $(this).html(); // Tıklanan öğenin içeriğini al

        if (secilenCevap == fark) {
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