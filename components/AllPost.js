import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Select from "./Select";

export function AllPost() {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch("https://dev.to/api/articles?username=paul_freeman&per_page=6")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setArticles(data);
      });
  }, []);

  useEffect(() => {
    LoadMore();
  }, []);

  function LoadMore() {
    fetch(
      `https://dev.to/api/articles?username=paul_freeman&page= ${
        page + 1
      }&per_page=6`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const newArticles = articles.concat(data);
        setArticles(newArticles);
        setPage(page + 1);
      });
  }

  return (
    <div className="mt-[100px] ">
      <Select />
      <div className="container mx-auto mt-[32px] ">
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
      <div className="py-10 text-center mt-[100px]">
        <button
          className="rounded-md border-solid border w-[123px] h-[48px] "
          onClick={LoadMore}
        >
          <span className="font-medium text-base text-[#696A75] font-sans">
            Load More
          </span>
        </button>
      </div>
    </div>
  );
}
