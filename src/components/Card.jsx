

export const Card = ({item}) => {
  return (
    <div  className="item">
    <div className="image">
      <img className="rounded-lg cursor-pointer"  src={item.urls.small} alt={item.description} />
    </div>
    {/* <p className="font-bold text-gray-800 my-1">{item.description}</p> */}
    <div className="flex items-center gap-2 cursor-pointer">
      <img  src={item.user.profile_image.small} alt={item.user.name} className="w-8 h-8 rounded-full my-1"/>
      <span className="text-gray-600">{item.user.name}</span>
    </div>
  </div>
  )
}
