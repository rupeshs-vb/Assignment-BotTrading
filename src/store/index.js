import { createStore } from "redux";

//here my data is stored
const BotState={
    "bots":[
       {
          "id":1,
          "bot":"Hot Bot",
          "description":"Hot bot is low volatility portfolio of growth stocks selected based on our proprietary metrics",
          "index-value":289.34,
          "cagr":34
       },
       {
          "id":2,
          "bot":"Cool Bot",
          "description":"Cool bot is low volatility portfolio of growth stocks selected based on our proprietary metrics",
          "index-value":439.34,
          "cagr":28
       },
       {
          "id":3,
          "bot":"Options Bot",
          "description":"Options bot is low volatility portfolio of growth stocks selected based on our proprietary metrics",
          "index-value":139.34,
          "cagr":42
       }
    ],
    totalCartValue:0 //this is for the cart value
 }


 //this is my root reducer 
const botsReducer=(state=BotState,action)=>{
   // this if condition check the action type is matched or not if match then it increase the totalcart value by 1
   if(action.type==='addToCart'){
      return{
         ...state,
         totalCartValue:state.totalCartValue+1 //here the value is increased by 1 
      }
   }
   //here if condition check wether the action type is matched or not if matched then it will return the total cart value =0
   if(action.type==='DeleteCart'){
      return{
         ...state,
         totalCartValue:0
      }
   }
   //here the state is return
   return state
}


const store=createStore(botsReducer);//here the root reducer is passed through the store
export default store