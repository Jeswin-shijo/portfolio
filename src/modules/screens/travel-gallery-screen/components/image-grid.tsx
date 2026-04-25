import { Masonry, type RenderComponentProps } from "masonic";

type Place = {
  image: string;
  title: string;
};

type ImageGridProps = {
  places: Place[];
};

const renderItem = ({ data }: RenderComponentProps<Place>) => (
  <div className="image-card">
    <img src={data.image} alt={data.title} />
    <div className="image-tag">{data.title}</div>
  </div>
);

const ImageGrid = ({ places }: ImageGridProps) => (
  <Masonry items={places} columnGutter={0} columnCount={3} render={renderItem} />
);

export default ImageGrid;
