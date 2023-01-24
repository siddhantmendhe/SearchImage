function ImageShow({image}) {
  return <div>
  <img alt={image.alt} src={image.src.tiny}></img></div>;
}

export default ImageShow;
