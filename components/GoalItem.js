import { StyleSheet, Text, View, Pressable } from "react-native";

function GoalItem(props) {
    return(
        <View style={styles.goalItem}>
            <Pressable andriod_ripple={{color: '#210644'}} style={({pressed}) => {pressed && styles.pressedItem}} onPress={props.onDeleteItem.bind(this, props.id)}>
                <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    goalItem:{
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
    },
    goalText:{
      color: 'white',
      padding: 8,
    },
    pressedItem:{
        opacity: 0.5,
    },
});

export default GoalItem