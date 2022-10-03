import './App.css';
const App=()=> {

  const categories = [
    { id:1,title:'kibrit'},
    { id:2,title:'samuna' },
    { id:3,title:'Enjera'},
    {id:4,title:'Pasta'},
    {id:5,title:'Mekerony:)'}

  ]
  return (
    <div className="categories-container">
      {
      categories.map((catagory)=>{

return(
  <div className='category-container'>
  <div className='catagory-body-container' key={catagory.id}>
<h2>{catagory.title}</h2>
<p>shop now</p>
  </div>
</div>);
      }) }
      
      </div>
  );
  
}

export default App;
