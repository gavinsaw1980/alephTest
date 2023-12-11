import type { Metadata } from 'next';
import Form from '../../components/Form/SubmitDataForm'

export const metadata: Metadata = {
  title: 'Submit Data to Json',
}

export default function Store() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24 mt-32">
      <Form />
    </div>
  )
}
