import React, { useEffect } from "react";
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovieDetails,
  clearSelectedMovie,
} from "../store/actions/moviesActions";

export default function DetailsScreen({ route, navigation }) {
  const { id } = route.params;
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movies.selectedMovie);
  const status = useSelector((state) => state.movies.status);

  useEffect(() => {
    dispatch(fetchMovieDetails(id));

    return () => {
      dispatch(clearSelectedMovie());
    };
  }, [dispatch, id]);

  if (status === "loading") {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (!movie) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: movie.Poster }} style={styles.image} />
      <Text style={styles.title}>{movie.Title}</Text>
      <Text>Year: {movie.Year}</Text>
      <Text>Genre: {movie.Genre}</Text>
      <Text>Director: {movie.Director}</Text>
      <Text>Plot: {movie.Plot}</Text>

      <Button title="Back to search" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },

});
