import React from "react";
import useEscapeKey from "../../hooks/use-escape-key.hook";

export const ToastContext = React.createContext();
function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  useEscapeKey(setToasts, []);
  const createToast = (message, variant) => {
    setToasts([...toasts, { id: crypto.randomUUID(), variant, message }]);
  };

  const dismissToast = (id) => {
    const nextToasts = toasts.filter((toast) => {
      return toast.id !== id;
    });
    setToasts(nextToasts);
  };
  return (
    <ToastContext.Provider value={{ toasts, createToast, dismissToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
