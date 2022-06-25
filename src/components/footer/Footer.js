import {DiApple,DiJsBadge} from 'react-icons/di';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './footer.css';
import React,{useState} from 'react';
import {useTranslation} from 'react-i18next';
const languages=[
  {value:'',text:"Options"},
  {value:'en',text:"English"},
  {value:'hi',text:"Hindi"},
  {value:'bn',text:"Bengali"},
  {value:'ar',text:"Arabic"},
  {value:'kn',text:"Kannada"},
  {value:'te',text:"Telugu"}
]

function Footer(){
  const {t}=useTranslation();
  const [lang,setLang]=useState('');

  const handleChange = e => { 
    setLang(e.target.value);
    let loc = "http://localhost:3000/";
    window.location.replace(loc + "?lng=" + e.target.value);
  }

    return (
        <div className="footer">
          <div className="socialMedia w-100 d-flex justify-content-center">
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
            {/* langauage selection */}
            <div className='language float-end m-3 text-warning'>
                <label className='m-3'>{t('Choose')}</label>
                <select value={lang} onChange={handleChange}>
                    {languages.map(item => {
                        return (<option key={item.value} 
                        value={item.value}>{item.text}</option>);
                    })}
                </select>
            </div>

          </div>
          <p> &copy; 2022 startertemplate.com</p>

        </div>
      );
}
export default Footer;