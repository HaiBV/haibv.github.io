/**
 * 71. Simplify Path
 * String, Stack
 */

/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  let directories = path.replace(/\/+/g, '/').split('/');
  let stack = [];
  for (dir of directories) {
    switch (true) {
      case dir === '..':
        stack.pop();
        break;
      case dir === '':
        break;
      default:
        stack.push(dir);
        break;
    }
  }

  return `/${stack.join('/')}`;
};

console.log(simplifyPath('/home//foo/'));
console.log(simplifyPath('/../home//foo/'));
console.log(simplifyPath('/../'));
console.log(simplifyPath('/a/./b/../../c/'));
