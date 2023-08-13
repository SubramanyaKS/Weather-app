export const farenheittoCelcius=(temp)=>{
    return (5/9)*Number(temp-32);
}
export const celciusToFarenheit = (temp)=>{
    return ((9/5)*Number(temp)+32).toFixed(2);
}