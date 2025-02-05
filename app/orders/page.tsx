import { Suspense } from 'react'

function OrdersPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <div>OrdersPage</div>
    </Suspense>
  )
}

export default OrdersPage