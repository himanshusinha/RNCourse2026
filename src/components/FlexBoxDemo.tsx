import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const FlexBoxDemo = () => {
  const data = [
    'small text',
    'small medium',
    'small to large',
    'small to extra large asdasdasdasdasd',
  ];
  return (
    /* Strech Example width height nahi dena rhti hai isme parent flex 1 aur child ko bhi flex 1 */
    // <View
    //   style={{
    //     flex: 1,
    //     backgroundColor: 'white',
    //     flexDirection: 'row',
    //     alignItems: 'stretch',
    //   }}
    // >
    //   <View style={{ flex: 1, backgroundColor: 'green' }} />
    //   <View style={{ flex: 1, backgroundColor: 'orange' }} />
    //   <View style={{ flex: 1, backgroundColor: 'pink' }} />
    // </View>

    // alignItems: "baseline" children elements ko unke text baseline ke according align karta hai, chahe font sizes different ho.
    //  <View
    //   style={{
    //     flex: 1,
    //     backgroundColor: 'white',
    //     flexDirection: 'row',
    //     alignItems: 'baseline',
    //   }}
    // >
    //      <Text style={{ fontSize: 20, backgroundColor: 'lightgreen' }}>
    //     Small
    //   </Text>

    //   <Text style={{ fontSize: 40, backgroundColor: 'orange' }}>
    //     Medium
    //   </Text>

    //   <Text style={{ fontSize: 60, backgroundColor: 'pink' }}>
    //     Large
    //   </Text>
    // </View>

    /* 
    alignSelf child component par use hota hai aur ye parent ke alignItems ko override karta hai.

    auto	-> parent alignItems follow karega
    flex-start	-> item cross axis ke start me align hoga
    center	-> item cross axis ke center me align hoga
    flex-end ->	item cross axis ke end me align hoga
    stretch	-> item cross axis me full stretch ho jayega
    baseline	-> item text baseline ke according align hoga

    */
    // <View
    //   style={{
    //     flex: 1,
    //     backgroundColor: 'white',
    //     alignItems: 'baseline',
    //   }}
    // >
    //   <Text style={{ fontSize: 20, backgroundColor: 'red' }}>Small</Text>
    //   <Text style={{ fontSize: 40, backgroundColor: 'orange' }}>Medium</Text>
    //   <Text style={{ fontSize: 60, backgroundColor: 'pink' }}>Large</Text>
    // </View>

    // flexWrap: Items ko container me space khatam hone par next line me move karne deta hai.

    // <SafeAreaView>
    //   <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
    //     {data.map((item, index) => {
    //       return (
    //         <View
    //           key={index}
    //           style={{
    //             margin: 10,
    //             backgroundColor: 'orange',
    //             padding: 10,
    //           }}
    //         >
    //           <Text>{item}</Text>
    //         </View>
    //       );
    //     })}
    //   </View>
    // </SafeAreaView>

    //alignContent: Multiple rows hone par rows ko cross axis par align karta hai.
    // <View
    //   style={{
    //     flex: 1,
    //     flexDirection: 'row',
    //     flexWrap: 'wrap',
    //     alignContent: 'center',
    //   }}
    // >
    //   <View style={{ width: 100, height: 100, backgroundColor: 'red' }} />
    //   <View style={{ width: 100, height: 100, backgroundColor: 'green' }} />
    //   <View style={{ width: 100, height: 100, backgroundColor: 'blue' }} />
    //   <View style={{ width: 100, height: 100, backgroundColor: 'orange' }} />
    //   <View style={{ width: 100, height: 100, backgroundColor: 'red' }} />
    //   <View style={{ width: 100, height: 100, backgroundColor: 'green' }} />
    //   <View style={{ width: 100, height: 100, backgroundColor: 'blue' }} />
    //   <View style={{ width: 100, height: 100, backgroundColor: 'orange' }} />
    // </View>

    // gap: Flexbox items ke beech equal spacing dene ke liye use hota hai.sirf parent container par lagta hai
    // <View
    //   style={{
    //     flexDirection: 'row',
    //     gap: 20,
    //     padding: 20,
    //   }}
    // >
    //   <View style={{ width: 80, height: 80, backgroundColor: 'red' }} />
    //   <View style={{ width: 80, height: 80, backgroundColor: 'green' }} />
    //   <View style={{ width: 80, height: 80, backgroundColor: 'blue' }} />
    // </View>

    //     flexGrow: Available extra space ko proportionally fill karta hai.

    // <View style={{ flexDirection: 'row', height: 100 }}>
    //   <View style={{ flexGrow: 1, backgroundColor: 'red' }} />
    //   <View style={{ flexGrow: 2, backgroundColor: 'green' }} />
    //   <View style={{ flexGrow: 1, backgroundColor: 'blue' }} />
    // </View>

    // <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
    //   <View style={{ width: 50, height: 50, backgroundColor: 'red' }} />
    //   <View style={{ width: 50, height: 50, backgroundColor: 'green' }} />
    //   <View style={{ width: 50, height: 50, backgroundColor: 'blue' }} />
    // </View>

    // flexShrink Space kam hone par item shrink ho jata hai.

    // flexGrow: extra space ko fill karta hai
    // flexShrink: space kam hone par element shrink hota hai.
    // <View style={{ flexDirection: 'row' }}>
    //   <View
    //     style={{
    //       width: 150,
    //       height: 100,
    //       flexShrink: 1,
    //       backgroundColor: 'red',
    //     }}
    //   />
    //   <View
    //     style={{
    //       width: 150,
    //       height: 100,
    //       flexShrink: 1,
    //       backgroundColor: 'green',
    //     }}
    //   />
    // </View>
    // relative ka matlab element apni normal position me rehta hai.
    // <View style={{ flex: 1 }}>
    //   <View style={{ width: 100, height: 100, backgroundColor: 'red' }} />

    //   <View
    //     style={{
    //       width: 100,
    //       height: 100,
    //       backgroundColor: 'green',
    //       position: 'relative',
    //       top: 20,
    //       left: 20,
    //     }}
    //   />

    //   <View style={{ width: 100, height: 100, backgroundColor: 'blue' }} />
    // </View>
    // Absolute Position absolute ka matlab element normal layout se bahar ho jata hai aur parent ke relative position par place hota hai.

    // flexGrow → extra space fill karta hai
    // flexShrink → space kam hone par element shrink hota hai

    <View style={{ flex: 1 }}>
      <View style={{ width: 200, height: 200, backgroundColor: 'lightgray' }} />

      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'red',
          position: 'absolute',
          top: 50,
          left: 50,
        }}
      />
    </View>
  );
};

export default FlexBoxDemo;

/* 
flexDirection defines the MAIN AXIS direction.

Default value: "column"

Values:

column
-> items arranged from TOP to BOTTOM
-> main axis = vertical
-> cross axis = horizontal

column-reverse
-> items arranged from BOTTOM to TOP
-> main axis = vertical (reverse order)

row
-> items arranged from LEFT to RIGHT
-> main axis = horizontal
-> cross axis = vertical

row-reverse
-> items arranged from RIGHT to LEFT
-> main axis = horizontal (reverse order)

Important:
flexDirection decides the MAIN AXIS.
justifyContent works on MAIN AXIS.
alignItems works on CROSS AXIS.

Example:

flexDirection: "column"
Main Axis ↓
Item1
Item2
Item3

flexDirection: "row"
Main Axis →
Item1 Item2 Item3




alignItems defines alignment of CHILDREN on the CROSS AXIS.

Works on the parent container.

Default value: "stretch"

Values:

flex-start
-> items align at the START of cross axis

center
-> items align at the CENTER of cross axis

flex-end
-> items align at the END of cross axis

stretch
-> items stretch to fill the container on cross axis
-> works only if width/height is NOT defined

baseline
-> items align based on text baseline

Important:

alignItems works on CROSS AXIS
justifyContent works on MAIN AXIS

Example:

flexDirection: "column"

Main Axis ↓
[ Item ]
[ Item ]
[ Item ]

Cross Axis →

alignItems: "center"

        [ Item ]
        [ Item ]
        [ Item ]

alignItems: "flex-start"

[ Item ]
[ Item ]
[ Item ]

alignItems: "flex-end"

                [ Item ]
                [ Item ]
                [ Item ]
*/
