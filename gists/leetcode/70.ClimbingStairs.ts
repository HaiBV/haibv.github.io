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
};
