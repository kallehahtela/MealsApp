import { View, Text } from "react-native";

function MealsItem({ title }) {
    return (
        <View>
            <Text>{title}</Text>
        </View>
    );
}

export default MealsItem;