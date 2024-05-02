// command keyword 정리
// App 실행 : npm start
// 서버 Build : npm run build
// 서버 배포 : npx serve -s build
// 작업 중지 : crtl + c

// props : 속성
// 함수 매개변수 값에 props 를 추가해서 사용
// 태그에 속성을 추가하여 함수에 적용함

import logo from './logo.svg';
import './App.css';

function Header(props){
  return <header>
  <h1><a href="/">{props.title}</a></h1>
</header>
}

function Nav(props){
  const lis = []
  for(let i=0; i<props.topics.length; i++){
    let t = props.topics[i];
    lis.push(<li key={t.id}><a href={'/read/'+t.id}>{t.title}</a></li>);
  }
  return <nav>
  <ol>
    {lis}
  </ol>
</nav>
}

function Article(props){
  return <article>
  <h2>{props.title}</h2>
  {props.body}
</article>
}

function App() {
  const topics = [
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javascript', body:'javascript is ...'}
  ]
  return (
    <div className="App">
      
      <Header title="WEB"></Header>

      <Nav topics={topics}></Nav>

      <Article title="Welcome" body="Hello, WEB"></Article>

    </div>
  );
}

export default App;
