import { CreateTodo } from "./components/CreateTodo";
import { ShowTodoList } from "./components/ShowTodo";
import {Routes , Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" component={ShowTodoList} />

        <Route path="/create-todo" component={CreateTodo} />
      </Routes>
    </div>
  );
}

export default App;
