import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Heart, Activity, Moon, Droplets } from 'lucide-react-native';

const healthMetrics = [
  {
    id: 1,
    title: 'Heart Rate',
    value: '72',
    unit: 'BPM',
    icon: Heart,
    color: '#FF6B6B',
  },
  {
    id: 2,
    title: 'Steps',
    value: '5,234',
    unit: 'steps',
    icon: Activity,
    color: '#4A90E2',
  },
  {
    id: 3,
    title: 'Sleep',
    value: '7.5',
    unit: 'hours',
    icon: Moon,
    color: '#6C5CE7',
  },
  {
    id: 4,
    title: 'Water',
    value: '6',
    unit: 'glasses',
    icon: Droplets,
    color: '#00B894',
  },
];

const medications = [
  {
    id: 1,
    name: 'Vitamin D',
    time: '8:00 AM',
    taken: true,
  },
  {
    id: 2,
    name: 'Blood Pressure Medicine',
    time: '9:00 AM',
    taken: true,
  },
  {
    id: 3,
    name: 'Calcium Supplement',
    time: '2:00 PM',
    taken: false,
  },
];

export default function HealthScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Today's Health Summary</Text>
        <View style={styles.metricsGrid}>
          {healthMetrics.map((metric) => (
            <View key={metric.id} style={styles.metricCard}>
              <metric.icon size={32} color={metric.color} />
              <Text style={styles.metricValue}>{metric.value}</Text>
              <Text style={styles.metricUnit}>{metric.unit}</Text>
              <Text style={styles.metricTitle}>{metric.title}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Medications</Text>
        {medications.map((med) => (
          <View key={med.id} style={styles.medicationCard}>
            <View>
              <Text style={styles.medicationName}>{med.name}</Text>
              <Text style={styles.medicationTime}>{med.time}</Text>
            </View>
            <TouchableOpacity
              style={[
                styles.medicationStatus,
                med.taken ? styles.statusTaken : styles.statusPending,
              ]}>
              <Text style={styles.statusText}>
                {med.taken ? 'Taken' : 'Take Now'}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      <TouchableOpacity style={styles.emergencyButton}>
        <Text style={styles.emergencyButtonText}>Emergency Contact</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20,
    color: '#333',
  },
  metricsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  metricCard: {
    width: '48%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  metricValue: {
    fontSize: 28,
    fontWeight: '700',
    color: '#333',
    marginTop: 10,
  },
  metricUnit: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  metricTitle: {
    fontSize: 16,
    color: '#666',
  },
  medicationCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  medicationName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  medicationTime: {
    fontSize: 16,
    color: '#666',
  },
  medicationStatus: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  statusTaken: {
    backgroundColor: '#00B894',
  },
  statusPending: {
    backgroundColor: '#4A90E2',
  },
  statusText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  emergencyButton: {
    backgroundColor: '#FF6B6B',
    margin: 20,
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
  },
  emergencyButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
  },
});