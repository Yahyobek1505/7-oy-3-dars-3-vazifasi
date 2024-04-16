import { useRef } from "react";
import plus from "../../assets/Plus.svg";
import { useDispatch } from "react-redux";

function Form() {
  const name = useRef(null);
  const dispatch = useDispatch();
  function validate() {
    if (name.current.value.trim() < 3) {
      alert("Todo is not empy");
      return false;
    }
    return true;
  }
  function handleSubmit(e) {
    e.preventDefault();
    const isValide = validate();
    if (isValide) {
      const todo ={
        id: Date.now(),
        name:name.current.value,
        status: true
      }
      dispatch({type:"ADD_TODO", payload: todo});
      name.current.value = null;
    }
  }
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-3 mb-[59px] ">
        <input
        ref={name}
          type="text"
          placeholder="Add a new task"
          className="w-[381px] outline-none bg-transparent focus:border-emerald-50 border border-[#9e78cf] rounded-lg p-[9px] text-white text-sx"
        />
        <button className="w-[40px] p-[10px] rounded-lg bg-[#9e78cf] hover:bg-purple-950 duration-300">
          <img src={plus} alt="add item" width={22} height={22} />
        </button>
      </form>
    </>
  );
}

export default Form;
