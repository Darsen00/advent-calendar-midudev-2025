function decodeSantaPin(code) {
  const blocks = code.match(/\[.*?]/g)
  if (!blocks) return null

  const result = []
  let lastDigit = null

  for (const block of blocks) {
    if (block === "[<]") {
      if (lastDigit === null) return null
      result.push(lastDigit)
      continue
    }

    const match = block.match(/^\[(\d)([+-]*)]$/)
    if (!match) return null

    let digit = Number(match[1])
    const ops = match[2]

    for (const op of ops) {
      if (op === "+") digit = (digit + 1) % 10
      else if (op === "-") digit = (digit + 9) % 10
    }

    lastDigit = digit
    result.push(digit)
  }

  if (result.length < 4) return null

  return result.join("")
}
