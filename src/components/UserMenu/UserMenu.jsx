import { useDispatch, useSelector } from "react-redux"
import { userLogout } from "redux/auth/auth.thunk";
import { selectUserName } from "redux/selectors"

export const UserMenu = () => {

    const userName = useSelector(selectUserName);
    const dispatch = useDispatch();

    const handleLogout = () =>{
        dispatch(userLogout())
    }

    return <div>
        <p>Welcome, {userName}!</p>
        <button type="button" onClick={handleLogout}>Logout</button>
    </div>
}