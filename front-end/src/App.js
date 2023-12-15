import './App.css';
import { Header } from './component/Header';
import { Article } from './component/Article';
import { Footer } from './component/Footer';
import { Sidebar } from './component/Sidebar';
// functional based component : JSX
function App() {
// LOGIC for this component 
  console.log('App.js');

  return (
    <div className='container'>
      
      <div >
        <Header/>
      </div>

      <aside className="sidebar">
        <Sidebar/>
      </aside>

      <section className='main-content'>
        <article className='articles'>
          <Article />
        </article>
      </section>

      <footer className="footer">
        <Footer/>
      </footer>
    </div>

  );
}

export default App;
