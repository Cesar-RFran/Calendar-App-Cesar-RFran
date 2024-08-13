import { Navigate, Route, Routes } from "react-router-dom"
import LoginPages from "../auth/pages/LoginPages"
import CalendarPage from "../calendar/pages/CalendarPage"

const AppRouter = () => {

    const authStatus = 'authenticated' //'authenticated' 'no-authenticated'

  return (
    <Routes>
        {
             (authStatus === 'not-authenticated')
             ? <Route path="/auth/*" element={<LoginPages/>}/>
             : <Route path="/*" element={<CalendarPage/>}/>
        }

        <Route path="/*" element={<Navigate to="/auth/login"/>}/>
    </Routes>
  )
}

export default AppRouter
