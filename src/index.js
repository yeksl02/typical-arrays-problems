
exports.min = function min(array) {
  let min = 0;
  if (Array.isArray(array) && array.length > 0) {
    array.forEach((i) => {
      min >= i ? min = i : min;
    })
  } else {
    return false;
  }
  return min;
}

exports.max = function max(array) {

  if (Array.isArray(array) && array.length > 0) {
    let max = array[0];
    array.forEach((i)=>{
      i > max ? max = i : max;
    })
    return max;

  } else {
    return 0;
  }

}

exports.avg = function avg(array) {
  let avg = 0;
  if (Array.isArray(array) && array.length > 0) {

    array.forEach((i) => {
      avg = avg + i;
    })

  } else {
    return false;

  }
  if (avg / array.length != NaN) {
    return avg / array.length;
  } else return false;

}
