import { useSelector } from "react-redux"
import { selectToken, selectUserName } from "redux/selectors"

export const UserMenu = () => {

    const userName = useSelector(selectUserName);
    const token = useSelector(selectToken);

    const handleLogout = () =>{
        if (token){
        console.log('huy')}
    }

    return <div>
        <p>Welcome, {userName}!</p>
        <button type="button" onclick={handleLogout}>Logout</button>
    </div>
}