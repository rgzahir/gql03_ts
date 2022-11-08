import React from "react";
import { Button, Text, View } from "react-native";
import Modal from "react-native-modal";

export const ShowDetailsModal = (
  item: Object,
  title: string,
  indicator: boolean,
  toggler: Function
): JSX.Element => {
  return (
    <View>
      <Modal isVisible={indicator}>
        <View style={{ flex: 1 }}>
          <Text>{title}</Text>
          <Text>{"\n"}</Text>
          <Text>{item?.mission_name}</Text>

          <Button title="Close" onPress={toggler} />
        </View>
      </Modal>
    </View>
  );
};

export default ShowDetailsModal;
