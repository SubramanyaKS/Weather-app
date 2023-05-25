export const fetching = async (state)=>{
    const URL = `http://api.openweathermap.org/data/2.5/weather?q=${state}&units=metric&appid=${process.env.REACT_APP_API_KEY}`;
    // var res=null;
    // try {
    //     res = await fetch(URL);
    //     console.log(res);
    // } catch (error) {
    //     console.log(error);
    // }
    const response = await fetch(URL);
    const res= await response.json();
    console.log("Hi ",res.id);
    return res;
}