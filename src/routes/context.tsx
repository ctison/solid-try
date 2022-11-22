import { Component, createContext, ParentComponent, useContext } from 'solid-js'
import { createStore } from 'solid-js/store'

export const C: Component = () => {
  const [state, { increment, decrement }] = useContext(CounterContext)
  return (
    <>
      <div>{state.count}</div>
      <button onClick={() => increment()}>+</button>
      <button onClick={() => decrement()}>-</button>
    </>
  )
}

type CounterContext = [
  {
    count: number
  },
  {
    increment: () => void
    decrement: () => void
  }
]

export const CounterContext = createContext<CounterContext>([
  { count: 0 },
  { increment: null, decrement: null },
])

export const CounterProvider: ParentComponent<{ count?: number }> = (props) => {
  // eslint-disable-next-line solid/reactivity
  const [state, setState] = createStore({ count: props.count ?? 0 })

  const counter: CounterContext = [
    state,

    {
      increment: () => {
        setState('count', (c) => c + 1)
      },

      decrement: () => {
        setState('count', (c) => c - 1)
      },
    },
  ]

  return (
    <CounterContext.Provider value={counter}>
      {props.children}
    </CounterContext.Provider>
  )
}

export default function () {
  return (
    <>
      <CounterProvider>
        <C />
      </CounterProvider>
      <C />
    </>
  )
}
