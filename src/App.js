import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import CourseItem from './components/course/CourseItem';
// import CourseListCard from './components/course/CourseListCard';
import Library from './components/step01/Library';
import Profile from './components/step02/Profile';
import CourseListCard from './components/step04/CourseListCard';



function App() {
  const items = [
    {
      subject: '입문자를 위한, HTML&CSS 웹 개발 입문',
      content: '웹 개발에 필요한 기본 지식을 배웁니다.',
      imgSrc: '/img/tree-1.jpf',
    },
    {
      title: '입문자를 위한, ES6+ 최신 자바스크립트 입문',
      description: '쉽고! 알찬! 내용을 준비했습니다.',
      imgSrc: '/img/js.png',
    },
    {
      title: '포트폴리오 사이트 만들고 배포까지!',
      description: '포트폴리오 사이트를 만들고 배포해 보세요.',
      imgSrc: '/img/portfolio.png',
    }
  ]
 
  // 조건부 렌더링: if, &&, 삼항연산자(? 참일때 실해문: 거짓일때 실행문)
  const stateChk = true;
  return (
    <div className='App'>
      {stateChk ? <h2>Hello, Im true</h2> : <h2>not Hello, Im false</h2>}
    </div>

  );
}

export default App;
