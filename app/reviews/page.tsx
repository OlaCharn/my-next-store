import { Suspense } from 'react'


function ReviewsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>

          <div>ReviewsPage</div>
</Suspense>
  )
}

export default ReviewsPage