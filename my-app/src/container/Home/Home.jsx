import React from 'react'
import Card from '../../components/Card/Card'

import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getArticles } from '../../redux/article/articleReducer'
import {v4 as uuidv4} from 'uuid'
import './Home.scss'
export default function Home() {

    const  articles  = useSelector(state => ({
        ...state.article.articles
    }))

    const dispatch= useDispatch()
    
    useEffect(() => {
      dispatch(getArticles())
    }, [])
    
    console.log(articles);
const result = Array.isArray(articles)
console.log(articles);
  return (
    <>
    <h1 className="home-title">Tous les articles</h1>
    <div className="container-cards">
        {articles.map(item => {
          return(
            <Card key ={uuidv4()}/>
          )
        })}
       
       

    </div>
    </>
  )
}
