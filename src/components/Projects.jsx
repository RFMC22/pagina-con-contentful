import useFetchProyects from '../hooks/useFetchProyects';
import Card from './Card';
//import '../helpers/fetchAPI'
const Projects = () => {
  const {projects, loading} = useFetchProyects();
  if (loading) {
    return (
      <section className="projects">
        <h2>Loading...</h2>
      </section>
    )
  }
  return (
    <section className='projects'>
      <div className="title">
        <h2>projects</h2>
        <div className="title-underline"></div>
      </div>
      <div className='projects-center'>
        {projects && 
          projects.map(project => (
              <Card 
                key={project.id}
                title={project.title}
                url={project.url}
                img={project.img}
              />
          ))
        }
      </div>
    </section>
  )
}

export default Projects