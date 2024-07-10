import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../store/actions/moviesActions";
import MovieCard from "../components/MovieCard";
import StyledInput from "../components/StyledInput";

export default function HomeScreen({ navigation }) {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);
  const status = useSelector((state) => state.movies.status);

  const handleSearch = () => {
    dispatch(fetchMovies(title));
  };

  const handleClear = () => {
    setTitle("");
  };

  return (
    <View style={styles.container}>
      <StyledInput
        value={title}
        onChangeText={setTitle}
        placeholder="Enter movie title"
        onClear={handleClear}
      />
      <View style={styles.buttonContainer}>
        <Button title="Search" onPress={handleSearch} />
      </View>
      {status === "loading" && (
        <ActivityIndicator size="large" color="#0000ff" />
      )}
      <FlatList
        data={movies}
        keyExtractor={(item) => item.imdbID}
        renderItem={({ item }) => (
          <MovieCard
            movie={item}
            onPress={() => navigation.navigate("Details", { id: item.imdbID })}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  buttonContainer: {
    marginVertical: 10, // Ajoute de l'espace vertical entre le champ de saisie et le bouton
  },
});
