var menu = [ 
    ["토마토 파스타",  0, 2, 2, 2, 1, 2, 1, 1, 0, 1, 1, 2],
    ["크림 파스타",    0, 2, 2, 2, 1, 2, 1, 1, 0, 0, 1, 2],
    ["매운 떡볶이",    0, 4, 3, 3, 1, 0, 1, 1, 0, 1, 0, 1],
    ["로제 떡볶이",    0, 4, 3, 3, 1, 0, 1, 1, 0, 0, 0, 1],
    ["크림 떡볶이",    0, 4, 3, 3, 1, 2, 1, 1, 0, 0, 0, 2],
    ["짜장 떡볶이",    0, 4, 3, 3, 1, 2, 1, 1, 0, 0, 0, 0],
    ["양념 치킨",      0, 5, 6, 6, 4, 0, 1, 1, 0, 0, 0, 1],
    ["간장 치킨",      0, 5, 6, 6, 4, 2, 1, 1, 0, 0, 1, 0],
    ["갈릭 치킨",      0, 5, 6, 6, 4, 2, 1, 1, 0, 0, 0, 2],
    ["후라이드 치킨",  0, 5, 6, 6, 4, 2, 1, 1, 0, 0, 2, 2],
    ["왕돈까스",       0, 3, 5, 5, 4, 2, 1, 1, 0, 0, 0, 1],
    ["치즈 돈까스",    0, 3, 5, 5, 4, 2, 1, 1, 0, 0, 0, 0],
    ["토스트",         0, 4, 1, 8, 3, 2, 2, 0, 1, 1, 0, 1],
    ["비빔밥",         0, 0, 8, 0, 3, 0, 1, 1, 1, 1, 1, 0],
    ["돈까스 덮밥",    0, 3, 0, 5, 3, 2, 1, 1, 0, 1, 0, 1],
    ["회 덮밥",        0, 3, 0, 7, 3, 1, 1, 1, 1, 1, 1, 1],
    ["연어 덮밥",      0, 3, 0, 7, 3, 2, 1, 1, 2, 0, 1, 1],
    ["차슈 덮밥",      0, 3, 0, 5, 3, 1, 1, 1, 1, 1, 0, 0],
    ["불고기 덮밥",    0, 0, 0, 4, 3, 2, 1, 1, 1, 1, 0, 1],
    ["제육볶음 덮밥",  0, 0, 0, 5, 3, 0, 1, 1, 1, 1, 1, 1],
    ["쭈꾸미 덮밥",    0, 0, 0, 7, 3, 0, 1, 1, 1, 1, 1, 1],
    ["카레",          0, 3, 0, 0, 3, 1, 1, 1, 0, 1, 2, 2],
    ["알밥",          0, 3, 0, 7, 3, 0, 1, 1, 1, 1, 2, 2],
    ["오므라이스",    0, 3, 8, 0, 1, 2, 1, 1, 1, 1, 1, 1],
    ["볶음밥",        0, 0, 8, 0, 1, 1, 1, 1, 0, 1, 2, 2],
    ["순대국밥",      0, 0, 0, 5, 2, 2, 1, 1, 0, 1, 2, 2],
    ["육개장",        0, 0, 0, 0, 2, 0, 1, 1, 0, 1, 2, 1],
    ["삼계탕",        0, 0, 0, 6, 2, 2, 0, 1, 0, 1, 2, 2],
    ["감자탕",        0, 0, 0, 0, 2, 1, 0, 1, 0, 1, 2, 1],
    ["설렁탕",        0, 0, 0, 0, 2, 2, 1, 1, 0, 1, 2, 2],
    ["갈비탕",        0, 0, 0, 4, 2, 2, 0, 2, 0, 1, 1, 1],
    ["짜장면",        0, 1, 2, 2, 3, 2, 1, 1, 1, 0, 1, 1],
    ["짬뽕",          0, 1, 2, 2, 2, 0, 1, 1, 0, 1, 1, 0],
    ["탕수육",        0, 1, 5, 5, 4, 2, 1, 2, 0, 1, 0, 1],
    ["마라탕",        0, 1, 8, 8, 2, 0, 1, 1, 0, 1, 2, 1],
    ["비빔냉면",      0, 0, 2, 2, 3, 0, 1, 1, 2, 1, 0, 1],
    ["물냉면",        0, 0, 2, 2, 3, 2, 1, 1, 2, 1, 0, 0],
    ["초밥",          0, 3, 0, 7, 3, 2, 1, 2, 1, 1, 0, 1],
    ["피자",          0, 2, 1, 1, 0, 2, 0, 2, 0, 0, 0, 0],
    ["삼겹살",        0, 0, 5, 5, 0, 2, 0, 2, 0, 0, 2, 1],
    ["닭갈비",        0, 0, 6, 6, 1, 0, 0, 2, 0, 0, 1, 1],
    ["스테이크",      0, 2, 4, 4, 0, 2, 1, 2, 0, 0, 2, 1],
    ["양념 갈비",     0, 0, 4, 5, 0, 2, 0, 2, 0, 1, 0, 0],
    ["족발",          0, 0, 5, 5, 2, 2, 0, 2, 0, 0, 1, 1],
    ["곱창",          0, 0, 4, 5, 0, 2, 0, 2, 0, 0, 2, 1],
    ["보쌈",          0, 0, 5, 5, 2, 2, 0, 2, 0, 0, 2, 1],
    ["라면",          0, 6, 2, 2, 2, 0, 2, 0, 0, 1, 2, 0],
    ["삼각김밥",      0, 6, 0, 0, 3, 1, 2, 0, 1, 1, 2, 2],
    ["편의점 도시락", 0, 6, 0, 0, 3, 1, 1, 0, 0, 0, 1, 1],
    ["전복죽",        0, 0, 0, 7, 2, 2, 1, 2, 0, 1, 2, 2],
    ["야채죽",        0, 0, 8, 0, 2, 2, 1, 1, 0, 1, 2, 2],
    ["쇠고기죽",      0, 0, 0, 4, 2, 2, 1, 1, 0, 1, 2, 2],
    ["닭죽",          0, 0, 0, 6, 2, 2, 1, 1, 0, 1, 2, 2],
    ["햄버거",        0, 2, 1, 4, 3, 2, 1, 1, 0, 0, 0, 1],
    ["치킨버거",      0, 2, 1, 6, 3, 2, 1, 1, 0, 0, 0, 1],
    ["밥버거",        0, 4, 0, 0, 3, 1, 1, 0, 0, 1, 2, 1],
    ["부대찌개",      0, 0, 5, 0, 2, 0, 0, 1, 0, 0, 2, 0],
    ["된장찌개",      0, 0, 8, 0, 2, 2, 0, 1, 0, 1, 2, 1],
    ["순두부찌개",    0, 0, 8, 0, 2, 0, 0, 1 , 0, 1, 2, 1],
    ["샐러드",        0, 2, 8, 8, 3, 2, 2, 1, 2, 1, 1, 2],
    ["김밥",          0, 4, 0, 0, 3, 2, 2, 0, 1, 1, 2, 2],
    ["샤브샤브",      0, 0, 8, 4, 2, 2, 0, 2, 0, 1, 2, 1],
    ["칼국수",        0, 0, 2, 2, 2, 2, 1, 1, 0, 1, 2, 2],
    ["쌀국수",        0, 2, 2, 2, 2, 2, 1, 1, 0, 1, 2, 1],
    ["막국수",        0, 0, 2, 2, 2, 1, 1, 1, 2, 1, 1, 2],
    ["라멘",          0, 3, 2, 2, 2, 2, 1, 1, 0, 0, 2, 1],
    ["초계국수",      0, 0, 2, 2, 2, 2, 1, 1, 2, 1, 2, 2],
    ["찐만두",        0, 1, 5, 8, 2, 2, 1, 0, 0, 1, 2, 2],
    ["메밀국수",      0, 3, 2, 2, 3, 2, 1, 1, 2, 1, 1, 0],
    ["콩국수",        0, 0, 2, 2, 3, 2, 1, 1, 2, 1, 2, 2],
    ["우동",          0, 3, 2, 2, 2, 2, 1, 1, 0, 1, 1, 1],
    ["해물파전",      0, 0, 7, 8, 5, 2, 1, 1, 0, 1, 2, 1],
    ["육회",          0, 0, 4, 4, 3, 2, 1, 2, 2, 1, 1, 2],
    ["양꼬치",        0, 1, 4, 5, 0, 2, 0, 2, 0, 0, 2, 2],
    ["아구찜",        0, 0, 7, 7, 2, 0, 0, 2, 0, 1, 2, 2],
    ["훈제 오리",     0, 0, 6, 6, 0, 2, 1, 2, 0, 0, 2, 1],
    ["찜닭",          0, 0, 6, 6, 2, 2, 0, 2, 0, 0, 0, 1],
    ["조개 구이",     0, 0, 7, 7, 0, 2, 1, 2, 0, 1, 2, 0],
    ["낙지 볶음",     0, 0, 7, 7, 1, 0, 0, 1, 0, 1, 2, 1],
    ["간장게장",      0, 0, 7, 7, 3, 2, 0, 2, 1, 1, 1, 0],
    ["양념게장",      0, 0, 7, 7, 3, 0, 0, 2, 1, 1, 2, 1]
];
const cntMenu = 81, cntNation = 7, cntMI = 9, cntCM = 6, cntSpicy = 3;
const cntFull = 3, cntPrice = 3, cntTemp = 3, cntOily = 2, cntSweet = 3, cntSalty = 3;
var listNation = [], listMI = [], listCM = [], listSpicy = [];
var listFull = [], listPrice = [], listTemp = [], listOily = [], listSweet = [], listSalty = [];
var tasteCodes = [], cntTasteCode = 2;

function printSliderBox(list, cnt){
    document.write("<div id='innerGrid1'>");
    document.write("<div></div> <div>");
    for (var i = 0; i < cnt; i++){
        document.write("<div class='inputOption'>" + list[i] + " <input class='inputValueSlider' type='range' max='100' min='0' value='50' step='1'><br></div>");
    }
    document.write("</div> <div></div>");
    document.write("</div>");
}

function printCheckBox(list, cnt, labelName){
    document.write("<div id='innerGrid2'>");
    document.write("<div></div> <div>");
    for (var i = 0; i < cnt; i++){
        document.write("<label for=" + labelName + i + ">")
        document.write("<div class='inputOption'><input class='inputValue' type='checkbox' id='" + labelName + i + "'Checked>  " + list[i] + "<br></div>");
        document.write("</label>");
    }
    document.write("</div> <div></div>");
    document.write("</div>");
}

function printNotion1(){
    document.write('<div id="notion1" class="notion" style="display: none; color:red;"> 입력되지 않았거나 입력이 잘못된 항목이 있습니다. </div>');
}

function printNotion2(){
    document.write('<div id="notion2" class="notion" style="display: none; color:red;"> 한 가지 이상 선택해주세요. </div>');
}

function printNotion3(){
    document.write('<div id="notion3" class="notion" style="display: none; color:red;"> 칸은 2~8개만 이용할 수 있습니다. </div>');
}

function checkSlider(list, cnt, selfBlockId, nextBlockId){
    var t_list = document.querySelector(selfBlockId).querySelectorAll('.inputValueSlider');
    for (var i = 0; i < cnt; i++) {
        list[i] = t_list[i].value;
    }
    document.querySelector(selfBlockId).style.display = 'none';
    document.querySelector(nextBlockId).style.display = 'block';
}

function checkCheckBox(list, cnt, selfBlockId, nextBlockId){
    var t_list = document.querySelector(selfBlockId).querySelectorAll('.inputValue');
    var t_cnt = 0;
    for (var i = 0; i < cnt; i++) {
        if (t_list[i].checked == true) t_cnt++;
    }
    if (t_cnt >= 1) {
        for (var i = 0; i < cnt; i++) {
            list[i] = t_list[i].checked;
        }
        document.querySelector(selfBlockId).style.display = 'none';
        document.querySelector(nextBlockId).style.display = 'block';
    }
    else {
        document.querySelector(selfBlockId).querySelector('#notion2').style.display = 'block';
    }
}

function checkTasteCodeInput(list, selfBlockId, nextBlockId){ 
    var t_list = document.querySelector(selfBlockId).querySelectorAll('.tasteCodeInput');
    var isAvailable = 1;
    for (var i = 0; i < cntTasteCode && isAvailable == 1; i++) {
        list[i] = t_list[i].value;
        if (list[i].length != 2*cntMenu) {
            isAvailable = 0;
        }
    }

    if (isAvailable){
        document.querySelector(selfBlockId).style.display = 'none';
        document.querySelector(nextBlockId).style.display = 'block';
        document.querySelector('.returnToMainButton').style.display = 'none';
    }
    else{
        document.querySelector(selfBlockId).querySelector('#notion1').style.display = 'block';
    }
}