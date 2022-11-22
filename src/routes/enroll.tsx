import { createServerAction$, redirect } from 'solid-start/server'
export default function EnrollmentPage() {
  const [enrolling, { Form }] = createServerAction$(
    async (form: FormData, { request }) => {
      const subject = form.get('subject') as string
      console.log('server')
      return redirect('/enrollment')
    }
  )
  return (
    <Form>
      <input
        type='hidden'
        name='subject'
        value='Defense against the Dark Arts'
      />
      <button type='submit' disabled={enrolling.pending}>
        Enroll
      </button>
    </Form>
  )
}
