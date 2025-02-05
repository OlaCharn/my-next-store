import { Suspense } from 'react'

function FavoritesPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>

    <div>FavoritesPage</div>
    </Suspense>
  )
}

export default FavoritesPage