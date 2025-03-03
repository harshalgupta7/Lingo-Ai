import List from '@/ui/components/main/List';
import Link from 'next/link';
import React from 'react'

const page = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return (
        <>
            <div className="relative h-screen w-full flex items-center justify-center">
                <div>
                    <div>
                        <p className='text-9xl animate-pulse italic font-light'>hello</p>
                    </div>
                    <div>
                        <List />
                    </div>

                    {/* Button positioned at the bottom */}
                    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
                        <Link href="/login" className="px-6 py-3 bg-white text-black font-semibold rounded-md shadow-md">
                            Start?
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page