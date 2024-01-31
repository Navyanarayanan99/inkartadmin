// import {View, Text, Image, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';
// import React, {useLayoutEffect, useState, useCallback, useRef} from 'react';
// import {
//   useFocusEffect,
//   useNavigation,
//   useRoute,
// } from '@react-navigation/native';
// import NavigationBack from '../../common/NavigationBack';
// import colors from '../../common/colors';
// import Accordion from 'react-native-collapsible/Accordion';
// import { useDimensionContext } from '../../context';
// import style from './style';
// import CustomTextInput from '../../components/CustomTextInput';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import Snackbar from 'react-native-snackbar';
// import ActionSheet from 'react-native-actions-sheet';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import CustomButton from '../../components/CustomButton';

// const ProductDetails = () => {
//   const dimensions = useDimensionContext();
//   // // const responsiveStyle = style(
//   // //   dimensions.windowWidth,
//   // //   dimensions.windowHeight,
//   // //   dimensions.isPortrait,
//   // );

//   const actionSheetRef = useRef(null);
//   const navigation = useNavigation();
//   const route = useRoute();
//   const product = route.params.product;
//   const [activeSections, setActiveSections] = useState([0]);

//   useLayoutEffect(() => {
//     navigation.setOptions({
//       title: 'Product Details',
//       headerStyle: {
//         backgroundColor: colors.white,
//         height: 70,
//       },
//       headerTintColor: '#000',
//       headerLeft: () => <NavigationBack />,
//       headerRight: () => <RightComponent />,
//     });
//   }, [navigation]);

  
//   const handleUpdateOrder = async () => {
//     try {
//       actionSheetRef.current?.hide();
//       setTimeout(() => {
//         Snackbar.show({
//           text: 'Order status is updated',
//           duration: Snackbar.LENGTH_LONG,
//           backgroundColor: colors.pg,
//           textColor: colors.white,
//         })
//       }, 1000);
//     } catch (error) {}
//   };

//   const SECTIONS = [
//     {
//       title: 'Manufaturer Details',
//       content: 'It was popularized in the release of letest sheets.  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book"',
//     },
//     {
//       title: 'Product Disclaimer',
//       content: 'It was popularized in the release of letest sheets , "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
//     },
//     {
//       title: 'Featurs & Details',
//       content: 'It was popularized in the release of letest sheets,  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book"',
//     },
//   ];

//   const RightComponent = () => {
//     return (
//       <TouchableOpacity onPress={() => actionSheetRef.current?.show()}>
//         <FontAwesome
//           name="edit"
//           size={30}
//           style={{marginRight: 4}}
//           color={colors.black}
//         />
//       </TouchableOpacity>
//     );
//   };

//   const _renderContent = section => {
//     return (
//       <View>
//         <Text
//           style={{
//             color: colors.black_level_1,
//             fontWeight: '500',
//             fontSize: 14,
//           }}>
//           {section.content}
//         </Text>
//       </View>
//     );
//   };

//   const _updateSections = activeSections => {
//     setActiveSections(activeSections);
//   };

//   const _renderHeader = section => {
//     return (
//       <View
//         style={{
//           flexDirection: 'row',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//         }}>
//           <ActionSheet ref={actionSheetRef}>
//         <View style={{padding: 15}}>
//           <View
//             style={{
//               justifyContent: 'space-between',
//               flexDirection: 'row',
//               alignItems: 'center',
//               borderBottomColor: colors.black_level_2,
//               borderBottomWidth: StyleSheet.hairlineWidth
//             }}>
//             <Text
//               style={{
//                 fontFamily: 'Lato-Regular',
//                 fontSize: 20,
//                 color: colors.pg,
//                 fontWeight: '700',
//               }}>
//               Update Order
//             </Text>
//             <TouchableOpacity
//               onPress={() => actionSheetRef.current?.hide()}
//               style={{alignSelf: 'flex-end'}}>
//               <AntDesign
//                 name="closecircleo"
//                 size={30}
//                 style={{}}
//                 color={colors.black}
//               />
//             </TouchableOpacity>
//           </View>

//           <View>
//             <CustomTextInput
//               width={'100%'}
//               border={true}
//               placeholder={'Order Status'}
//               onChangeText={text => {}}
//             />
//             <CustomButton
//               width={'100%'}
//               text={'Update Order'}
//               onPress={handleUpdateOrder}
//             />
//           </View>
//         </View>
//       </ActionSheet>
//         <Text style={{fontSize: 20, fontWeight: '600', color: colors.black}}>{section.title}</Text>
//         <Image
//           source={require('../../assets/images/down-arrow2.png')}
//           style={{width: 20, height: 20, resizeMode: 'cover', marginRight: 10}}
//         />
//       </View>
//     );
//   };

//   return (
//     <ScrollView style={{flex: 1}}>
//       <View style={{padding: 20}}>
//         <Image
//           source={{uri: product.image}}
//           style={{
//             width: '90%',
//             height: 200,
//             resizeMode: 'contain',
//           }}
//         />
//       </View>
//       <View
//         style={{
//           flex: 1,
//           backgroundColor: colors.white,
//           padding: 15,
//         }}>
//         <Text
//           style={{
//             fontWeight: '700',
//             color: colors.black,
//             fontSize: 20,
//             lineHeight: 45,
//           }}>
//           ₹{product.name}
//         </Text>
//         <Text
//           style={{
//             fontWeight: '500',
//             color: colors.black,
//             fontSize: 20,
//           }}>
//           {product.price}{' '}
//           <Text
//             style={{
//               fontWeight: '400',
//               color: colors.pg,
//               fontSize: 18,
//             }}>
//             25% off
//           </Text>
//         </Text>
//         <View
//               style={{
//                 borderBottomWidth: 1,
//                 borderBottomColor: colors.gery,
//                 paddingVertical: 10,
//               }}>
//               <Text style={responsiveStyle.descriptionHead}>
//                 Product Details
//               </Text>
//               <Text style={responsiveStyle.description}>
//                 {product.description}
//               </Text>
//             </View>
//         <Accordion
//           activeSections={activeSections}
//           sections={SECTIONS}
//           renderHeader={_renderHeader}
//           renderContent={_renderContent}
//           onChange={_updateSections}
//           underlayColor={'transparent'}
//           sectionContainerStyle={{
//             paddingVertical: 10,
//             borderBottomColor: colors.grey,
//             borderBottomWidth: 1,
//           }}
//         />

// <View style={{marginTop: 20, marginBottom: 50}}>
//       <Text style={responsiveStyle.deliveryHead}>Check Delivery</Text>
//       <Text style={responsiveStyle.commonText}>
//         Enter pincode to check delivery date/pickup option.
//       </Text>
//       <CustomTextInput
//         type={'primary'}
//         width={'100%'}
//         check={true}
//         border={true}
//         handleText={() => console.log('hello')}
//         placeholder={'Pin Code'}
//         icon={<Text>Check</Text>}
//       />
//       <Text style={responsiveStyle.commonText}>
//         Free Delivery on orders above 200.00.
//       </Text>
//       <Text style={responsiveStyle.commonText}>
//         Cash on delivery available.
//       </Text>
//       <Text style={responsiveStyle.commonText}>
//         Easy 21 days return and exchange.
//       </Text>
//     </View>
//       </View>

  
//     </ScrollView>
//   );
// };

// export default ProductDetails;
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import colors from '../../common/colors';
import NavigationBack from '../../common/NavigationBack';
import Accordion from 'react-native-collapsible/Accordion';
import {style} from './style';
import CustomTextInput from '../../components/CustomTextInput';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ProductDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const product = route.params.product;
  const [activeSections, setActiveSections] = useState([0]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Description',
      headerLeft: () => <NavigationBack />,
      headerRight: () => <RightComponent />,
    });
  }, [navigation]);

  const RightComponent = () => {
    return (
      <TouchableOpacity onPress={() => {}}>
        <FontAwesome
          style={{marginRight: 4}}
          name="edit"
          size={30}
          color={colors.black_level_2}
        />
      </TouchableOpacity>
    );
  };

  const SECTIONS = [
    {
      title: 'Manufacturer Details',
      content:
        'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    },
    {
      title: 'Product Disclaimer',
      content:
        'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    },
    {
      title: 'Features & Details',
      content:
        'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    },
  ];
  const _updateSections = activeSections => {
    setActiveSections(activeSections);
  };
  const _renderHeader = section => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            color: colors.black,
            fontFamily: 'Lato-Bold',
            fontSize: 18,
            marginVertical: 5,
          }}>
          {section.title}
        </Text>
        <Image
          style={{
            width: 20,
            height: 20,
            resizeMode: 'cover',
            marginRight: 10,
          }}
          source={require('../../assets/images/down-arrow2.png')}
        />
      </View>
    );
  };
  const _renderContent = section => {
    return (
      <View>
        <Text
          style={{
            color: colors.placeholder,
            fontFamily: 'Lato-Regular',
            fontSize: 16,
          }}>
          {section.content}
        </Text>
      </View>
    );
  };
  return (
    <ScrollView style={{flex: 1}}>
      <View style={{padding: 20}}>
        <Image
          source={{uri: product.image}}
          style={{width: '100%', height: 200, resizeMode: 'contain'}}
        />
      </View>
      <View style={{flex: 1, backgroundColor: colors.white, padding: 15}}>
        <Text
          style={{
            fontFamily: 'Lato-Black',
            color: colors.black,
            fontSize: 22,
            lineHeight: 45,
          }}>
          {product.name}
        </Text>

        <Text
          style={{
            fontFamily: 'Lato-Regular',
            color: colors.black,
            fontSize: 18,
          }}>
          ₹{product.price}
          {'  '}
          <Text
            style={{
              fontFamily: 'Lato-Regular',
              color: colors.primaryGreen,
              fontSize: 18,
            }}>
            25% off
          </Text>
        </Text>
        {/* description */}
        <View style={style.descriptionWrap}>
          <Text style={style.descriptionTitle}>Product Details</Text>
          <Text style={style.descriptionValue}>{product.description}</Text>
        </View>
        <Accordion
          sections={SECTIONS}
          activeSections={activeSections}
          renderHeader={_renderHeader}
          renderContent={_renderContent}
          onChange={_updateSections}
          underlayColor={'transparent'}
          sectionContainerStyle={{
            borderBottomColor: colors.borderGrey,
            borderBottomWidth: StyleSheet.hairlineWidth,
            paddingVertical: 10,
          }}
        />
        {/* delivery details */}
        <View>
          <Text
            style={{
              fontSize: 18,
              color: colors.black,
              fontFamily: 'Lato-Bold',
              marginVertical: 20,
            }}>
            Check Delievry
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: colors.placeholder,
              fontFamily: 'Lato-Regular',
            }}>
            Enter pincode to check delivery date/pickup option.
          </Text>
          <CustomTextInput
            placeholder={'Pin Code'}
            onChange={text => {}}
            width={'100%'}
            border={true}
            onChangeText={text => {}}
            icon={<Text>Check</Text>}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 10,
            }}>
            <Text
              style={{
                fontSize: 16,
                color: colors.placeholder,
                fontFamily: 'Lato-Regular',
              }}>
              Free delivery on orders above 200.00
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 10,
            }}>
            <Text
              style={{
                fontSize: 16,
                color: colors.placeholder,
                fontFamily: 'Lato-Regular',
              }}>
              Cash on delivery available.
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 10,
            }}>
            <Text
              style={{
                fontSize: 16,
                color: colors.placeholder,
                fontFamily: 'Lato-Regular',
              }}>
              Easy 21 days return and exchange.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default ProductDetails;