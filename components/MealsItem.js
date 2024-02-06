import { View, Pressable, Text, Image, StyleSheet, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealDetailsData from "./MealDetailsData";

function MealsItem({ id, title, imageUrl, duration, complexity, affordability }) {
    const navigation = useNavigation();

    function selectMealItemHandler() {
        navigation.navigate('MealDetail', {
            mealId: id
        });
    }

    return (
        <View style={styles.mealItem}>
            <Pressable android_ripple={{color: '#ccc' }} style={({ pressed }) => (pressed ? styles.buttonPressed : null)} onPress={selectMealItemHandler}>
                <View>
                    <View style={styles.innerContainer}>
                        <Image style={styles.image} source={{uri: imageUrl }}/>
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <MealDetailsData duration={duration} affordability={affordability} complexity={complexity} />
                </View>
            </Pressable>
        </View>
    );
}

export default MealsItem;

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: '#fff',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: .25,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 8
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden'
    },  
    image: {
        width: '100%',
        height: 200
    },
    buttonPressed: {
        opacity: 0.5
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 22,
        margin: 8
    },
});