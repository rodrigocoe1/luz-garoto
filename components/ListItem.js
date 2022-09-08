import { View, Text,TouchableOpacity,StyleSheet,Image } from 'react-native'
import React from 'react'
import icon from '../imagens/doge.png'
const ListItem = ({name, symbol, currentprice, priceChangePercentage7d, logoUrl})  => {
    const priceChangeColor = priceChangePercentage7d > 0 ? 'green' : 'red'

  return (
    <TouchableOpacity>
      <View style={styles.itemWrapper}>
        <View style={styles.leftWrapper}>
          <Image source= {icon} style={styles.image}/>
          <View style= {styles.titlesWrapper}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.subtitle}>{symbol}</Text>
          </View>
        </View>
        <View style={styles.rightWrapper}>
            <Text style={styles.title}>{currentprice}</Text>
            <Text style={[styles.subtitle,{color: priceChangeColor}]}>{priceChangePercentage7d}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  itemWrapper:{
    paddingHorizontal:16,
    marginTop: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:  'center',
  },
  leftWrapper:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightWrapper:{
    alignItems: 'flex-end',
  },
  image: {
    width:48,
    height:48,
  },
  titlesWrapper:{
    marginLeft:8
  },
  title: {
    fontSize:18
  },
  subtitle: {
    marginTop:4,
    fontSize:14,
    color: '#A9ABB1',
  },
})
export default ListItem