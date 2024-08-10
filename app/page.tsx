import Hero from "@/components/Home/hero";
import FeatureCard from "@/components/Home/FeatureCard";
import { features } from "@/data";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between flex-1">
      <div className="h-screen w-full hero-gradient">
        <div className="flex pt-40 flex-1 h-full flex-col">
          {/* <Navbar /> */}
          <Hero />
        </div>
      </div>
      <div className="flex-1 w-full">
        <section className="py-10 px-4 md:px-14" id="aboutsection">
          <div className="flex justify-center gap-4">
            <div className="flex-[2] justify-center flex z-20">
              <div className="md:w-4/5">
                <div>
                  <div className="text-white">
                    <div className="flex justify-center -mb-8">
                      <p className="text-primary-500 py-4 px-10 rounded-lg bg-[#B6B5FF]/60 2xl:text-2xl 2xl:py-5 2xl:px-14 text-center">
                        WODPRO LEAGUE
                      </p>
                    </div>
                    <div className="bg-[#B6B5FF]/50 flex flex-col gap-4 rounded-lg pt-20 pb-8 2xl:pb-12 px-10">
                      <p className="text-primary-500 2xl:text-2xl">
                        Be part of this groundbreaking CrossFit event, competing against athletes from across Spain. It&apos;s the inaugural CrossTraining league, allowing you to participate from your own gym while receiving support from your friends.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="px-14 py-20">
          <div>
            <div className="flex gap-10 md:gap-8 2xl:gap-16 flex-wrap justify-center">
              {features.map((item, index) => (
                <FeatureCard
                  index={index}
                  key={index}
                  title={item.title}
                  content={item.content}
                  img={item.img}
                  bg={item.bg}
                />
              ))}
            </div>
          </div>
        </section>
        {/* <Community /> */}
      </div>
    </main>
  );
}
