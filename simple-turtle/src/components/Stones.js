const stones = [
  new Array(10).fill(null),
  new Array(10).fill(null),
  new Array(10).fill(null),
  new Array(10).fill(null),
  new Array(10).fill(null),
  new Array(10).fill(null),
  new Array(10).fill(null),
  new Array(10).fill(null),
  new Array(10).fill(null),
  new Array(10).fill(null),
];

(function setStones() {
  let rand;
  for (let i = 0; i < stones.length; i++) {
    for (let k = 0; k < stones[i].length; k++) {
      rand = Math.floor(Math.random() * 100);
      if (i < 2 && k < 2) {
        stones[i][k] = true;
      } else if (rand < 85) {
        stones[i][k] = true;
      } else {
        stones[i][k] = false;
      }
    }
  }
})();

export default stones;
