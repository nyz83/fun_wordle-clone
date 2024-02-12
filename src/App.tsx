import Header from './components/Header';
import Game from './components/Game';

function App() {
  return (
    <div className='flex min-h-full flex-col'>
      <Header />
      <main className='mx-auto flex min-w-64 flex-1 flex-col gap-2 px-8 py-2 md:gap-4 md:py-6'>
        <Game />
      </main>
    </div>
  );
}

export default App;
