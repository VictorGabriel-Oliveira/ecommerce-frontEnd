import '../styles/imageconteiner.scss'
export default ({image,setProduct_image})=>{

    return (
        <div className="image-conteiner" onClick={()=>{
            setProduct_image(image)
        }}>
            <img src={image} />
        </div>
    )
}