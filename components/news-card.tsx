import Image from "next/image";
import { Badge } from "./ui/badge";
import {Clock} from 'lucide-react';

interface NewsCardProps{
  title?: string,
  url?:string
  date?: string,
  content?:string,
  image?:string
}

export default function NewsCard({title, url, date, content, creator}:NewsCardProps){
  const imageUrlRegex = /<img[^>]+src="([^">]+)"/;
  const imgUrlMatch = content?.match(imageUrlRegex);



  return(
    <a className="bg-primary w-[calc(calc(100%/3)-1rem)] border border-white rounded-xl overflow-hidden shadow-md aspect-video group relative cursor-pointer transition-all ease-out group" href={url} target="_blank">
        <img src={imgUrlMatch ? imgUrlMatch[1] : ''} className="group group-hover:scale-105 transition-all ease-out relative h-full w-full object-cover" alt="Test"/>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-[#00]/80 p-4">
          <div className="absolute bottom-0 left-0 p-4">
            <div className="flex flex-row gap-2 items-center">
              <Badge variant={"secondary"} className="mb-1 text-[10px]">{creator}</Badge>
              <div className="flex flex-row gap-1">
                <Clock className="h-4 w-4"/>
                <p className="text-[12px]">{formatDateDifference(new Date(date))}</p>
              </div>
            </div>
            <p className="line-clamp-2">{title}</p>
          </div>
        </div>
    </a>

  )
}

function formatDateDifference(givenDate) {
  const currentDate = new Date();
  const givenDateTime = givenDate.getTime();
  const currentDateTime = currentDate.getTime();
  const differenceInSeconds = Math.floor((currentDateTime - givenDateTime) / 1000);

  if (differenceInSeconds < 60) {
    return `${differenceInSeconds} seconds ago`;
  } else if (differenceInSeconds < 3600) {
    const minutes = Math.floor(differenceInSeconds / 60);
    return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  } else if (differenceInSeconds < 86400) {
    const hours = Math.floor(differenceInSeconds / 3600);
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  } else {
    // Return the date in the format dd ddd MMM yyyy, hh:mm
    const options = {
      day: '2-digit',
      weekday: 'short',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return givenDate.toLocaleString('en-US', options);
  }
}

