import React from "react";
import { Text, View, Image } from "react-native";
import styles from "../styles";
import Icon from "react-native-vector-icons/FontAwesome5";
import usePosts from "../Context/usePost";

const Card = () => {
  const posts = usePosts();

  if (posts === null) {
    return null;
  }
  
  return (
    <View style={styles.cardArea}>
      {posts.map((post,index) => (
  <View key={post.PostID} style={[ index !== posts.length - 1 && styles.cardMargin]}>
              <View style={[styles.row, styles.flex1, styles.between]}>
            <View style={[styles.row]}>
              <Image style={styles.smallProfile} source={{uri:post.ProfileImage}} />
              <Text style={[styles.verticalCenter, styles.smallTitle]}>
                {post.UserName} {post.UserSurname}
              </Text>
            </View>
            <View  >
            <Image
            style={[styles.marginR15, styles.smallProfile]}
            
          />
            </View>
          </View>
          <View>
            <Text>{post.BookComment}</Text>
          </View>
          <View style={[styles.row, styles.flex2, styles.verticalSpace]}>
            <View style={[styles.row, styles.flex1, styles.center]}>
              <Icon name={"comment"} size={20} />
              <Text style={[styles.icnBetween]}>{post.CommentCount}</Text>
            </View>
            <View style={[styles.row, styles.flex1, styles.center]}>
              <Icon name={"heart"} size={20} />
              <Text style={[styles.icnBetween]}>{post.LikeCount}</Text>
            </View>
          </View>
          <View style={styles.line} />
        </View>
      ))}
    </View>
  );
};
export default Card;
