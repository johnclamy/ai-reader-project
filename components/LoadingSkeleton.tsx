const LoadingSkeleton = () => (
    <div className="p-6 space-y-6">
        {/* Title Skeleton */}
        <div className="h-6 bg-gray-200 rounded w-48 animate-pulse" />
      
        {/* Grid Skeleton */}
        <div className="grid grid-cols-3 gap-4">
            <div className="h-32 bg-gray-200 rounded-lg animate-pulse" />
            <div className="h-32 bg-gray-200 rounded-lg animate-pulse" />
            <div className="h-32 bg-gray-200 rounded-lg animate-pulse" />
        </div>
    </div>
)


export default LoadingSkeleton
