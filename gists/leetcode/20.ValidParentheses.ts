/**
 * 20. Valid Parentheses
 * String, Stack
 */

function isValid(s: string): boolean {
  let stack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    let char: string = s[i];
    switch (true) {
      case char === '(':
        stack.push(')');
        break;
      case char === '[':
        stack.push(']');
        break;
      case char === '{':
        stack.push('}');
        break;
      case stack.length === 0 || char !== stack.pop():
        return false;
    }
  }

  return stack.length === 0;
}
