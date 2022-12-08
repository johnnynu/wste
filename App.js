import { React, useState } from "react";
import { Amplify } from "aws-amplify";
import awsconfig from "./src/aws-exports";
import { DataStore } from "@aws-amplify/datastore";
import { FoodItem, Pantry } from "./src/models";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Button, Text, TextInput, Stack } from "@react-native-material/core";

Amplify.configure(awsconfig);

export default function App() {
  const [text, onChangeText] = useState("");
  const [model, setModel] = useState(null);

  // create
  const create = async () => {
    await DataStore.save(
      new FoodItem({
        name: "Apple",
        added: "2022-12-07Z",
        amount: 4,
        pantryID: "a3f4095e-39de-43d2-baf4-f8c16f0f6f4f",
        expires: "2022-12-10Z"
      })
    );
    console.log("success");
  };

  const retrieve = async (name) => {
    const resModel = await DataStore.query(FoodItem, (c) => c.name.eq(name), {
      page: 0,
      limit: 1
    });

    const res = {
      name: resModel[0].name,
      amount: resModel[0].amount,
      expires: resModel[0].expires
    };

    setModel(res);
  };

  return (
    <>
      <View style={styles.container}>
        <Text variant="h6">PROJECT wste</Text>
        <TextInput
          value={text}
          onChangeText={onChangeText}
          style={{ margin: 16 }}
        />
        <Button title="Search" onPress={() => retrieve(text)} />
        {model ? (
          <Stack m={4} spacing={4}>
            <Text>Name: {model.name}</Text>
            <Text>Quantity: {model.amount}</Text>
            <Text>Expiry Date: {model.expires}</Text>
          </Stack>
        ) : null}
        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignSelf: "center",
    justifyContent: "center"
  }
});
