import styles from './modal.module.css';

export default function Modal ({isOpen, isClosed, children}) {
    if (!isOpen) return null;

    return 
    <div className = {styles.overlay}>
        <div className = {styles.modalBox}>

        </div>
    </div>




};