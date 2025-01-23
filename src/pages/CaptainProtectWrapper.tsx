import React, {  useEffect, useState } from 'react'
import { useCaptainData } from '../context/CapatainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
interface Wrapper {
    children: React.ReactNode;
}
const CaptainProtectWrapper :React.FC<Wrapper> = ({ children }) => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const {  setCaptain } = useCaptainData()
    const [ isLoading, setIsLoading ] = useState(true)




    useEffect(() => {
        if (!token) {
            navigate('/captain-login')
        }

        axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            if (response.status === 200) {
                console.log(response.data.Captain);
                setCaptain(response.data)
                setIsLoading(false)
            }
        })
            .catch(err => {
                console.log(err)
                localStorage.removeItem('token')
                navigate('/captain-login')
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

export default CaptainProtectWrapper