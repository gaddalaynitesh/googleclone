import React from 'react';
import {FaSistrix} from "react-icons/fa";
import axios from "axios";
import {key,cx} from "../API";
import Show from "./Show"

const Home = (props) => {
    const [results,setResults]=React.useState([]);
    const [info,setInfo] = React.useState('');
    const searchGoogle = async (e) => {
     
        try{
            const response = await axios.get(`https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx}&q=${state}`);
            if(response){
                setResults(response.data.items);
                setInfo(response.data.searchInformation);
            }
        }
        catch(error){
            console.log(error)
        }
    };
    console.log(results,info);
    const [state,setState] = React.useState(
        props.location.state ? props.location.state:""
    );
    return (
        <div className="home" style={{ "display": results.length===0?'flex':'block'  }}>
            <div className="home__container">
                <div className="home___container">
                    <div className="home__logo">
                    <img src="images/googleLogo.png" alt="" />
                    </div>
                        
                    </div>
                    <form className="home__form" onSubmit={searchGoogle}>
                        <input type="text" className="home__input" onChange={(e)=>setState(e.target.value)} value={state}/>
                        <div className="home__group">
                            <input type="submit" value="Google Search"className="home__btn"/>
                        </div>
                        <FaSistrix className="search__icon"/>
                    </form>
            </div>
            <div>
                <Show results={results} info={info} />
            </div>
        </div>
    )
}

export default Home
