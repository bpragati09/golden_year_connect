import { useState } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Settings, Bell, Shield, CircleHelp as HelpCircle } from 'lucide-react-native';
import { Link, useRouter } from 'expo-router';
import { supabase } from '@/lib/supabase';

export default function ProfileScreen() {
  const router = useRouter();
  const [profile] = useState({
    full_name: 'Sarah Johnson',
    avatar_url: 'https://images.unsplash.com/photo-1581003555416-de7d9703c2f1?w=800&auto=format&fit=crop',
  });

  async function handleLogout() {
    await supabase.auth.signOut();
    router.replace('/auth/login');
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: profile.avatar_url }}
          style={styles.profileImage}
        />
        <Text style={styles.name}>{profile.full_name}</Text>
        <Text style={styles.bio}>Active senior enjoying life to the fullest!</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Personal Information</Text>
        <View style={styles.infoCard}>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Age</Text>
            <Text style={styles.infoValue}>68</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Blood Type</Text>
            <Text style={styles.infoValue}>A+</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Emergency Contact</Text>
            <Text style={styles.infoValue}>John (Son)</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Settings</Text>
        <TouchableOpacity onPress={()=>router.push('/profile/settings/account')} style={styles.menuItem}>
          <Settings size={24} color="#4A90E2" />
          <Text style={styles.menuText}>Account Settings</Text>
       
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.menuItem} onPress={()=>router.push('/profile/settings/notifications')}>
          <Bell size={24} color="#4A90E2" />
          <Text style={styles.menuText}>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={()=>router.push('/profile/settings/privacy')}>
          <Shield size={24} color="#4A90E2" />
          <Text style={styles.menuText}>Privacy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={()=>router.push('/profile/settings/help')}>
          <HelpCircle size={24} color="#4A90E2" />
          <Text style={styles.menuText}>Help & Support</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Log Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  bio: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 15,
    color: '#333',
  },
  infoCard: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  infoLabel: {
    fontSize: 16,
    color: '#666',
  },
  infoValue: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  menuText: {
    fontSize: 18,
    marginLeft: 15,
    color: '#333',
  },
  logoutButton: {
    margin: 20,
    backgroundColor: '#FF6B6B',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});