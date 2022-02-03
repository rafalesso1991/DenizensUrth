// FUNCION 'LANZAR DADO 1d3'
function rollDie(){
    let randomNumber = Math.floor((Math.random()*4));
    return randomNumber;
}
// DECLARO LOS CONJUNTOS DE BOTONES E INPUTS X CLASE
let insBtns = document.getElementsByClassName("insBtn");
let insScores = document.getElementsByClassName("insScore");
let corrBtns = document.getElementsByClassName("corrBtn");
let corrScores = document.getElementsByClassName("corrScore");
// CREO UN ARRAY Q CONTENGA A CADA BOTON/INPUT LLAMADO X SU ID
insBtnList = new Array;
[].forEach.call(insBtns, function (insBtn, i) {
    insBtn = insBtnList.push(document.getElementById(`insBtn${i}`));
});
insScoreList = new Array;
[].forEach.call(insScores, function (insScore, i) {
    insScore = insScoreList.push(document.getElementById(`insScore${i}`));
});
// EMPAREJO RESPECTIVAMENTE CADA BOTON CON SU INPUT
let insPairs = insBtnList.map(function(e, i) {
    return [e, insScoreList[i]];
});
// CREO UN EVENTO PARA CADA PAR DE BOTON-INPUT
insPairs.forEach(insPair => {
    insPair[0].addEventListener('click',()=>{
        insPair[1].value = rollDie()
    });
});
// REPITO EL PROCESO PARA LOS BOTONES/INPUTS D CORRUPCION
corrBtnList = new Array;
[].forEach.call(corrBtns, function (corrBtn, i) {
    corrBtn = corrBtnList.push(document.getElementById(`corrBtn${i}`));
});
corrScoreList = new Array;
[].forEach.call(corrScores, function (corrScore, i) {
    corrScore = corrScoreList.push(document.getElementById(`corrScore${i}`));
});
let corrPairs = corrBtnList.map(function(e, i) {
    return [e, corrScoreList[i]];
  });
  corrPairs.forEach(corrPair => {
    corrPair[0].addEventListener('click',()=>{
        corrPair[1].value = rollDie()
    });
});