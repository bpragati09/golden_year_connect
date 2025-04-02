import { useState } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Calendar, Clock, MapPin } from 'lucide-react-native';
import { useRouter } from 'expo-router';

const joinedEvents = [
  {
    id: 1,
    title: 'Morning Yoga Session',
    date: 'March 13, 2024',
    time: '9:00 AM',
    location: 'Community Center',
    image: 'https://images.unsplash.com/photo-1616699002805-0741e1e4a9c5?w=800&auto=format&fit=crop',
    status: 'upcoming',
  },
  {
    id: 2,
    title: 'Book Club Meeting',
    date: 'March 14, 2024',
    time: '2:00 PM',
    location: 'Library Hall',
    image: 'https://images.unsplash.com/photo-1530538987395-032d1800fdd0?w=800&auto=format&fit=crop',
    status: 'upcoming',
  },
  {
    id: 3,
    title: 'Garden Workshop',
    date: 'March 10, 2024',
    time: '10:00 AM',
    location: 'Community Garden',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&auto=format&fit=crop',
    status: 'completed',
  },
];

export default function JoinedEventsScreen() {
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'completed'>('all');
  const router = useRouter();

  const filteredEvents = joinedEvents.filter(event => {
    if (filter === 'all') return true;
    return event.status === filter;
  });

  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        <TouchableOpacity
          style={[styles.filterButton, filter === 'all' && styles.filterButtonActive]}
          onPress={() => setFilter('all')}>
          <Text style={[styles.filterText, filter === 'all' && styles.filterTextActive]}>
            All Events
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.filterButton, filter === 'upcoming' && styles.filterButtonActive]}
          onPress={() => setFilter('upcoming')}>
          <Text style={[styles.filterText, filter === 'upcoming' && styles.filterTextActive]}>
            Upcoming
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.filterButton, filter === 'completed' && styles.filterButtonActive]}
          onPress={() => setFilter('completed')}>
          <Text style={[styles.filterText, filter === 'completed' && styles.filterTextActive]}>
            Completed
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.eventsList}>
        {filteredEvents.map((event) => (
          <TouchableOpacity
            key={event.id}
            style={styles.eventCard}
            onPress={() => router.push(`/events/${event.id}`)}>
            <Image source={{ uri: event.image }} style={styles.eventImage} />
            <View style={styles.eventContent}>
              <View style={styles.eventHeader}>
                <Text style={styles.eventTitle}>{event.title}</Text>
                <View style={[
                  styles.statusBadge,
                  event.status === 'completed' ? styles.completedBadge : styles.upcomingBadge
                ]}>
                  <Text style={[
                    styles.statusText,
                    event.status === 'completed' ? styles.completedText : styles.upcomingText
                  ]}>
                    {event.status === 'completed' ? 'Completed' : 'Upcoming'}
                  </Text>
                </View>
              </View>

              <View style={styles.eventDetails}>
                <View style={styles.detailRow}>
                  <Calendar size={16} color="#666" />
                  <Text style={styles.detailText}>{event.date}</Text>
                </View>
                <View style={styles.detailRow}>
                  <Clock size={16} color="#666" />
                  <Text style={styles.detailText}>{event.time}</Text>
                </View>
                <View style={styles.detailRow}>
                  <MapPin size={16} color="#666" />
                  <Text style={styles.detailText}>{event.location}</Text>
                </View>
              </View>

              {event.status === 'upcoming' && (
                <TouchableOpacity style={styles.cancelButton}>
                  <Text style={styles.cancelButtonText}>Cancel Registration</Text>
                </TouchableOpacity>
              )}
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  filterContainer: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  filterButton: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginHorizontal: 4,
    alignItems: 'center',
  },
  filterButtonActive: {
    backgroundColor: '#4A90E2',
  },
  filterText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  filterTextActive: {
    color: 'white',
  },
  eventsList: {
    padding: 15,
  },
  eventCard: {
    backgroundColor: 'white',
    borderRadius: 15,
    marginBottom: 15,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  eventImage: {
    width: '100%',
    height: 150,
  },
  eventContent: {
    padding: 15,
  },
  eventHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    flex: 1,
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    marginLeft: 10,
  },
  upcomingBadge: {
    backgroundColor: '#E3F2FD',
  },
  completedBadge: {
    backgroundColor: '#E8F5E9',
  },
  statusText: {
    fontSize: 12,
    fontWeight: '500',
  },
  upcomingText: {
    color: '#1976D2',
  },
  completedText: {
    color: '#2E7D32',
  },
  eventDetails: {
    marginTop: 10,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  detailText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#666',
  },
  cancelButton: {
    marginTop: 15,
    padding: 12,
    backgroundColor: '#FFE4E4',
    borderRadius: 8,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#D32F2F',
    fontSize: 14,
    fontWeight: '500',
  },
});