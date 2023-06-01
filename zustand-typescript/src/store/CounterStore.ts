import create from 'zustand'; // Este create funciona como el useState de react


interface Post {
    id: number
    title: string
    body: string
}
interface CounterState {
    count: number
    title: string
    posts: Post[]
    increment: (value: number) => void
    getPosts: () => Promise<void>
}

export const useCounterStore = create<CounterState>((set) => ({
    count: 10,
    title: "Some title",
    posts: [],
    increment: (value:number) => set(state => ({
        count: state.count + value
    })),
    getPosts:async () => {
        // const res = await fetch("https://jsonplaceholder.typicode.com/posts"); 1era forma de hacer una fetch
        // const pots = await res.json();
        // console.log(pots);

        // 2da forma
        const posts = await (await fetch("https://jsonplaceholder.typicode.com/posts")).json()
        console.log(posts);
        set(state => ({
            ...state,
            posts
        }))
    }
}))

// Este custom hook se hace para pasar en toda la app estados de manera global.
// Investigar sobre interface en typescript

