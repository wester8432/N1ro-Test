"use client";
import Link from "next/link";
import React, { useState } from "react";
import useApi from "../../source/useApi";
import Image from "next/image";
const Comprehensive = () => {
  const [searchText, setSearchText] = useState("");
  const [result, setResult] = useState([]);
  const SearchApi = async () => {
    try {
      const response = await useApi.get(
        `https://api.github.com/search/repositories?q=${searchText}`
      );
      setResult(response.data.items);
      console.log(response.data.items);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-wrap justify-center text-center bg-slate-400">
      <p className="w-full">This is comprehensive Page.</p>
      <Link href="./">Back to Page</Link>
      <div className="w-full">
        <label>
          請輸入關鍵字
          <input
            onChange={(event) => setSearchText(event.target.value)}
            value={searchText}
            type="text"
            placeholder="請輸入關鍵字..."
          />
        </label>
        <button onClick={SearchApi}>搜尋</button>
      </div>
      <div>
        <ul className="flex flex-wrap">
          {result.length > 0 &&
            result.map((item, i) => {
              return (
                <li className="flex border w-full" key={i} href={`${item.url}`}>
                  <div className="flex flex-wrap">
                    <Image
                      src={item.owner.avatar_url}
                      alt={`${item.owner.login}'s avatar`}
                      className="rounded-full mr-4"
                      width={40}
                      height={40}
                    />
                    <h2 className="text-lg font-semibold mb-2">{item.name}</h2>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                  <div className="mt-4">
                    <span className="mr-2">{item.language}</span>
                    <span className="mr-2">★ {item.stargazers_count}</span>
                    <span>
                      Updated on{" "}
                      {new Date(item.updated_at).toLocaleDateString()}
                    </span>
                    <a
                      href={item.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      View Repository
                    </a>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default comprehensive;
