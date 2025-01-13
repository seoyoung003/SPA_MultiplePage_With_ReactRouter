import { Outlet } from "react-router-dom";//자녀 요소들이 렌더링되어야 할 장소를 표시하는 역할을 함함
import MainNavigaion from "../components/MainNavigation.js";

function RootLayout() {
    return (
        <>
            <MainNavigaion/>
            <main>
             <Outlet/>
            </main>
            
        </>
    )
}

export default RootLayout;