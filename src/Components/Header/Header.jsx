import React, { useContext } from 'react'
import classes from './Header.module.css';
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHeader from './LowerHeader';
import { Link } from "react-router-dom";
import {  DataContext} from "../DataProvider/DataProvider";
import { auth } from "../../Utility/firebase";


function Header() {
  const {state,dispatch}=useContext(DataContext)
  const {user,basket}=state
    // console.log(basket.length);
    const totalItem = basket?.reduce((amount,item)=>{
      return  item.amount + amount
    },0)
return (
  <section className={classes.fixed}>
    <section>
      <div className={classes.header_container}>
        {/* logo section */}
        <div className={classes.logo_container}>
          <Link to="/">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="amazon logo"
            />
          </Link>

          {/* {logo} */}

          {/* delivery section */}
          <div className={classes.delivery}>
            <span>
              <SlLocationPin />
            </span>
            <div>
              <p>Delivered to</p>
              <span>Ethiopia</span>
            </div>
          </div>
        </div>

        {/* search section */}
        <div className={classes.search}>
          <select name="" id="">
            <option value="">All</option>
          </select>
          <input type="text" />
          <BsSearch size={38} />
        </div>
        {/* right side link */}
        <div className={classes.order_container}>
          <Link to="" className={classes.language}>
            <img
              src="https://www.shutterstock.com/shutterstock/photos/2477519645/display_1500/stock-vector-american-flag-usa-design-united-states-flag-rendered-usa-flag-the-usa-national-flag-2477519645.jpg"
              alt=""
            />
            <section>
              <option value="">EN</option>
            </section>
          </Link>

          {/* three componenets */}
          <Link to={!user && "/auth"}>
            <div>
              {user ? (
                <>
                  <p>Hello {user?.email?.split("@")[0]}</p>
                  <span onClick={() => auth.signOut()}>sign Out</span>
                </>
              ) : (
                <>
                  <p> Hello, Sign In</p>
                  <span>Account & Lists</span>
                </>
              )}
            </div>
          </Link>
          {/* orders */}
          <Link to="/orders">
            <p>returns</p>
            <span>& orders</span>
          </Link>
          <Link to="/cart" className={classes.cart}>
            <BiCart size={35} />
            {/* icon */}
            <span>{totalItem}</span>
          </Link>
        </div>
      </div>
    </section>
    <LowerHeader />
  </section>
);
};

export default Header
