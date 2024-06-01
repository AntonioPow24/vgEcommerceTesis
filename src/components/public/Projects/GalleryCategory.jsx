import { projectList } from "../../../data/projectList"
import Button from "../../../shared/Button"

const GalleryCategory = ({categoryFilter, categoryActive}) => {

    const changeCategory = ( category ) => {
        categoryFilter( category )
    }

  return (
    <div className="flex gap-5 justify-center flex-wrap">   
        {
            projectList.map( project => 
                <Button
                    key={project.id}
                    classButton={` max-w-[333px] w-full py-[11px] rounded-[10px] border border-[#4d4d4d] ${project.title === categoryActive? 'bg-[#54BFE17D]' : 'bg-projectBg'} `}
                    clickEvent={ () => changeCategory( project.title ) }
                >
                    <span className={`text-2xl capitalize ${project.title === categoryActive ? 'text-text-white': 'text-skyBlueApp'} `}>{project.title}</span>
                </Button>
            )
        }
    </div>
  )
}

export default GalleryCategory
