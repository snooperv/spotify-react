import "../css/search.css";

function Search() {
  return (
    <div className="main__search">
      <h2 className="main-search-h2">Результаты поиска</h2>
      <div className="main__songs">
        <div className="songRow">
          <img className="songRow__album" src="img/1.jpg" alt="" />
          <div className="songRow__info">
            <h1 className="songRow__info-h1">Bleed It Out</h1>
            <p className="songRow__info-p">Linkin Park - Minutes to Midnight</p>
          </div>
        </div>
        <div className="songRow">
          <img className="songRow__album" src="img/2.jpg" alt="" />
          <div className="songRow__info">
            <h1 className="songRow__info-h1">By the Way</h1>
            <p className="songRow__info-p">Red Hot Chili - By the Way</p>
          </div>
        </div>
        <div className="songRow">
          <img className="songRow__album" src="img/3.jpg" alt="" />
          <div className="songRow__info">
            <h1 className="songRow__info-h1">Monster</h1>
            <p className="songRow__info-p">Skillet - Awake (Deluxe Edition)</p>
          </div>
        </div>
        <div className="songRow">
          <img className="songRow__album" src="img/4.jpg" alt="" />
          <div className="songRow__info">
            <h1 className="songRow__info-h1">Take It Out On Me</h1>
            <p className="songRow__info-p">
              Thousand Foot Krutch - Welcome To The Masquerade
            </p>
          </div>
        </div>
        <div className="songRow">
          <img className="songRow__album" src="img/5.jpg" alt="" />
          <div className="songRow__info">
            <h1 className="songRow__info-h1">Born For Greatness</h1>
            <p className="songRow__info-p">Papa Roach - Crooked Teeth (Deluxe)</p>
          </div>
        </div>
        <div className="songRow">
          <img className="songRow__album" src="img/6.jpg" alt="" />
          <div className="songRow__info">
            <h1 className="songRow__info-h1">Same Old War</h1>
            <p className="songRow__info-p">Our Last Nught - Oak Island</p>
          </div>
        </div>
        <div className="songRow">
          <img className="songRow__album" src="img/7.jpg" alt="" />
          <div className="songRow__info">
            <h1 className="songRow__info-h1">Prayer Of The Refugee</h1>
            <p className="songRow__info-p">
              Rise Against - The Sufferer & The Witness
            </p>
          </div>
        </div>
        <div className="songRow">
          <img className="songRow__album" src="img/8.jpg" alt="" />
          <div className="songRow__info">
            <h1 className="songRow__info-h1">What I've Done</h1>
            <p className="songRow__info-p">Linkin Park - Minutes to Midnight</p>
          </div>
        </div>
        <div className="songRow">
          <img className="songRow__album" src="img/9.jpg" alt="" />
          <div className="songRow__info">
            <h1 className="songRow__info-h1">Can't Stop</h1>
            <p className="songRow__info-p">Red Hot Chili Peppers - By the Way</p>
          </div>
        </div>
        <div className="songRow">
          <img className="songRow__album" src="img/10.jpg" alt="" />
          <div className="songRow__info">
            <h1 className="songRow__info-h1">Feel Invincible</h1>
            <p className="songRow__info-p">Skillet - Unleashed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
