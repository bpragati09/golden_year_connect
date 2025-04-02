import { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const upcomingEvents = [
  {
    id: 1,
    title: "Morning Yoga",
    time: "9:00 AM",
    date: "Today",
    image:
      "https://images.unsplash.com/photo-1616699002805-0741e1e4a9c5?w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Book Club Meeting",
    time: "2:00 PM",
    date: "Tomorrow",
    image:
      "https://images.unsplash.com/photo-1530538987395-032d1800fdd0?w=800&auto=format&fit=crop",
  },
];

const healthTips = [
  {
    id: 1,
    title: "Stay Hydrated",
    description: "Drink 8 glasses of water daily",
    image:
      "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Daily Walk",
    description: "30 minutes of walking each day",
    image:
      "https://images.unsplash.com/photo-1501554728187-ce583db33af7?w=800&auto=format&fit=crop",
  },
];

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.welcomeSection}>
        <Text style={styles.welcomeText}>Welcome Back</Text>
        <Text style={styles.dateText}>
          {new Date().toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
          })}
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Upcoming Events</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {upcomingEvents.map((event) => (
            <TouchableOpacity key={event.id} style={styles.eventCard}>
              <Image source={{ uri: event.image }} style={styles.eventImage} />
              <View style={styles.eventInfo}>
                <Text style={styles.eventTitle}>{event.title}</Text>
                <Text style={styles.eventTime}>
                  {event.time} - {event.date}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Daily Health Tips</Text>
        {healthTips.map((tip) => (
          <View key={tip.id} style={styles.tipCard}>
            <Image source={{ uri: tip.image }} style={styles.tipImage} />
            <View style={styles.tipInfo}>
              <Text style={styles.tipTitle}>{tip.title}</Text>
              <Text style={styles.tipDescription}>{tip.description}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeSection: {
    padding: 20,
    backgroundColor: "#4A90E2",
  },
  welcomeText: {
    fontSize: 28,
    color: "white",
    fontWeight: "600",
  },
  dateText: {
    fontSize: 18,
    color: "white",
    marginTop: 5,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 15,
    color: "#333",
  },
  eventCard: {
    width: 280,
    backgroundColor: "white",
    borderRadius: 15,
    marginRight: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  eventImage: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  eventInfo: {
    padding: 15,
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  eventTime: {
    fontSize: 16,
    color: "#666",
    marginTop: 5,
  },
  tipCard: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: "hidden",
  },
  tipImage: {
    width: 100,
    height: 100,
  },
  tipInfo: {
    flex: 1,
    padding: 15,
  },
  tipTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  tipDescription: {
    fontSize: 16,
    color: "#666",
    marginTop: 5,
  },
});