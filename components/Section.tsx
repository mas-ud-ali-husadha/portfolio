import React from "react";

interface PropsType {
  title: string;
  longGap?: boolean;
  children: React.ReactNode;
  ml?: boolean;
  id?: string;
}

const Section = ({
  title,
  children,
  longGap = false,
  ml = true,
  id,
}: PropsType) => {
  return (
    <section className={`mt-10 ml-0 ${ml ? "md:ml-4" : "md:ml-0"}`} id={id}>
      <h2 className="h2 uppercase sticky lg:relative top-0 z-20 py-5 backdrop-blur lg:hidden">
        {title}
      </h2>

      <div
        className={`group/list text-base flex flex-col ${
          longGap ? "gap-8" : "gap-5"
        } md:gap-0`}
      >
        {children}
      </div>
    </section>
  );
};

export default Section;
