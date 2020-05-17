function calculate(e){
  var result = document.getElementById("result");
  if (e.keyCode == 13){//если код клавиши enter
	var v = document.getElementById("expression").value.trim();	//обрезаем пробеллы
	var ex = new Expression("");	
		
	if (v != ""){//проверяем текст на постоту
		try
		{
		    ex.Expression(v);//устанавливаем введеный текст в объект библиотек
			result.innerText = "= " + ex.Evaluate();//выводимый результат число и равно
		 }
		catch(e){
			result.innerText = "= Error"
		}
	}
  }
  else result.innerText = "";
}

/*var needle=require("needle");
var cherio=require("cherio");
url="https://www.tinkoff.ru/about/exchange/";
needle.get(url,function(err,res)){
	if (err) throw(err);
	var $ = cheerio.load(res.body);
	console.log($(".Text__text_1yBRv Text__text_size_40_27eFU Text__text_sizeDesktop_50_2TLwf Text__text_weight_200_2kUNN").text())
};*/

document.addEventListener('DOMContentLoaded', function() { 

    var expr = document.getElementById('expression'); //загрузка нашего окошка
	expr.addEventListener('keyup', calculate);//при вводе каждой кнопки запускается функция калькулятора
});