import { useDispatch } from "react-redux";
import { userRegister } from "redux/auth/auth.thunk";

export const Register = () => {

    const dispatch = useDispatch()
        
    const handleRegister =(event) => {
        event.preventDefault();
        const {login, email, password} = event.target;

        const user = {
            name: login.value,
            email: email.value,
            password: password.value
        }
        
        dispatch(userRegister(user))
    }

    return <form onSubmit={handleRegister}>
        <label htmlFor="login">Login:
            <input type="text" name="login"/>
        </label>
        <label htmlFor="email">Email:
            <input type="email" name="email"/>
        </label>
        <label htmlFor="password">Password:
            <input type="password" name="password"/>
        </label>
        <button type="submit">Register</button>
    </form>
}