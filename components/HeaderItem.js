
function HeaderItem({Icon, title}) {
    return (
        <div className="flex flex-col items-center cursor-pointer group w-12  hover:text-white">
            <Icon className='h-10 mb-1 group-hover:animate-bounce'/>
        </div>
    )
}

export default HeaderItem
