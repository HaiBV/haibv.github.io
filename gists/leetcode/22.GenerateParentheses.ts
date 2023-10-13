/**
 * 22. Generate Parentheses
 * String, Dynamic Programming, Backtracking
 */
function BT_generateParenthesis(n: number): string[] {
  const res: string[] = [];

  function go(l: number, r: number, s: string) {
    if (l > r) return;

    if (l === 0 && r === 0) {
      res.push(s);
      return;
    }

    if (l > 0) go(l - 1, r, s + "(");
    if (r > 0) go(l, r - 1, s + ")");
  }

  go(n, n, "");
  return res;
}

function DP_generateParenthesis(n: number): string[] {
  const dp: string[][] = [[""], ["()"]]; // n -> all combinations
  for (let i = 2; i <= n; i++) {
    const combinations: string[] = [];
    // 0    -> i-1  inside  ()
    // i-1  -> 0    outside ()
    for (let inside = 0; inside <= i - 1; inside++) {
      const outside = i - 1 - inside;
			console.log(i, dp[inside], dp[outside])
      for (let j = 0; j < dp[inside].length; j++)
        for (let k = 0; k < dp[outside].length; k++) combinations.push("(" + dp[inside][j] + ")" + dp[outside][k]);
    }
    dp.push(combinations);
  }
  return dp[dp.length - 1];
}

DP_generateParenthesis(4);
