import Logo from './logo'
// import ThemeToggle from './theme-toggle'
import Search from './search'
import { Button } from 'antd'

export default function Header() {
  return (
    <header className="fixed w-full z-30">
      <div
        className="absolute inset-0 bg-white bg-opacity-70 border-b border-slate-200 backdrop-blur -z-10 dark:bg-slate-900 dark:border-slate-800"
        aria-hidden="true"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="grow">
            <div className="flex items-center">
              <Logo />
              <Search />
            </div>
          </div>

          {/* Desktop navigation */}
          <nav className="flex">
            {/* Right side elements links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li className="ml-4">
                <Button type="primary" className="ml-4" shape="round">
                  Support
                </Button>
              </li>
              {/* <li>
                <ThemeToggle />
              </li> */}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
