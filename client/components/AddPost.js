import React, { useState, useContext, useEffect, useCallback } from "react";
import { UserContext } from "../UserContext";
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
  const { user, connected } = useContext(UserContext);
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  useEffect(() => {
    forceUpdate();
  }, [user]); // {
  //   greatCircleDistance: {
  //     meter: 860121.12,
  //     km: 860.121,
  //     mile: 534.454,
  //     nm: 464.428,
  //     feet: 2821919.69,
  //   },
  //   departure: {
  //     airport: {
  //       icao: "DTTA",
  //       iata: "TUN",
  //       name: "Tunis, Tunis Carthage",
  //       shortName: "Carthage",
  //       municipalityName: "Tunis",
  //       location: { lat: 36.851, lon: 10.227199 },
  //       countryCode: "TN",
  //     },
  //     scheduledTimeLocal: "2023-01-04 13:25+01:00",
  //     scheduledTimeUtc: "2023-01-04 12:25Z",
  //     terminal: "M",
  //     quality: ["Basic"],
  //   },
  //   arrival: {
  //     airport: {
  //       icao: "LEBL",
  //       iata: "BCN",
  //       name: "Barcelona",
  //       shortName: "Barcelona",
  //       municipalityName: "Barcelona",
  //       location: { lat: 41.2971, lon: 2.078459 },
  //       countryCode: "ES",
  //     },
  //     scheduledTimeLocal: "2023-01-04 15:10+01:00",
  //     actualTimeLocal: "2023-01-04 15:41+01:00",
  //     scheduledTimeUtc: "2023-01-04 14:10Z",
  //     actualTimeUtc: "2023-01-04 14:41Z",
  //     terminal: "1",
  //     quality: ["Basic", "Live"],
  //   },
  //   lastUpdatedUtc: "2023-01-04 14:55Z",
  //   number: "TU 514",
  //   callSign: "TAR514",
  //   status: "Arrived",
  //   codeshareStatus: "IsOperator",
  //   isCargo: false,
  //   aircraft: { reg: "TS-IMY", modeS: "02A198", model: "Airbus A320 NEO" },
  //   airline: { name: "Tunisair" },
  // }
  const [flight, setFlight] = useState(null);
  const [text, setText] = useState("");
  const [onChangeValue, setOnChangeValue] = React.useState(0);
  const [onChangeEndValue, setOnChangeEndValue] = React.useState(0);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  const [items, setItems] = useState([
    { label: "Cash", value: "Cash" },
    { label: "PayPal", value: "PayPal" },
    { label: "Skrill", value: "Skrill" },
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
    axios
      .post(`http://192.168.11.59:5001/posts`, body)
      .then((res) => Alert("success"));
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

      <Center top={5} flex={1} px="3">
        <Text fontSize={17} bottom={180} right={100} width={150}>
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
            backgroundColor={"#5FC8C0"}
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
        <Text fontSize={17} bottom={170} right={100} width={150}>
          Weight :{" "}
        </Text>
        <Text
          fontSize={17}
          bottom={190}
          left={1}
          width={150}
          textAlign="center"
        >
          {" "}
          {onChangeValue} KG{" "}
        </Text>
        <Box bottom={170} alignItems="center" w="100%">
          <Stack space={4} alignItems="center" w="75%" maxW="300">
            <Slider
              defaultValue={0}
              colorScheme="#5FC8C0"
              onChange={(v) => {
                setOnChangeValue(Math.floor(v / 4));
              }}
              onChangeEnd={(v) => {
                v && setOnChangeEndValue(Math.floor(v / 4));
              }}
            >
              <Slider.Track>
                <Slider.FilledTrack backgroundColor={"#5FC8C0"} />
              </Slider.Track>
              <Slider.Thumb />
            </Slider>
          </Stack>
        </Box>

        <Text fontSize={17} bottom={140} right={100} width={150}>
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
              bottom: 30,
            }}
          >
            <HStack>
              <FontAwesome5
                name="plane-departure"
                color="coolGray.800"
                size={15}
              ></FontAwesome5>
              <Text fontSize={17} fontWeight={700}>
                {" "}
                Departure country :
              </Text>
              <Text fontSize={17}>
                {" "}
                {flight.departure.airport.municipalityName}{" "}
              </Text>
            </HStack>
            <HStack marginTop={3}>
              <MaterialCommunityIcons
                name="clock-time-eight-outline"
                color="coolGray.800"
                size={17}
              ></MaterialCommunityIcons>
              <Text fontSize={17} fontWeight={700}>
                {" "}
                Departure time :
              </Text>
              <Text fontSize={17}> {flight.departure.scheduledTimeLocal} </Text>
            </HStack>
            <HStack marginTop={3}>
              <FontAwesome5
                name="plane-arrival"
                color="coolGray.800"
                size={17}
              ></FontAwesome5>
              <Text fontSize={17} fontWeight={700}>
                Arrival country :
              </Text>
              <Text fontSize={17}>
                {" "}
                {flight.arrival.airport.municipalityName}{" "}
              </Text>
            </HStack>
            <HStack marginTop={3}>
              <MaterialCommunityIcons
                name="clock-time-nine-outline"
                color="coolGray.800"
                size={17}
              ></MaterialCommunityIcons>
              <Text fontSize={17} fontWeight={700}>
                {" "}
                Arrival time :
              </Text>
              <Text fontSize={17}> {flight.arrival.scheduledTimeLocal} </Text>
            </HStack>
          </Box>
        )}
        <Button
          backgroundColor={"#5FC8C0"}
          borderColor={"black"}
          borderWidth={1}
          top={45}
          borderRadius={10}
          onPress={() =>
            post({
              type: "shipper",
              departCountry: flight.departure.airport.municipalityName,
              content: user.userName,
              departTime: flight.departure.scheduledTimeLocal,
              arriveCountry: flight.departure.airport.municipalityName,
              arriveTime: flight.departure.scheduledTimeLocal,
              weight: JSON.stringify(onChangeEndValue),
              flight_id: flight.number,
              postTime: date,
              paymentWays: [],
              acceptedItems: [user.image],
              poster_id: user.user_id,
            })
          }
        >
          Post
        </Button>
      </Center>
    </NativeBaseProvider>
  );
}
