import { Navigate, Route, Routes } from "react-router-dom"
import LoginPages from "../auth/pages/LoginPages"
import CalendarPage from "../calendar/pages/CalendarPage"
import useAuthStore from "../hooks/useAuthStore"
import { useEffect } from "react"

const AppRouter = () => {

   const { status, checkAuthToken} = useAuthStore();

    // const authStatus = 'not-authenticated' //'authenticated' 'no-authenticated'

    useEffect(() => {
      checkAuthToken();
    },[])
    

    if(status === 'checking') {
      return (
        <h3>Cargando...</h3>
      )
    }

  return (
    <Routes>
        {
             (status === 'not-authenticated')
             ? (
                  <>
                      <Route path="/auth/*" element={<LoginPages/>}/>
                      <Route path="/*" element={<Navigate to="/auth/login"/>}/>
                  </>
               )
             : (

                <>
                      <Route path="/" element={<CalendarPage/>}/>
                      <Route path="/*" element={<Navigate to="/"/>}/>
                </>
               )
        }

    </Routes>
  )
}

export default AppRouter
