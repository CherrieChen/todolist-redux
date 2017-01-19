import {AddTodo} from '../containers/AddTodo';
import {VisibilityTodoList} from '../containers/visibilityTodoList';
import {Footer} from '../components/Footer';

const App = () => (
    <div>
        <AddTodo/>
        <VisibilityTodoList/>
        <Footer/>
    </div>
);

export {App};