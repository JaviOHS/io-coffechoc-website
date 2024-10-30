import { useState } from 'react';

const usePagination = (totalItems, itemsPerPage) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= totalPages ? 0 : prevIndex + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? totalPages - 1 : prevIndex - 1
    );
  };

  const setPage = (index) => {
    if (index >= 0 && index < totalPages) {
      setCurrentIndex(index);
    }
  };

  return {
    currentIndex,
    next,
    prev,
    setPage,
    totalPages,
  };
};

export default usePagination;
