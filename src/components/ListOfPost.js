import React, {useEffect, useState} from 'react';
import axios from 'axios'
const ListOfPost = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res =>{
            console.log('---->',res.data)
            setData(res.data)
        }).catch(err => console.log(err))
    },[])

    const arr = data.map((data, index) => {
        return(
            <div>
                <p>{data.id}</p>      
                <p>{data.title}</p>      
                <p>{data.body}</p>      
            </div>
        )
    })

    return (
        <div>
            {arr}
        </div>
    )
 
}

export default ListOfPost;


