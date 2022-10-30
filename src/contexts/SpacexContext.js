import React, { createContext, useState, useEffect, useCallback } from 'react';
import { ALL_CAPSULES, PER_PAGE_RESULTS } from '../utils/apis';

export const SpacexContext = createContext(null);

export default function SpacexContextProvider({ children }) {
  const [capsules, setCapsules] = useState([]);
  const [pagedCapsules, setPagedCapsules] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchCapsules = useCallback(async (query = 'all') => {
    setLoading(true);
    try {
      const params = query === 'all' ? '' : `?${query}`;
      const data = await fetch(`${ALL_CAPSULES}${params}`);
      const results = await data.json();
      setCapsules(results);
    } catch (error) {
      console.log('Error while fetching Spacex Data');
      console.log({ error });
    } finally {
      setLoading(false);
    }
  }, []);
  useEffect(() => {
    console.log({ capsules });
    setPagedCapsules(
      capsules.slice(page * PER_PAGE_RESULTS, (page + 1) * PER_PAGE_RESULTS)
    );
  }, [page, capsules]);

  const spaceData = {
    pagedCapsules,
    capsules,
    fetchCapsules,
    page,
    setPage,
    loading,
  };
  return (
    <SpacexContext.Provider value={spaceData}>
      {children}
    </SpacexContext.Provider>
  );
}
