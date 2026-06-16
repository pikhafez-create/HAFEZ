export const buildPolyline = (points:any[]) => {
  return points.map(p => ({ latitude: p.lat, longitude: p.lng }));
};

export const optimizeRoute = (points:any[]) => {
  return points.filter((p, i) => i === 0 || i === points.length - 1);
};
