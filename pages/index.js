import Head from 'next/head'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { Suspense } from 'react'
import Navbar from '../components/Navbar'
import Section from '../components/Section'

function RotatingEarth() {
  return (
    <mesh rotation={[0.3, 0.5, 0]}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial color="royalblue" wireframe />
    </mesh>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Mayank Garg | Portfolio</title>
      </Head>
      <Navbar />
      <main className="pt-24">
        <Section id="about" title="About Me">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            I'm a tech-savvy developer focused on building responsive applications and beautiful UI/UX with a strong foundation in cybersecurity and networks.
          </p>
          <a href="/Mayank_Resume.pdf" target="_blank" download className="inline-block bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
            📄 Download Resume
          </a>
        </Section>
        <Section id="skills" title="Skills">
          <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300">
            <li>Languages: HTML, CSS, JS, TypeScript, Python, Java, C++</li>
            <li>Frameworks: React.js, Next.js, Tailwind, Framer Motion</li>
            <li>3D & Animations: Three.js, @react-three/fiber</li>
          </ul>
        </Section>
        <Section id="projects" title="Projects">
          <ul className="text-orange-500 underline space-y-2">
            <li><a href="https://github.com/InfuriousD/GatorGlide-Delivery-" target="_blank">GatorGlide Delivery</a></li>
            <li><a href="https://github.com/InfuriousD/FTP" target="_blank">FTP Client-Server</a></li>
            <li><a href="https://www.figma.com/proto/xnIL1J8u6xO5MxH921RQwq/High-Fidelity-Prototype" target="_blank">Figma Design</a></li>
          </ul>
        </Section>
        <Section id="contact" title="Contact">
          <form action="https://formspree.io/f/mwkgrbwb" method="POST" className="flex flex-col gap-4">
            <input type="text" name="name" placeholder="Name" required className="p-2 rounded" />
            <input type="email" name="email" placeholder="Email" required className="p-2 rounded" />
            <textarea name="message" placeholder="Message" rows="5" required className="p-2 rounded"></textarea>
            <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">Send</button>
          </form>
        </Section>
        <Section id="3d" title="Interactive Earth (3D)">
          <div className="w-full h-[400px] rounded border">
            <Canvas camera={{ position: [2.5, 2.5, 2.5] }}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[5, 5, 5]} />
              <Suspense fallback={null}>
                <Stars radius={50} depth={50} count={2000} factor={4} />
                <RotatingEarth />
              </Suspense>
              <OrbitControls autoRotate />
            </Canvas>
          </div>
        </Section>
      </main>
    </>
  )
}
