import styles from './modal.module.css';
import { ReactNode } from 'react';
import { Button } from '@/components/button/button';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

export function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modalBox}>
        <div className={styles.modalContent}>
          {children}
        </div>

      </div>
    </div>
  );

};