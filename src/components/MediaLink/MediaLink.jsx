import React from 'react';
import './MediaLink.css';

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
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FEcho-de-lEnclume-1712717015659831&tabs=timeline&width=400&height=90&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            width="400"
            height="90"
            style={{ border: 'none', overflow: 'hidden', width: '100%' }}
            scrolling="no"
            frameborder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>

          <div className="twitter-container">
            <div className="lists">
              <a
                class="twitter-timeline"
                data-width="400"
                data-height="200"
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
