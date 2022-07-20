import { Switch, Route, Link } from '@modern-js/runtime/router';
import Counter from './Count';
import './App.css';

const App = ({ callback }: { callback: any }) => {
  return (
    <>
      test ssssssr
      <div ref={callback}></div>
      <Link to="/count">count</Link>
      <Switch>
        <Route exact={true} path="/" />
        <Route path="/count">
          <Counter />
        </Route>
        <Route path="*">
          <div>404</div>
        </Route>
      </Switch>
    </>
  );
};

export default App;
