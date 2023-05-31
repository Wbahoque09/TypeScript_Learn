import { useCounterStore } from './store/CounterStore';
import { shallow } from 'zustand/shallow'; // Shallow, con esto podemos comparar un objeto con otro objeto


export const App = () => {
  
  // const count = useCounterStore((state) => state.count ); // Invocacion para manipulacion de datos
  // const title = useCounterStore((state) => state.title ); // Invocacion para manipulacion de datos

  const { title, count} = useCounterStore((state) => ({

    count: state.count,
    title: state.title,

  }), shallow)

  return (
    <>
      <div>
        <h1>{title}: {count}</h1>
      </div>
    </>
  )
}