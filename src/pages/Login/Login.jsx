import { useDispatch } from "react-redux";
import { userLogin } from "redux/auth/auth.thunk";

export const Login =()=> {

    const dispatch = useDispatch()

    const handleLogin =(event) => {
        event.preventDefault();
        const {email, password} = event.target;

        const user = {
            email: email.value,
            password: password.value
        }
        
        dispatch(userLogin(user))
    }

    return <form onSubmit={handleLogin}>
    <label htmlFor="email">Email:
        <input type="email" name="email"/>
    </label>
    <label htmlFor="password">Password:
        <input type="password" name="password"/>
    </label>
    <button type="submit">Login</button>
</form>
}