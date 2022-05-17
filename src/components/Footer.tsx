import "../css/footer.css";

function Footer() {
  let volume_draggable = {
    marginLeft: "75%",
  };
  let volume_progress = {
    width: "75%",
  };
  let player_draggable = {
    marginLeft: "34%",
  };
  let player_progress = {
    width: "34%",
  };

  return (
    <div className="footer">
      <div className="footer__left">
        <img src="img/1.jpg" className="footer__albumLogo" />
        <div className="footer__songInfo">
          <h4 className="footer__songInfo-h4">Bleed It Out</h4>
          <p className="footer__songInfo-p">Linkin Park</p>
        </div>
      </div>
      <div className="footer__center">
        <div className="footer__playing">
          <svg
            role="img"
            height="16"
            width="16"
            viewBox="0 0 16 16"
            className="svgIcon footer__icon"
          >
            <path d="M13.151.922a.75.75 0 10-1.06 1.06L13.109 3H11.16a3.75 3.75 0 00-2.873 1.34l-6.173 7.356A2.25 2.25 0 01.39 12.5H0V14h.391a3.75 3.75 0 002.873-1.34l6.173-7.356a2.25 2.25 0 011.724-.804h1.947l-1.017 1.018a.75.75 0 001.06 1.06L15.98 3.75 13.15.922zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.89 5.277l-.979 1.167-1.796-2.14A2.25 2.25 0 00.39 3.5z"></path>
            <path d="M7.5 10.723l.98-1.167.957 1.14a2.25 2.25 0 001.724.804h1.947l-1.017-1.018a.75.75 0 111.06-1.06l2.829 2.828-2.829 2.828a.75.75 0 11-1.06-1.06L13.109 13H11.16a3.75 3.75 0 01-2.873-1.34l-.787-.938z"></path>
          </svg>
          <svg
            role="img"
            height="16"
            width="16"
            viewBox="0 0 16 16"
            className="svgIcon footer__icon"
          >
            <path d="M3.3 1a.7.7 0 01.7.7v5.15l9.95-5.744a.7.7 0 011.05.606v12.575a.7.7 0 01-1.05.607L4 9.149V14.3a.7.7 0 01-.7.7H1.7a.7.7 0 01-.7-.7V1.7a.7.7 0 01.7-.7h1.6z"></path>
          </svg>
          <svg
            role="img"
            height="16"
            width="16"
            viewBox="0 0 16 16"
            className="footer__btn-play"
          >
            <path d="M3 1.713a.7.7 0 011.05-.607l10.89 6.288a.7.7 0 010 1.212L4.05 14.894A.7.7 0 013 14.288V1.713z"></path>
          </svg>
          <svg
            role="img"
            height="16"
            width="16"
            viewBox="0 0 16 16"
            className="svgIcon footer__icon"
          >
            <path d="M12.7 1a.7.7 0 00-.7.7v5.15L2.05 1.107A.7.7 0 001 1.712v12.575a.7.7 0 001.05.607L12 9.149V14.3a.7.7 0 00.7.7h1.6a.7.7 0 00.7-.7V1.7a.7.7 0 00-.7-.7h-1.6z"></path>
          </svg>
          <svg
            role="img"
            height="16"
            width="16"
            viewBox="0 0 16 16"
            className="svgIcon footer__icon"
          >
            <path d="M0 4.75A3.75 3.75 0 013.75 1h8.5A3.75 3.75 0 0116 4.75v5a3.75 3.75 0 01-3.75 3.75H9.81l1.018 1.018a.75.75 0 11-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 111.06 1.06L9.811 12h2.439a2.25 2.25 0 002.25-2.25v-5a2.25 2.25 0 00-2.25-2.25h-8.5A2.25 2.25 0 001.5 4.75v5A2.25 2.25 0 003.75 12H5v1.5H3.75A3.75 3.75 0 010 9.75v-5z"></path>
          </svg>
        </div>
        <div className="footer__bar">
          <span className="footer__bar-span">1:06</span>
          <div className="audio-player-container" id="player">
            <div className="audio-progress">
              <div style={player_draggable} className="draggable">
                <div className="audio-progress-handle"></div>
              </div>
              <div style={player_progress} className="audio-progress-bar"></div>
            </div>
          </div>
          <span className="footer__bar-span">2:46</span>
        </div>
      </div>
      <div className="footer__right">
        <div className="footer__container">
          <div className="footer__item">
            <svg
              className="svgIcon"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M4 10h12v2H4zm0-4h12v2H4zm0 8h8v2H4zm10 0v6l5-3z"></path>
            </svg>
          </div>
          <div className="footer__item">
            <svg
              className="svgIcon"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z"></path>
            </svg>
          </div>
          <div className="footer__volume" id="volume">
            <div className="audio-progress">
              <div style={volume_draggable} className="draggable">
                <div className="audio-progress-handle"></div>
              </div>
              <div style={volume_progress} className="audio-progress-bar"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
