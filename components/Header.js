import CardHorizontal from '../components/CardHorizontal'
import CardVerticalHeader from '../components/CardVerticalHeader'
const Header = props => (
    <div className="header">
        <div className="h-container h-left">
            <div className="h-card">
                <CardHorizontal image={props.store.image[1]} title={props.store.text} />
            </div>
        </div>
        <div className="h-container h-right">
            <ul>
                <li key={1}>
                    <CardVerticalHeader custom={"v-card-custom"} image={props.store.image[2]} title={props.store.text} />
                </li>
                <li key={2}>
                    <CardVerticalHeader custom={"v-card-custom"} image={props.store.image[3]} title={props.store.text} />
                </li>
                <li key={3}>
                    <CardVerticalHeader custom={"v-card-custom"} image={props.store.image[4]} title={props.store.text} />
                </li>
            </ul>
        </div>

        <style jsx>{`
            .header {
                display: none;
            }

            @media only screen and (min-width: 600px) {
                .header {
                    display: block;
                    margin-top: 40px;
                    height: auto;
                    padding-top: 20px;
                }

                .h-container {
                    height: 100%;
                    float: left;
                    width: 50%;
                }

                .h-right {
                    overflow: hidden;
                }

                .h-right ul {
                    margin: 0;
                    padding: 0;
                    list-style-type: none;
                }

                .h-right ul li {
                    padding: 0 0 20px 20px;
                }
            }
        `}</style>
    </div>
)

export default Header