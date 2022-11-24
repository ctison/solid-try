import { A } from 'solid-start'
import { SiGithub, SiDevdotto, SiElement } from 'solid-icons/si'
import { Button } from './Button'
import type { Component } from 'solid-js'

export const Header: Component = () => {
  return (
    <header class='h-[60px] bg-bg-light-400 flex justify-between items-center p-4'>
      <A href='/' class='font-medium text-lg text-amber-400'>
        @ctison
      </A>
      <div class='flex gap-2.5'>
        <Button href='https://github.com/ctison'>
          <SiGithub size={20} />
        </Button>
        <Button href='https://dev.to/ctison'>
          <SiDevdotto size={20} />
        </Button>
        <Button href='https://matrix.to/#/@ctison:matrix.org'>
          <SiElement size={20} />
        </Button>
      </div>
    </header>
  )
}
