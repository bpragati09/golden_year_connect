import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { MessageCircle, Phone, Mail, Book, HelpCircle } from 'lucide-react-native';

export default function HelpScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact Support</Text>
        <TouchableOpacity style={styles.contactOption}>
          <MessageCircle size={24} color="#4A90E2" />
          <View style={styles.contactInfo}>
            <Text style={styles.contactTitle}>Chat Support</Text>
            <Text style={styles.contactDescription}>
              Chat with our support team
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contactOption}>
          <Phone size={24} color="#4A90E2" />
          <View style={styles.contactInfo}>
            <Text style={styles.contactTitle}>Phone Support</Text>
            <Text style={styles.contactDescription}>
              Call us at 1-800-HEALTH
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contactOption}>
          <Mail size={24} color="#4A90E2" />
          <View style={styles.contactInfo}>
            <Text style={styles.contactTitle}>Email Support</Text>
            <Text style={styles.contactDescription}>
              support@healthconnect.com
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>FAQs</Text>
        <TouchableOpacity style={styles.faqItem}>
          <Text style={styles.faqQuestion}>How do I connect with others?</Text>
          <Text style={styles.faqAnswer}>
            Use the invitation code system in the Connections tab to connect with family and friends.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.faqItem}>
          <Text style={styles.faqQuestion}>How do I track my health data?</Text>
          <Text style={styles.faqAnswer}>
            Visit the Health tab to log and monitor your health metrics.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.faqItem}>
          <Text style={styles.faqQuestion}>How do I join community events?</Text>
          <Text style={styles.faqAnswer}>
            Browse available events in the Events tab and click 'Join Event' to participate.
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Resources</Text>
        <TouchableOpacity style={styles.resourceItem}>
          <Book size={24} color="#4A90E2" />
          <Text style={styles.resourceText}>User Guide</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.resourceItem}>
          <HelpCircle size={24} color="#4A90E2" />
          <Text style={styles.resourceText}>Tutorial Videos</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Send Feedback</Text>
        <TextInput
          style={styles.feedbackInput}
          placeholder="Share your thoughts with us"
          multiline
          numberOfLines={4}
        />
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Submit Feedback</Text>
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
  contactOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  contactInfo: {
    marginLeft: 15,
  },
  contactTitle: {
    fontSize: 16,
    color: '#333',
    marginBottom: 4,
  },
  contactDescription: {
    fontSize: 14,
    color: '#666',
  },
  faqItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  faqQuestion: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
    marginBottom: 8,
  },
  faqAnswer: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  resourceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  resourceText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 15,
  },
  feedbackInput: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: 15,
    height: 120,
    textAlignVertical: 'top',
    marginBottom: 15,
  },
  submitButton: {
    backgroundColor: '#4A90E2',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});