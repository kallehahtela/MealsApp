//import { useContext } from 'react';
import { UseSelector, useSelector } from 'react-redux';
import { StyleSheet, View, Text } from 'react-native';

import { MEALS } from '../data/dummy-data';
import MealsList from '../components/MealDetail/MealList/MealsList';
//import { FavoriteContext } from '../store/context/favorite-context';

function FavouriteScreen() {
    // const favoriteMealCtx = useContext(FavoriteContext);
    const favoriteMealIds = useSelector(state => state.favoriteMeals.ids);

    const favoriteMeals = MEALS.filter(meal => favoriteMealIds.includes(meal.id));

    if (favoriteMeals.length === 0) {
        return (
            <View style={styles.rootContainer}>
                <Text style={styles.text}>You don't have any favorite meals yet.</Text>
            </View>
        )
    }

    return (
        <MealsList items={favoriteMeals}/>
    );
}

export default FavouriteScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#b38b74'
    }
});