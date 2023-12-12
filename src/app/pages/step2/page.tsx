import type { Metadata } from 'next';
import Form from '../../components/Form/Step2Form'

export const metadata: Metadata = {
  title: 'step 2',
}

export default function Step2() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-10 mt-32">
      <Form />
    </div>
  )
}
