'use client'

import dynamic from 'next/dynamic';

const BasketComponent = dynamic(() => {
  return import('../components/templates/BasketComponent')
}, { ssr: false })

export default function Basket() {
  return <BasketComponent />
}