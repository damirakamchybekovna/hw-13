import  {useState, useEffect} from 'react';
import './Images.css';

export const Images = props =>{

    const [users,setUsers] = useState([]);

    useEffect (()=>{
        fetch("https://jsonplaceholder.typicode.com/photos?_limit=8")
        .then((result)=>{
            return result.json();
        })
        .then((data)=> setUsers(data));
    },[])

    return(
       <div className='img'>
           {users.map((user)=>(
                <div>
                   <h2>{user.id}</h2>
                   <h3>{user.title}</h3>
                  <img src={user.thumbnailUrl}/>               
                </div>
           ))}
       </div> 
    )
}












