import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import './App.css';
import React,{useState} from 'react';
import {useTranslation} from 'react-i18next';
// text values
const languages=[
  {value:'',text:"Options"},
  {value:'en',text:"English"},
  {value:'hi',text:"Hindi"},
  {value:'bn',text:"Bengali"},
  {value:'ar',text:"Arabic"},
  {value:'kn',text:"Kannada"},
  {value:'te',text:"Telugu"}
]
function App() {
  const {t}=useTranslation();
  const [lang,setLang]=useState('');

  const handleChange = e => { 
    setLang(e.target.value);
    let loc = "http://localhost:3000/";
    window.location.replace(loc + "?lng=" + e.target.value);
}
  return (

   <div className="App">
   
            <label>{t('Choose')}</label>
  
            <select value={lang} onChange={handleChange}>
                {languages.map(item => {
                    return (<option key={item.value} 
                    value={item.value}>{item.text}</option>);
                })}
            </select>
    <Header/>
    <Footer />
   </div>

  );
}
export default App;