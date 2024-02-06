import { View, Text, Image, StyleSheet } from "react-native";

import { MEALS } from "../data/dummy-data";
import MealDetailsData from "../components/MealDetailsData";

function MealDetails({ route }) {
    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    return (
        <View>
            <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }}/>
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetailsData duration={selectedMeal.duration} complexity={selectedMeal.complexity} affordability={selectedMeal.affordability} textStyle={styles.detailsText}/>

            <View style={styles.subtitleContainer}>
                <Text style={styles.subtitle}>Ingredients</Text>
            </View>
            {selectedMeal.ingredients.map((ingredient) => (<Text key={ingredient}>{ingredient}</Text>))}

            <Text style={styles.subtitle}>Steps</Text>
            {selectedMeal.steps.map((step) => (<Text key={step}>{step}</Text>))}
        </View>
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
    subtitle: {
        color: '#e0b59c',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subtitleContainer: {
        marginHorizontal: 24,
        marginVertical: 4,
        padding: 6,
        borderBottomColor: '#e0b59c',
        borderBottomWidth: 1
    }
});
