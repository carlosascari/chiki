const bijection = module.exports = {};
const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split('');
const base = charset.length;
const lookup = (function(obj){
  for (let i = 0, l = charset.length; i < l; i++) {
    const char = charset[i];
    obj[char] = char.charCodeAt(0);
  }
  return obj;
}({}));
const _set1BeginIndex = 0
const _set2BeginIndex = 26;
const _set3BeginIndex = 52;
const _a = lookup[charset[_set1BeginIndex]]; // lower case alpha begins at index 0
const _A = lookup[charset[_set2BeginIndex]]; // upper case alpha begins at index 26
const _0 = lookup[charset[_set3BeginIndex]]; // numeric begins at index 52
const _z = lookup['z'];
const _Z = lookup['Z'];
const _9 = lookup['9'];

bijection.encode  = (n) => {
  const url = [];
  while (n) {
    url.push(charset[n % base])
    n = ~~(n / base);
  }
  return url.reverse().join('');
}
 
bijection.decode = (shortURL) =>  {
  let id = 0;
  for (let i = 0, l = shortURL.length; i < l; i++) {
    const charCode = lookup[shortURL[i]];
    if (_a <= charCode && charCode <= _z) id = ((id * base) + charCode) - _a;
    if (_A <= charCode && charCode <= _Z) id = ((id * base) + charCode) - _A + 26;
    if (_0 <= charCode && charCode <= _9) id = ((id * base) + charCode) - _0 + 52;
  }
  return id;
}
