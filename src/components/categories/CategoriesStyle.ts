import { colors } from "@/utilities/colors";
import styled from "styled-components";

export const TextTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: ${colors.fontcolor};
  text-align: center;
  margin: 0 auto;
  padding: 50px 0;
`;

export const TextNominiees = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${colors.fontcolor};
  text-align: center;
  margin: 0 auto;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  height: auto;
  padding: 0 20px;
`;

export const ContainerCategoryNomini = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  height: auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    padding: 0;
  }
`;

export const GridNominiees = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 20px;
  width: 100%;
  height: auto;
  padding: 20px 20px;
  margin: 0 auto;
  justify-items: center;
  align-items: center;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 20px 0px;
  }
`;

export const FloatButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: ${colors.cardbackgroundhover};
  color: ${colors.fontcolor};
  font-size: 1.5rem;
  font-weight: 700;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: ${colors.background};
  }
`;

export const TextVote = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${colors.fontcolor};
  text-align: center;
  margin: 0 auto;
`;
