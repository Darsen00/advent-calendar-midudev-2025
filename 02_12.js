/**
 * @param {Array<{ toy: string, quantity: number }>} giftsToProduce
 * @returns {string[]} Array of manufactured gifts
 */
function manufactureGifts(giftsToProduce) {
  const giftsWithValidQuantity = giftsToProduce.filter(elem => {
    if (Number.isInteger(elem.quantity) && elem.quantity > 0) {
      return elem
    }
  })

  const giftsToManufacture = []

  giftsWithValidQuantity.forEach(elem => {
    for(let i = 0; i < elem.quantity; i++) {
      giftsToManufacture.push(elem.toy)
    }
  })

  return giftsToManufacture
}