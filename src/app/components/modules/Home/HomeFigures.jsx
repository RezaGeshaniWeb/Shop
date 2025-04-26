import Figure from "./Figure";

export default function HomeFigures({ img1, img2, title1, title2 }) {
  return (
    <section className="w-full h-screen flex *:w-[97.5%] *:h-full *:overflow-hidden *:flex *:items-center *:justify-center *:relative *:group">
      <Figure img={img1} title={title1} />
      <Figure img={img2} title={title2} />
    </section>
  )
}