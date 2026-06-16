export const buildRoute = (points:any[]) => {
  return points.map(p => ({ latitude: p.lat, longitude: p.lng }));
};
