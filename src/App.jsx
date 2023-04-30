import { ShowTodoList } from "./components/ShowTodo";
import {Routes , Route} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<ShowTodoList />} />
      </Routes>
    </div>
  );
}

export default App;
