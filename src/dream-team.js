module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)) {
    return false;
  } else {
    var OnlyString = members.filter(function (elem) {
      return (typeof elem == 'string');
    });
    var UpperCase = OnlyString.map(function (elem) {
      return elem.toUpperCase();
    });
    var WithoutSpaces = UpperCase.map(function (elem) {
      return elem.trim();
    });
    WithoutSpaces.sort();
    var TeamName = WithoutSpaces.map(function (elem) {
      return elem[0];
    });
    return TeamName.join('');
  }
};

