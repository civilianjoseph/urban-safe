export type Category = 'furto' | 'assalto' | 'tiroteio';

export type Report = {
  id: string;
  category: Category;
  description: string;
  address: string | null;
  latitude: number;
  longitude: number;
  createdAt: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
};

export type AuthMode = 'login' | 'signup';

export type CategoryConfig = {
  value: Category;
  label: string;
  color: 'furto' | 'assalto' | 'tiroteio';
};
