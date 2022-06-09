import { useRef } from "react"

const TodoForm = (props) => {
    const inputref=useRef();
    // 이벤트가 발생했을 때 inputref의 value
    const Add = ()=>
    {
        const valueref= inputref.current.value;
        console.log(valueref, 'TodoForm.js');
        props.todooadd(valueref)
    }
    
  return (
    <div>
        <label>
            <input ref={inputref}  type="text" />
            <button onClick={Add}>추가</button>
        </label>
    </div>
  )
}

export default TodoForm

// 새로운 투두 작성