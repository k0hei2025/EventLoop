import Link from 'next/link'
import Classes from './main-Header.module.css'
const MainHeader=()=>{

               return(
                <header className={Classes.header}>

                             <div className={Classes.logo}>
                                 <Link href="/">NextEvents</Link>
                              </div>
                    
                      <nav className={Classes.navigation}>
                         <ul>
                             <li>
                                 <Link href="/events">Browse All Events</Link>
                              </li>

                       </ul>
                  </nav>

               </header>
               )
}
export default MainHeader