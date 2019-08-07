import { useState } from 'react';

const useLoading = (loading = false, err = false, message = '') => {
  const [error, setError] = useState(err);
  const [errorMessage, setErrorMessage] = useState(message);
  const [isLoading, setLoading] = useState(loading);

  return {
    error,
    errorMessage,
    isLoading,
    setError,
    setErrorMessage,
    setLoading,
  };
};

export default useLoading;
