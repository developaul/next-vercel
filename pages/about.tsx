
import { ReactNode } from 'react'
import { DarkLayout } from '../components/layouts/DarkLayout'
import { MainLayout } from '../components/layouts/MainLayout'
import Link from 'next/link'


export default function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <div className='description'>
        <h1>
          Ir a <Link href='/'>Home</Link>
        </h1>
      </div>
    </>
  )
}

AboutPage.getLayout = function getLayout(page: ReactNode) {
  return (
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  )
}