import { useLayoutEffect, useContext } from "react";
import { View, Text, Image, StyleSheet, ScrollView, Button } from "react-native";

import { MEALS } from "../data/dummy-data";
import MealDetailsData from "../components/MealDetailsData";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
import { FavoriteContext } from '../store/context/favorite-context';
 
function MealDetails({ route, navigation }) {
    const favoriteMealsCtx = useContext(FavoriteContext);

    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);

    function changeFavoritesStatusHandler() {
        if (mealIsFavorite) {
            favoriteMealsCtx.removeFavorite(mealId);
        } else {
            favoriteMealsCtx.addFavorite(mealId);
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({ headerRight: () => {
            return <IconButton icon='heart-sharp' color={mealIsFavorite ? 'red' : 'white'} onPress={changeFavoritesStatusHandler}/>
        } });
    }, [navigation, changeFavoritesStatusHandler]);

    return (
        <ScrollView style={styles.rooContainer}>
            <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }}/>
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetailsData duration={selectedMeal.duration} complexity={selectedMeal.complexity} affordability={selectedMeal.affordability} textStyle={styles.detailsText}/>

            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List data={selectedMeal.ingredients} />
                    <Subtitle>Steps</Subtitle>
                    <List data={selectedMeal.steps} />
                </View>
            </View>   
        </ScrollView>
    )
};

export default MealDetails;

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 350,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center'
    },
    detailsText: {
        color: '#000'
    },
    listOuterContainer: {
        alignItems: 'center',
    },
    listContainer: {
        width: '80%',
    },
    rooContainer: {
        marginBottom: 40,
    },
});
