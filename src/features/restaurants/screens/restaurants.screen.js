import React, { useContext } from "react";
import { Colors } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.conmponent";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Search } from "../components/search.component";
import {
  RestaurantList,
  Loading,
  LoadingContainer,
} from "./restsurants.styles";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";

export const RestaurantsScreen = () => {
  const { restaurants, isLoading } = useContext(RestaurantContext);

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}
      <Search />
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard restaurant={item} />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
