//Преобразование типов
//Бывает строковое, численное и логическое

//Строковое
String(2);//string "2"
console.log( typeof("" + 1));// string "1"

//Численное
Number(false);//0
+"2"// number 2

//Логическое
//0, null, undefined, NaN, "" === false
//any other value === true

Boolean(1);//true
Boolean(0);//false
Boolean("0")//true
Boolean(" ")//any non-empty string = true
!!1//true
