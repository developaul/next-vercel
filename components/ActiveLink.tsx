import { CSSProperties, FC, ReactNode } from 'react';

import { useRouter } from 'next/router'
import Link from 'next/link'

const style: CSSProperties = {
  color: '#0070f3',
  textDecoration: 'underline'  
}

interface ActiveLinkProps {
  children: ReactNode;
  href: string;
}

export const ActiveLink: FC<ActiveLinkProps> = ({ children, href }) => {

  const router = useRouter()

  const { asPath } = router

  return (
    <Link style={asPath === href ? style : undefined} href={href}>
      {children}
    </Link >
  )
}
