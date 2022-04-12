import React from 'react';
import './MediaLink.css';
import info from '../../assets/info.pdf';

function MediaLink() {
  React.useEffect(() => {
    const script = document.createElement('script');
    script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
    document.getElementsByClassName('lists')[0].appendChild(script);
  }, []);

  return (
    <div>
      <h3>Liens Médias</h3>
      <div className="media-container">
        <div className="iframeMedias">
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FEcho-de-lEnclume-1712717015659831"
            width="100%"
            frameborder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>

          <div className="twitter-container">
            <div className="lists">
              <a
                class="twitter-timeline"
                data-width="400"
                data-height="100"
                data-theme="light"
                href="https://twitter.com/les_compagnons?ref_src=twsrc%5Etfw"
              >
                Tweets by les_compagnons
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MediaLink;
