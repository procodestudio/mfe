import React, { lazy, Suspense } from 'react'
const MarketingApp = lazy(() => import('./components/MarketingApp'));

export default () => {
  return (
    <div>
      <h1>Hi there!</h1>
      <Suspense fallback="Loading MarketingApp...">
        <MarketingApp />
      </Suspense>
    </div>
  )
}
