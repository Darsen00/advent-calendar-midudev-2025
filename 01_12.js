/**
 * @param {string[]} gifts - The array of gifts to filter
 * @returns {string[]} An array with the unique filtered gifts
 */
function filterGifts(gifts) {
  const goodGifts = gifts.filter(gift => !gift.includes('#'))

  return goodGifts
}