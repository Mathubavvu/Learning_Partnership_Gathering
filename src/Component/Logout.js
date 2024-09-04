// import React from 'react'
// import { useAuth } from './Auth'
// import { Link, useNavigate } from 'react-router-dom'

// const Logout = () => {
//   const navigate = useNavigate()
//   const auth = useAuth()

//   const handleLogout = () => {
//     auth.logout(null)
//     navigate('/login')
//   }

//   return (
//     <div>
//       <button onClick={handleLogout}>Logout</button>
//     </div>
//   )
// }

// export default Logout

import React from 'react'
import { useAuth } from './Auth'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
  const navigate=useNavigate()
    const auth=useAuth()
    const handleLogout=()=>{
        auth.logout()
        navigate('/login')
    }
  return (
    <div>
    </div>
  )
}

export default Logout