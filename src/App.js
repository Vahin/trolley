import "./App.css";
import { Rails } from "./components/Rails/Rails";
import scroll from "./img/Scroll-down.svg";

function App() {
    return (
        <>
            <div className="min-h-screen flex justify-center items-center">
                <img src={scroll} alt="Листайте вниз" aria-hidden="true" className="w-10 motion-safe:animate-bounce" />
            </div>

            <main>
                <Rails />
            </main>
            <div className="min-h-screen"></div>
        </>
    );
}

export default App;
