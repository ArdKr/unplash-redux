import Container from "react-bootstrap/Container";

import { PhotosContainer } from "./components/PhotosContainer";
import { useGetPhotosQuery } from "../../store/apiSlice";

export const Photos = () => {
  const photosQuery = useGetPhotosQuery(1);

  return (
    <Container>
      <PhotosContainer />
    </Container>
  );
};
