import { colors } from "@/utilities/colors";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flexdirection: column;
  alignitems: center;
  justifycontent: center;
  height: "100%";
  width: "100%";
  background: ${colors.background};
`;
