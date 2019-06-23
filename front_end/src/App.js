import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  componentDidMount() {
   axios
     .get(`${this.host}todos`)
     .then(res => {
       console.log(res.data)
     })
     .catch(data => {
       console.log(data)
     })
 }

// export default App;
