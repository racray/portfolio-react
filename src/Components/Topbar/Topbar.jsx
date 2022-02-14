import "./Topbar.scss";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from '@mui/icons-material/GitHub';
export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            rayed-x;
          </a>
          <div className="itemContainer">
            <WhatsAppIcon className="icon" />
            <span className="itemNumber">+91-7057690637</span>
            <MailOutlineIcon className="icon" />
            <span>rayedkhan007@gmail.com</span>
            <GitHubIcon className="icon"/>
            <span><a href="https://github.com/racray" target="_blank">https://github.com/racray</a></span>
          </div>
        </div>
        <div className="right">
          <div
            className="hamburger"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
