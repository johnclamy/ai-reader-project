import Paragraph from './Paragraph'


const Hero = () => (
    <section className="max-w-2xl mx-auto px-6 py-20 sm:py-28 md:py-32 text-center">
        <p className="text-[0.7rem] uppercase tracking-[0.2em] text-[#6b6b6b] mb-6">
            writing · notes
        </p>

        {/* main headline */}
        <header>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#111] leading-tight">
                Welcome to my blog.
            </h1>
        </header>

      <Paragraph  className="mt-6 text-base sm:text-lg text-[#4a4a4a] leading-relaxed max-w-md mx-auto">
        Quiet thoughts on design, code, and the spaces in between.
      </Paragraph>

      <div className="mt-10 h-px w-12 bg-[#d4d4d4] mx-auto"></div>   
    </section>
)


export default Hero
