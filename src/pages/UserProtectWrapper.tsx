import React, { useContext, useEffect, useState } from 'react'
import { UserDataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

interface Wrapper {
  children: React.ReactNode;
}

const UserProtectWrapper :React.FC<Wrapper> = ({children}) => {
  const token = localStorage.getItem('token')
  const navigate = useNavigate()
  const { setUser } = useContext(UserDataContext)
  const [ isLoading, setIsLoading ] = useState(true)

  useEffect(() => {
      if (!token) {
          navigate('/login')
      }

      axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
          headers: {
              Authorization: `Bearer ${token}`
          }
      }).then(response => {
          if (response.data) {
              setUser(response.data)
              setIsLoading(false)
          }
      })
          .catch(err => {
              console.log(err)
              localStorage.removeItem('token')
              navigate('/login')
          })
  }, [ token ])

  if (isLoading) {
      return (
          <div>Loading...</div>
      )
  }

  return (
      <>
          {children}
      </>
  )
}

export default UserProtectWrapper