import { useEffect } from 'react';
import { useCounterStore } from './store/CounterStore';
import { shallow } from 'zustand/shallow'; // Shallow, con esto podemos comparar un objeto con otro objeto


export const App = () => {
  
  // const count = useCounterStore((state) => state.count ); // Invocacion para manipulacion de datos
  // const title = useCounterStore((state) => state.title ); // Invocacion para manipulacion de datos

  const { title, count, posts} = useCounterStore((state) => ({

    count: state.count,
    title: state.title,
    posts: state.posts

  }), shallow)

  // const increment = useCounterStore(state => state.increment); // 1RA FORMA DE ACCEDER AL INCREMENT
  const { increment, getPosts, clearStore, multiply } = useCounterStore();

  const handleIncremento = () => {
    increment(5);
  }

  useEffect(() => {
    getPosts();
  }, [])

  return (
    <>
      <div>
        <h1>{title}: {count}</h1>

        <button
          onClick={handleIncremento}
        >
          Increment by:5
        </button>

        <button onClick={() => multiply(2)}>
          multiplicar by 2
        </button>

        <button onClick={() => clearStore()}>
          clear
        </button>

        <hr />

        {JSON.stringify(posts)}
      </div>
    </>
  )
}