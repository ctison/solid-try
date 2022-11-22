import { Component, createEffect } from 'solid-js'
import { Application } from '@splinetool/runtime'

export const Keyboard: Component = () => {
  let canvas: HTMLCanvasElement

  createEffect(() => {
    const spline = new Application(canvas)
    spline.load('https://prod.spline.design/0LZWfTLCGR7s8LpX/scene.splinecode')
  })

  return <canvas ref={canvas} />
}

export default Keyboard
