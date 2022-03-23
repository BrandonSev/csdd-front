import React from 'react';
import './MediaLink.css';

function MediaLink() {
  return (
    <div>
      <h3>Liens Médias</h3>
      <div className="media-container">
        <a
          href="https://fr-fr.facebook.com/pages/category/Community/Echo-de-lEnclume-1712717015659831/"
          title="Echo de l Enclume"
          target="_blank"
        />
        <img className="image-media" src="#" alt="Echo de l'enclume" />
        <p>Echo de l enclume</p>

        <a
          href="https://twitter.com/les_compagnons?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
          title="Les Compagnons"
          target="_blank"
        />
        <img
          className="image-media"
          src="https://twitter.com/les_compagnons?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
          alt="Les Compagnons"
        />
        <p>Les compagnons</p>
      </div>
    </div>
  );
}

export default MediaLink;
