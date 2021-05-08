import React, {useState, useEffect} from 'react'
import locations  from './api/data'

const Context = React.createContext()



const ContextProvider = ({children}) => {

    const [showSearchBar, setShowSearchBar] = useState(false);
    // const [hotels, setHotels] = useState([])
    const [adultCount, setAdultCount] = useState(0);
    const [childCount, setChildCount] = useState(0);
    const [showLocation, setShowLocation] = useState(false)
    const [query, setQuery] = useState('')
    const [city, setCity]  = useState([]);


    //adds the umber of children and adults
    let sum = adultCount + childCount;
   const userInput =(e)=>{
        setQuery(e.target.value)
       
    }

    const handleSubmit =(event)=>{
        event.preventDefault()
        if(query.length > 0){
            const selectedHotels = city.filter(hotel => hotel.city.toLowerCase() === query.toLowerCase())
            setCity(selectedHotels)
             setTimeout(()=>{
                setShowSearchBar(false)
             }, 200)
               sum =0; 
        }else{
         setCity(locations)
          setTimeout(()=>{
                setShowSearchBar(false)  
             }, 200)
               sum =0;
        }           
    }      

    const showLocationBar=()=>{
        setShowLocation(!showLocation)
    }
    const increaseAdult=()=>{
        setAdultCount(prevAdultCount => prevAdultCount + 1)
    }
       
    const decreaseAdult=()=>{
      setAdultCount(prevAdultCount => {
          if(adultCount >0){
            return prevAdultCount - 1
          }else{
              return prevAdultCount = 0
          }
      })   
    }
      const increaseChildren=()=>{
        setChildCount(prevChildCount => prevChildCount + 1)
    }
       
    const decreaseChildren=()=>{
      setChildCount(prevChildCount => {
          if(childCount >0){
            return prevChildCount - 1
          }else{
              return prevChildCount = 0
          }
      })   
    }

     useEffect(()=>{
         setCity(locations)
     },[])

  
    function handleShowBar(){
        setShowSearchBar(!showSearchBar);
    }
    function handleHideShowSearchBar(){
           setShowSearchBar(prevState => !prevState);
           showLocationBar()
           sum =0;
    }
   
    return (
        <Context.Provider value={{show:showSearchBar,handleShowBar,handleHideShowSearchBar,
         adultCount,increaseAdult, decreaseAdult,
         decreaseChildren, increaseChildren, childCount, sum, city,showLocation, showLocationBar, userInput,
         handleSubmit
         }}>
            {children}
        </Context.Provider>
    )
}

export  {ContextProvider, Context}
