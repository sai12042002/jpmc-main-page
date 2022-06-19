import { useSelector } from "react-redux";
import './userdashboard.css'
function UserDashBoard(){
    let {userObj}=useSelector((state)=>state.userData)
    return(
        <>
        <div className="text-center">
            <h2>User Profile</h2>
            <hr />
            <div className="mt-2">
            <img src={userObj.photo} alt="" className="profile-pic" />
            <div className="username">
                Username : {userObj.username}
            </div>
            <div className="email">
                Email : {userObj.email} 
            </div>
            </div>
        </div>
        </>
    )
}
export default UserDashBoard;