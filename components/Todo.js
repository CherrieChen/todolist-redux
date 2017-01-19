const Todo = ({onTodoClick,text,completed}) => {
    <li onClick={onTodoClick}
        style={{textDecoration:completed? "line-through" : "none"}}>
        {text}
    </li>
};

export {Todo};