import React from 'react'
import Btn from './Btn';

export default function Modal({text, onClick}) {
  return (
    <section className='px-12 py-6 bg-primary-yellow border-solid border-2 border-secondary-green rounded-3xl flex flex-col items-center justify-center' onClick={onClick}>
        <h3 className='text-xl text-quaternary-blue text-center p-4'>{text}</h3>
        <div className='flex gap-6'>
        </div>
    </section>
  )
}