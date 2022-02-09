/**
 * 22. Generate Parentheses
 * String, Dynamic Programming, Backtracking
 */
function generateParenthesis(n: number): string[] {
  const res = [];

  function go(l: number, r: number, s: string) {
    if (l > r) return;

    if (l === 0 && r === 0) {
      res.push(s);
      return;
    }

    if (l > 0) go(l - 1, r, s + '(');
    if (r > 0) go(l, r - 1, s + ')');
  }

  go(n, n, '');
  return res;
}
