import { useState } from 'react';
import { View, Text, StyleSheet, Switch, ScrollView } from 'react-native';

export default function NotificationsScreen() {
  const [pushEnabled, setPushEnabled] = useState(true);
  const [emailEnabled, setEmailEnabled] = useState(true);
  const [eventReminders, setEventReminders] = useState(true);
  const [healthReminders, setHealthReminders] = useState(true);
  const [connectionRequests, setConnectionRequests] = useState(true);
  const [newsUpdates, setNewsUpdates] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Notification Channels</Text>
        <View style={styles.option}>
          <View>
            <Text style={styles.optionTitle}>Push Notifications</Text>
            <Text style={styles.optionDescription}>
              Receive notifications on your device
            </Text>
          </View>
          <Switch
            value={pushEnabled}
            onValueChange={setPushEnabled}
            trackColor={{ false: '#767577', true: '#4A90E2' }}
          />
        </View>
        <View style={styles.option}>
          <View>
            <Text style={styles.optionTitle}>Email Notifications</Text>
            <Text style={styles.optionDescription}>
              Receive notifications via email
            </Text>
          </View>
          <Switch
            value={emailEnabled}
            onValueChange={setEmailEnabled}
            trackColor={{ false: '#767577', true: '#4A90E2' }}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Notification Types</Text>
        <View style={styles.option}>
          <View>
            <Text style={styles.optionTitle}>Event Reminders</Text>
            <Text style={styles.optionDescription}>
              Get reminded about upcoming events
            </Text>
          </View>
          <Switch
            value={eventReminders}
            onValueChange={setEventReminders}
            trackColor={{ false: '#767577', true: '#4A90E2' }}
          />
        </View>
        <View style={styles.option}>
          <View>
            <Text style={styles.optionTitle}>Health Reminders</Text>
            <Text style={styles.optionDescription}>
              Medication and health check reminders
            </Text>
          </View>
          <Switch
            value={healthReminders}
            onValueChange={setHealthReminders}
            trackColor={{ false: '#767577', true: '#4A90E2' }}
          />
        </View>
        <View style={styles.option}>
          <View>
            <Text style={styles.optionTitle}>Connection Requests</Text>
            <Text style={styles.optionDescription}>
              New connection requests and updates
            </Text>
          </View>
          <Switch
            value={connectionRequests}
            onValueChange={setConnectionRequests}
            trackColor={{ false: '#767577', true: '#4A90E2' }}
          />
        </View>
        <View style={styles.option}>
          <View>
            <Text style={styles.optionTitle}>News & Updates</Text>
            <Text style={styles.optionDescription}>
              App updates and community news
            </Text>
          </View>
          <Switch
            value={newsUpdates}
            onValueChange={setNewsUpdates}
            trackColor={{ false: '#767577', true: '#4A90E2' }}
          />
        </View>
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
  optionTitle: {
    fontSize: 16,
    color: '#333',
    marginBottom: 4,
  },
  optionDescription: {
    fontSize: 14,
    color: '#666',
    maxWidth: '80%',
  },
});