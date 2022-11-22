import { createMemo, For } from 'solid-js'
import { createMutable, createStore, produce } from 'solid-js/store'

export default function () {
  const fullName = createMemo(
    () => `${store.user.firstName} ${store.user.lastName}`
  )
  const [store, setStore] = createStore({
    user: {
      firstName: 'Sarah',
      lastName: 'Connor',
      get fullName(): string {
        console.log('Get fullName')
        return fullName()
      },
    },
  })

  const [array, setArray] = createStore([1, 2, 3])

  const mutable = createMutable([1, 2, 3])

  return (
    <>
      <div>{store.user.firstName}</div>
      <div>{store.user.lastName}</div>
      <div>{store.user.fullName}</div>
      <div>{store.user.fullName}</div>
      <div>{store.user.fullName}</div>

      <button
        onClick={() => {
          setStore('user', 'firstName', (name) =>
            name === 'Sarah' ? 'Alice' : 'Sarah'
          )
        }}
      >
        Set name
      </button>

      <button
        onClick={() => {
          setStore(
            produce((a) => {
              a.user.firstName = a.user.firstName === 'Sarah' ? 'Bob' : 'Sarah'
            })
          )
        }}
      >
        Set name with `produce`
      </button>

      <ul>
        <For each={array}>
          {(item) => {
            return <li>{`${item}`}</li>
          }}
        </For>
      </ul>

      <button
        onClick={() => {
          setArray((a) => {
            a.push(a.length + 1)
            return a
          })
        }}
      >
        Increase
      </button>

      <button
        onClick={() => {
          setArray((a) => a.concat(a.length + 1))
        }}
      >
        Concat
      </button>

      <ul>
        <For each={mutable}>
          {(item) => {
            return <li>{item}</li>
          }}
        </For>
      </ul>
      <button
        onClick={() => {
          mutable.push(mutable.length + 1)
        }}
      >
        Mutate increase
      </button>
    </>
  )
}
