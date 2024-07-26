import {getdata} from "./page.js"

const getProducts = async () =>{
    try{
        const categories = await getdata("https://fakestoreapi.com/products/categories")
        const productlist = await getdata("https://fakestoreapi.com/products");
        console.log("Categories",categories);
        console.log("Productlist",productlist);
    } catch(err) {
        console.log("err:",err)
    }
};
getProducts();