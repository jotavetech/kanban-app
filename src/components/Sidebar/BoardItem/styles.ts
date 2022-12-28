import styled from "styled-components";

interface Props {
  active: boolean;
}

export const StyledBoardItem = styled.li<Props>`
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: 13px 15px;
  border: 1px solid
    ${(props) =>
      props.active
        ? props.theme.utils.itemSelectedOrBorderOrButton
        : props.theme.textColors.primary};
  border-radius: 15px;
  margin-bottom: 14px;
  cursor: pointer;
  transition: 0.2s;

  p {
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  img {
    width: 19px;
    filter: grayscale(1) invert(1);
  }

  div {
    display: flex;
    gap: 10px;
  }
`;
