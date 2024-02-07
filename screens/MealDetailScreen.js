import { useLayoutEffect } from "react";
import { View, Text, Image, StyleSheet, ScrollView, Button } from "react-native";

import { MEALS } from "../data/dummy-data";
import MealDetailsData from "../components/MealDetailsData";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";

function MealDetails({ route, navigation }) {
    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    function headerButtonPressHandler() {
        console.log('Pressed');
    }

    useLayoutEffect(() => {
        navigation.setOptions({ headerRight: () => {
            return <Button title="Tap me" onPress={headerButtonPressHandler}/>
        } });
    }, [navigation, headerButtonPressHandler]);

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
