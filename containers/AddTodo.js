import {connect} from "react-redux";
import {addTodo} from "../actions";

let AddTodo = ({dispatch}) => {
    var input;
    return (
        <div>
            <form onsubmit={e => {
                e.preventDefault();
                if(!input.value.trim()){return false;}
                dispatch(addTodo);
            }}>
                <input ref={node => {input = node}}/>
                <button type="submit">
                    Add Todo
                </button>
            </form>
        </div>
    );
}
AddTodo = connect()(AddTodo);

export {AddTodo};