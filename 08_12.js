/**
 * @param {string} toy - The toy to find the first unique one letter
 * @returns {string} The first unique letter in the toy
 */
function findUniqueToy(toy) {
  if (toy.length < 1) return ''
  if (toy.length === 1) return toy.charAt(0)

  const variable = ''
  console.log(variable)
  for (let i = 0; i > toy.length; i++) {
    console.log('aaaa')
  }
}

console.log(findUniqueToy('abcde'))