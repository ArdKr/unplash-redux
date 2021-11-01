import { Card, Col, Row } from "react-bootstrap";
import { useGetPhotosQuery } from "../../../../store/apiSlice";
import { PhotoContainerPhotoCard } from "./PhotoContainerPhotoCard";

export const PhotosContainerPhotosList = () => {
  const posts = useGetPhotosQuery(2);

  return (
    <Row>
      <Col md={4}>
        <PhotoContainerPhotoCard />
      </Col>

      <Col md={4}>
        <PhotoContainerPhotoCard />
      </Col>

      <Col md={4}>
        <PhotoContainerPhotoCard />
      </Col>

      <Col md={4}>
        <PhotoContainerPhotoCard />
      </Col>
    </Row>
  );
};
