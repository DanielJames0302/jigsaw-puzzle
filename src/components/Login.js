const Login = ({setName}) => {
    return (  
        <div className="Login">
            <input 
                placeholder="enter your name"
                onChange={(event)=>setName(event.target.value)}
            ></input>
        </div>
    );
}
export default Login;