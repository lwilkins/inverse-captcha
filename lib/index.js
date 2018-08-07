module.exports = input => {
  const inputAsArray = input.split('')
  const startingValue =
    inputAsArray[inputAsArray.length - 1] === inputAsArray[0]
      ? +inputAsArray[0]
      : 0
  return inputAsArray.reduce(
    (acc, cur, index, arr) => (cur === arr[index + 1] ? acc + +cur : acc),
    startingValue,
  )
}
