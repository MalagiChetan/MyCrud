import './App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Input from './component/Input';
import TableDisplay from './component/TableDisplay';

function App() {


  return (
    <div className="App" >
      <Router>
        <Link to='/add-data' className='link'>Add Data</Link>
        <Link to='/table-display' className='link'>Table Display</Link>
        <Route exact={true} path='/' render={(props) => {
          return <div>
            <br /><br />
            <br /><br />
            <h1>Hello</h1>
            <br /><br />
            <h3>Welcome User!!</h3>
          </div>
        }} />
        <Route exact path='/add-data' component={Input} />
        <Route exact path='/table-display' component={TableDisplay} />
      </Router>
    </div>
  );
}

export default App;
