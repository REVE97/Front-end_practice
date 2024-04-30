// command keyword 정리
// App 실행 : npm start
// 서버 Build : npm run build
// 서버 배포 : npx serve -s build
// 작업 중지 : crtl + c 

import logo from './logo.svg';
import './App.css';

function Header(){
  return <header>
  <h1><a href="/">WEB</a></h1>
</header>
}

function Nav(){
  return <nav>
  <ol>
    <li><a href="/read/1">html</a></li>
    <li><a href="/read/2">css</a></li>
    <li><a href="/read/3">js</a></li>
  </ol>
</nav>
}

function Article(){
  return <article>
  <h2>Welcome</h2>
  Hello, WEB
</article>
}

function App() {
  return (
    <div className="App">
      
      
      
      <Header></Header>

      <Nav></Nav>

      <Article></Article>

    </div>
  );
}

export default App;
