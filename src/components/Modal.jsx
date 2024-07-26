import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

function Modal({ open, children, onClose }) {
  const dialog = useRef();

  useEffect(() => {
    /* Control opening and closing of this model with a prop from App
    *  An alternative would to use forwardRef and the imperative hooks
    * */
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]); // remember to always pass dependencies to use effect

  return createPortal(
    <dialog className="modal" ref={dialog} onClose={onClose}> {/*onClose enable modal to close using ecape key*/}
      {open ? children : null} {/* only show delete confirmation on the modal when open is true */}
    </dialog>,
    document.getElementById("modal")
  );
}

export default Modal;
