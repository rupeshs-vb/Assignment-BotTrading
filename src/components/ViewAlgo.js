import React from 'react'
import { useParams } from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import './CSS/Viewalgo.css'

const ViewAlgo = () => {
    // here i used useParam to fetch the state of the link
    const {id}=useParams();
    
    // here i again fetch the bots data and stroe it itno viewBots
    const ViewBots=useSelector((state)=>state.bots)
    console.log(ViewBots);
    const dispatch=useDispatch()
    const IncValue=()=>{
        dispatch({
            type:"addToCart"
        })
    } 
    return (
        <>
            {   
                // here i used the filter method to return that particular id which match the param id
                ViewBots.filter((tempid)=>{
                    return tempid.id===parseInt(id) //here i change the id into int so that it can match with the temp.id
                }).map((checkElem=>{ //then i map that particular id and fetch all required data
                    return (
                        <div key={checkElem.id}>
                            <div className="bot">
                                <h2>{checkElem.bot}</h2>
                            </div>
                            <div className="description_div">
                                <h4>Descriptions</h4>
                                <p>{checkElem.description}</p>
                            </div>
                            <div className="index_cagr">
                                <div className="index">
                                    <h3>Index Value</h3>
                                    <p>{checkElem['index-value']}</p>
                                </div>
                                <div className="Cagr">
                                    <h3>Cagr</h3>
                                    <p>{checkElem.cagr}</p>
                                </div>
                            </div>
                            <div className="buy_button">
                                <button onClick={IncValue}>Buy</button>
                            </div>
                        </div>
                    )
                }))
            }
        </>
    )
}

export default ViewAlgo
