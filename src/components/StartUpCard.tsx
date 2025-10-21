import { formatDate } from '@/lib/utils'
import { EyeIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { Author, Startup, STARTUP_QUERYResult } from '@/sanity/types'


const StartUpCard = ({ post }: { post: STARTUP_QUERYResult[number] }) => {
    const { _createdAt, views, author, _id, title, category, image, description} = post;
    console.log(post.author?.image)
     
  return (
    <li className="group bg-white border-[5px] border-black py-6 px-5 rounded-[22px] shadow-200 hover:border-primary transition-all duration-500 hover:shadow-300 hover:bg-primary-100">
        <div className="flex justify-between items-center">
            <p className="font-medium text-base bg-primary-100 px-4 py-2 rounded-full group-hover:bg-white-100">
                {formatDate(_createdAt)}
            </p>
            <div className="flex gap-1.5">
                <EyeIcon className="size-6 text-primary" />
                <span className="text-black text-base font-medium">{views}</span>
            </div>
        </div>
        <div className="flex justify-between items-center mt-5 gap-5">
            <div className="flex-1">
                <Link href={`/user/${author?._id}`}>
                    <p className="text-black text-base font-medium line-clamp-1">
                        {author?.name}
                    </p>
                </Link>
                <Link href={`/startup/${_id}`}>
                    <h3 className="text-black text-[26px] font-semibold line-clamp-1">
                        {title}
                    </h3>
                </Link>
            </div>
            <Link href={`/user/${author?._id}`}>
                <Image src={author?.image || "https://placehold.co/48x48"} alt={author?.name || "Author"} width={48} height={48} className="rounded-full" />
            </Link>
        </div>
        <Link href={`/startup/${_id}`}>
            <p className="font-normal text-base bg-primary-100 px-4 py-2 rounded-full group-hover:bg-white-100">
                {description}
            </p>
            <img src={image || "https://placehold.co/600x400"} alt={title || "startup-image"} className="h-[164px] w-full rounded-[10px] object-cover" />
        </Link>
        <div className="flex justify-between items-center gap-3 mt-5">
            <Link href={`/?query=${category?.toLowerCase()}`}>
                <p className="text-black text-base font-medium">
                    {category}
                </p>
            </Link>
            <Button className="rounded-full bg-black-200 font-medium text-base text-white px-5 py-3" asChild>
                <Link href={`/startup/${_id}`}>
                    Details
                </Link>
            </Button>
        </div>
    </li>
  )
}

export default StartUpCard