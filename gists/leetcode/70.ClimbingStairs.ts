// 70. Climbing Stairs
// Fibonaci
// Dynamic Programming

function climbStairs(n: number): number {
  let steps: number[] = [];
  steps[0] = 1;
  steps[1] = 2;

  for (let i = 2; i < n; i++) {
    steps[i] = steps[i - 2] + steps[i - 1];
  }

  return steps[n - 1];
}

function combineBuyer(numberBuyer: number): string[] {
  let combines: string[][] = [];
  combines[0] = [''];
  combines[1] = ['1'];
  combines[2] = ['1-1', '2'];

  for (let i = 3; i <= numberBuyer; i++) {
    combines[i] = [...combines[i - 1].map((combine) => `${combine}-1`), ...combines[i - 2].map((combine) => `${combine}-2`)];
  }

  return combines[numberBuyer];
}

// console.log(combineBuyer(4));
