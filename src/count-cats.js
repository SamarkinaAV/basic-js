module.exports = function countCats(backyard) {
  var cat = 0;
  for (let i = 0; i < backyard.length; i++) {
        for (let j = 0; j < backyard[i].length; j++) {
           if (backyard[i][j] == '^^') {
             cat++;
           }
        }
      };
      return cat;
}


