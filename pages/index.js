import React from 'react'
import PageTitle from '../components/PageTitle'

const Index = () =>{
  return(
    <div className='bg-black w-auto h-screen'>
      <PageTitle title='Aguarde' />
      <p className='text-yellow-300 font-black text-center py-80 animate-pulse'>EM BREVE</p>
    </div>
  )
}

export default Index