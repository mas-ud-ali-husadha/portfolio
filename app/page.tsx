import Image from "next/image";
import GitHubIcon from "@/icon/GitHubIcon";
import InstagramIcon from "@/icon/InstagramIcon";
import LinkedIn from "@/icon/LinkedIn";
import Twitter from "@/icon/Twitter";
import Section from "@/components/Section";
import Card from "@/components/Card";
import NavMenu from "@/components/NavMenu";
import CardProjects from "@/components/CardProjects";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12  md:px-12 md:py-20 lg:px-24 lg:py-0 lg:flex lg:justify-between">
      <header className="lg:sticky lg:top-0 lg:max-h-screen lg:w-1/2 ">
        <div className="w-full lg:max-w-96 md:pt-20  flex flex-col gap-3">
          <h1 className="h1">Mas&apos;ud Ali</h1>
          <h2 className="h2">Experienced Front-End Engineer</h2>
          <p>
            I build accessible, inclusive products and digital experiences for
            the web.
          </p>
          <div className="my-16 hidden md:block">
            <NavMenu />
          </div>
          <div className="flex gap-5 mt-4">
            <GitHubIcon />
            <InstagramIcon />
            <Twitter />
            <LinkedIn />
          </div>
        </div>
      </header>

      <main className="sm:pt-20 md:pt-10 lg:w-[55%] pb-10">
        <Section title="About" id="about">
          <p className="text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.{" "}
            <span className="text-white font-bold">
              Quas maiores numquam dolore officia tempora
            </span>
            . Architecto voluptas sunt dolorem distinctio esse facilis natus.
            Quam fugiat esse totam vero saepe, hic asperiores.
          </p>
          <p className="text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.{" "}
            <span className="text-white font-bold">
              Quas maiores numquam dolore officia tempora
            </span>
            . Architecto voluptas sunt dolorem distinctio esse facilis natus.
            Quam fugiat esse totam vero saepe, hic asperiores.
          </p>
          <p className="text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. .
            Architecto voluptas sunt dolorem distinctio esse facilis natus. Quam
            fugiat esse totam vero saepe, hic asperiores.
          </p>
        </Section>

        <Section title="Experince" longGap={true} ml={false} id="experience">
          <Card
            tanggal="2018 - PRESENT"
            title="SmileCoding"
            jobType="Sofware Enginner"
            desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
              sit esse aliquam tempora deleniti inventore repellendus corrupti,
              explicabo reiciendis soluta dolorum. Saepe laudantium aliquid
              dolor. Vel corporis similique tempora aperiam!"
            skill={[
              "laravel",
              "react",
              "react native",
              "SCSS",
              "wordpress",
              "Javascript",
            ]}
          />
          <Card
            tanggal="2010 - 2015"
            title="LemesKoding"
            jobType="Sofware Enginner"
            desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
              sit esse aliquam tempora deleniti inventore repellendus corrupti,
              explicabo reiciendis soluta dolorum. Saepe laudantium aliquid
              dolor. Vel corporis similique tempora aperiam!"
            skill={["laravel", "react"]}
          />
          <Card
            tanggal="2010 - 2015"
            title="LemesKoding"
            jobType="Sofware Enginner"
            desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
              sit esse aliquam tempora deleniti inventore repellendus corrupti,
              explicabo reiciendis soluta dolorum. Saepe laudantium aliquid
              dolor. Vel corporis similique tempora aperiam!"
            skill={["laravel", "react"]}
          />
          <Card
            tanggal="2010 - 2015"
            title="LemesKoding"
            jobType="Sofware Enginner"
            desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
              sit esse aliquam tempora deleniti inventore repellendus corrupti,
              explicabo reiciendis soluta dolorum. Saepe laudantium aliquid
              dolor. Vel corporis similique tempora aperiam!"
            skill={["laravel", "react"]}
          />
        </Section>

        <Section title="Projects" longGap={true} ml={false} id="projects">
          <CardProjects
            title="ProjectMu"
            picture="https://i.pinimg.com/736x/f2/12/35/f212358800755f4f3c7e674df0b7b0c6.jpg"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi repellat soluta pariatur, voluptate iure consectetur qui dicta nihil deleniti, sed, atque odio quas cupiditate labore dolorem perferendis. Distinctio, itaque deserunt."
            skill={[
              "laravel",
              "react",
              "react native",
              "SCSS",
              "wordpress",
              "Javascript",
            ]}
          />
          <CardProjects
            title="ProjectMu"
            picture="https://i.pinimg.com/736x/f2/12/35/f212358800755f4f3c7e674df0b7b0c6.jpg"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi repellat soluta pariatur, voluptate iure consectetur qui dicta nihil deleniti, sed, atque odio quas cupiditate labore dolorem perferendis. Distinctio, itaque deserunt."
          />
          <CardProjects
            title="ProjectMu"
            picture="https://i.pinimg.com/736x/f2/12/35/f212358800755f4f3c7e674df0b7b0c6.jpg"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi repellat soluta pariatur, voluptate iure consectetur qui dicta nihil deleniti, sed, atque odio quas cupiditate labore dolorem perferendis. Distinctio, itaque deserunt."
          />
          <CardProjects
            title="ProjectMu"
            picture="https://i.pinimg.com/736x/f2/12/35/f212358800755f4f3c7e674df0b7b0c6.jpg"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi repellat soluta pariatur, voluptate iure consectetur qui dicta nihil deleniti, sed, atque odio quas cupiditate labore dolorem perferendis. Distinctio, itaque deserunt."
          />
          <CardProjects
            title="ProjectMu"
            picture="https://i.pinimg.com/736x/f2/12/35/f212358800755f4f3c7e674df0b7b0c6.jpg"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi repellat soluta pariatur, voluptate iure consectetur qui dicta nihil deleniti, sed, atque odio quas cupiditate labore dolorem perferendis. Distinctio, itaque deserunt."
          />
          <CardProjects
            title="ProjectMu"
            picture="https://i.pinimg.com/736x/f2/12/35/f212358800755f4f3c7e674df0b7b0c6.jpg"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi repellat soluta pariatur, voluptate iure consectetur qui dicta nihil deleniti, sed, atque odio quas cupiditate labore dolorem perferendis. Distinctio, itaque deserunt."
          />
          <CardProjects
            title="ProjectMu"
            picture="https://i.pinimg.com/736x/f2/12/35/f212358800755f4f3c7e674df0b7b0c6.jpg"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi repellat soluta pariatur, voluptate iure consectetur qui dicta nihil deleniti, sed, atque odio quas cupiditate labore dolorem perferendis. Distinctio, itaque deserunt."
          />
        </Section>
      </main>
    </div>
  );
}
