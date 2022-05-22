import { useRef, useState, useEffect } from 'react';
import { loginUser} from "../actions/users";
import {useDispatch, useSelector} from 'react-redux'
import { useHistory  } from "react-router-dom";

const Login = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const userRef = useRef();
    const errRef = useRef();

    const {listpage} = useSelector((state)=>state.users)

    const [personalNumber, setPersonalNumber] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [personalNumber, password])

    const handleSubmit = async (e) => {

        e.preventDefault();
        console.log(JSON.stringify({ personalNumber, password }));

        dispatch(loginUser({ personalNumber, password  }))
        .then(async () => {
            setPersonalNumber('');
            setPassword('');
            setSuccess(true);
            history.push('/tickets') ;}
            )
        .catch( (err) => {
            console.log(err.response.data)
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response.data.statusCode === 404) {
                setErrMsg('Missing/Wrong on Username/Password');
            } else if (err.response.data.statusCode  === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
            history.push('/')
        })
    }

    return (
        <>        
        <section>
         <h1>Sign In</h1>
          <p ref={errRef} className={errMsg ? "alert alert-danger" : "offscreen"} aria-live="assertive">{errMsg}</p>
        <form onSubmit={handleSubmit}>
        <label htmlFor="personalNumber">Personal Number:</label>
        <input
        type="text"
        id="personalNumber"
        ref={userRef}
        autoComplete="off"
        onChange={(e) => setPersonalNumber(e.target.value)}
        value={personalNumber}
        required
        />

        <label htmlFor="password">Password:</label>
        <input
        type="password"
        id="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        required
        />
        <button>Sign In</button>
        </form>
        <p>
        Need an Account?<br />
        <span className="line">
    {/*put router link here*/}
    <a href="/register">Sign Up</a>
    </span>
    </p>
    </section>
    </>
    )
}

export default Login
