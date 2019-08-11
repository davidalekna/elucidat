import React, { createContext, useState, useContext, useEffect } from 'react';

const ToastContext = createContext({
  toast: false,
  setToast: () => {},
});

export function ToastsProvider({ children, autoClose = 3500 }) {
  const [toast, setToast] = useState(false);

  useEffect(() => {
    if (toast) {
      setTimeout(() => setToast(false), autoClose);
    }
  }, [toast, autoClose]);

  return (
    <ToastContext.Provider value={{ toast, setToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export function useToastContext() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error(
      `Toast compound components cannot be rendered outside the Toast component`,
    );
  }
  return context;
}

export * from './styles';
