export const calculateETA = (
  distanceKm:number,
  speedKmh:number = 35
) => {
  if (speedKmh <= 0) return null;
  const hours = distanceKm / speedKmh;
  const minutes = Math.round(hours * 60);
  return minutes;
};

export const formatETA = (minutes:number|null) => {
  if (minutes === null) return 'N/A';
  if (minutes < 1) return '<1 min';
  if (minutes < 60) return minutes + ' min';
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return h + 'h ' + m + 'm';
};
