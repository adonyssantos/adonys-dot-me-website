export function getTimeInGMT(gmt: number) {
  const date = new Date();
  const utcHours = date.getUTCHours();
  const gmtHours = (utcHours + gmt + 24) % 24;
  return gmtHours;
}
