import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import axios, { Axios } from "axios";
import {
  Alert,
  Text,
  Link,
  Center,
  Input,
  Stack,
  Slider,
  NativeBaseProvider,
  Heading,
  VStack,
  Box,
  Button,
  Image,
  Flex,
  Divider,
  Icon,
  HStack,
} from "native-base";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
const date = new Date();
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";

export default function AddPost({ navigation }) {
  const [flight, setFlight] = useState(null);
  const [text, setText] = useState("");
  const [onChangeValue, setOnChangeValue] = React.useState(0);
  const [onChangeEndValue, setOnChangeEndValue] = React.useState(0);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  const [items, setItems] = useState([
    { label: "Apple", value: "apple" },
    { label: "Karmousa", value: "karmousa" },
    { label: "Banana", value: "banana" },
  ]);
  const check = (input) => {
    axios
      .get(
        `https://aerodatabox.p.rapidapi.com/flights/number/${input}?rapidapi-key=0d11f53845msh4376157ff14641cp152948jsnf3bf30a8b5bd`
      )
      .then((res) => {
        setFlight(res.data[0]);
      });
  };
  const post = (body) => {
    Axios.post(``, body).then((res) => Alert("success"));
  };
  return (
    <NativeBaseProvider>
      <Center>
        <Image
          size={300}
          borderRadius={30}
          source={{
            uri: "https://i.ibb.co/WzPwN1m/Minimal-World-Travel-Blog-Suitcase-Logo.png",
          }}
          alt="Alternate Text"
        />
      </Center>
      <Center flex={1} px="3">
        <Text bottom={180} right={100} width={150}>
          Flight name :
        </Text>
        <Input
          mx="4"
          height={35}
          bottom={157}
          right={100}
          width={150}
          borderColor={"black"}
          borderWidth={1}
          variant="outline"
          placeholder="Type here code flight"
          onChangeText={(newText) => setText(newText)}
          defaultValue={text}
        />
        {
          <Button
            mx="1"
            backgroundColor={"#ABCED8"}
            bottom={190}
            left={130}
            width={100}
            borderColor={"black"}
            borderWidth={1}
            height={36}
            onPress={() => check(text)}
          >
            Check
          </Button>
        }
        <Text bottom={170} right={100} width={150}>
          Weight :{" "}
        </Text>
        <Text bottom={190} left={1} width={150} textAlign="center">
          {" "}
          {onChangeValue} KG{" "}
        </Text>
        <Box bottom={170} alignItems="center" w="100%">
          <Stack space={4} alignItems="center" w="75%" maxW="300">
            <Slider
              defaultValue={0}
              colorScheme="#ABCED8"
              onChange={(v) => {
                setOnChangeValue(Math.floor(v / 4));
              }}
              onChangeEnd={(v) => {
                v && setOnChangeEndValue(Math.floor(v / 4));
              }}
            >
              <Slider.Track>
                <Slider.FilledTrack backgroundColor={"#ABCED8"} />
              </Slider.Track>
              <Slider.Thumb />
            </Slider>
          </Stack>
        </Box>

        <Text bottom={140} right={100} width={150}>
          Payment method :
        </Text>
        <Box style={{ bottom: 170, left: 105 }}>
          <DropDownPicker
            translation={{
              PLACEHOLDER: "        select    ",
            }}
            dropDownDirection="DOWN"
            dropDownContainerStyle={{
              width: 140,
              backgroundColor: "transparent",
            }}
            style={{ width: 140, backgroundColor: "transparent" }}
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
          />
        </Box>
        {flight && (
          <Box
            style={{
              bottom: 90,
              borderRadius: 10,
              borderColor: "black",
              borderWidth: 1,
            }}
          >
            <HStack>
              <FontAwesome5
                name="plane-departure"
                color="coolGray.800"
                size={15}
              ></FontAwesome5>
              <Text fontWeight={700}> Departure country :</Text>
              <Text> {flight.departure.airport.municipalityName} </Text>
            </HStack>
            <HStack>
              <MaterialCommunityIcons
                name="clock-time-eight-outline"
                color="coolGray.800"
                size={17}
              ></MaterialCommunityIcons>
              <Text fontWeight={700}> Departure time :</Text>
              <Text> {flight.departure.scheduledTimeLocal} </Text>
            </HStack>
            <HStack>
              <FontAwesome5
                name="plane-arrival"
                color="coolGray.800"
                size={15}
              ></FontAwesome5>
              <Text fontWeight={700}> Arrival country :</Text>
              <Text> {flight.arrival.airport.municipalityName} </Text>
            </HStack>
            <HStack>
              <MaterialCommunityIcons
                name="clock-time-nine-outline"
                color="coolGray.800"
                size={17}
              ></MaterialCommunityIcons>
              <Text fontWeight={700}> Arrival time :</Text>
              <Text> {flight.arrival.scheduledTimeLocal} </Text>
            </HStack>
          </Box>
        )}
        <Button
          backgroundColor={"#ABCED8"}
          borderColor={"black"}
          borderWidth={1}
          top={59}
          borderRadius={10}
          onPress={() =>
            post({
              type: "shipper",
              departureCountry: flight.departure.airport.municipalityName,
              departureTime: flight.departure.scheduledTimeLocal,
              arriveCountry: flight.departure.airport.municipalityName,
              arriveTime: flight.departure.scheduledTimeLocal,
              weight: onChangeEndValue,
              flight_id: flight,
              postTime: date,
              paymentWays: [],
              acceptedItems: [],
            })
          }
        >
          Post
        </Button>
      </Center>
    </NativeBaseProvider>
  );
}
