import useFetchGifs from "../hooks/useFetchGifs";
import GifItem from "./GifItem";

const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);
  // console.log(isLoading);
  // const [images, setImages] = useState([]);

  // const getImages = async () => {
  //   const newImages = await getGifs(category);
  //   setImages(newImages);
  // };

  // useEffect(() => {
  //   getImages();
  // }, []);

  return (
    <>
      <h3>{category}</h3>
      {isLoading && <h2>Cargando....</h2>}
      <div className="card-grid">
        {images?.map((result) => (
          <GifItem key={result.id} result={result} />
        ))}
      </div>
    </>
  );
};

export default GifGrid;
