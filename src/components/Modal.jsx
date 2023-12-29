import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

function Modal({ open, children, onClose }) {
  const dialog = useRef();

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close()
    }
  }, [open])


  return createPortal(
    // 'onClose' é um evento assim com onClick. Aqui ele está usando o prop 'onClose' que vai chamar a função 'handleStopRemovePlace' que está no App component, modificando assim o valor de open para 'false'
    <dialog className="modal" ref={dialog} onClose={onClose} >
      {open ? children : null}
    </dialog>,
    document.getElementById('modal')
  );
};

export default Modal;
