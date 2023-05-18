import Link from 'next/link'

import { MainLayout } from '../components/layouts/MainLayout'


export default function Home() {
  return (
    <MainLayout>
        <h1>Home</h1>
        <div className='description'>
          <h1>
            Ir a <Link href='/about'>About</Link>
          </h1>
        </div>
    </MainLayout>
  )
}
