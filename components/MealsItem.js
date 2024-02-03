import { View, Pressable, Text, Image, StyleSheet, Platform } from "react-native";

function MealsItem({ title, imageUrl, duration, complexity, affordability }) {
    return (
        <View style={styles.mealItem}>
            <Pressable android_ripple={{color: '#ccc' }} style={({ pressed }) => pressed ? styles.buttonPressed : null}>
                <View>
                    <View style={styles.innerContainer}>
                        <Image style={styles.image} source={{uri: imageUrl }}/>
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.detailItem}>{duration}m</Text>
                        <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
                        <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
                    </View>
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
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 15
    }
});