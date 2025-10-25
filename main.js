//Bài 1
let total = 0;
let n = 10;
for (let i = 1; i <= n; i++) {
  total += i * (i + 1);
}
console.log("Bài 1: ");
console.log(`Giá trị của biểu thức là: ${total}`);

//Bài 2
let a = 5;
let b = 9;
let oddTotal = 0;
let evenTotal = 0;
for (let i = a; i <= b; i++) {
  if (i % 2 === 0) {
    evenTotal += i;
  } else {
    oddTotal += i;
  }
}
console.log("Bài 2:");
console.log(`Tổng số lẻ: ${oddTotal}`);
console.log(`Tổng số chẵn: ${evenTotal}`);

//Bài 3
let containerDiv = `<div class="multiplication-tables-container">`;
for (let i = 1; i <= 10; i++) {
  let tableBlock = `<div class="table-block">`;
  let tableHeader = `<div class="table-header">${i}</div>`;
  tableBlock += tableHeader;
  let tableElement = `<table>`;
  for (let j = 1; j <= 10; j++) {
    let row = `<tr>`;
    let col = `<td>${i} x ${j} = ${i * j}</td>`;
    row += col + `</tr>`;
    tableElement += row;
  }
  tableElement += `</table>`;
  tableBlock += tableElement + `</div>`;
  containerDiv += tableBlock;
}
containerDiv += `</div>`;
document.querySelector(".wrapper").innerHTML = containerDiv;

//Bài 4
console.log("Bài 4: ");
function isPrime(a) {
  if (a <= 1 || !Number.isInteger(a)) {
    return false;
  } else {
    for (let i = 2; i <= Math.sqrt(a); i++) {
      if (a % i === 0) {
        return false;
      }
    }
  }
  return true;
}

function getTotalPrime(n) {
  if (n > 1 && Number.isInteger(n)) {
    let sum = 0;
    for (let j = 2; j <= n; j++) {
      if (isPrime(j)) {
        sum += j;
      }
    }
    console.log(`Tổng các số nguyên tố là : ${sum}`);
  } else {
    console.log("Đầu vào không hợp lệ");
  }
}

getTotalPrime(10);

//Bài 5
console.log("Bài 5: ");
function readNumber(num, before) {
  switch (num) {
    case 1:
      return before ? "Một" : "một";
    case 2:
      return before ? "Hai" : "hai";
    case 3:
      return before ? "Ba" : "ba";
    case 4:
      return before ? "Bốn" : "bốn";
    case 5:
      return before ? "Năm" : "năm";
    case 6:
      return before ? "Sáu" : "sáu";
    case 7:
      return before ? "Bảy" : "bảy";
    case 8:
      return before ? "Tám" : "tám";
    case 9:
      return before ? "Chín" : "chín";
  }
}

function convertNumbertoString(n) {
  if (n < 0 || !Number.isInteger(n) || n > 9999) return "Đầu vào không hợp lệ";
  if (n === 0) return "Không";

  let thousand = Math.floor(n / 1000);
  let hundred = Math.floor((n % 1000) / 100);
  let dozen = Math.floor((n % 100) / 10);
  let unit = Math.floor(n % 10);
  let result = "";

  if (thousand > 0) {
    result += readNumber(thousand, !result) + " nghìn ";
  }

  if (hundred > 0) {
    result += readNumber(hundred, !result) + " trăm ";
  } else if (thousand > 0 && (dozen > 0 || unit > 0)) {
    result += "không trăm ";
  }

  if (dozen > 0) {
    if (dozen === 1) {
      result += result ? "mười " : "Mười ";
    } else if (unit === 0) {
      result += readNumber(dozen, !result) + " mươi ";
    } 
    else {
      result += readNumber(dozen, !result) + " ";
    }
  } else if ((thousand > 0 || hundred > 0) && unit > 0) {
    result += "lẻ ";
  }

  if (unit > 0) {
    if(unit === 1 && dozen > 1) {
      result += "mốt";
    } else if (unit === 4 && dozen > 1) {
      result += "tư";
    } else if (unit === 5 && dozen > 0) {
      result += "lăm";
    } else {
      result += readNumber(unit, !result);
    }
  }

  return result;
}

console.log(convertNumbertoString(1234));

//Bài 6
console.log("Bài 6: ");
function isSquareNumber(a) {
  if (a < 1 || !Number.isInteger(a)) {
    return false;
  }
  return Number.isInteger(Math.sqrt(a));
}

function printSquareNumber(n) {
  if (n < 1 || !Number.isInteger(n)) {
    console.log("Đầu vào không hợp lệ");
  } else {
    for (let j = 1; j <= n; j++) {
      if (isSquareNumber(j)) {
        console.log(j);
      }
    }
  }
}

printSquareNumber(10);

