
import { Card } from "react-bootstrap";
import { INews } from "../interfaces/INews";

interface articleProps{
    article:INews
}

const Article = (props:articleProps) => {
    return ( 
    
    <Card className="my-3">
       <Card.Img variant="top" src={props.article.imageUrl} />
       <Card.Body>
       <Card.Title>{props.article.title}</Card.Title>
       <Card.Text>
        {props.article.summary}
       </Card.Text>
       </Card.Body>
     
      
    </Card> );
}
 
export default Article;