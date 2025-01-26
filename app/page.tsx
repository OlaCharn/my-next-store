import React from 'react'
import { Button } from '@/components/ui/button'

function Homepage() {
  return (
    <div>
      <h1 className='text-3x1' >Homepage</h1>
      <Button variant="outline" size="lg" className='capitalize m-8' >
        Click me
      </Button>
    </div>
  )
}

export default Homepage;