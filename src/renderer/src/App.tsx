import NavigationDrawer from "./components/NavigationDrawer";
function App(): JSX.Element {
    return (
        <>
            <div className="h-screen w-screen bg-base-100 overflow-hidden">
                <NavigationDrawer />
            </div>
        </>
    );
}

export default App;
