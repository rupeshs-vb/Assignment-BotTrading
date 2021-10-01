import React from 'react'
import './CSS/DashBoard.css'
import { useSelector,useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'

const DashBoard = () => {
    const botData=useSelector((state)=>{
        return state.bots //here the data in the state.bots will return to the botData
      })
    const dispatch=useDispatch()
    
    // here the function is called whenever the buy button is clicked and it will dispatch the type
    const IncValue=()=>{
        dispatch({
            // here the type will dispatch into addToCart
            type:"addToCart"
        })
    }

    return (
        <>
            <p className="para1">Select the best Algo Suited for you</p>
            {
                // here the data is map 
                botData.map((currElem)=>{
                    return (
                        <div key={currElem.id}>
                                
                            <div className="main_dashboard">
                                <div className="Bot_name">
                                    <h3>{currElem.bot}</h3>
                                </div>
                                <div className="index_and_cagr">
                                    <div className="index_value">
                                        <h4>Index Value</h4>
                                        <p>{currElem['index-value']}</p>
                                    </div>
                                    <div className="Cagr_div">
                                        <h4>Cagr</h4>
                                        <p>{currElem.cagr}</p>
                                    </div>
                                </div>
                                <div className="Buttons">
                                    {/* here the link is define with the help of id */}
                                    <Link className="Links" to={`/bots-details/${currElem.id}`}>View algo</Link>
                                    <button onClick={IncValue}>Buy</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default DashBoard
