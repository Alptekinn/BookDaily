import React from "react";
import { View, Text } from "react-native";
import ProfileHeader from "../components/ProfileHeader";
import Card from "../components/Card";
import { UserProvider } from "../Context/UserContext";

const Profile = () => {
    return (
        <View>
            <ProfileHeader />
        
                <UserProvider>
                    {/* <Card /> */}
                </UserProvider>
        </View>
    )
}
export default Profile;