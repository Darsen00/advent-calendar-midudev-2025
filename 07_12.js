/** @param {number} height - Height of the tree
 *  @param {string} ornament - Character to use as ornament
 *  @param {number} frequency - How often ornaments appear
 *  @returns {string} The decorated tree
 */
function drawTree(height, ornament, frequency) {
  let result = []
  let position = 1

  for (let row = 1; row <= height; row++) {
    const stars = 2 * row - 1
    let line = ''

    for (let i = 0; i < stars; i++) {
      if (position % frequency === 0) {
        line += ornament
      } else {
        line += '*'
      }
      position++
    }

    const spaces = ' '.repeat(height - row)
    result.push(spaces + line)
  }

  result.push(' '.repeat(height - 1) + '#')

  return result.join('\n')
}