import './card.style.css';
const Card = (props)=>{
const {catagory} = props

    return(
        <div key={catagory.id} className='category-container'>
        <img src={catagory.image} alt="sorry"/>
      <div className='catagory-body-container' key={catagory.id}>
    <h2>{catagory.title}</h2>
    <p>shop now</p>
      </div>
    </div>
    );

}
export default Card;