import Search from '@material-ui/icons/Search'
import {useContext} from 'react'
import {Context} from '../Context'


const SearchInputs = () => {
const {handleShowBar} = useContext(Context)

    return (
        <>
            <div className="search-bar">
            <div className="search-item item-1">
              <input type="text" placeholder="Helsinki, Finland" 
              onClick={()=>{handleShowBar()}}
              />
            </div>
            <div className="search-item item-2">
              <input type="text" placeholder="Add guests"
              onClick={()=>{handleShowBar()}}
              />
            </div>
            <div className="search-item item-3"><Search style={{color:"#EB5757", cursor:"pointer"}}/></div>
          </div>
        </>
    )
}

export default SearchInputs
