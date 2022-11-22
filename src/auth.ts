import { createCookieSessionStorage } from 'solid-start'

export const cookie = createCookieSessionStorage({
  cookie: {
    name: 'session',
    secure: import.meta.env.PROD,
    secrets: [import.meta.env.VITE_SESSION_SECRET],
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 30, // 30 days
    httpOnly: true,
  },
})

export async function getUserId(request: Request) {
  const session = await cookie.getSession(request.headers.get('Cookie'))
  const userId = session.get('userId')
  return userId
}
