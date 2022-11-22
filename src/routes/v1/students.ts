import { APIEvent } from 'solid-start'

export function GET(event: APIEvent) {
  return new Response('Hello World')
}
