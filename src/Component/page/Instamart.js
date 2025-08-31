 import React from 'react'
 
 import  { Section } from './Profile'
  import  {Profiles } from './Profile'
  import {   Sidebar } from './Profile'

 const Instamart = ({props}) => {
   return (
     <div className='flex flex-col gap-2 mx-5'>
 
       
   <Section/>
   <Profiles/>
  <Sidebar/>
     </div>
   )
 }
 
 export default Instamart
 