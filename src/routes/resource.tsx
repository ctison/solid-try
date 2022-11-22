import {
  createEffect,
  createResource,
  ErrorBoundary,
  onCleanup,
  Suspense,
} from 'solid-js'
import { isServer } from 'solid-js/web'

export default function () {
  const [data, { mutate, refetch }] = createResource<string, string>(
    // eslint-disable-next-line solid/reactivity
    async (x, info) => {
      console.log('Server:', isServer)
      console.log(`${x}`)
      console.log(info.value, info.refetching)
      await new Promise((r) => setTimeout(r, 3000))
      // throw new Error('failure :D')
      return 'OK'
    },
    {
      // initialValue: 'KO',
      name: undefined,
      // deferStream: true,
      // ssrLoadFrom: 'initial',
      storage: undefined,
      onHydrated: (k, info) => {
        console.log(info)
        refetch()
      },
    }
  )

  createEffect(() => {
    console.log(data())
  })

  createEffect(() => {
    console.log('Mounted')
  })

  onCleanup(() => {
    console.log('Unmounting')
  })

  return (
    <>
      <div>State: {data.state}</div>
      <div>Loading: {`${data.loading}`}</div>
      <ErrorBoundary fallback={(err) => <div>{`${err}`}</div>}>
        <Suspense fallback={<div>Loading ⭐️⭐️⭐️⭐️⭐️</div>}>
          <div>{data()}</div>
        </Suspense>
      </ErrorBoundary>
      <button onClick={() => refetch('XD')}>Refetch</button>
      <button onClick={() => mutate('BLOB')}>Mutate</button>
    </>
  )
}
