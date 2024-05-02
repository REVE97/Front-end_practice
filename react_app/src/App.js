// command keyword 정리
// App 실행 : npm start
// 서버 Build : npm run build
// 서버 배포 : npx serve -s build
// 작업 중지 : crtl + c

// props : 속성
// 함수 매개변수 값에 props 를 추가해서 사용
// 태그에 속성을 추가하여 함수에 적용함

// event 기능
// 함수 매개변수 값에 event 를 추가해서 사용
// onChangeMode 라는 props 를 사용해서 구현

// state 

import logo from './logo.svg';
import './App.css';
import {useState} from 'react';    // state 를 사용하기 위해 임포트   

function Header(props){
  return <header>
  <h1><a href="/" onClick={(event)=>{
    event.preventDefault();      // a 태그의 href 링크로 이동하지 않게 하는 합수 
    props.onChangeMode();
      }}>{props.title}</a></h1>
</header>
}

function Nav(props){
  const lis = []
  for(let i=0; i<props.topics.length; i++){
    let t = props.topics[i];
    lis.push(<li key={t.id}><a id = {t.id} href={'/read/'+t.id} onClick={(event)=>{
      event.preventDefault();
      props.onChangeMode(Number(event.target.id));     // id 값을 문자열에서 숫자로 converting
    }}>{t.title}</a>
    </li>);
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
  // const _mode = useState('WELCOME');    
  // const mode = _mode[0];
  // const setMode = _mode[1];
  const [mode, setMode] = useState('WELCOME');   // state 구현, 위의 문법과 기능은 똑같음 // mode 의 이름은 사용자가 임의로 지정가능
  const [id,setId] = useState(null); 
  
  const topics = [
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javascript', body:'javascript is ...'}
  ]
  
  let content = null;
  if(mode === 'WELCOME'){
    content = <Article title="Welcome" body="Hello, WEB"></Article>
  } else if (mode === 'READ'){
    let title, body = null;
    for(let i =0; i<topics.length; i++){       // idState 와 topics 가 일치하는 값을 찾음
      if(topics[i].id === id){
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>
  }
  
  return (
    <div className="App">
      
      <Header title="WEB" onChangeMode={()=>{
       setMode('WELCOME');          // state 구현   
      }}></Header>

      <Nav topics={topics} onChangeMode={(id)=>{
        setMode('READ');            // state 구현 
        setId(id);
      }}></Nav>

      {content}

    </div>
  );
}

export default App;
