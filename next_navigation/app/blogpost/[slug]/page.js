"use client"
import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'next/navigation'
import { useRouter } from 'next/navigation'

const page = () => {
    const params = useParams();
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push("/about")
        }, 2000);
      
 
    }, [])
    

  return (
    <div>
        <div>posttsss of blogg called {params.slug}</div>
        <button className='cursor-pointer bg-blue-600 p-1 m-1 rounded-b-md' type="button" onClick={() => router.push('/dashboard')}>
              Dashboard
        </button>
    </div>
  )
}

export default page
