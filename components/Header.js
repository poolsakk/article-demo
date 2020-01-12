import CardHorizontal from '../components/CardHorizontal'

const Header = props => (
    <div className="header">
        <div className="h-container h-left">
            <div className="h-card">
                <CardHorizontal image={props.store.image[1]} title={props.store.text} />
            </div>
        </div>
        <div className="h-container h-right"></div>

        <style jsx>{`
            .header {
                display: none;
            }

            @media only screen and (min-width: 600px) {
                .header {
                    display: block;
                    margin-top: 40px;
                    height: 400px;
                    padding-top: 20px;
                }

                .h-container {
                    height: 100%;
                    float: left;
                    width: 50%;
                }
            }
        `}</style>
    </div>
)

export default Header