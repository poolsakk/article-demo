const Header = props => (
    <div className="header">
        <h1>Header</h1>

        <style jsx>{`
            .header {
                display: none;
                background-color: #f1f1f1;
            }

            @media only screen and (min-width: 600px) {
                .header {
                    display: block;
                }
            }
        `}</style>
    </div>
)

export default Header