export const getdata = async(url)=>{
    const data = await fetch(url);
    console.log("url",url);
    const parsedata = await data.json();
    return parsedata;

}

