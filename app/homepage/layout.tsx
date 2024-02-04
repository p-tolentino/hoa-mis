'use client'

import Navbar from '../components/homepage-components/Navbar'
import Footer from '../components/homepage-components/Footer'

import React from 'react'

export default function HomepageLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
