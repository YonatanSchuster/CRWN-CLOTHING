import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./directory-item.styles";

// thats the compomponent of the home page that holds every category
const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <DirectoryItemContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;

