import styled from "styled-components/native";
import { StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.conmponent";

const RestaurantsScreenContainer = styled.SafeAreaView`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const ListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantsScreen = () => (
  <RestaurantsScreenContainer>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <ListContainer>
      <RestaurantInfoCard />
    </ListContainer>
  </RestaurantsScreenContainer>
);
