export function getTimeInGMT(gmt: number) {
  const date = new Date();
  const utcHours = date.getUTCHours();
  const gmtHours = (utcHours + gmt + 24) % 24;
  return gmtHours;
}

export function calculateExperienceYears(
  startDate: string | Date,
  inactiveMonths = 0,
) {
  const currentDate = new Date();

  if (!(startDate instanceof Date)) {
    startDate = new Date(startDate);
  }

  const difference = Number(currentDate) - Number(startDate);
  const totalYears = difference / (1000 * 60 * 60 * 24 * 365);
  const adjustedYears = parseFloat(
    (totalYears - inactiveMonths / 12).toFixed(1),
  );
  return adjustedYears % 1 ? adjustedYears : adjustedYears.toFixed();
}
