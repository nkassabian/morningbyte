"use client"

import Parser from "rss-parser";
import { useEffect, useState } from "react";
import NewsCard from "./news-card";

type NewsArticle = {
    creator: string;
    title: string;
    link: string;
    pubDate: string;
    dcCreator?: string;
    content: string;
    contentSnippet: string;
    guid: string;
    isoDate: string;
}

export default function FeaturedNews(){

  const [feed, setFeed] = useState({});
  


  useEffect(() => {
  async function fetchAndMergeFeeds() {
    const feedUrls = [
      // 'http://www.theverge.com/rss/full.xml',
      // 'https://www.wired.com/feed/tag/ai/latest/rss',
      // Add more feed URLs as needed
     'https://rss.app/feeds/_UgAwIxbhzUEnXD7o.xml' 
    // 'https://rss-bridge.org/bridge01/?action=display&bridge=FeedMergeBridge&feed_name=MorningByte&feed_1=https%3A%2F%2Fcss-tricks.com%2Ffeed%2F&feed_2=https%3A%2F%2Fstackoverflow.blog%2Ffeed&feed_3=&feed_4=https%3A%2F%2Ftechcrunch.com%2Ffeed%2F&feed_5=http%3A%2F%2Fwww.theverge.com%2Frss%2Ffull.xml&feed_6=&feed_7=&feed_8=&feed_9=&feed_10=&limit=&format=Atom'
      ];

    const parser = new Parser();
    const mergedFeed:NewsArticle[] = [];

    for (const feedUrl of feedUrls) {
      const feed = await parser.parseURL(feedUrl);
      
      feed.items.map((item)=>{
          mergedFeed.push(item);  
      })
    }

    // Sort merged feed by publish date
    mergedFeed.sort((a, b) => b.pubDate - a.pubDate);

    // Update state with the merged and sorted feed
    setFeed(mergedFeed);
    console.log(mergedFeed);
  }

  fetchAndMergeFeeds();
}, []);


  return(
    <div className="w-full gap-4 mt-32 flex-wrap flex flex-row">
      {feed.length > 0 && feed.map((article) => (
        <NewsCard url={article.link} date={article.pubDate} content={article.content} title={article.title} creator={article.creator}/>
      ))}
    </div>
  )
}

