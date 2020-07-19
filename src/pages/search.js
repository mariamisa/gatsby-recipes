import React ,{useState,useEffect} from 'react'
import Layout from '../components/layout'
import Axios from 'axios'

export default function Search() {
    const [recipe,setRecipe]=useState('pizza')
    // const [result,setResult]=useState()
    useEffect(() => {
    Axios({
        method:'get',
        url:'https://edamam-recipe-search.p.rapidapi.com/pizza',
        headers:{
            "x-rapidapi-host": "edamam-recipe-search.p.rapidapi.com",
            "x-rapidapi-key": "a81e4a8da1mshae8971b5e4738bdp1025eajsn2888746daff1",
            "useQueryString": true
        }
    })
    .then(console.log)
    .catch((err)=>console.log(err.response))
    return (
        <Layout>
            <h4>here you can search about any recipe you want !!</h4>
            <input
            type ="text"
            name="recipe"
            value={recipe}
            placeholder="recipe name"
            onChange={(e)=>setRecipe(e.target.value)}
            />
        </Layout>
    )
}
