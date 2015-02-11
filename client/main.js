'use strict'

$(document).ready(init);
var total = 0;
var oper = false;
var oposite = false;

function init(){
  var screen = $('#screen');
  var computed = false
  var operatorHit = false
  var calc = "";
  var equation = [];
  var oposite = false;

  $('.button').click(function(){
    var btnVal = ($(this).text());

    if(btnVal === "9" || btnVal === "8" || btnVal === "7" || btnVal === "6" || btnVal === "5" || btnVal === "4" || btnVal === "3" || btnVal === "2" || btnVal === "1"){
      if(computed){
        screen.text(btnVal)
        computed = false;
      }else if(screen.text() === "0"){
        screen.text(btnVal)
      }
      else{
        screen.append(btnVal)
      }
    }

    if(btnVal === "0"){
      if(computed){
        screen.text('0');
        computed = false;
      }
      else if(screen.text() === '0'){
        screen.text('0');
      }else{
        screen.append('0')
      }
    }

    if(btnVal === "+" || btnVal === "-" || btnVal === "/" || btnVal === "*" || btnVal === "^2"){
      if(btnVal === "^2"){
        var text = screen.text();
        var text = text * text;
        screen.text(eval(text))
        total = text;
        return;
      }
      if(total > 0){
        screen.text(total + btnVal);
        operatorHit = true;
      }else if(screen.text().length > 0 && !operatorHit){
        screen.text(screen.text() + btnVal);
        operatorHit = true;
      }
      else if(screen.text() === '0'){
        return
      }
      else if(operatorHit && oposite){
        var text = screen.text();

        screen.text(text + btnVal);

      }else if(operatorHit && !oposite){
        var text = screen.text();
        screen.text(text + btnVal);
      }else{
        screen.append(btnVal);
        equation.push(btnVal);
        operatorHit = true;
    }
  }

    if(btnVal === "C"){
      screen.text('0');
      total = 0;
      operatorHit = false;
      computed = false;
      oposite = false;
    }

    if(btnVal === "="){
      if(screen.text()[screen.text().length -1] === '+' ||
      screen.text()[screen.text().length -1] === '-' ||
      screen.text()[screen.text().length -1] === '/' ||
      screen.text()[screen.text().length -1] === '*'
      ){
        screen.text('0');
      }else{
        total = eval(screen.text());
        screen.text(total);
        console.log(total);
      }
    }

    if(btnVal === "."){
      if(screen.text() === "0"){
        screen.text('0.')
      }
      if(screen.text().indexOf('.') > -1){
        return;
      }
      else if(screen.text()[screen.text().length -1] === '.'){
      return;
    }else{
      screen.append('.')
    }
  }
  })

  $('.opp').click(function(){
    if(total > 0){
      total = 0 - total;
      screen.text(total);
      oposite = true;
    }else if(screen.text().length > 0){
      screen.text('-' + screen.text());
      oposite = true;
    }
  });

  $('.root').click(function(){
      var text = parseInt(screen.text());
      screen.text(Math.sqrt(text));
  });

  $('#num7').keypress(function(){
    console.log("7")
  })
}
