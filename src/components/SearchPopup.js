
import {useContext} from 'react'
import {Context} from '../Context'
import Search from '@material-ui/icons/Search'
import RoomIcon from '@material-ui/icons/Room';


const SearchPopup = ({icon}) => {

  const {show,handleHideShowSearchBar, adultCount, increaseAdult,
     decreaseAdult, decreaseChildren, increaseChildren, childCount, sum,
    showLocation, showLocationBar, userInput, handleSubmit} = useContext(Context);


    return (
        <div className='popup' style ={{display: show ? "block":"none"}}>
            <div className="container ">
              <div className="popup-container">
                <form onSubmit ={handleSubmit}>
                <div className="pop-control">
                <label htmlFor="">Location</label>
                <input type="text" placeholder="Add city location" onClick={()=>showLocationBar()} 
                onChange ={(e)=>userInput(e)}/>
              </div>
              <div className="pop-control">
                <label htmlFor="">Guests</label>
                <p className="totalguest"> {sum} guet(s)</p>
              </div>
              <div className="pop-control control-3">
               <button className="btn-search" type="submit"><Search style={{color:"#fff", cursor:"pointer",marginRight:".3em"}}/>Search</button>
              </div>
              </form>
            </div> 
            <div className="popup-list">
              <div className="list-item list-item-1" style={{display:showLocation ? "block" : "none"}}>
                <p><RoomIcon style={{fontSize:"1em",marginRight:".5em"}}/>Helsinki, Finland</p>
                <p><RoomIcon style={{fontSize:"1em",marginRight:".5em"}}/>Turku, Finland</p>
                <p><RoomIcon style={{fontSize:"1em",marginRight:".5em"}}/>Oulu, Finland</p>
                <p><RoomIcon style={{fontSize:"1em",marginRight:".5em"}}/>Vaasa, Finland</p>
              </div>
              <div className="list-item list-item-2" style={{display:showLocation ? "block" : "none"}}>
                <div className="categories adult">
                  <h4 className="title">Adults</h4>
                  <p>Ages 13 and above</p>
                  <div className="btn-control">
                    <div><button onClick={()=>decreaseAdult()}>-</button></div>
                    <div className="count"><p>{adultCount}</p></div>
                    <div> <button onClick={()=>increaseAdult()}>+</button></div>
                  </div>            
                </div>
                <div className="categories children">
                  <h4 className="title">Children</h4>
                  <p>Ages 2 - 12 </p>
                  <div className="btn-control">
                    <div><button onClick={()=>decreaseChildren()}>-</button></div>
                    <div  className="count"><p>{childCount}</p></div>
                    <div> <button onClick={()=>increaseChildren()}>+</button></div>
                  </div>            
                </div>
              </div>
              <div className="list-item"></div>
              </div>          
              
              
            </div>
          
        </div>
    )
}

export default SearchPopup
