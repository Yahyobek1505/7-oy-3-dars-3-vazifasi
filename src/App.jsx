import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
const App = () => {
  const name = useRef(null);
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  const validate = () => {
    if (name.current.value.trim() < 3) {
      alert("Name is not validate!");
      return false;
    }
    return true;
  };
  function handleSubmit(e) {
    e.preventDefault();
    console.log(name.current.value);
    const isValid = validate();
    if (isValid) {
      const todo = {
        name: name.current.value,
        id: Date.now(),
      };
      dispatch({ type: "ADD_TODO", payload: todo });
      name.current.value = null;
    }
  }
  function handleDelete(id) {
    let isDelete = confirm("Do you won to delete this todo");
    if (isDelete) {
      dispatch({ type: "DELETE_TODO", payload: id });
    }
  }
  return (
    <>
      <div className="w-full h-full bg-[#0D0714]">
        <div className="form-section pt-6 w-4/5 mx-auto">
          <h1 className="text-center text-white font-bold text-2xl mb-2">
            {" "}
            Tasks list{" "}
          </h1>
          <form
            onSubmit={handleSubmit}
            className="flex w-1/2 mx-auto gap-2  p-4 bg-transparent">
            <input
              ref={name}
              type="text"
              className="border text-slate-200 text-xl border-solid-4 w-3/4 px-2 ml-5 outline-grey-100 py-2 border-purple-800  bg-transparent rounded"
              placeholder="Add a new task"
            />
            <button className="bg-purple-500 cursor-pointer w-[60px] font-bold mx-auto rounded-md  text-slate-100 hover:bg-blue-900 duration-300">
              <h1 className="text-4xl pb-1.5">+</h1>
            </button>
          </form>
        </div>
        <div className="pt-4 w-full">
          <div className="w-[35%] mx-auto  ">
              {todos.length > 0 &&
                todos.map((todo, index) => {
                  return (
                    
                    <div key={index} className="flex text-purple-500 px-10 justify-between items-center rounded-lg bg-[#191122] py-6 mb-4">
                      <div className=" text-center flex gap-4 items-center">
                        <input type="checkbox" className="cursor-pointer"/>
                        {todo.name}
                      </div>
                      <div className="flex gap-4 justify-center">
                        <FaEdit className="cursor-pointer text-blue-600 hover:text-blue-900 transform duration-300" />
                        <FaTrashAlt
                          onClick={() => {
                            handleDelete(todo.id);
                          }}
                          className="cursor-pointer  text-purple-600 hover:text-purple-900 transform duration-300 "
                        />
                      </div>
                    </div>
                  );
                })}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
