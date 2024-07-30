import { useEffect, useState } from "react"
import Link from "next/link";
import Image from "next/image";

export function AllPost() {
    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1)

    useEffect(() => {
        fetch("https://dev.to/api/articles?username=paul_freeman&per_page=6")
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setArticles(data)
            });
    }, []);

    useEffect(() => {
        LoadMore()
    }, [])

    function LoadMore() {
        fetch(`https://dev.to/api/articles?username=paul_freeman&page= ${page + 1}&per_page=6`)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                const newArticles = articles.concat(data)
                setArticles(newArticles)
                setPage(page + 1)
            })
    }

    return (
        <div className="mt-[100px] ">
            <div className="text-2xl md:block text-center w-[768px]">All Blog Post</div>
            <div className="flex mt-[32px] justify-between hidden md:flex">
                <div className="flex gap-4">
                    <button className="text-[#D4A373] text-base">All</button>
                    <button className="text-base text-[#495057]">Design</button>
                    <button className="text-base text-[#495057]">Travel</button>
                    <button className="text-base text-[#495057]">Fashion</button>
                    <button className="text-base text-[#495057]">Technology</button>
                    <button className="text-base text-[#495057]">Branding</button>
                </div>
                <button className="text-base text-[#495057]">View All</button>
            </div>
            <div className="container mx-auto mt-[32px] ">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {articles.map((item) => (
                        <div key={item.id} className="shadow-lg card bg-base-100">
                            <div className="card-body">
                                <Image src={item.social_image} width={500} height={500} />
                                <Link href={item.url} target="_blank">
                                    {item.title}
                                </Link>
                                <div className="flex gap-2 items-center">
                                    <Image src={item.user.profile_image_90} width={50} height={50} />
                                    <div className="">{item.user.name}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="py-10 text-center">
                <button className="btn btn-lg btn-accent" onClick={LoadMore}>Load More</button>
            </div>
        </div>
    )
}