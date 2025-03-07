import { Suspense } from 'react'
import { SubscriptionForm } from '@/app/(home)/subscription-form'

export function SubscriptionFormSkeleton() {
  return (
    <Suspense
      fallback={
        <div className="w-full bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 md:max-w-[440px] animate-pulse">
          <div className="h-8 bg-gray-600 rounded w-1/2 mb-6"></div>
          <div className="space-y-3">
            <div className="space-y-2">
              <div className="h-12 bg-gray-600 rounded"></div>
              <div className="h-4 bg-gray-600 rounded w-1/3"></div>
            </div>
            <div className="space-y-2">
              <div className="h-12 bg-gray-600 rounded"></div>
              <div className="h-4 bg-gray-600 rounded w-1/3"></div>
            </div>
          </div>
          <div className="h-12 bg-gray-600 rounded"></div>
        </div>
      }
    >
      <SubscriptionForm />
    </Suspense>
  )
}
