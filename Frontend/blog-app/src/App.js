import React from 'react';
import {Route,BrowserRouter as Router,Routes} from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import PostPage from './pages/NewPostPage.js';
import NewPostPage from './pages/NewPostPage.js';
import NavBar from './components/NavBar.js';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />

        <Route path='/posts/new' element={<NewPostPage />} />

        <Route path='/posts/:id' element={<PostPage />} />
        
      </Routes>
    </Router>
  );
}

export default App;
