export const interpolate = (start:number, end:number, t:number) => {
  return start + (end - start) * t;
};

export const calculateDistance = (a:any, b:any) => {
  const R = 6371;
  const dLat = (b.lat - a.lat) * Math.PI / 180;
  const dLng = (b.lng - a.lng) * Math.PI / 180;
  const x =
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(a.lat*Math.PI/180) * Math.cos(b.lat*Math.PI/180) *
    Math.sin(dLng/2) * Math.sin(dLng/2);
  const c = 2 * Math.atan2(Math.sqrt(x), Math.sqrt(1-x));
  return R * c;
};
