import { Header } from '@/components/header/header';
import styles from './home.screen.module.css';
import stylesM from '@/components/modal/modal.module.css';
import { Button } from '@/components/button/button';
import { useState } from 'react';
import { Modal } from '@/components/modal/modal.tsx';
import { X, Target, AlertTriangle, Flame, MapPin, Upload, Compass, ArrowRight } from 'lucide-react';




function ReportForm({ onClose }: { onClose: () => void }) {

  return (
    <>
      <div className={stylesM.modalHeader}>
        <span className={stylesM.kicker}>NOVO ALERTA</span>
        <button onClick={(onClose)} className={stylesM.closeBtn}>
          <X size={20} />
        </button>
      </div>

      <h2 className={stylesM.modalTitle}>Reportar ocorrência</h2>
      <p className={stylesM.modalSubtitle}>Ajude sua comunidade com informações precisas.</p>

      <div className={stylesM.formGroup}>
        <label className={stylesM.label}>Qual é o tipo de ocorrência?</label>
        <div className={stylesM.typeGrid}>
          <button type="button" className={`${stylesM.typeCard} ${stylesM.typeCardActive}`}>
            <Target size={24} className={stylesM.typeIcon} />
            <span>Furto</span>
          </button>
          <button type="button" className={stylesM.typeCard}>
            <AlertTriangle size={24} className={stylesM.typeIcon} />
            <span>Assalto</span>
          </button>
          <button type="button" className={stylesM.typeCard}>
            <Flame size={24} className={stylesM.typeIcon} />
            <span>Tiroteio</span>
          </button>
        </div>
      </div>

      <div className={stylesM.formGroup}>
        <label className={stylesM.label}>O que aconteceu?</label>
        <textarea
          className={stylesM.textarea}
          placeholder="Descreva brevemente o que você viu..."
          rows={4}
        />
      </div>

      <div className={stylesM.formGroup}>
        <label className={stylesM.label}>Onde aconteceu?</label>
        <div className={stylesM.inputWrapper}>
          <MapPin size={20} className={stylesM.inputIcon} />
          <input
            type="text"
            className={stylesM.inputWithIcon}
            placeholder="Digite um endereço"
          />
          <button type="button" className={stylesM.locationBtn}>
            <Compass size={18} />
          </button>
        </div>
        <span className={stylesM.helperText}>Ou use a localização do seu dispositivo</span>
      </div>

      <div className={stylesM.formGroup}>
        <label className={stylesM.label}>
          Foto <span className={stylesM.optional}>opcional</span>
        </label>
        <button type="button" className={stylesM.uploadArea}>
          <Upload size={20} />
          <span>Clique para adicionar uma foto</span>
        </button>
      </div>

      <div className={styles.modalFooter}>
        <Button variant="ghost" onClick={onClose}>
          Cancelar
        </Button>
        <Button>
          Publicar alerta <ArrowRight size={18} />
        </Button>
      </div>
    </>
  );
}
export function HomeScreen() {
  const [isReportOpen, setIsReportOpen] = useState(false);

  return (
    <div className={styles.root}>
      <Header />

      <div className="Button">
        <Button onClick={() => setIsReportOpen(true)}>
          + Reportar Perigo
        </Button>
      </div>

      <Modal isOpen={isReportOpen} onClose={() => setIsReportOpen(false)}>
        <ReportForm onClose={() => setIsReportOpen(false)} />
      </Modal>
    </div>
  );
}






