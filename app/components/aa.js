import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from "react-native";
  import React, { useState } from "react";
  
  import categories from "../config/categories";
  import colors from "../config/colors";
  import SPACING from "../config/SPACING";
  const aa=({ onChange }) => {
    const [activeCategoryId, setActiveCategoryId] = useState(null);
  
    const handlePress = (id) => {
      setActiveCategoryId(id);
      onChange(id);
    };
}
