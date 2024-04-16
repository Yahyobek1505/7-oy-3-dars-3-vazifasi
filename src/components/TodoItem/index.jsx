import { useDispatch } from "react-redux";
import done from "../../assets/done.svg";
import trash from "../../assets/trash.svg";
import undo from "../../assets/undo.svg";
function TodoItem(props) {
  const { title, status, id } = props;

  const dispatch = useDispatch()
  function handleDone() {
    dispatch({type: "CHECK_STATUS", payload: {id: id, status: false}})
  }
  function handleUndo() {
    dispatch({type: "CHECK_STATUS", payload: {id: id, status: true}})
  }
  function handleDelete() {
    const isDelete = confirm("Do you wont delete this to do?")
    if (isDelete) {
      dispatch({type: "DELETE_TODO", payload: id})
    }
  }
  return (
    <div className="bg-[#15101c] flex justify-between items-center p-[22px] rounded-lg mb-4">
      <p
        className={`${
          status ? "text-[#9E78CF]" : "text-[#78cfb0] line-through"
        }`}>
        {title}
      </p>
      <div className="flex  items-center gap-4">
        {status && (
          <>
            <span className="hover:opacity-40 duration-300 cursor-pointer" onClick={handleDone}>
              <img
                src={done}
                alt="done"
                width={20}
                height={20}
                
              />
            </span>
            <span className="hover:opacity-40 duration-300 cursor-pointer" onClick={handleDelete}>
              <img
                src={trash}
                alt="trash"
                width={20}
                height={20}
                
              />
            </span>
          </>
        )}
        {
          !status && (
            <>
            <span className="hover:opacity-40 duration-300 cursor-pointer" onClick={handleUndo}>
              <img
                src={undo}
                alt="trash"
                width={30}
                height={30}
                
              />
            </span>
            </>
          )
        }
      </div>
    </div>
  );
}

export default TodoItem;
