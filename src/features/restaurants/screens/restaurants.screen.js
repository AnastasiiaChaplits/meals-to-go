import styled from "styled-components/native";
import { StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.conmponent";

const RestaurantsScreenWrapper = styled.SafeAreaView`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;

const SearchBarWrapper = styled.View`
  padding: 16px;
`;

const ListWrapper = styled.View`
  flex: 1;
  padding: 16px;
`;

export const RestaurantsScreen = () => (
  <RestaurantsScreenWrapper>
    <SearchBarWrapper>
      <Searchbar />
    </SearchBarWrapper>
    <ListWrapper>
      <RestaurantInfoCard />
    </ListWrapper>
  </RestaurantsScreenWrapper>
);
