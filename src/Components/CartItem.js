import { Pressable,StyleSheet, Text, View } from 'react-native'
import {Entypo} from "@expo/vector-icons"
import { colors } from '../Global/colors'
import { removeItem } from '../features/cart/cartSlice'
import { useSelector, useDispatch } from 'react-redux'

const CartItem = ({item}) => {
 const dispatch = useDispatch()
   
  
  return (
    <View style={styles.container}>
        <View style={styles.textContainer}>
            <Text style={styles.text1}>{item.title}</Text>
            <Text  style={styles.text2}>{item.brand}</Text>
            <Text  style={styles.text2}>Cantidad: {item.quantity} Precio $ {item.price}</Text>
        </View>
        <Pressable onPress={()=> dispatch(removeItem(item.id)) }>
                <Entypo name='trash' size={25} color="red"/>
        </Pressable>
    </View>

  )
}

export default CartItem

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.color3,
        margin:10,
        padding:10,
        height:100,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        borderRadius:10,
        borderWidth:2
    },
    textContainer:{
        width:"70",
        gap:5
    },
    text1:{
        fontSize:19,
        color:colors.lightGray,
        fontFamily:"Font1"
    },
    text2:{
        fontSize:17,
        color:colors.lightGray,
        fontFamily:"Font1"
    }

})