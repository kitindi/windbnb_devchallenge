import React, {useContext} from 'react'
import Header from '../components/Header'
import SearchPopup from '../components/SearchPopup'
import RoomIcon from '@material-ui/icons/Room';
import HotelLists from '../components/HotelLists';
import {Context} from  '../Context'


const Home = () => {

    const {hotels} = useContext(Context)

    return (
        <div>
           <Header/> 
           <SearchPopup icon ={<RoomIcon/>}/>
           <main>
               <div className="main">
            <div className="displays">
                <h2>Stays in Finland</h2> 
                <p>{hotels.length} Stays</p>
            </div>
                <HotelLists/>
               </div>
           </main>
        </div>
    )
}

export default Home
