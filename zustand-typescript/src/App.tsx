import { useCounterStore } from './store/CounterStore';


export const App = () => {
  
  // const count = useCounterStore((state) => state.count ); // Invocacion para manipulacion de datos
  // const title = useCounterStore((state) => state.title ); // Invocacion para manipulacion de datos

  const values = useCounterStore((state) => ({

    count: state.count,
    title: state.title,

  }))
  console.log(values);
  return (
    <>
      <div>
        <h1></h1>
      </div>
    </>
  )
}