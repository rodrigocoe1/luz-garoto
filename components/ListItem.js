import React from "react";
import {View, Text, TouchableOpacity, StyleSheet} from "react-native"

function ListItem(){
    return(
        <TouchableOpacity>
             <View style={styles.itemWrapper}>
                <View style={styles.itemWrapper}>
                    <Image source= {{uri: jogoUrl}} style={styles.image}/>
                    <View style={styles.itemWrapper}>
                        <Text style={styles.titulo}>Etherium</Text>
                        <Text style={styles.subtitle}>ETH</Text>
                    </View>
                </View>
                <View style={styles.rightWrapper}>
                    <Text style={styles.titulo}>Etherium</Text>
                    <Text style={[styles.subtitle,{color: 'red'}]}>ETH</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    itemWrapper: {
        paddinghorizontal:16,
        marginTop: 24,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItens: 'center',
    },
    leftWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    rightWrapper: {
        alignItems: 'flex-end',
    },
    image: {},
    titlesWrapper: {},
    title: {},
    subtitle: {},
})
export default ListItem