var suggestionOpening = "0";
var offsetMar = 0;
var dataLocation = "1";


function changeSrcBalMain(id, nth) {
    document.getElementById(id).src = document.getElementById(nth).src;
    if (nth == "pic-3") {
        document.getElementById(id).style.scale = "0.9"
    }
    else {
        document.getElementById(id).style.scale = "1.1";
    }
}

function changeSrcBalenciaga(id, nth) {
    document.getElementById(id).src = document.getElementById(nth).src;
}

function loadFrameData(frameType) {
    let url = "../templates/sale-off-" + dataLocation + ".html";
    document.getElementById(frameType).src = url;
}

function showSuggestionDetail(nthProduct, nthTemplate) {
    if (suggestionOpening > 0) {
        hideSuggestionDetail();
    }

    /*Load frame data*/
    dataLocation = nthTemplate;

    /*Show frame to watch produc detail*/
    const frame = document.getElementById("suggestion-detail");
    frame.style.display = "block";

    loadFrameData("data-suggestion-frame");

    /*Define position (order)*/
    let nth = "suggestion-section-" + nthProduct;
    document.getElementById(nth).style.order = "1";
    frame.style.order = "2";

    let n = 3;
    for (i = 1; ; i++) {
        if (i == nthProduct) {
            continue;
        }
        let id = "suggestion-section-" + i;
        document.getElementById(id).style.display = "none";
        document.getElementById(id).style.order = n;
        n++
        if (n == 10) {
            break;
        }
    }

    /*Display close frame button of the selected product*/
    let idBtn = "close-suggestion-" + nthProduct;
    document.getElementById(idBtn).style.display = "block";
    document.getElementById(idBtn).style.backgroundColor = "Red";

    /*Frame nth is opening*/
    suggestionOpening = nthTemplate;
}

function hideSuggestionDetail() {
    /*Hide frame*/
    const frame = document.getElementById("suggestion-detail");
    frame.style.display = "none";
    frame.style.order = "1";

    /*Hide close frame button
    Display cart button */
    let idBtn = "close-suggestion-" + suggestionOpening;
    document.getElementById(idBtn).style.display = "none";
    document.getElementById(idBtn).style.backgroundColor = "#e8f6ea";

    let n = 1;
    for (i = 2; i <= 9; i++) {
        let id = "suggestion-section-" + n;
        document.getElementById(id).style.order = i;
        document.getElementById(id).style.display = "block";
        n++;
    }

    let nth = "suggestion-section-" + suggestionOpening;

    /*Reset no frame is opening*/
    suggestionOpening = "0";
}