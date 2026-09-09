import type { Report } from '@/shared/types';

export const MOCK_REPORTS: Report[] = [
  {
    id: 'r1',
    category: 'furto',
    description: 'Celular furtado dentro do ônibus na linha 8000',
    address: 'Av. Paulista, 900',
    latitude: -23.561,
    longitude: -46.655,
    createdAt: '2026-09-09T10:30:00Z',
  },
  {
    id: 'r2',
    category: 'assalto',
    description: 'Assalto a pedestre próximo à saída do metrô',
    address: 'Rua Augusta, 120',
    latitude: -23.553,
    longitude: -46.65,
    createdAt: '2026-09-09T09:15:00Z',
  },
  {
    id: 'r3',
    category: 'tiroteio',
    description: 'Tiroteio reportado entre ruas da Consolação',
    address: 'Rua da Consolação',
    latitude: -23.548,
    longitude: -46.66,
    createdAt: '2026-09-08T22:40:00Z',
  },
  {
    id: 'r4',
    category: 'furto',
    description: 'Movimentação suspeita de indivíduos abordando transeuntes',
    address: 'Bela Vista',
    latitude: -23.56,
    longitude: -46.64,
    createdAt: '2026-09-08T18:20:00Z',
  },
  {
    id: 'r5',
    category: 'assalto',
    description: 'Assalto group reportado na praça da Liberdade',
    address: 'Liberdade',
    latitude: -23.565,
    longitude: -46.63,
    createdAt: '2026-09-08T14:05:00Z',
  },
];
