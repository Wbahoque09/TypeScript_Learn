import create from 'zustand'; // Este create funciona como el useState de react

interface CounterState {
    count: number
    title: string
}

export const useCounterStore = create<CounterState>(() => ({
    count: 10,
    title: "Some title"
}))

// Este custom hook se hace para pasar en toda la app estados de manera global.
// Investigar sobre interface en typescript

