import React from 'react'
import { HomeHowToUseContents } from '../organisms/HomeHowToUseContents'

export const HomeHowToUse = () => {
  return (
    <div>
      <h1 className='py-16 text-3xl lg:text-4xl'>
        夜ごはんのメニューを一週間分 
        <br/>管理しやすくするアプリ
      </h1>
      <h2 className='py-16 text-2xl lg:text-3xl'>使い方</h2>
      <section>
        <div className='flex justify-center'>
          <HomeHowToUseContents />
        </div>
      </section>
    </div>
  )
}
