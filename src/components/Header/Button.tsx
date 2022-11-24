import type { ParentComponent } from 'solid-js'
import { A } from 'solid-start'

export interface ButtonProps {
  href: string
}

export const Button: ParentComponent<ButtonProps> = (props) => {
  return (
    <A
      href={props.href}
      target='_blank'
      rel='noreferrer'
      class='cursor-pointer border border-neutral-200 rounded-lg w-8 h-8 flex justify-center items-center hover:bg-neutral-100'
    >
      {props.children}
    </A>
  )
}
