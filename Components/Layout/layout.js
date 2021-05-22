import { Fragment } from "react"


import MainHeaer from './main-Header' 

const Layout =(props)=>{
               return(
<Fragment>
 <MainHeaer/>
 <main>{props.children} </main>
</Fragment> 
               )
}
export default Layout