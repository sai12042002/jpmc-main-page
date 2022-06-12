import {FaInstagram,FaFacebook} from 'react-icons/fa'
function Footer(){
    return(
        <>
        <footer className="bg-dark text-white text-center pb-5">
            <div>
                <span className='m-1'><FaInstagram /></span>
                <span className='m-1'><FaFacebook /></span>
            </div>
            <hr className='container' />
            <div>
                <span>@Poorna pvt limited</span>
            </div>
        </footer>
        </>
    )
}
export default Footer;