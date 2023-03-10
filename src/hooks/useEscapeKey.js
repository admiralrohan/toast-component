import React from 'react';

function useEscapeKey(callback) {
  React.useEffect(() => {
    const handleRemoveToasts = (e) => {
      if (e.key !== 'Escape') return;

      callback(e);
    };

    document.addEventListener('keyup', handleRemoveToasts);

    return () => {
      document.removeEventListener('keyup', handleRemoveToasts);
    };
  }, []);
}

export default useEscapeKey;
