import React,{Component} from 'react';
// import classes from './App.module.css';
import Layout from '../hoc/layouts/layouts';
import BurgerBuilder from './BurgerBuilder/BurgerBuilder';

class App extends Component {
  render() {
    return (
      <div>
       <Layout>
         <BurgerBuilder /> 
       </Layout>
      </div>
    );
  }
}

export default App;
