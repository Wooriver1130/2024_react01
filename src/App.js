import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import CourseItem from './components/course/CourseItem';
// import CourseListCard from './components/course/CourseListCard';
import Library from './components/step01/Library';
import Profile from './components/step02/Profile';
import CourseListCard from './components/step04/CourseListCard';
import PackingList from './components/step05/PackingList';
import peopleList from './components/step06/peopleList';
import People2 from './components/step06/People2';
import People3 from './components/step06/People3';
import Event01 from './components/step07/Event01';
import Event02 from './components/step07/Event02';
import CourseListCard08 from './components/step08/CourseListCard08';
import Count from './components/step08/Count';



function App() {
  const items = [
    {
      id: "1" , 
      subject: "제목1", 
      content: "내용1", 
      isFavorite: "true"
    }, 
    {
      id: "2" , 
      subject: "제목2", 
      content: "내용2", 
      isFavorite: "false"
    }, 
    {
      id: "3" , 
      subject: "제목3", 
      content: "내용3", 
      isFavorite: "true"
    }
  ]
  return (
    <div className='App'>
        <Event01 />
        <hr />
        <Event02 />
        <CourseListCard08 items={items} />
        <hr />
        <Count />
        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> 
    </div>

  );
}

export default App;
