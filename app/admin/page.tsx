import { Suspense } from 'react'

function AdminPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <div>AdminPage</div>
    </Suspense>
  )
}

export default AdminPage