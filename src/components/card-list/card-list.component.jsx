import './card-list.style.css';
import Card from "../card/card.component";
const CardList = (props) =>{
const {categories} = props
    return(

      
        <div className="categories-container">
      {
      categories.map((catagory)=>{

return(
 
 <Card  catagory={catagory}/>
    );
      }) }
      
      </div>
    );

}
export default CardList;