import MainNavigaion from "../components/MainNavigation.js";

function ErrorPage() {
    return (
        <>
            <MainNavigaion/>
            <main>
                <h1>An error occured!</h1>
                <p>Could not find this page</p>
            </main>
        </>
    )
}

export default ErrorPage;