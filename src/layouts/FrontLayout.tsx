import { Outlet } from "react-router-dom"
import { NavLink } from "react-router-dom"
import routes from "../router/routes"
import { useEffect, useState,  } from "react"
import { useTranslation } from "react-i18next"

interface NavItem {
  path: string,
  title: string
}

function FrontLayout(){
  const { t, i18n } = useTranslation()
  // const navItems: NavItem[] = t('translation.frontLayout.navItems', { returnObjects: true }) as NavItem[]
  const navItems: NavItem[] = t('frontLayout.navItems', { returnObjects: true }) as NavItem[]


  const [navOpen,setNavOpen] = useState(false)
  // const navItems = routes.find(route => route.path === '/')?.children || []

  const language = [
    { title:'繁中', value:'zh',},
    { title:'English', value:'en'}
  ]

  return(
    <>
      <header>
        <nav className='bg-white shadow-md fixed w-full z-30'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex justify-between h-12 items-center relative z-40'>

              <div className='flex items-center space-x-4'>
                <div className='text-xl font-bold'>Logo</div>
                <div className='hidden md:flex space-x-2'>
                  {navItems
                    .map(({title, path}) => (
                      <NavLink
                        key={path}
                        to={path}
                        className={({isActive})=>
                          `${isActive ? 'active' : ''} text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium`  
                        }
                      >
                        {title}
                      </NavLink>
                    ))
                  }
                </div>
              </div>

              <div className="flex items-center gap-3">
                {/* 手機版 icon group */}
                <div className="md:hidden flex items-center gap-3">
                  <select 
                    className='border rounded px-1 py-0.5 text-sm'
                    aria-label='select language'
                    value={i18n.language}
                    onChange={(e) => i18n.changeLanguage(e.target.value)}
                  >
                    
                    {language.map((item)=>(
                      <option value={item.value} key={item.value}>{item.title}</option>
                    ))}
                  </select>


                  {/* GitHub icon */}
                  <svg className="w-6 h-6 text-gray-700 hover:text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577v-2.04c-3.338.727-4.033-1.61-4.033-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.204.085 1.838 1.237 1.838 1.237 1.07 1.835 2.809 1.305 3.495.997.108-.776.42-1.305.762-1.605-2.665-.304-5.466-1.332-5.466-5.932 0-1.31.467-2.382 1.235-3.222-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 0 1 3.003-.404c1.02.004 2.046.137 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.233 1.913 1.233 3.222 0 4.61-2.805 5.625-5.475 5.922.43.37.823 1.102.823 2.222v3.293c0 .319.192.694.8.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>

                  {/* Envelope icon */}
                  <svg className="w-6 h-6 text-gray-700 hover:text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M2 4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.2l-10 6.25L2 5.2V4zm0 3.833V20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7.833l-10 6.25-10-6.25z"/>
                  </svg>
                </div>

                {/* 桌機版 icon group */}
                <div className="hidden md:flex items-center gap-3">
                  <select 
                    className='border rounded px-1 py-0.5 text-sm'
                    aria-label='select language'
                    value={i18n.language}
                    onChange={(e) => i18n.changeLanguage(e.target.value)}
                  >
                    
                    {language.map((item)=>(
                      <option value={item.value} key={item.value}>{item.title}</option>
                    ))}
                  </select>

                  {/* GitHub icon */}
                  <svg className="w-6 h-6 text-gray-700 hover:text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577v-2.04c-3.338.727-4.033-1.61-4.033-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.204.085 1.838 1.237 1.838 1.237 1.07 1.835 2.809 1.305 3.495.997.108-.776.42-1.305.762-1.605-2.665-.304-5.466-1.332-5.466-5.932 0-1.31.467-2.382 1.235-3.222-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 0 1 3.003-.404c1.02.004 2.046.137 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.233 1.913 1.233 3.222 0 4.61-2.805 5.625-5.475 5.922.43.37.823 1.102.823 2.222v3.293c0 .319.192.694.8.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>

                  {/* Envelope icon */}
                  <svg className="w-6 h-6 text-gray-700 hover:text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M2 4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.2l-10 6.25L2 5.2V4zm0 3.833V20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7.833l-10 6.25-10-6.25z"/>
                  </svg>
                </div>

                {/* 漢堡 */}
                <div className='md:hidden'>
                  <button
                    onClick={()=> setNavOpen(!navOpen)}
                    className='p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-inset focus:ring-blue-600'
                    aria-label='Toggle menu'
                  >
                    {navOpen ? (
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    ) : (
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>



              {/* <div className='md:hidden'>
                <button
                  onClick={()=> setNavOpen(!navOpen)}
                  className='p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-inset focus:ring-blue-600'
                  aria-label='Toggle menu'
                >
                  {navOpen ? (
                  // X icon ← 新增這段
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  // Hamburger icon（原本這段）
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
                  </svg>
                )}
                </button>
              </div> */}
            </div>
          </div>
        </nav>

        {/* 手機版 menu */}
          {
            navOpen && (
              <>
                <div 
                  className='fixed inset-0 bg-black/30'
                  onClick={()=> setNavOpen(false)}
                ></div>

                <div className='md:hidden bg-white shadow-md w-full fixed  top-12 z-20'>
                  <div className='px-2 pt-2 pb-3 space-y-1 z-30'>
                    {
                    navItems
                      .map(({title, path}) => (
                        <NavLink
                          key={path}
                          to={path}
                          className={({isActive})=>
                            `${isActive ? 'active' : ''} text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium block`  
                          }
                        >
                          {title}
                        </NavLink>
                      ))
                    }
                  </div>
                </div>
              </>
            )
          }
        
      </header>

      <main className='pt-12'>
        <Outlet />
      </main>
    </>
  )
}

export default FrontLayout