import NavigateBar from '../components/NavigateBar'
import Header from './Header'
import Footer from './Footer'

// const styleMain = {
//     maxWidth: '900px',
//     margin: 'auto',
//     display: 'table',
// }

const Layout = props => (
    <main>
        <NavigateBar/>
        <div className="main">
            <Header/>
            {props.children}
            <Footer/>
        </div>

        <style jsx global>{`
            * {
                box-sizing: border-box;
            }
        
            body {
                font-family: Arial, Helvetica, sans-serif;
                margin: auto;
            }

            h1 {
                margin: 0;
            }

            main {
                margin: 0;
            }

            .main {
                max-width: 900px;
                margin: auto;
            }

            main:after {
                content: "";
                display: table;
                clear: both;
            }
        `}</style>
    </main>
)

export default Layout