import './loader.css';
function Loader(){
    return(
        <>
        <div className='overlay'> 
        <div className="position-absolute bg-white border border-2 text-center p-3 border-gray w-25 mx-auto"><div class="lds-dual-ring"></div>
        <div>Loading</div>
        </div>
        </div>
        </>
    )
}
export default Loader;