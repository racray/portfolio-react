import "./Topbar.scss";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">x-rayed;</a>
                    <div className="itemContainer">
                        <PersonOutlineIcon className="icon"/>
                        <span>+91-7057690637</span>
                        <MailOutlineIcon className="icon"/>
                        <span>rayedkhan007@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>{setMenuOpen(!menuOpen)}}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>


                    </div>
                </div>
            </div>
        </div>
    )
}
