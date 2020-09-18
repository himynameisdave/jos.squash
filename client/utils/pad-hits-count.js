/**
 * Add additional `0`s to the left of a given number.
 *
 * @param {number} count - The count to pad.
 * @param {number} digits - How many digits (max) should there be?
 */
export default function padHitsCount(count, digits = 5) {
  let returnStr = `${count}`;
  if (returnStr.length >= digits) {
    return returnStr;
  }
  while (returnStr.length < digits) {
    returnStr = `0${returnStr}`;
  }
  return returnStr;
}
