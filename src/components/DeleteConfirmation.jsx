import { useEffect } from "react";

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  useEffect(() => {
    console.log("SET TIMER");
    const timer = setTimeout(() => {
      onConfirm();
    }, 3000);
    // clear timeout with a cleanup function provide as a return function in useEffect
    // without clearing the timeout, it will keep running having undesired effects.
    // In this case it the selected place is deleted when timeout even after clicking no
    return () => {
      console.log("Cleaning up timer");
      clearTimeout(timer);
    };
  }, [onConfirm]);

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
    </div>
  );
}
