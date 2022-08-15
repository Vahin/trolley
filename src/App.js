import "./App.css";
import { Rails } from "./components/Rails/Rails";
import { Hero } from "./components/Hero/Hero";
import { Indicators } from "./components/Indicators/Indicators";
import { Program } from "./components/Program/Program";

function App() {
    return (
        <>
            <main>
                <Hero />
                <Indicators />
                <Program />
                <Rails />
            </main>
            <div className="min-h-screen"></div>
        </>
    );
}

export default App;
