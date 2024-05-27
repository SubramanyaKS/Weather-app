export const fetchApi= async(value)=>{
    try {
        const url=`${process.env.REACT_APP_API_LINK}/weather?q=${value}&units=metric&appid=${process.env.REACT_APP_API_KEY}`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok or City name is invalid');
        }
        const result = await response.json();
        return result;
        
    } catch (error) {
        console.log("error",error);
    }
}