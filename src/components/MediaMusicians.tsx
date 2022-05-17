import "../css/media.css";

function Media() {
  return (
    <div className="main__media">
      <h1 className="main__media-header">Исполнители</h1>
      <div className="main__media-cards">
        <div className="main__media-card">
          <img src="img/11.jpg" alt="card image" className="card__img" />
          <div className="card__singer">Red Hot Chili Peppers</div>
          <div className="card__type">Исполнитель</div>
        </div>
        <div className="main__media-card">
          <img src="img/12.jpg" alt="card image" className="card__img" />
          <div className="card__singer">Звери</div>
          <div className="card__type">Исполнитель</div>
        </div>
        <div className="main__media-card">
          <img src="img/13.jpg" alt="card image" className="card__img" />
          <div className="card__singer">Король и Шут</div>
          <div className="card__type">Исполнитель</div>
        </div>
        <div className="main__media-card">
          <img src="img/14.jpg" alt="card image" className="card__img" />
          <div className="card__singer">Ляпис Трубецкой</div>
          <div className="card__type">Исполнитель</div>
        </div>
        <div className="main__media-card">
          <img src="img/15.jpg" alt="card image" className="card__img" />
          <div className="card__singer">Led Zeppelin</div>
          <div className="card__type">Исполнитель</div>
        </div>
        <div className="main__media-card">
          <img src="img/16.jpg" alt="card image" className="card__img" />
          <div className="card__singer">Twenty One Pilots</div>
          <div className="card__type">Исполнитель</div>
        </div>
        <div className="main__media-card">
          <img src="img/17.jpg" alt="card image" className="card__img" />
          <div className="card__singer">Skillet</div>
          <div className="card__type">Исполнитель</div>
        </div>
        <div className="main__media-card">
          <img src="img/18.jpg" alt="card image" className="card__img" />
          <div className="card__singer">Papa Roach</div>
          <div className="card__type">Исполнитель</div>
        </div>
        <div className="main__media-card">
          <img src="img/19.jpg" alt="card image" className="card__img" />
          <div className="card__singer">Imagine Dragons</div>
          <div className="card__type">Исполнитель</div>
        </div>
        <div className="main__media-card">
          <div className="test">
          <img src="img/20.jpg" alt="card image" className="card__img" />
          </div>
          <div className="card__singer">Linkin Park</div>
          <div className="card__type">Исполнитель</div>
        </div>
      </div>
    </div>
  );
}

export default Media;
