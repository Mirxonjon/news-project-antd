import { List } from "antd";
import "./news-item.css";

const NewsItem = ({ article }) => {
  return(
    <List.Item className="news-item" extra={
      <img 
        className="news-item__img" 
        src={!article.urlToImage ? "https://picsum.photos/200/200" : article?.urlToImage}  
        alt="random img"/>}>

      <List.Item.Meta 
        className="news-item__content"
        description={article?.description} 
        title={article?.title}>

      </List.Item.Meta> 
    </List.Item>
  );
};

export default NewsItem;