import './App.css';
import AddField from "./components/AddField/AddField";

function App() {
    return (
        <div className="App">
            <header>
                <h2>
                    Live Football World Cup Scoreboard
                </h2>
            </header>
            <main>
                <AddField />
            </main>
        </div>
    );
}

export default App;
