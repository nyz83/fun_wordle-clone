import Header from "./components/Header";
import Game from "./components/Game";

function App() {
  return (
    <>
      <Header />
      <main className="mx-auto h-96 min-w-64 max-w-md gap-2 px-8 py-2 md:gap-4">
        <Game />
      </main>
    </>
  );
}

export default App;
