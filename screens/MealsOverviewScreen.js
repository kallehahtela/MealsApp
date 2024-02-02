import { View, FlatList, StyleSheet} from 'react-native';

import { MEALS } from '../data/dummy-data';
import MealsItem from '../components/MealsItem';

function MealsOverviewScreen({ route }) {
    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });

    function renderMealItem(itemData) {
       return (
        <MealsItem title={itemData.item.title} />
       );
    }

    return (
        <View style={styles.container}>
            <FlatList data={displayedMeals} keyExtractor={(item) => item.id} renderItem={renderMealItem} />
        </View>
    );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container : {
        flex: 1,
        padding: 16,
    },
});