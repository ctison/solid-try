import { For } from 'solid-js'
import { createRouteMultiAction } from 'solid-start'
export default function Component() {
  const [sending, send] = createRouteMultiAction(async () => {
    await new Promise((r) => setTimeout(r, 3000))
    return 'x'
  })
  return (
    <div>
      <button onClick={() => send()}>Send</button>
      <ul>
        <For each={sending}>{(item) => <li>{item.result}</li>}</For>
      </ul>
    </div>
  )
}
