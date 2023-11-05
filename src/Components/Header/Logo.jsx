const Logo = ({ logo }) => {
    return (
        <div className="flex-1 px-2 mx-2">
            {/* logo here */}
            <img className="w-[50px]" src={logo} alt="" />
            <i className="font-semibold hidden md:flex">Touch Lajawab</i>
        </div>
    )
}

export default Logo