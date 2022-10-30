import { useContext, useEffect, useState } from 'react';
import { SpacexContext } from '../../contexts/SpacexContext';

export default function Search() {
  const { fetchCapsules } = useContext(SpacexContext);
  const [status, setStatus] = useState(false);
  const [originalLaunch, setOriginalLaunch] = useState(false);
  const [type, setType] = useState(false);
  const [searchField, setSearchField] = useState('');
  const resetFields = () => {
    setStatus(false);
    setType(false);
    setOriginalLaunch(false);
    setSearchField('');
  };
  const searchCapsules = () => {
    let query = '';
    if (status) {
      query = `status=${searchField}`;
    }
    if (originalLaunch) {
      query = `original_launch=${searchField}`;
    }
    if (type) {
      query = `type=${searchField}`;
    }
    // if (!searchField) {
    //   setStatus(false);
    //   setType(false);
    //   setOriginalLaunch(false);
    //   query = '';
    // }
    fetchCapsules(query);
  };
  useEffect(() => {
    fetchCapsules();
  }, [fetchCapsules]);

  return (
    <section className="search__component">
      <div className="filters">
        <input
          type="text"
          placeholder="Search Capsules..."
          className="search__input"
          value={searchField}
          onChange={(e) => setSearchField(e.target.value)}
        />
        <div className="filter__types">
          <label htmlFor="capsuleStatus">
            <input
              id="capsuleStatus"
              type="radio"
              name="filterType"
              checked={status}
              onChange={(e) => setStatus(e.target.checked)}
            />
            Status
          </label>
          <label htmlFor="capsuleLaunch">
            <input
              id="capsuleLaunch"
              type="radio"
              name="filterType"
              checked={originalLaunch}
              onChange={(e) => setOriginalLaunch(e.target.checked)}
            />
            Original Launch
          </label>
          <label htmlFor="capsuleType">
            <input
              id="capsuleType"
              type="radio"
              name="filterType"
              checked={type}
              onChange={(e) => setType(e.target.checked)}
            />
            Type
          </label>
          <button className="reset__button" onClick={resetFields}>
            Reset
          </button>
        </div>
      </div>
      <button className="search__button" onClick={searchCapsules}>
        Search
      </button>
    </section>
  );
}
