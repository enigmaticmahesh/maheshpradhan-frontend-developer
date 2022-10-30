import React from 'react';
import Header from '../Header';
import assets from '../../assets/images';

export default function Banner() {
  return (
    <>
      <Header />
      <section
        className="banner__container"
        style={{ backgroundImage: `url(${assets.banner1})` }}
      >
        <div className="current__project">
          <h4>Recent Launch</h4>
          <h2>Starlink Mission</h2>
          <button>Rewatch</button>
        </div>
      </section>
    </>
  );
}
