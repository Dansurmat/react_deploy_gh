const Header = ({title}) => {
    /*const headerStyle = {
            backgroundColor : 'royalblue',
            color : '#fff'
    }*/
    return(
        <header style={{}}>
            <h1>{title}</h1>
        </header>
    )
}

Header.defaultProps = {
    title: "Default Title"
}

export default Header;