import { Outlet } from "react-router-dom"

function Root() {
    return (
        <>
            <header><h1>Durachok</h1></header>
            <main>
                <Outlet></Outlet>
            </main>
        </>
    )
}

export default Root
