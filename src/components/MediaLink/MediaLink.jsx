import React from 'react';
import './MediaLink.css';
import info from '../../assets/info.pdf';

function MediaLink() {
  return (
    <div>
      <h3>Liens Médias</h3>
      <div className="media-container">
        <div className="iframeMedias">
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https://fr-fr.facebook.com/pages/category/Community/Echo-de-lEnclume-1712717015659831&width=200&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            height="150"
            width="100%"
            style={{ border: 'none', overflow: 'hidden' }}
            scrolling="no"
            frameBorder="0"
            allowFullScreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>

          <a
            href="https://twitter.com/les_compagnons?ref_src=twsrc%5Etfw"
            class="twitter-follow-button"
            data-show-count="false"
            height="150"
          >
            Follow @les_compagnons
          </a>
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charset="utf-8"
          ></script>
        </div>
      </div>
    </div>
  );
}

export default MediaLink;
