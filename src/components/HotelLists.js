import React, {useContext}  from 'react'
import {Context} from '../Context' 
import StarIcon from '@material-ui/icons/Star';


const HotelLists = () => {

    const {city} = useContext(Context)
     
    return (
        <div className="card-lists">
          {city.map(hotel =>{
              return (
                  
                  <div className="card" key={hotel.id}>
                    <img src={`${hotel.photo}`} alt=""/>
                    {/* <p>{hotel.photo}</p> */}
                    <div className="features">
                        <p className="super" style={{display:hotel.superHost ? "block":"none",fontSize:".75em", border:"1px solid #333",padding:".2em", borderRadius:"8px", textTransform:"uppercase"}}>Super Host</p>
                        <p>{hotel.type}</p>
                        <p>{hotel.beds}</p>
                        <p className="rating"><StarIcon style={{color:"#EB5757", fontSize:"1.05em", marginRight:".5em"}}/>{hotel.rating}</p>
                    </div>
                  </div>
              )
          })}
        </div>
    )
}

export default HotelLists
