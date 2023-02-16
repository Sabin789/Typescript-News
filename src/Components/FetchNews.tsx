import { useEffect, useState } from "react"
import { Container,Row,Col } from "react-bootstrap"
import Article from "./Article"
import { INews } from "../interfaces/INews"
import { Link } from "react-router-dom"

const FetchNews = () => {
    const URL="https://api.spaceflightnewsapi.net/v3/articles"
    const[news,setNews]=useState<INews[]>([])
    const fetchNews=async()=>{
        try{
           const res= await fetch(URL)
           if(res.ok){
            let newsFromApi= await res.json()

            setNews(newsFromApi)
           }
        }catch(err){
            console.log(err)
        }
    }
    useEffect(()=>{
        fetchNews()
    },[])
    return ( 
      <Container>
        <Row className="justify-content-center">
            <Col className="text-center">
            <h2>News</h2>
            </Col>
            </Row>
            <Row>
          {news.map((n)=>(
             <Col key={n.id} sm={12} md={4} lg={3} className="text-dark">
            <Link  to={"/articleDetails/"+n.id}>
          
            <Article article={n}/>
          
           </Link>
           </Col>
          ))}
      
        </Row>
      </Container>
     );
}
 
export default FetchNews;