import  { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const WithoutLogin = ({children}:any) => {
  const navigate = useNavigate()
  useEffect(()=>{
    const token = localStorage.getItem("auth")
    if(token){
      navigate("/admin")
    }
  }, [])
  return (
    <>{children}</>
  )
}

export default WithoutLogin
