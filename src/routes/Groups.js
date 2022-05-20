import axios from 'axios'
import React, { useEffect, useState }  from 'react'

function Groups() {
    const [groups, setGroups] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios({
          method: 'GET',
          url: 'http://localhost:5001/groups',
          withCredentials: true
        }).then(response => {
            
          if(response.data.user)
          {
            setGroups(response.data.user);
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
                <div>{groups}</div>
            )}
        </div>
    )
}


export default Groups