import "../css/first.css";

function First() {
  return (
    <div>
      <div className="main__info">
        <img className="main__info-img" alt="Микс дня" src="img/mix_day.jpg" />
        <div className="main__infoText">
          <strong>ПЛЕЙЛИСТ</strong>
          <h2 className="main__infoText-h2">Микс дня</h2>
          <p className="main__infoText-p">
            Linkin Park, Red Hot Chili Peppers, Skillet и не только
          </p>
        </div>
      </div>
      <div className="main__songs">
        <div className="main__icons">
          <svg
            className="svgIcon main__shuffle main__svgIcon"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"></path>
          </svg>
          <svg
            role="img"
            height="32"
            width="32"
            viewBox="0 0 24 24"
            className="svgIcon main__svgIcon MuiSvgIcon-fontSizeLarge"
          >
            <path d="M5.21 1.57a6.757 6.757 0 016.708 1.545.124.124 0 00.165 0 6.741 6.741 0 015.715-1.78l.004.001a6.802 6.802 0 015.571 5.376v.003a6.689 6.689 0 01-1.49 5.655l-7.954 9.48a2.518 2.518 0 01-3.857 0L2.12 12.37A6.683 6.683 0 01.627 6.714 6.757 6.757 0 015.21 1.57zm3.12 1.803a4.757 4.757 0 00-5.74 3.725l-.001.002a4.684 4.684 0 001.049 3.969l.009.01 7.958 9.485a.518.518 0 00.79 0l7.968-9.495a4.688 4.688 0 001.049-3.965 4.803 4.803 0 00-3.931-3.794 4.74 4.74 0 00-4.023 1.256l-.008.008a2.123 2.123 0 01-2.9 0l-.007-.007a4.757 4.757 0 00-2.214-1.194z"></path>
          </svg>
          <svg
            role="img"
            height="32"
            width="32"
            viewBox="0 0 24 24"
            className="svgIcon main__svgIcon"
          >
            <path d="M4.5 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm15 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm-7.5 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
          </svg>
        </div>
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

export default First;
