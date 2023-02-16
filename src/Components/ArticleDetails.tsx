import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { INews } from "../interfaces/INews"
import { Card } from 'react-bootstrap'




const ArticleDetails = () => {

    const params = useParams()
   const id=params.id
    


    
        let URL=`https://api.spaceflightnewsapi.net/v3/articles/`
        const[news,setNews]=useState<INews[]>([])
    const fetchNews=async()=>{
        try{
           const res= await fetch(URL+id)
           if(res.ok){
            let newsFromApi= await res.json()
         
            setNews(await newsFromApi)

            console.log(news)
            console.log(newsFromApi)
           }
        }catch(err){
            console.log(err)
        }
    }
    useEffect(()=>{
        fetchNews()
    },[])

    return ( 

        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={news.imageUrl} />
        <Card.Body>
          <Card.Title>{news.title}</Card.Title>
          <Card.Text>
          {news.summary}
          </Card.Text>
         
        </Card.Body>
      </Card>
   
 )
}
 
export default ArticleDetails;