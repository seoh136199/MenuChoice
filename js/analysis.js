var listTot = [listNation, listMI, listMI, listCM, listSpicy, listFull, listPrice, listTemp, listOily, listSweet, listSalty]
var weight = [0.17, 0.085, 0.085, 0.17, 10, 10, 7, 5, 7, 5, 5]
var cnts = [cntNation, cntMI, cntMI, cntCM, cntSpicy, cntFull, cntPrice, cntTemp, cntOily, cntSweet, cntSalty]

function analysisResult() {
    for (var t = 0; t < 4; t++) {
        for (var i = 0; i < cntMenu; i++) {
            for (var j = 0; j < cnts[t]; j++) {
                if (menu[i][t + 2] == j) menu[i][1] += (listTot[t][j] * weight[t]);
            }
        }
    }

    for (var t = 4; t < 11; t++) {
        for (var i = 0; i < cntMenu; i++) {
            for (var j = 0; j < cnts[t]; j++) {
                if (menu[i][t + 2] == j && listTot[t][j] == true) menu[i][1] += weight[t];
            }
        }
    }
}

function analysisMergedResult() {
    for (var i = 0; i < cntMenu; i++) {
        var totScr = 0;
        for (var j = 0; j < cntTasteCode; j++) {
            totScr += parseInt(tasteCodes[j][2*i], 16) * 16 + parseInt(tasteCodes[j][2*i+1], 16)
        }
        menu[i][1] = totScr / cntTasteCode;
    }
}

function resetResult() {
    var names = [];
    var scores = [];
    var rank = [];  
    
    for (var i = 0; i < cntMenu; i++) {
		rank[i] = i;
	}
    
    for (var i = 0; i < cntMenu; i++) {
		for (var j = i + 1; j < cntMenu; j++) {
			if (menu[rank[i]][1] < menu[rank[j]][1]) {
				var tmp = rank[i];
				rank[i] = rank[j];
				rank[j] = tmp;
			}
		}
	}

    names = document.querySelectorAll('.resultName')
    scores = document.querySelectorAll('.resultScore')

    for (var i = 0; i < cntMenu; i++) {
        names[i].innerHTML = menu[rank[i]][0];
        scores[i].innerHTML = menu[rank[i]][1].toFixed(1);
	}
}

function makeCodeShort(orgnCode){
    rstCode = "";
    for (var i = 0; i < cntMenu; i++) {
        
	}
}

function makeTasteCode(){
    var code = ""
    for (var i = 0; i < cntMenu; i++) {
        var crScr = parseInt(menu[i][1].toFixed(0), 10).toString(16);
		if (crScr.length == 1) code += '0';
        code += crScr;
	}
    document.querySelector('#tasteCode').innerHTML = code;
}

function delTasteCodeInput(){
    if (cntTasteCode >= 3){
        document.querySelector('#notion3').style.display = 'none';
        document.querySelector('#notion1').style.display = 'none';

        var tasteCodeblocks = document.querySelector('#scoreInput').querySelectorAll('.tasteCodeInput');
        tasteCodeblocks[cntTasteCode - 1].style.display = 'none';
        cntTasteCode -= 1;
    }
    else {
        document.querySelector('#notion3').style.display = 'block';
    }
}

function addTasteCodeInput(){
    if (cntTasteCode < 8){
        document.querySelector('#notion3').style.display = 'none';
        document.querySelector('#notion1').style.display = 'none';

        var tasteCodeblocks = document.querySelector('#scoreInput').querySelectorAll('.tasteCodeInput');
        tasteCodeblocks[cntTasteCode].style.display = 'block';
        cntTasteCode += 1;
    }
    else {
        document.querySelector('#notion3').style.display = 'block';
    }
}
