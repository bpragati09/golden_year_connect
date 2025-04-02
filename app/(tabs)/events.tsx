import { Link } from 'expo-router';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';

const events = [
  {
    id: 1,
    title: 'Morning Yoga Session',
    date: 'March 13, 2024',
    time: '9:00 AM',
    location: 'Community Center',
    image: 'https://images.unsplash.com/photo-1616699002805-0741e1e4a9c5?w=800&auto=format&fit=crop',
    description: 'Join us for a gentle yoga session suitable for all skill levels.',
  },
  {
    id: 2,
    title: 'Book Club Meeting',
    date: 'March 14, 2024',
    time: '2:00 PM',
    location: 'Library Hall',
    image: 'https://images.unsplash.com/photo-1530538987395-032d1800fdd0?w=800&auto=format&fit=crop',
    description: 'Discussion of "The Thursday Murder Club" by Richard Osman.',
  },
  {
    id: 3,
    title: 'Garden Workshop',
    date: 'March 15, 2024',
    time: '10:00 AM',
    location: 'Community Garden',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&auto=format&fit=crop',
    description: 'Learn spring planting techniques and garden maintenance.',
  },
];

export default function EventsScreen() {
  return (
    <ScrollView style={styles.container}>
      <Link href={'/events/joined'}><Text style={{textAlign:"left"}}>Go To Joined Projects</Text></Link>
      {events.map((event) => (
        <TouchableOpacity key={event.id} style={styles.eventCard}>
          <Image source={{ uri: event.image }} style={styles.eventImage} />
          <View style={styles.eventInfo}>
            <Text style={styles.eventTitle}>{event.title}</Text>
            <View style={styles.eventDetails}>
              <Text style={styles.eventDate}>{event.date} at {event.time}</Text>
              <Text style={styles.eventLocation}>{event.location}</Text>
            </View>
            <Text style={styles.eventDescription}>{event.description}</Text>
            <TouchableOpacity style={styles.joinButton}>
              <Text style={styles.joinButtonText}>Join Event</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 15,
  },
  eventCard: {
    backgroundColor: 'white',
    borderRadius: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  eventImage: {
    width: '100%',
    height: 200,
  },
  eventInfo: {
    padding: 20,
  },
  eventTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  eventDetails: {
    marginBottom: 10,
  },
  eventDate: {
    fontSize: 18,
    color: '#4A90E2',
    marginBottom: 5,
  },
  eventLocation: {
    fontSize: 18,
    color: '#666',
  },
  eventDescription: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    marginBottom: 15,
  },
  joinButton: {
    backgroundColor: '#4A90E2',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  joinButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});