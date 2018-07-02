/**
 * JS version of the Fisher-Yates shuffle algorithm
 * @arg {Array<*>} arr Array to be shuffled
 * @returns {Array<*>} The shuffled array
 * @see https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
 */
export const shuffle = arr => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))

    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
  return arr
}
