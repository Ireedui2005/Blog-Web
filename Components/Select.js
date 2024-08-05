import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const tags = [
    { value: "all", name: "beginners" },
    { value: "Design", name: "JavaScript" },
    { value: "Travel", name: "frontend" },
    { value: "Fashion", name: "webdev" },
    { value: "Technology", name: "Technology" },
    { value: "Branding", name: "Branding" },
    { value: "View All", name: "View All" }
]

function Select() {
    const [selectedCategory, setSelectedCategory] = useState()
    const [articles, setArticles] = useState([])
    const [loading, setloading] = useState(false)

    async function LoadArticles() {
        setloading(true)

        const response = await fetch(`https://dev.to/api/articles?username=paul_freeman&tag=${selectedCategory}`);
        const tagArticles = await response.json();
        setArticles(tagArticles);

        setloading(false)
    }
    useEffect(() => {
        LoadArticles();
    }, [selectedCategory]);

    return (
        <div>
            <div className="text-2xl md:block w-[768px] text-[#181A2A] font-bold">
                All Blog Post
            </div>
            <div className='flex gap-4'>
                {tags.map((tag) => (
                    <div key={tag.value} className={`cursor-pointer hover:text-orange-500 ${selectedCategory === tag.value ? "hover:text-orange-600" : ""}`} onClick={() => setSelectedCategory(tag.value)}>{tag.name}</div>
                ))}
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {articles.map((item) => (
                    <div
                        key={item.id}
                        className="card bg-white border border-[#cccccc]"
                    >
                        <div className="card-body">
                            <Image
                                src={item.social_image}
                                width={500}
                                height={500}
                                className="rounded-md"
                            />
                            <Link href={item.url} target="_blank">
                                {item.title}
                            </Link>
                            <div className="flex gap-2 items-center">
                                <Image
                                    src={item.user.profile_image_90}
                                    width={50}
                                    height={50}
                                />
                                <div className="">{item.user.name}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Select







//  <div className="mt-[32px] justify-between hidden md:flex">
//     <div className="flex gap-4">
//         <button className="text-[#D4A373] text-base">All</button>
//         <button className="text-base text-[#495057]">Design</button>
//         <button className="text-base text-[#495057]">Travel</button>
//         <button className="text-base text-[#495057]">Fashion</button>
//         <button className="text-base text-[#495057]">Technology</button>
//         <button className="text-base text-[#495057]">Branding</button>
//     </div>
//     <button className="text-base text-[#495057]">View All</button>
// </div>