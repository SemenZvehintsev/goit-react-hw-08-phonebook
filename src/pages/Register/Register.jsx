export const Register = () => {
    
    const handleRegister =(event) => {
        event.preventDefault();
        console.log(event.target)
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