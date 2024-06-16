import Link from 'next/link'
import React from 'react'

const LinkBtn = ({title, url}:any) => {
  return (
    <Link href={url} className='custom-btn'>
      {title}
    </Link>
  )
}

export default LinkBtn
