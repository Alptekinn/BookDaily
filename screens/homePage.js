import React from "react";
import { View, Text } from "react-native";
import Card from "../components/Card";
import styles from "../styles";
import { ScrollView } from "react-native-gesture-handler";
import Post from "../Data/PostData";

const Home = () => {

  const commentData = Post.filter(//idye göre çek
    (comment) => comment.LikeCount === 5
  );

  return (
    <ScrollView>
      <View style={styles.homeContainer}>
      {commentData.map((comment) => (
          <Card key={comment.BookCommentID} commentData={comment} />
        ))}
      </View>
    </ScrollView>
  );
};
export default Home;
