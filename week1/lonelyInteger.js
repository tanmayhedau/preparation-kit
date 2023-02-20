function lonelyInteger(a) {
  let mp = {};
  for (let i of a) {
    mp[i] = (mp[i] || 0) + 1;
  }
  for (let key in mp) {
    if (mp[key] === 1) {
      return key;
    }
  }
}
console.log(lonelyInteger([1, 2, 3, 4, 3, 2, 1]));
