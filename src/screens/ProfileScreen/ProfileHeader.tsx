import {View, Image, Text} from 'react-native';
import React from 'react';
import user from '../../assets/data/user.json';
import styles from './styles';
import Button from '../../components/Button';

const ProfileHeader = () => {
  return (
    <View style={styles.root}>
      <View style={styles.headerRow}>
        {/**Profile Image */}
        <Image source={{uri: user.image}} style={styles.avatar} />
        {/**Post followers, following number */}
        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>996</Text>
          <Text>Posts</Text>
        </View>

        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>996</Text>
          <Text>Followers</Text>
        </View>

        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>996</Text>
          <Text>Following</Text>
        </View>
      </View>

      <Text style={styles.name}>{user.name}</Text>
      <Text>{user.bio}</Text>
      {/* Button */}
      <View style={{flexDirection: 'row'}}>
        <Button
          text="Edit Profile"
          onPress={() => console.warn('On Edit Profile')}
        />
        <Button
          text="Another Button"
          onPress={() => console.warn('On Edit Profile')}
        />
      </View>
      {/* GridView Post */}
    </View>
  );
};

export default ProfileHeader;
