var listTot = [listNation, listMI, listMI, listCM, listSpicy, listFull, listPrice, listTemp, listOily, listSweet, listSalty]
var weight = [0.17, 0.085, 0.085, 0.17, 10, 10, 7, 5, 7, 5, 5]
var cnts =[cntNation, cntMI, cntMI, cntCM, cntSpicy, cntFull, cntPrice, cntTemp, cntOily, cntSweet, cntSalty]

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
        names[i].innerHTML = menu[rank[i]][0];;
        scores[i].innerHTML = menu[rank[i]][1].toFixed(1);
	}
}
