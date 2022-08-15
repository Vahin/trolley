import "./App.css";
import { Rails } from "./components/Rails/Rails";
import { Hero } from "./components/Hero/Hero";
import { Indicators } from "./components/Indicators/Indicators";
import { Program } from "./components/Program/Program";

function App() {
    return (
        <>
            <main className="bg-[url('./img/lines.svg')] bg-repeat-y bg-center bg-[1501px]">
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
