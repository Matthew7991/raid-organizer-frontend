import React from "react"
import Heading from "../shared/Heading"
import P from "../shared/P"

function Home() {
  return (
    <main>
      <section className="min-h-screen bg-[url(../assets/imgs/hero.png)] bg-no-repeat bg-cover relative">
        <div className="absolute bottom-1/4 left-40">
          <Heading
            text="Plan your"
            textHighlight="raid"
            importance={1}
          />
        </div>
      </section>
      <section className="flex items-center min-h-screen px-20 py-12 bg-greenmiddle">
        <div className="flex gap-32">
          <img
            src="./assets/imgs/ranger.png"
            alt=""
          />
          <div className="flex flex-col gap-24">
            <Heading
              text="Choose your"
              textHighlight="group"
              importance={2}
            />
            <P>
              I'm baby four dollar toast church-key pabst 90's retro bicycle
              rights. Umami wolf mixtape helvetica. Actually brunch try-hard
              authentic. Meh disrupt wayfarers thundercats semiotics mixtape
              pickled. Bushwick kale chips organic ascot asymmetrical gastropub.
              Kogi lumbersexual keytar, schlitz art party literally disrupt cred
              palo santo selvage paleo thundercats jianbing. Bespoke
              cold-pressed affogato ugh,
            </P>
          </div>
        </div>
      </section>
      <section className="bg-darkgreen px-14 flex items-center bg-[url(../assets/imgs/enemy.png)] min-h-screen bg-right bg-no-repeat bg-contain">
        <div>
          <Heading
            text="Choose your"
            textHighlight="enemy"
            importance={2}
          />
          <P>
            I'm baby four dollar toast church-key pabst 90's retro bicycle
            rights. Umami wolf mixtape helvetica. Actually brunch try-hard
            authentic. Meh disrupt wayfarers thundercats semiotics mixtape
            pickled. Bushwick kale chips organic ascot asymmetrical gastropub.
            Kogi lumbersexual keytar, schlitz art party literally disrupt cred
            palo santo selvage paleo thundercats jianbing. Bespoke cold-pressed
            affogato ugh,
          </P>
        </div>
      </section>
    </main>
  )
}

export default Home
