import { For, Suspense } from 'solid-js'
import { createRouteData, refetchRouteData, useRouteData } from 'solid-start'

type Data = {
  name: string
}[]

export function routeData() {
  const data = createRouteData<Data>(
    async () => {
      await new Promise((r) => setTimeout(r, 3000))
      const response = await fetch('https://hogwarts.deno.dev/students')
      return await response.json()
    },
    {
      // ssrLoadFrom: 'initial',
      // deferStream: false,
    }
  )
  return data
}

export default function () {
  const data = useRouteData<typeof routeData>()
  console.log(data)
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <ul>
          <For each={data()}>
            {(item) => {
              return <li>{item.name}</li>
            }}
          </For>
        </ul>
      </Suspense>
      <button onClick={() => refetchRouteData()}>Refetch route data</button>
    </>
  )
}
