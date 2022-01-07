// 8. String to Integer (atoi)
// String
// Implement parseInt in javascript

function myAtoi(str: string): number {
  let s = str.trim();
  if (!s) return 0;
  var sign = 1;
  var i = 0;
  var answer = 0;

  if (s[i] === '+') {
    sign = 1;
    i++;
  } else if (s[i] === '-') {
    sign = -1;
    i++;
  }

  const MAX_INT = Math.pow(2, 31) - 1;
  const MIN_INT = Math.pow(-2, 31);

  while (i < s.length) {
    var temp = s.charCodeAt(i) - 48;
    if (temp > 9 || temp < 0) {
      break;
    }
    if (answer > MAX_INT / 10 || answer > (MAX_INT - temp) / 10) {
      return sign === 1 ? MAX_INT : MIN_INT;
    } else {
      answer = answer * 10 + temp;
    }
    i++;
  }

  return answer * sign;
}

function myAtoi2(s: string): number {
  return Math.max(Math.min(parseInt(s) || 0, Math.pow(2, 31) - 1), Math.pow(-2, 31));
}
