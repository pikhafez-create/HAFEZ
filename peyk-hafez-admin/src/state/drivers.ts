export type Driver = {
  id: string;
  name: string;
  phone: string;
  online: boolean;
  lat: number;
  lng: number;
};

export const mockDrivers: Driver[] = [
  { id: '1', name: 'علی احمدی', phone: '09120000001', online: true, lat: 35.7219, lng: 51.3347 },
  { id: '2', name: 'محمد رضایی', phone: '09120000002', online: true, lat: 35.7319, lng: 51.3447 },
  { id: '3', name: 'سارا کریمی', phone: '09120000003', online: false, lat: 35.7419, lng: 51.3547 }
];
