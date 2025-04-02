import { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, ScrollView } from 'react-native';
import { Lock, Shield, Eye, Bell } from 'lucide-react-native';

export default function PrivacyScreen() {
  const [profileVisible, setProfileVisible] = useState(true);
  const [locationSharing, setLocationSharing] = useState(false);
  const [healthDataSharing, setHealthDataSharing] = useState(true);
  const [activityVisible, setActivityVisible] = useState(true);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Privacy Settings</Text>
        <View style={styles.option}>
          <View style={styles.optionHeader}>
            <Eye size={24} color="#4A90E2" />
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionTitle}>Profile Visibility</Text>
              <Text style={styles.optionDescription}>
                Make your profile visible to other users
              </Text>
            </View>
          </View>
          <Switch
            value={profileVisible}
            onValueChange={setProfileVisible}
            trackColor={{ false: '#767577', true: '#4A90E2' }}
          />
        </View>
        <View style={styles.option}>
          <View style={styles.optionHeader}>
            <Lock size={24} color="#4A90E2" />
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionTitle}>Location Sharing</Text>
              <Text style={styles.optionDescription}>
                Share your location with connected users
              </Text>
            </View>
          </View>
          <Switch
            value={locationSharing}
            onValueChange={setLocationSharing}
            trackColor={{ false: '#767577', true: '#4A90E2' }}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Health Data Privacy</Text>
        <View style={styles.option}>
          <View style={styles.optionHeader}>
            <Shield size={24} color="#4A90E2" />
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionTitle}>Health Data Sharing</Text>
              <Text style={styles.optionDescription}>
                Share health data with connected users
              </Text>
            </View>
          </View>
          <Switch
            value={healthDataSharing}
            onValueChange={setHealthDataSharing}
            trackColor={{ false: '#767577', true: '#4A90E2' }}
          />
        </View>
        <View style={styles.option}>
          <View style={styles.optionHeader}>
            <Bell size={24} color="#4A90E2" />
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionTitle}>Activity Visibility</Text>
              <Text style={styles.optionDescription}>
                Show your activity status to others
              </Text>
            </View>
          </View>
          <Switch
            value={activityVisible}
            onValueChange={setActivityVisible}
            trackColor={{ false: '#767577', true: '#4A90E2' }}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Data Management</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Download My Data</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.dangerButton]}>
          <Text style={styles.dangerButtonText}>Clear All Data</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  section: {
    backgroundColor: 'white',
    marginVertical: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#E5E5E5',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  optionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  optionTextContainer: {
    marginLeft: 15,
    flex: 1,
  },
  optionTitle: {
    fontSize: 16,
    color: '#333',
    marginBottom: 4,
  },
  optionDescription: {
    fontSize: 14,
    color: '#666',
  },
  button: {
    backgroundColor: '#F0F7FF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 5,
  },
  buttonText: {
    color: '#4A90E2',
    fontSize: 16,
    fontWeight: '600',
  },
  dangerButton: {
    backgroundColor: '#FFF0F0',
  },
  dangerButtonText: {
    color: '#FF3B30',
    fontSize: 16,
    fontWeight: '600',
  },
});