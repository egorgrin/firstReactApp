import './App.css';
import '../node_modules/reset-css/reset.css';
import '../node_modules/normalize.css/normalize.css';

function App() {
  return (
    <div className="app-wrapper">
      <header className="header">
        {/* <img src="https://dummyimage.com/250x60/b0b0b0/fff.png" alt="" /> */}
        <h1>LogoName</h1>
      </header>

      <aside className="sidebar">
        <div>
          <ul>
            <li>
              <a href="#">Profile</a>
            </li>
            <li>
              <a href="#">Messages</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">Music</a>
            </li>
          </ul>
        </div>
      </aside>

      <section className="content">
        <h1>Hello world!</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias eum
          delectus ratione quaerat quis! Quasi quod, vero voluptas maxime
          quaerat itaque odio esse modi excepturi, officiis asperiores
          accusantium architecto ut qui sint necessitatibus est veniam magni
          numquam adipisci. Tempore, molestias!
        </p>
        <h3>Bye world!</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. In ullam
          dolores odio eum ea enim hic, explicabo itaque eos fuga aliquam
          nostrum debitis unde! Exercitationem labore sequi adipisci. Iste
          similique molestiae ab porro facilis mollitia aliquid, nisi
          consequuntur nam aspernatur?
        </p>
      </section>

      <footer className="footer">Copyright</footer>
    </div>
  );
}

export default App;
