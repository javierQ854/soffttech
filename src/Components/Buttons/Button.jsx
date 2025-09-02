const Button = ({texto,id}) =>{
    return(
        <button className={`${id ? `rounded-full text-white font-bold transform px-7 py-3 bg-[#008080] transition-transform hover:scale-110 cursor-pointer`:`transform rounded-full  px-7 py-3 bg-white border-2 text-[#008080] font-bold border-[#008080] transition-transform hover:scale-110 cursor-pointer`}`}>{texto}</button>
    )
}
export default Button