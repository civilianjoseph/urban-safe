import { Modal } from '@/components/atoms/modal/modal';
import { Button } from '@/components/atoms/button/button';
import { Input, Textarea } from '@/components/atoms/input/input';
import { FormField } from '@/components/molecules/form-field/form-field';
import { CategorySelector } from '@/components/molecules/category-selector/category-selector';
import { PhotoUpload } from '@/components/molecules/photo-upload/photo-upload';
import { SectionHeading } from '@/components/atoms/section-heading/section-heading';
import { LocateFixed, MapPin } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import type { Category, Report } from '@/shared/types';

type ReportModalProps = {
  open: boolean;
  onClose: () => void;
  onCreated: (report: Report) => void;
};

export function ReportModal({ open, onClose, onCreated }: ReportModalProps) {
  const [category, setCategory] = useState<Category>('furto');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');
  const [coords, setCoords] = useState({ latitude: -23.553, longitude: -46.65 });
  const [error, setError] = useState('');

  function useDeviceLocation() {
    if (!navigator.geolocation) {
      setError('Seu dispositivo não disponibiliza localização automática.');
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setCoords({ latitude: pos.coords.latitude, longitude: pos.coords.longitude });
        setAddress('Minha localização atual');
      },
      () => setError('Não conseguimos acessar sua localização. Digite um endereço manualmente.')
    );
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newReport: Report = {
      id: `r${Date.now()}`,
      category,
      description,
      address: address || null,
      latitude: coords.latitude,
      longitude: coords.longitude,
      createdAt: new Date().toISOString(),
    };
    onCreated(newReport);
    setCategory('furto');
    setDescription('');
    setAddress('');
  }

  return (
    <Modal open={open} onClose={onClose}>
      <div className="p-7">
        <SectionHeading kicker="Novo alerta" title="Reportar ocorrência" subtitle="Ajude sua comunidade com informações precisas." />

        <form onSubmit={handleSubmit} className="mt-6 grid gap-5">
          <div>
            <span className="mb-2 block text-xs font-semibold text-slate-600">Qual é o tipo de ocorrência?</span>
            <CategorySelector value={category} onChange={setCategory} />
          </div>

          <FormField label="O que aconteceu?">
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Descreva brevemente o que você viu..."
              required
            />
          </FormField>

          <FormField label="Onde aconteceu?" hint="Ou use a localização do seu dispositivo">
            <Input
              icon={<MapPin size={16} />}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Digite um endereço"
              required
              action={
                <button
                  type="button"
                  onClick={useDeviceLocation}
                  title="Usar minha localização"
                  className="grid h-8 w-8 place-items-center rounded-md bg-brand-100 text-brand-600 hover:bg-brand-200"
                >
                  <LocateFixed size={16} />
                </button>
              }
            />
          </FormField>

          <FormField label="Foto" optional>
            <PhotoUpload />
          </FormField>

          {error && <p className="rounded-lg bg-red-50 px-3 py-2.5 text-xs text-red-600">{error}</p>}

          <div className="flex justify-end gap-2 pt-1">
            <Button type="button" variant="secondary" onClick={onClose}>Cancelar</Button>
            <Button type="submit" size="lg">Publicar alerta</Button>
          </div>
        </form>
      </div>
    </Modal>
  );
}
