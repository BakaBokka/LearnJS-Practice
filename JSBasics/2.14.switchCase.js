//Конструкция switch

//Конструкция switch имеет внутри один или более блоков case
//и необязательный default

// switch(x) {
//   case "value":
//     ...
//     break;
//     case value2:
//     ...
//     break;

//     default:
//     ...
//     break;
// }

//Происходит строгое сравнение условия с case, сверху вниз.
//Если условиие совпало с case, то выполняется тело case,
// а затем выполняются все условия ниже, до первого break. 
//То есть, если не проставить break, то после первого совпавшего условия,
//выполнятся и остальные case ниже, включая default


//default выполнится, если ни один из case  не совпал 

//case можно группировать, таким образов:
// switch (arg) {
//   case '0':
//   case '1':
//     alert( 'Один или ноль' );
//     break;

 
//   default:
//     alert( 'Неизвестное значение' );
// }

//1)Напишите "if", аналогичный "switch"
// Напишите if..else, соответствующий следующему switch:

// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }

if("Edge") {
  alert( "You've got the Edge!" );
} else if('Chrome' || 'Firefox' || 'Safari' || 'Opera') {
  alert( 'Okay we support these browsers too' );
} else {
  alert( 'We hope that this page looks ok!' );
}

//2) Переписать условия "if" на "switch"
// Перепишите код с использованием одной конструкции switch:

// const number = +prompt('Введите число между 0 и 3', '');

// if (number === 0) {
//   alert('Вы ввели число 0');
// }

// if (number === 1) {
//   alert('Вы ввели число 1');
// }

// if (number === 2 || number === 3) {
//   alert('Вы ввели число 2, а может и 3');
// }

const number = +prompt('Введите число между 0 и 3', '');

switch(number) {
case 0:
  alert('Вы ввели число 0');
  break;
case 1: 
  alert('Вы ввели число 1');
  break;
case 2:
case 3:
  alert('Вы ввели число 2, а может и 3');
  break;
}
