import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { useState } from "react";

export const dummy =
[
    {
        id:1,
        txt:'스쿼트'
    },
    {
        id:2,
        txt:'벤치프레스'
    },
    {
        id:3,
        txt:'데드리프트'
    },
]

function App() {
  const [data, setData] = useState(dummy);

console.log(data)
function addlist(valueref)
{
  console.log(valueref, 'App.js')
const newTodo = {
  id: Math.random(),
  txt: valueref
}

  setData(매개변수=>  [...매개변수, newTodo])
}
  
  return (
  <div>
    <TodoList todo={data} />
    <TodoForm todooadd={addlist}/>
  </div>
  );
}

export default App;


// 투두 리스트
// [state, useState] = useState([]) - 데이터베이스 대신
// 배열에 추가하고 삭제하고 수정하고
// 1. 배열 담는 컴포넌트
// 2. 입력하는 컴포넌트