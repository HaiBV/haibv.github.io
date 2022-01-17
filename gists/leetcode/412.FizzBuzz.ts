/**
 * 412. Fizz Buzz
 * Math, String, Simulation
 */

function fizzBuzz(n: number): string[] {
  let ans: string[] = [];
  for (let i = 1, fizz = 0, buzz = 0; i <= n; i++) {
    fizz++;
    buzz++;
    switch (true) {
      case fizz === 3 && buzz === 5:
        ans.push('FizzBuzz');
        fizz = 0;
        buzz = 0;
        break;
      case buzz === 5:
        ans.push('Buzz');
        buzz = 0;
        break;
      case fizz === 3:
        ans.push('Fizz');
        fizz = 0;
        break;
      default:
        ans.push(i.toString());
        break;
    }
  }
  return ans;
}

function fizzBuzzOneLine(n: number): string[] {
  return new Array(n).fill(0).map((a, i) => (++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || '' + i);
}

function fizzBuzzNormal(n: number): string[] {
  let ans: string[] = [];
  for (let i = 1; i <= n; i++) {
    switch (true) {
      case i % 15 === 0:
        ans.push('FizzBuzz');
        break;
      case i % 5 === 0:
        ans.push('Buzz');
        break;
      case i % 3 === 0:
        ans.push('Fizz');
        break;
      default:
        ans.push(i.toString());
        break;
    }
  }

  return ans;
}
