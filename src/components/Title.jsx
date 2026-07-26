import logo from '../assets/Logo.png'

function Title() {
  return (
    <div 
      style={{ backgroundImage: `url(${logo})` }}
      className="w-full h-[125px] bg-cover bg-center bg-no-repeat"
    ></div>
  )
}

export default Title;