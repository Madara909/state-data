import axios from "axios";

async function calling(setData){
    try {
        const res= await axios.get("https://api.covid19india.org/data.json");
        const actualData = await res.json();
        console.log(actualData.Statewise);
        setData(actualData.Statewise);
    }catch(error){
        console.error("Failed to make request:", error.message);
    }  
}
export default calling;