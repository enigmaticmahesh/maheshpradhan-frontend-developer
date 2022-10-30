import React, { useContext, useState } from 'react';
import { SpacexContext } from '../../contexts/SpacexContext';
import { PER_PAGE_RESULTS } from '../../utils/apis';
import CommonModal from '../CommonModal';
import Loader from '../Loader';
import Capsule from './Capsule';

export default function DataGrid() {
  const { pagedCapsules, page, setPage, capsules, loading } =
    useContext(SpacexContext);

  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(null);

  const handleModal = (capsuleData) => {
    setModalData(capsuleData);
    setShowModal(true);
  };

  const changePage = (pageNum = 0) => {
    // if (pageNum < 0) {
    //   return;
    // }

    // if (capsules.length < pageNum * PER_PAGE_RESULTS) {
    //   return;
    // }

    setPage(pageNum);
  };

  const disableNext = (page + 1) * PER_PAGE_RESULTS > capsules.length;

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      {pagedCapsules.length ? (
        <>
          <section className="datagrid__component">
            {pagedCapsules.map((result, index) => (
              <Capsule
                key={index}
                capsuleData={result}
                openModal={() => handleModal(result)}
              />
            ))}
          </section>
          <section className="pagination__section">
            <div
              className={page === 0 ? 'disabled' : null}
              onClick={() => changePage(page - 1)}
            >
              &lt;
            </div>
            <div
              className={page === 0 ? 'active' : null}
              onClick={() => changePage(0)}
            >
              1
            </div>
            {capsules.length > 10 ? (
              <div
                className={page === 1 ? 'active' : null}
                onClick={() => changePage(1)}
              >
                2
              </div>
            ) : null}
            <div
              className={disableNext ? 'disabled' : null}
              onClick={() => changePage(page + 1)}
            >
              &gt;
            </div>
          </section>
        </>
      ) : (
        <section className="text-center text-4xl uppercase drop-shadow-xl mb-4">
          No Data Found
        </section>
      )}
      <CommonModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        modalData={modalData}
      />
    </>
  );
}
