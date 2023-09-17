const Card = ({title, url, img}) => {
  return (
        <a href={url} target='_blank' rel="noreferrer" className="project">
          <img src={img} alt={title} className="img"/>
          <h5>{title}</h5>
        </a>
  )
}
{/* <h2>{title}</h2>
      
       */}
export default Card