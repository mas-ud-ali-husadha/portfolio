import PaperClipIcon from "@/icon/PaperClip";
import React, { FC } from "react";

interface CardProps {
  tanggal: string;
  title: string;
  desc: string;
  jobType: string;
  skill?: string[];
  attachment?: string[];
}

const Card: FC<CardProps> = ({
  tanggal,
  title,
  jobType,
  desc,
  skill,
  attachment,
}) => {
  return (
    <div className="group cursor-pointer flex flex-col md:flex-row transition-opacity  gap-6 duration-200 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 hover:bg-glass md:p-4  rounded-md">
      <div className="text-xs lg:w-1/5 mt-1.5 font-bold">{tanggal}</div>

      <div className="flex flex-col gap-2 lg:w-4/5 ">
        <div className="text-slate-200 font-medium tracking-wide flex gap-1 items-center">
          {title}
          <svg
            className="fill-current mt-1"
            width="12pt"
            height="12pt"
            version="1.1"
            viewBox="0 0 1200 1200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m400 350c0-27.613 22.387-50 50-50h400c27.613 0 50 22.387 50 50v400c0 27.613-22.387 50-50 50s-50-22.387-50-50v-279.29l-414.64 414.64c-19.527 19.523-51.184 19.523-70.711 0-19.527-19.527-19.527-51.184 0-70.711l414.64-414.64h-279.29c-27.613 0-50-22.387-50-50z" />
          </svg>
        </div>
        <div className="text-xs uppercase tracking-wide font-bold">
          {jobType}
        </div>
        <div className="text-sm">{desc}</div>
        {attachment?.length && (
          <div className="text-xs flex flex-wrap gap-2 mt-1 text-slate-300">
            {attachment?.map((item: string, index: number) => (
              <div
                key={index}
                className="capitalize flex gap-2 font-medium items-center "
              >
                <PaperClipIcon />
                {item}
              </div>
            ))}
          </div>
        )}
        {skill?.length && (
          <div className="text-xs flex flex-wrap gap-2 mt-1">
            {skill?.map((item: string, index: number) => (
              <div
                key={index}
                className="capitalize py-1 px-3 bg-teal-400/10 rounded-3xl text-slate-300"
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
