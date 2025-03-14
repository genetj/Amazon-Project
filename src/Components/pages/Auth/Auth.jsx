import React, { useState,useContext } from 'react'
import classes from "./Signup.module.css";
import { Link, useNavigate, useLocation} from 'react-router-dom';
import { auth } from '../../../Utility/firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { DataContext } from '../../DataProvider/DataProvider';
import {ClipLoader} from "react-spinners";
import { Type } from '../../../Utility/action.type';

function Auth() {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState("");
  const [loading, setLoading] = useState({
    signIn:false,
    signUp:false,
  })
// console.log(password,email);

  const{state, dispatch}=useContext(DataContext)
  const{user}= state
  const navigate = useNavigate()
  const navStateData = useLocation();
  console.log(navStateData);

// console.log(user);

const authHandler = async(e)=>{
  e.preventDefault();
  console.log(e.target.name);
  if(e.target.name == "signin"){
    setLoading({...loading, signIn:true})
    signInWithEmailAndPassword(auth,email,password)
    .then((userInfo)=>{
      // console.log(userInfo);
      dispatch({ type: Type.SET_USER, user: userInfo.user, });
      setLoading({...loading, signIn:false});
      navigate(navStateData?.state?.redirect || "/");
    })

    .catch((err)=>{
      // console.log(err);
      setError(err.message);
      setLoading({...loading,signIn:false});
    })

  }else {
        setLoading({...loading, signUp:true})
        createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo)=>{
        // console.log(userInfo);
        dispatch({ type:Type.SET_USER, user:userInfo.user,});
        setLoading({...loading, signUp:false});
        navigate(navStateData?.state?.redirect || "/");
      })

      .catch((err)=>{
        // console.log(err);
        setError(err.message)
        setLoading({...loading, signUp:false})
    });
  }
};
// console.log(password, email);

  return (
    <section className={classes.login}>

            <Link to="/">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/AMAZON.svg/640px-AMAZON.svg.png"
                alt=""
              />
            </Link>

            {/* forms */}

      <div className={classes.login__container}>
        <h1> Sign In</h1>
        {navStateData?.state?.msg && (
          <small 
          style={{
              padding:"5px",
              textAlign: "center",
              color: "red",
              fontWeight: "bold",
          }}>
              {navStateData?.state?.msg}
          </small>
        )}
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
            />
          </div>
          <button
            type="submit"
            onClick={authHandler}
            name="signin"
            className={classes.login__signInButton}
          >
            {loading.signIn ? (
              <ClipLoader color="#000" size={15}></ClipLoader>
            ) : (
              " Sign In"
            )}
          </button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of use and
          sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button
          type="submit"
          name="signup"
          onClick={authHandler}
          className={classes.login__registerButton}
        >
          {loading.signUp ? (
            <ClipLoader color="#000" size={15}></ClipLoader>
          ) : (
            "  Create your Amazon Account"
          )}
        </button>

        {error && (
          <small style={{ paddingTop: "5px", color: "red" }}> {error}</small>
        )}
      </div>
    </section>
  );
}

export default Auth
