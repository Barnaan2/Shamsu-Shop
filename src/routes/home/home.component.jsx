import { Outlet } from 'react-router-dom';
import CardList from '../../components/card-list/card-list.component';

const Home=()=> {

  const categories = [
    { id:1,title:'kibrit', image : "https://th.bing.com/th/id/OIP.5D1CXmagXbvtOCwA4C11CwHaHa?pid=ImgDet&rs=1"},
    { id:2,title:'samuna', image : "https://th.bing.com/th/id/R.a4d268ef75a616054215d1e384068595?rik=uueVw0EOMnm5ag&riu=http%3a%2f%2fcorewalking.com%2fwp-content%2fuploads%2f2015%2f08%2fsoap__large.jpg&ehk=00FLrSr%2bM51cjYECsMnBi%2fIYE33sD6tyMeZrW7uKBbw%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" },
    { id:3,title:'Enjera', image : "https://th.bing.com/th/id/OIP.lZ8SEAII7TXUHoZzSaZ4OgHaE8?pid=ImgDet&rs=1"},
    {id:4,title:'Pasta', image : "https://th.bing.com/th/id/OIP.EC0AvFqZNMsEPNUZSGPYzQHaId?w=171&h=195&c=7&r=0&o=5&dpr=1.5&pid=1.7"},
    {id:5,title:'Mekerony',image : "https://th.bing.com/th/id/R.632b6065dd5f0b507d277a223cfdf66f?rik=mgXIvZ51VEy9Tw&pid=ImgRaw&r=0"},
    {id:6,title:"Inkulal",image : "https://www.ifco.com/wp-content/uploads/Eggs-2-1180x787.jpg"},
    {id:7,title:"Zeyit",image : "https://th.bing.com/th/id/OIP.TO-pK4vecayf2_up_6zciQHaEn?pid=ImgDet&rs=1"},
    {id:8,title:"shinkurt",image : "https://th.bing.com/th/id/R.fb36afa5052e8a22b68a213acb9f8765?rik=wWrAcI70%2bYu2cA&pid=ImgRaw&r=0"},
    {id:8,title:"timatim", image : "https://www.bing.com/th?id=OIP.3q-lWTJdOlQw56yR6apU7wHaFJ&w=158&h=106&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
  }
  

  ]
  return (
  <div>
    {/* outlet is for just displaying something that come from other component */}
    <Outlet/>
<CardList categories={categories}/>
</div>

  );
  
}

export default Home;
