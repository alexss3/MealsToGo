import React from "react";
import styled from "styled-components/native";
import { StatusBar, SafeAreaView, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const SafeArea = styled(SafeAreaView)`
	flex: 1;
	${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
	padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
	contentContainerStyle: {
		padding: 16,
	},
})``;

export const RestaurantsScreen = () => (
	<SafeArea>
		<SearchContainer>
			<Searchbar placeholder="Find a restaurant" />
		</SearchContainer>
		<RestaurantList
			data={[{ name: 1 }, { name: 2 }]}
			renderItem={() => <RestaurantInfoCard key={(item) => item.name} />}
			keyExtractor={(item) => item.name}
		/>
	</SafeArea>
);
