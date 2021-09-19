import React,{useState,useEffect} from "react";
import "../Styles/dashboard.css";
import Pin from "../Assets/pin.svg"
import { usePosition } from "../Utils/usePosition";
import { icon } from "../Utils/icons";
import axios from "axios"
const API_KEY="BDu1m5SWL1HT1TTkSM9w1DWvdkwGPW1e"
function Dashboard() {
    const { latitude, longitude, error } = usePosition();
    const [locationName, setLocationName] = useState("");
    const [locationKey, setLocationKey] = useState(null);
    const [current, setCurrent] = useState([]);
    const [refresh, setRefresh] = useState(false);
    useEffect(() => {
          axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${API_KEY}`).then((res) => {
              console.log(res);
              setCurrent(res.data)
            }).catch((err) => {
                console.log(err);
            })
    },[locationKey])
    useEffect(() => {
        axios.get(`http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${API_KEY}&q=${latitude}%2C${longitude}`).then((res) => {
            console.log(res.data);
            setLocationName(res.data.LocalizedName)
            setLocationKey(res.data.Key);
            setRefresh(refresh ? false:true)
        }).catch((err) => {
            console.log(err)
        })
    }, [latitude, longitude])
    const handleKeyPress = (e) => {
        var code = e.which || e.keyCode;
        if (code === 13) {
            axios.get(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${API_KEY}&q=${locationName}`).then((res) => {
                console.log(res)
                setLocationKey(res.data[0].Key);
                setLocationName(res.data[0].LocalizedName);
                setRefresh(refresh ? false:true)
            }).catch((err) => {
                console.log(err)
            })
        }
    }
   
   
    return(
    <div className="dash-con">
    <div className="dash-top">
                <div className="dash-loc">
                    <div className="loc-input">
                        <input type="text" name="location" value={ locationName } placeholder="Enter Location" onChange={ (e) => setLocationName(e.target.value) } onKeyPress={(e)=>handleKeyPress(e)} />
                        <span>
                            <img src={Pin} width="31" height="31" alt=""/>
                        </span>
                    </div>
                </div>
            </div>
            <div className="dash-mid">
                <div className="current">
                    <div className="curr-top">
                        <img src={icon[current[0]?.WeatherIcon]} alt=""/>
                    </div>
                    <div className="curr-mid">
                         <div className="curr-temp">
                        { current[0]?.Temperature.Metric.Value }<sup>0</sup>C
                        <div className="remarks">{ current[0]?.WeatherText}</div>
                    </div>
                   </div>
               </div>
            </div>
    </div>
    )
}
export default Dashboard;