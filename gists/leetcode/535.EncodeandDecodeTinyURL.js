/**
 * 535. Encode and Decode TinyURL
 * Hash Table, String
 */

let codeDB = new Map(),
  urlDB = new Map();
const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

const getCode = () => {
  let code = new Array(6).fill().map((_) => chars.charAt(~~(Math.random() * 62)));
  return 'http://tinyurl.com/' + code.join('');
};

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
const encode = (longUrl) => {
  if (urlDB.has(longUrl)) return urlDB.get(longUrl);
  let code = getCode();
  while (codeDB.has(code)) code = getCode();
  codeDB.set(code, longUrl);
  urlDB.set(longUrl, code);
  return code;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
const decode = (shortUrl) => codeDB.get(shortUrl);

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */
