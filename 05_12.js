/**
 * @param {string} fromTime - The current time in elf format
 * @param {string} takeOffTime - The take off time in elf format
 * @returns {number} The time in seconds until take off
 */
function timeUntilTakeOff(fromTime, takeOffTime) {
  const parseElfTime = (elfTime) => {
    const clean = elfTime.replace(" NP", "")

    const [datePart, timePart] = clean.split("@")
    const [year, month, day] = datePart.split("*").map(Number)
    const [hour, minute, second] = timePart.split("|").map(Number)

    return Math.floor(
      Date.UTC(year, month - 1, day, hour, minute, second) / 1000
    )
  }

  const fromTimestamp = parseElfTime(fromTime)
  const takeOffTimestamp = parseElfTime(takeOffTime)

  return takeOffTimestamp - fromTimestamp
}