import './App.css';
import React from 'react';
import ButtonCompo from "./components/ButtonComponent";
import PostList from './components/PostList';
function App() {
  return (
    <React.Fragment>
      <div className="container-fluid">
        <ButtonCompo />
        <br></br>
        <PostList />
      </div>
    </React.Fragment>
  );
}

export default App;
