
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import AllPosts from './pages/posts/AllPosts';
import AddPost from './pages/posts/AddPost';
import SinglePost from './pages/posts/SinglePost';

import Team1 from './images/team-1.jpeg'
import Team2 from './images/team-2.jpeg'
import Team3 from './images/team-3.jpeg'
function App() {
  const posts = [
    {
        id :1,
        title : 'post one',
        desc : 'Lorem ipsum dolor sit amet.',
        img : Team1
    },
    {
        id :2,
        title : 'post two',
        desc : 'Lorem ipsum dolor sit amet.',
        img : Team2
    },
    {
        id :3,
        title : 'post three',
        desc : 'Lorem ipsum dolor sit amet.',
        img : Team3
    },
    {
        id :4,
        title : 'post four',
        desc : 'Lorem ipsum dolor sit amet.',
        img : Team2
    },
    {
        id :5,
        title : 'post five',
        desc : 'Lorem ipsum dolor sit amet.',
        img : Team1
    },
    {
        id :6,
        title : 'post six',
        desc : 'Lorem ipsum dolor sit amet.',
        img : Team3
    },
    {
        id :7,
        title : 'post seven',
        desc : 'Lorem ipsum dolor sit amet.',
        img : Team2
    },
    {
        id :8,
        title : 'post eight',
        desc : 'Lorem ipsum dolor sit amet.',
        img : Team3
    },
];
  return (
    <div className="App">
      {/* NavBar */}
      <Navbar/>
      <main>
        <Routes>
          <Route path='/' element={<Home posts={posts} path='posts/single-post'/>}/>
          <Route path='posts' element={<AllPosts posts={posts} path='single-post'/>}/>
          <Route path='posts/add-post' element={<AddPost/>}/>
          <Route path='posts/single-post' element={<SinglePost/>}/>
        </Routes>
      </main>
      {/* Footer */}
      <Footer/>
    </div>
  );
}

export default App;
