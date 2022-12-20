import React from 'react'
import Card from '../../components/Card/Card'

import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getArticles } from '../../redux/article/articleReducer'
import {v4 as uuidv4} from 'uuid'
import './Home.scss'
export default function Home() {

    const  articles  = useSelector(state => ({
        ...state.article
    }))
    
    const dispatch= useDispatch()
    
    useEffect( () => {
        dispatch(getArticles());
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    console.log(articles);

  return (
    <>
    <h1 className="home-title">Tous les articles</h1>
    <div className="container-cards">
        
       {
        articles.map(item => {
            return(
            <Card key={uuidv4()}>
                <h2>{item.titles}</h2>
                <a href="#">Lire l'article</a>

            </Card>

            ) 
        })
       }

    </div>
    </>
  )
}
