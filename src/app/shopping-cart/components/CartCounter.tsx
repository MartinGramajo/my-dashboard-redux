'use client'
import { useAppDispatch, useAppSelector } from "@/store";
import { addOne, initCounterState, substractOne } from "@/store/counter/counterSlice";
import { useEffect } from "react";

interface Props {
  value?: number;
}


export const CartCounter = ({ value = 0 }: Props) => {

  // const [counter, setCounter] = useState(value);

  // hacemos uso de nuestro state global con el hook useAppSelector
  const count = useAppSelector( state => state.counter.count)

  // ahora tomamos el dispatch  con el hook useAppDispatch
  const dispatch = useAppDispatch()


  // hacemos uso de la nueva acción
  useEffect(() => {
    dispatch(initCounterState(value));
  }, [dispatch, value]);

  return (
    <div className="flex flex-col items-center justify-center ">
      <span className="text-9xl">
        {count}
      </span>
      <div className="flex">
        <button className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2 "
          onClick={() => dispatch(addOne())}
        >+1</button>
        <button className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2 " onClick={() => dispatch( substractOne())}>-1</button>
      </div>
    </div>
  )
}
