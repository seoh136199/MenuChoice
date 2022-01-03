var urlDefaultFacebok = "https://www.facebook.com/sharer/sharer.php?u=";
var urlDefaultTwitterTxt = "https://twitter.com/intent/tweet?text=";
var urlDefaultTwitterUrl = "&url=";

var myUrl = "seoh136199.github.io/MenuChoice";
var myContext = "";

var urlCombineFb = urlDefaultFacebok + myUrl;
var urlCombineTw;

function makeContext() {
    if (myContext == "") {
        myContext += "내가 지금 먹고 싶은 음식은?";

        myContext += "%0a"
        for (var i = 1; i <= 5; i++){
            myContext += "%0a" + i + "위: " + menu[i-1][0] + " - " +  menu[i-1][1] + "%25";
        }
        myContext += "%0a%0a"

        urlCombineTw = urlDefaultTwitterTxt + myContext + urlDefaultTwitterUrl + myUrl;
    }
}