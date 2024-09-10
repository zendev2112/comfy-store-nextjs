import Link from 'next/link'
import { Button } from '../ui/button'
import HeroCarousel from './HeroCarousel'

function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-xl font-bold text-4xl tracking-tight sm:text-6xl">
          We are changing the way people shop
        </h1>
        <p className="mt-8 text-lg leading-8 text-muted-foreground">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam facilis
          obcaecati eligendi perferendis consequuntur molestiae vel vitae!
          Repellat perspiciatis maxime numquam aut rerum laudantium deserunt,
          explicabo quisquam molestias culpa dolore!
        </p>
        <Button asChild size="lg" className="mt-10">
          <Link href="/products">Our Products</Link>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  )
}
export default Hero
