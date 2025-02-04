export default function Skeleton() {
    return (
        <div className="max-w-4xl mx-auto my-6">
            <div className="bg-white rounded-xl shadow-lg p-6 animate-pulse">
                <div className="flex items-center space-x-4 mb-4">
                    <div className="w-10 h-10 bg-gray-200 rounded-full" />
                    <div className="space-y-2 flex-1">
                        <div className="h-4 bg-gray-200 rounded w-32" />
                        <div className="h-3 bg-gray-200 rounded w-24" />
                    </div>
                </div>
                
                <div className="space-y-4 mt-6">
                    <div className="h-6 bg-gray-200 rounded w-3/4" />
                    <div className="space-y-2">
                        <div className="h-4 bg-gray-200 rounded w-full" />
                        <div className="h-4 bg-gray-200 rounded w-full" />
                        <div className="h-4 bg-gray-200 rounded w-2/3" />
                    </div>
                </div>
            </div>
        </div>
    )
}