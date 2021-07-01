import React, { useContext } from "react";
import styled from "styled-components/native";
import { StatusBar, SafeAreaView, FlatList } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { Search } from "../components/search.component";

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

const Loading = styled(ActivityIndicator)`
	margin-left: -25px;
`;

const LoadingContainer = styled.View`
	position: absolute;
	top: 50%;
	left: 50%;
`;

export const RestaurantsScreen = () => {
	const { isLoading, error, restaurants } = useContext(RestaurantsContext);

	return (
		<SafeArea>
			{isLoading && (
				<LoadingContainer>
					<Loading
						animating={true}
						size={50}
						color={Colors.blueA100}
					/>
				</LoadingContainer>
			)}
			<Search />
			<RestaurantList
				data={restaurants}
				renderItem={({ item }) => (
					<RestaurantInfoCard restaurant={item} />
				)}
				keyExtractor={(item) => item.name}
			/>
		</SafeArea>
	);
};
