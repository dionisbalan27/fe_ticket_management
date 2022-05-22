import { useRef, useState, useEffect } from "react";
import { registerUser} from "../actions/users";
import {useDispatch} from 'react-redux'
import { useHistory  } from "react-router-dom";


const Register = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const userRef = useRef();
    const errRef = useRef();

    const [name, setName] = useState('');
    const [personalNumber, setPersonalNumber] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])


    const handleSubmit = async (e) => {
        e.preventDefault();
        // if button enabled with JS hack
        console.log(JSON.stringify({ name, personalNumber, email, password }));
        try {
            await dispatch(registerUser({ name, personalNumber, email, password }))
            setSuccess(true);
            //clear state and controlled inputs
            setName('');
            setPassword('');
            setPersonalNumber('');
            setEmail('');
            history.push('/login') ;

        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 404) {
                setErrMsg('Username or password not found');
            } else {
                setErrMsg('Registration Failed')
            }
            errRef.current.focus();
        }
    }

    return (
        <>
        {success ? (
            <section>
            <h1>Success!</h1>
            <p>
            <a href="#">Sign In</a>
            </p>
            </section>
            ) : (
            <section>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>

            <label htmlFor="username">
            Username:
            </label>
            <input
            type="text"
            id="username"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
            />

            <label htmlFor="personalNumber">
            Personal Number:
            </label>
            <input
            type="text"
            id="personalNumber"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setPersonalNumber(e.target.value)}
            value={personalNumber}
            required
            />

            <label htmlFor="email">
            Email:
            </label>
            <input
            type="text"
            id="email"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            />

            <label htmlFor="password">
            Password:
            </label>
            <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            />

            <button>Sign Up</button>
            </form>
            <p>
            Already registered?<br />
            <span className="line">
        {/*put router link here*/}
        <a href="/">Sign In</a>
        </span>
        </p>
        </section>
        )}
            </>
            )
        }

        export default Register
