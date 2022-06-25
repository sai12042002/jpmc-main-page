import {DiApple,DiJsBadge} from 'react-icons/di';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './footer.css';
function Footer(){
    return (
        <div className="footer">
          <div className="socialMedia">
            <a href="https://www.instagram.com/stjudesindia/">
            <InstagramIcon />
            </a>
            <a href="https://twitter.com/StJudeChildCare">
            <TwitterIcon />
            </a>
            <a href="https://www.facebook.com/StJudesIndia">
            <FacebookIcon /> 
            </a>
            <a href="">
            <LinkedInIcon />
            </a>
             <a href="https://www.youtube.com/user/StJudechildcare">
                <YouTubeIcon/>
             </a>
          </div>
          <p> &copy; 2022 startertemplate.com</p>
        </div>
      );
}
export default Footer;