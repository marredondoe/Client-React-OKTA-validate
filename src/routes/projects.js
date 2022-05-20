import axios from 'axios'
import React, { useEffect, useState }  from 'react'

function Projects() {
    const [proyectos, setProyectos] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios({
          method: 'GET',
          url: 'http://localhost:5001/projects',
          withCredentials: true
        }).then(response => {
            
          if(response.data.user)
          {
            setProyectos(response.data.user);
            setLoading(false);
          }
          else 
          {
            //RedirectToLogin();
          }
        }).catch(error => {
          //RedirectToLogin();
      })
      }, []);

    return (
        <div>
            {(loading) ? (
                <p>Loading....</p>
            ):(
                <div>{proyectos}</div>
            )}
        </div>
    )
}


export default Projects