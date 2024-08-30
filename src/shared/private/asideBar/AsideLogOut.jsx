
import Button from '../../Button'

const AsideLogOut = () => {
  return (
    <div className=" flex items-center justify-center mb-6">
      <Button
        classButton={'bg-red-400 py-1 w-[220px] rounded-[6px] hover:translate-y-[-2px] hover:bg-red-500 transition-all duration-300'}
      >
        <span className='text-text-white '>Cerrar sesión</span>
      </Button>
    </div>
  )
}

export default AsideLogOut
