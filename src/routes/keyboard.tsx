import { lazy, Suspense } from 'solid-js'

const Keyboard = lazy(() => import('~/components/Keyboard'))

export default function () {
  return (
    <div
      style={{
        height: '1024px',
        background:
          'black radial-gradient(rgba(255,255,255,0.2) 8%, transparent 8%)',
        'background-position': '0% 0%',
        'background-size': '5vmin 5vmin',
        position: 'relative',
      }}
    >
      <h1
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          'text-align': 'center',
          'padding-top': '64px',
          'pointer-events': 'none',
          'user-select': 'none',
          'font-size': '3.5rem',
          color: 'white',
        }}
      >
        Don't trust the user input
      </h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Keyboard />
      </Suspense>
    </div>
  )
}
