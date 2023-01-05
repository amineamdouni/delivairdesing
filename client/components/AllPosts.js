//import liraries
import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  FlatList,
  Dimensions,
  Animated,
  SafeAreaView,
} from "react-native";

const { width } = Dimensions.get("screen");
import { EvilIcons } from "@expo/vector-icons";
import {
  FlingGestureHandler,
  Directions,
  State,
} from "react-native-gesture-handler";

const Data = [
  {
    title: "Upcoming technology",
    location: "Moon Knight",
    date: "September 14, 2022",
    poster:
      "https://res.cloudinary.com/dnwi9wvci/image/upload/v1672839276/Capture_cmiyp9.png",
  },
  {
    title: "Confluence Integration ",
    location: " Eliza Martin",
    date: " February 2, 2022",
    poster:
      "https://res.cloudinary.com/dnwi9wvci/image/upload/v1672842200/IMG-20220202-WA0018_ynpbmv.jpg",
  },
  {
    title: "What Is Cryptocurrency ?",
    location: "Selimkhandipu",
    date: " September 18, 2022",
    poster:
      "https://res.cloudinary.com/dnwi9wvci/image/upload/v1672842259/3d416d2430854196a8531a38f2af2582_qephil.jpg",
  },
  {
    title: "Using Video Conferencing",
    location: " Kiera Ellis",
    date: "August 24, 2020",
    poster:
      "https://res.cloudinary.com/dnwi9wvci/image/upload/v1672842331/time-business-news-default_uls7es.jpg",
  },
  {
    title: "All About Printed Circuit ",
    location: "Ali Raza",
    date: "December 6, 2020",
    poster:
      "https://res.cloudinary.com/dnwi9wvci/image/upload/v1672842387/All-About-Printed-Circuit-Boards-What-You-Need-To-Know-800x445_ce5bqh.jpg",
  },
  {
    title: "KSF SPACE TOGETHER !",
    location: "KSF Space Lunar Rover",
    date: " south pole of the Moon in 2023",
    poster:
      "https://res.cloudinary.com/dnwi9wvci/image/upload/v1672842440/ksf-lunar-mission-nanosatellite-cubesat_bmunxa.jpg",
  },
];

const OVERFLOW_HEIGHT = 70;
const SPACING = 10;
const ITEM_WIDTH = width * 0.76;
const ITEM_HEIGHT = ITEM_WIDTH * 1.7;
const VISIBLE_ITEMS = 3;

const OverflowItems = ({ data, scrollXAnimated }) => {
  const inputRange = [-1, 0, 1];
  const translateY = scrollXAnimated.interpolate({
    inputRange,
    outputRange: [OVERFLOW_HEIGHT, 0, -OVERFLOW_HEIGHT],
  });
  return (
    <View style={styles.overflowContainer}>
      <Animated.View style={{ transform: [{ translateY }] }}>
        {data.map((item, index) => {
          return (
            <View key={index} style={styles.itemContainer}>
              <Text style={[styles.title]} numberOfLines={1}>
                {item.title}
              </Text>
              <View style={styles.itemContainerRow}>
                <Text style={[styles.location]}>
                  <EvilIcons
                    name="location"
                    size={16}
                    color="black"
                    style={{ marginRight: 5 }}
                  />
                  {item.location}
                </Text>
                <Text style={[styles.date]}>{item.date}</Text>
              </View>
            </View>
          );
        })}
      </Animated.View>
    </View>
  );
};

export default function Events() {
  const [data, setData] = React.useState(Data);
  const scrollXIndex = React.useRef(new Animated.Value(0)).current;
  const scrollXAnimated = React.useRef(new Animated.Value(0)).current;
  const [index, setIndex] = React.useState(0);
  const setActiveIndex = React.useCallback((activeIndex) => {
    setIndex(activeIndex);
    scrollXIndex.setValue(activeIndex);
  });
  React.useEffect(() => {
    Animated.spring(scrollXAnimated, {
      toValue: scrollXIndex,
      useNativeDriver: true,
    }).start();
  });
  return (
    <FlingGestureHandler
      key="left"
      direction={Directions.LEFT}
      onHandlerStateChange={(ev) => {
        if (ev.nativeEvent.state === State.END) {
          if (index === data.length - 1) {
            return;
          }
          setActiveIndex(index + 1);
        }
      }}
    >
      <FlingGestureHandler
        key="right"
        direction={Directions.RIGHT}
        onHandlerStateChange={(ev) => {
          if (ev.nativeEvent.state === State.END) {
            if (index === 0) {
              return;
            }
            setActiveIndex(index - 1);
          }
        }}
      >
        <SafeAreaView style={styles.container}>
          <StatusBar hidden />
          <OverflowItems data={data} scrollXAnimated={scrollXAnimated} />
          <FlatList
            data={data}
            keyExtractor={(_, index) => String(index)}
            horizontal
            inverted
            contentContainerStyle={{
              flex: 1,
              justifyContent: "center",
              padding: SPACING * 2,
            }}
            scrollEnabled={false}
            removeClippedSubviews={false}
            CellRendererComponent={({
              item,
              index,
              children,
              style,
              ...props
            }) => {
              const newStyle = [style, { zIndex: data.length - index }];
              return (
                <View style={newStyle} index={index} {...props}>
                  {children}
                </View>
              );
            }}
            renderItem={({ item, index }) => {
              const inputRange = [index - 1, index, index + 1];
              const translateX = scrollXAnimated.interpolate({
                inputRange,
                outputRange: [50, 0, -100],
              });
              const scale = scrollXAnimated.interpolate({
                inputRange,
                outputRange: [0.8, 1, 1.3],
              });
              const opacity = scrollXAnimated.interpolate({
                inputRange,
                outputRange: [1 - 1 / VISIBLE_ITEMS, 1, 0],
              });
              return (
                <Animated.View
                  style={{
                    position: "absolute",
                    left: -ITEM_WIDTH / 2,
                    opacity,
                    transform: [
                      {
                        translateX,
                      },
                      { scale },
                    ],
                  }}
                >
                  <Image
                    source={{ uri: item.poster }}
                    style={{
                      width: ITEM_WIDTH,
                      height: ITEM_HEIGHT,
                    }}
                  />
                </Animated.View>
              );
            }}
          />
        </SafeAreaView>
      </FlingGestureHandler>
    </FlingGestureHandler>
  );
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",

    backgroundColor: "#fff",
  },
  title: {
    fontSize: 28,
    fontWeight: "900",
    textTransform: "uppercase",
    letterSpacing: -1,
  },
  location: {
    fontSize: 16,
  },
  date: {
    fontSize: 12,
  },
  itemContainer: {
    height: OVERFLOW_HEIGHT,
    padding: SPACING,
  },
  itemContainerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  overflowContainer: {
    height: OVERFLOW_HEIGHT,
    overflow: "hidden",
  },
});
