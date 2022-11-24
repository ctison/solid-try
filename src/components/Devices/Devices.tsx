import {
  createAccelerometer,
  createCameras,
  createDevices,
  createGyroscope,
  createMicrophones,
  createSpeakers,
} from '@solid-primitives/devices'
import { type Component, For } from 'solid-js'

export const Devices: Component = () => {
  const accelerometer = createAccelerometer()
  const cameras = createCameras()
  const devices = createDevices()
  const gyroscope = createGyroscope()
  const microphones = createMicrophones()
  const speakers = createSpeakers()

  return (
    <section class='border-2 border-green-500'>
      <h2>Accelerometer</h2>
      <div>{`${JSON.stringify(accelerometer())}`}</div>
      <h2>Cameras</h2>
      <ul>
        <For fallback={<div>None found</div>} each={cameras()}>
          {(camera) => <li>{JSON.stringify(camera)}</li>}
        </For>
      </ul>
      <h2>Devices</h2>
      <ul>
        <For fallback={<div>None found</div>} each={devices()}>
          {(device) => <li>{JSON.stringify(device)}</li>}
        </For>
      </ul>
      <h2>Gyroscope</h2>
      <div>{`${JSON.stringify(gyroscope)}`}</div>
      <h2>Microphones</h2>
      <ul>
        <For fallback={<div>None found</div>} each={microphones()}>
          {(microphone) => <li>{JSON.stringify(microphone)}</li>}
        </For>
      </ul>
      <h2>Speakers</h2>
      <ul>
        <For fallback={<div>None found</div>} each={speakers()}>
          {(speaker) => <li>{JSON.stringify(speaker)}</li>}
        </For>
      </ul>
    </section>
  )
}
