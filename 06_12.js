/**
 * @param {{ hand: 'L' | 'R', color: string }[]} gloves
 * @returns {string[]} Colors of matched pairs
 */
function matchGloves(gloves) {
  const counter = {}
  const pairs = []

  for (const { hand, color } of gloves) {
    if (!counter[color]) {
      counter[color] = { L: 0, R: 0 }
    }

    counter[color][hand]++

    if (counter[color].L > 0 && counter[color].R > 0) {
      pairs.push(color)
      counter[color].L--
      counter[color].R--
    }
  }

  return pairs
}

const gloves = [
  { hand: 'L', color: 'green' },
  { hand: 'L', color: 'red' },
  { hand: 'R', color: 'red' },
  { hand: 'R', color: 'green' }
]

console.log(matchGloves(gloves))

