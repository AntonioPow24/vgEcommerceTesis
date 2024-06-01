import ProjectGallery from '../components/public/Projects/ProjectGallery'
import ProjectHeaders from '../components/public/Projects/ProjectHeaders'
import '../components/public/Projects/projects.css'

const Projects = () => {
  return (
    <section className=''>

      <header className='px-[2%] bgImage '>
        <ProjectHeaders />
      </header>


      <ProjectGallery />




    </section>
  )
}

export default Projects
