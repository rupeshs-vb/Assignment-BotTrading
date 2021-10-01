import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import './CSS/Header.css'


const Header = () => {
    // here we fetch the data of the totalCartValue
    const cartValue=useSelector((state)=>{
        return state.totalCartValue;
    })
    const dispatch = useDispatch();
    // here the DeleteValue is called when the Delete Cart is clicked and convert the value to its initail state
    const DeleteValue=()=>{
        dispatch({
            type:"DeleteCart"
        })
    }
    return (
        <>
            <div className="main_div">
                <div className="Dashboard">
                    <Link className ="Link" to="/bots">DashBoard</Link>
                </div>
                <div className="Carts_div">
                    <p>Cart-{cartValue}</p>
                </div>
                <div className="deletevalue">
                    <p onClick={DeleteValue}>Delete Cart</p>
                </div>
            </div>
        </>
    )
}

export default Header
