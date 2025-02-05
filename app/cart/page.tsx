import { Suspense } from 'react'

function CartPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <div>CartPage</div>
    </Suspense>


  )
}

export default CartPage