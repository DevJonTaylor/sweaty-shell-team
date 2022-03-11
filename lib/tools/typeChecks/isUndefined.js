module.exports = function isUndefined(...und) {
  return und.length === 0
    ? null
    : und.length === 1
      ? typeof(und[0]) === 'undefined'
      : und.map(u => typeof(u) === 'undefined');
};