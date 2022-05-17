import "../css/media.css";

function Media() {
  return (
    <div className="main__media">
      <h1 className="main__media-header">Альбомы</h1>
      <div className="main__media-cards">
        <div className="main__media-card">
          <img src="img/21.jpg" alt="card image" className="card__img-album" />
          <div className="card__singer">Serotonin Dreams</div>
          <div className="card__type">BoyWithUke</div>
        </div>
        <div className="main__media-card">
          <img src="img/22.jpg" alt="card image" className="card__img-album" />
          <div className="card__singer">WHY NOT</div>
          <div className="card__type">Deyaz</div>
        </div>
        <div className="main__media-card">
          <img src="img/23.jpg" alt="card image" className="card__img-album" />
          <div className="card__singer">Deyaz</div>
          <div className="card__type">Ella Mai</div>
        </div>
        <div className="main__media-card">
          <img src="img/24.jpg" alt="card image" className="card__img-album" />
          <div className="card__singer">Un Verano Sin Ti</div>
          <div className="card__type">Bad Bunny</div>
        </div>
        <div className="main__media-card">
          <img src="img/25.jpg" alt="card image" className="card__img-album" />
          <div className="card__singer">How To Let Go</div>
          <div className="card__type">Sigrid</div>
        </div>
        <div className="main__media-card">
          <img src="img/26.jpg" alt="card image" className="card__img-album" />
          <div className="card__singer">WE</div>
          <div className="card__type">Arcade Fire</div>
        </div>
        <div className="main__media-card">
          <img src="img/27.jpg" alt="card image" className="card__img-album" />
          <div className="card__singer">Locked Out</div>
          <div className="card__type">S-X, KSI</div>
        </div>
        <div className="main__media-card">
          <img src="img/28.jpg" alt="card image" className="card__img-album" />
          <div className="card__singer">Reasonable</div>
          <div className="card__type">AJ Tracey</div>
        </div>
        <div className="main__media-card">
          <img src="img/29.jpg" alt="card image" className="card__img-album" />
          <div className="card__singer">Something to Someone</div>
          <div className="card__type">Dermot Kennedy</div>
        </div>
        <div className="main__media-card">
          <div className="test">
          <img src="img/30.jpg" alt="card image" className="card__img-album" />
          </div>
          <div className="card__singer">ALPHA PLACE</div>
          <div className="card__type">Knucks</div>
        </div>
        <div className="main__media-card">
          <div className="test">
          <img src="img/31.jpg" alt="card image" className="card__img-album" />
          </div>
          <div className="card__singer">This Love (Taylor’s Version)</div>
          <div className="card__type">Taylor Swift</div>
        </div>
        <div className="main__media-card">
          <div className="test">
          <img src="img/32.jpg" alt="card image" className="card__img-album" />
          </div>
          <div className="card__singer">Come Home The Kids Miss You</div>
          <div className="card__type">Jack Harlow</div>
        </div>
      </div>
    </div>
  );
}

export default Media;
