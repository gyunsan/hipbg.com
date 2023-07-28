import MobileMenu from '@/components/MobileMenu';


const navigation = [
  { name: 'За Нас', href: '/za-nas' },
  { name: 'Контакти', href: '/kontakti' },
  { name: 'Дейности', href: '/deinosti' },
  { name: 'Дарение', href: '/darenie' },
]

export default function Navbar() {

  return (
    <header className="bg-white">
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">HIP Bulgaria</span>
                <img className="h-8 w-auto" src="/hip-logo.svg" alt="logo" />
            </a>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
              {item.name}
            </a>
          ))}
        </div>
        {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="/dobrovolcheska-programa" className="text-sm font-semibold leading-6 text-gray-900">
          Доброволческа програма <span aria-hidden="true">&rarr;</span>
          </a>
        </div> */}
        <MobileMenu />

      </nav>
     
    </header>
  )
}
