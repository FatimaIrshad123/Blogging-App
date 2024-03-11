
export default function Skeleton(){
    return(
        
            <div role="status" className="space-y-2.5 animate-pulse max-w-lg">
                <div className='justify-center m-8 border-2 rounded-lg shadow-lg p-5 ml-4'>
                    <div className="flex">
                        <div className="relative w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                        <div className="flex iteNamems-center w-full">
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
                            <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                            <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                        </div>
                        </div>
                        <div className="flex items-center w-full max-w-[480px]">
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                                    <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                            <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                        </div>
                    </div>      
                    <div className="flex items-center w-full max-w-[400px]">
                        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                        <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
                        <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                    </div>
                    <div className="flex items-center w-full max-w-[480px]">
                        <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                                <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                        <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                    </div>
                  </div>    
    
    <div className="flex items-center w-full max-w-[440px]">
        <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-32"></div>
        <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
        <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
    </div>
    <div className="flex items-center w-full max-w-[360px]">
        <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
        <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
        <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
    </div>
    <span className="sr-only">Loading...</span>
</div>
    )
}