import styles from '../../styles/Modal.module.css';

const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? styles.modalDisplayBlock : styles.modalDisplayNone;

    return (
        <div className={showHideClassName} onClick={handleClose} style={{}}>
            <section className={styles.modalMain} onClick={e => e.stopPropagation()}>
                {children}
            </section>
        </div>
    );
};

export default Modal;
