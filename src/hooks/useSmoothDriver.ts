import { useEffect, useRef, useState } from 'react';

export const useSmoothDriver = (initial:any) => {
  const [position, setPosition] = useState(initial);
  const last = useRef(initial);

  const update = (next:any) => {
    const steps = 10;
    let i = 0;

    const interval = setInterval(() => {
      i++;
      const t = i / steps;

      setPosition({
        lat: last.current.lat + (next.lat - last.current.lat) * t,
        lng: last.current.lng + (next.lng - last.current.lng) * t,
      });

      if (i === steps) {
        clearInterval(interval);
        last.current = next;
      }
    }, 50);
  };

  return { position, update };
};
