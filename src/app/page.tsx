import Hero from '@/components/Hero'
import Image from 'next/image'


export default function Home() {
  return (

    <><Hero />


      <div className='flex ... justify-center py-7'>
        <div className="rounded">
          <Image src="/photo-1.jpg" alt="Burger"  width={300} height={400}/>
        </div>
        <div className="px-5">
          <Image src="/photo-2.jpg" alt="Burger" width={300} height={400} />
        </div>
        <div className="rounded">
          <Image src="/photo-3.jpg" alt="Burger" width={300} height={400}/>
        </div>
      </div>
    </>
  )
}
