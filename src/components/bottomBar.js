import React, { useEffect, useState } from 'react';
import { View, Pressable as Button, StyleSheet } from 'react-native';
import { scalePercentage, verticalScale, verticalScalePercentage } from "../Theme";
import { Icon } from 'react-native-elements'

BottomBar.defaultProps = {
    iconFirst : {
        type: 'material',
        name: 'home',
        onPress: ()=>console.log("icon pressed!")
    },
    iconSecond : {
        type: 'material',
        name: 'home',
        onPress: ()=>console.log("icon pressed!")
    },
    iconThird : {
        type: 'material',
        name: 'home',
        onPress: ()=>console.log("icon pressed!")
    },
    iconForth : {
        type: 'material',
        name: 'home',
        onPress: ()=>console.log("icon pressed!")
    },
    backgroundColor: 'white',
    foregroundColor: 'black',
    iconColor: 'white',
}

export default function BottomBar({
    iconFirst, 
    iconSecond, 
    iconThird, 
    iconForth,
    backgroundColor,
    foregorundColor,
    iconColor
}) {
    const [tabScale, setTabScale] = useState([4, 30, 25, 25])
    const [ofSpace, setOfSpace] = useState(1);
    const spaceBlock = (num) => {
        if (num == 1) {
            setTabScale([4, 30, 25, 25])
        }
        else if (num == 2) {
            setTabScale([25, 4, 30, 25])
        }
        else if (num == 3) {
            setTabScale([25, 25, 4, 30])
        }
        else if (num == 4) {
            setTabScale([25, 25, 30, 4])
        }
    }
    return (
        <View style={{
            width: '100%',
            backgroundColor: foregorundColor,
            height: verticalScalePercentage(9),
            flexDirection: 'row',
        }}>
            <Button style={[styles.setCenter, styles.block, {
                backgroundColor: backgroundColor,
                width: scalePercentage(tabScale[0]),
                borderTopRightRadius: ofSpace == 1 ? 20 : 0
                }]} onPress={() => {
                    iconFirst.onPress()
                    setOfSpace(1)
                    spaceBlock(1)
            }}>
                {ofSpace != 1 ?
                    <Icon
                        type={iconFirst.type}
                        name={iconFirst.name}
                        size={40}
                        color={iconColor}
                    />
                    : null}
            </Button>

            {ofSpace == 1 ?
                <View style={styles.spaceBlock}>
                    <View style={[styles.setCenter, styles.iconBackCircle,{backgroundColor: foregorundColor}]}>
                        <Icon
                            type={iconFirst.type}
                            name={iconFirst.name}
                            size={40}
                            color={iconColor}
                            style={[styles.iconCircle,{backgroundColor: backgroundColor}]}
                        />
                    </View>
                </View>
                : null}

            <Button style={[styles.setCenter, styles.block, {
                backgroundColor: backgroundColor,
                width: scalePercentage(tabScale[1]),
                borderTopLeftRadius: ofSpace == 1 ? 20 : 0,
                borderTopRightRadius: ofSpace == 2 ? 20 : 0
            }]}
                onPress={() => {
                    iconSecond.onPress()
                    setOfSpace(2)
                    spaceBlock(2) 
                }}>
                {ofSpace != 2 ?
                    <Icon
                        type={iconSecond.type}
                        name={iconSecond.name}
                        size={40}
                        color={iconColor}
                    />
                    : null}
            </Button>

            {ofSpace == 2 ?
                <View style={styles.spaceBlock}>
                    <View style={[styles.setCenter, styles.iconBackCircle,{backgroundColor: foregorundColor}]}>
                        <Icon
                            type={iconSecond.type}
                            name={iconSecond.name}
                            size={40}
                            color={iconColor}
                            style={[styles.iconCircle,{backgroundColor: backgroundColor}]}
                        />
                    </View>
                </View>
                : null}


            <Button style={[styles.setCenter, styles.block, {
                backgroundColor: backgroundColor,
                width: scalePercentage(tabScale[2]),
                borderTopLeftRadius: ofSpace == 2 ? 20 : 0,
                borderTopRightRadius: ofSpace == 3 || ofSpace == 4 ? 20 : 0
            }]} onPress={() => {
                iconThird.onPress()
                setOfSpace(3)
                spaceBlock(3) 
            }}>
                {ofSpace != 3 ?
                    <Icon
                        type={iconThird.type}
                        name={iconThird.name}
                        size={40}
                        color={iconColor}
                    />
                    : null}
            </Button>

            {ofSpace == 3 ?
                <View style={styles.spaceBlock}>
                    <View style={[styles.setCenter, styles.iconBackCircle,{backgroundColor: foregorundColor}]}>
                        <Icon
                            type={iconThird.type}
                            name={iconThird.name}
                            size={40}
                            color={iconColor}
                            style={[styles.iconCircle,{backgroundColor: backgroundColor}]}
                        />
                    </View>
                </View>
                : null}

            {ofSpace == 4 ?
                <View style={styles.spaceBlock}>
                    <View style={[styles.setCenter, styles.iconBackCircle,{backgroundColor: foregorundColor}]}>
                        <Icon
                            type={iconForth.type}
                            name={iconForth.name}
                            size={40}
                            color={iconColor}
                            style={[styles.iconCircle,{backgroundColor: backgroundColor}]}
                        />
                    </View>
                </View>
                : null}

            <Button style={[styles.setCenter, styles.block, {
                backgroundColor: backgroundColor,
                width: scalePercentage(tabScale[3]),
                borderTopLeftRadius: ofSpace == 3 || ofSpace == 4 ? 20 : 0,
            }]} onPress={() => {
                iconForth.onPress()
                setOfSpace(4)
                spaceBlock(4)
            }}>
                {ofSpace != 4 ?
                    <Icon
                        type={iconForth.type}
                        name={iconForth.name}
                        size={40}
                        color={iconColor}
                    />
                    : null}
            </Button>

        </View>
    );
}
const styles = StyleSheet.create({
    setCenter: {
      justifyContent: 'center',
      alignItems: 'center'
    },
    iconCircle: {
      borderRadius: 25,
      padding: 5,
      width: scalePercentage(12),
      height: scalePercentage(12),
      backgroundColor: '#9C64B8'
    },
    iconBackCircle: {
      height: scalePercentage(16),
      width: scalePercentage(16),
      bottom: 30,
      borderRadius: 75,
      backgroundColor: '#BBAFC1',
    },
    spaceBlock: {
      height: '100%',
      width: scalePercentage(16),
      top: 15,
      backgroundColor: '#9C64B8',
    },
    block: {
      height: '100%',
      backgroundColor: 'black',
    }
  })