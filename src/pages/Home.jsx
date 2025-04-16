import React from 'react'
import MainLayout from '../Layout/MainLayout'
import Card from '../components/Card'
import Banner from '../components/Banner'
const Home = () => {
  return (
    <MainLayout >
     <Banner/>
       <div class="container text-center">
  <div class="row">
    <div class="col">
    <Card/>
    </div>
    <div class="col">
    <Card/>
    </div>
    <div class="col">
    <Card/>
    </div>
    <div class="col">
    <Card/>
    </div>
    <div class="col">
    <Card/>
    </div>
  </div>
</div>
    </MainLayout>
  )
}

export default Home