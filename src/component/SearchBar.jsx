import country  from "country-json/src/country-by-capital-city.json"
import './searchbar.css'
import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { DebounceInput } from "react-debounce-input"
import { useDebounce } from "./debounce"
export const SearchBar=()=>{
    // console.log(country)
    
    const [value,setvalue]=useState('')
    const debounceSearchTerm=useDebounce(value,300)
    const [data,setData]=useState([])
     console.log(value)
useEffect(()=>{
    if(debounceSearchTerm){
        console.log("debounce",debounceSearchTerm)
        handleSearch(debounceSearchTerm)
    }else getdata()
},[debounceSearchTerm])

    const getdata=()=>{
        axios.get(`http://localhost:8080/posts`)
        .then((res)=>setData(res.data))
    }
  
    const handleSearch=async(name)=>{
         return await axios
         .get(`http://localhost:8080/posts`,{
            params:{
                q:name
            }
         })
         .then((res)=>setData(res.data))
    }


console.log(data)
    return(
        <div>
             <div className="Navbar">
                
             <DebounceInput className="inputtag" style={{"width":"400px" ,"height":"30px"} }  minLength={2}
          debounceTimeout={300}
          onChange={(e)=>setvalue(e.target.value)}
          placeholder={"type to search"}/>
                {/* <input className="inputtag" type="text" placeholder="search by country by capital aor city" /> */}
             </div>
         <div>
         {data?.map((el)=>
             <div className="container">
             <p className="para"> country:<span className="countrypara">{el.country}</span></p>
             <p>City Name:{el.city}</p>
          </div>)}
         </div>
        </div>
    )
}