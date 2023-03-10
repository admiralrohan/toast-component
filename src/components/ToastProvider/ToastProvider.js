import React from 'react';
import useEscapeKey from '../../hooks/useEscapeKey';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const handleDismiss = (id) => {
    const newToasts = toasts.filter((toast) => toast.id !== id);
    setToasts(newToasts);
  };
  const createToast = (message, variant) => {
    const newToast = { id: crypto.randomUUID(), message, variant };
    setToasts([...toasts, newToast]);
  };

  useEscapeKey(() => {
    setToasts([]);
  });

  return (
    <ToastContext.Provider
      value={{
        toasts,
        handleDismiss,
        createToast,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
