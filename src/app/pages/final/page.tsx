import type { Metadata } from 'next';
import DisplayData from '../../components/DisplayData/DisplayData';

export const metadata: Metadata = {
    title: 'Final Display',
}

export default function Display() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24 mt-32">
        <DisplayData />
    </div>
  )
}