'use client';

import { Toaster } from 'react-hot-toast';

interface ToastProviderProps {}

const ToastProvider: React.FC<ToastProviderProps> = ({}) => {
  return <Toaster />;
};

export default ToastProvider;
