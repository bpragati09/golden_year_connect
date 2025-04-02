import { useState } from 'react';
import {
  View, Text, StyleSheet, TextInput,
  TouchableOpacity, ScrollView, Modal, Alert
} from 'react-native';
import { supabase } from '@/lib/supabase';
import { PlusCircle, UserPlus, Users } from 'lucide-react-native';
import { useLoginStore } from '@/store/loginToken';


import axios from 'axios';



export default function TrackingScreen() {
  const id = useLoginStore((state) => state.id);
  const [inviteCode, setInviteCode] = useState('');
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [generatedCode, setGeneratedCode] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const data = useLoginStore((state) => state.type);
console.log(id)
  const handleConnect = async () => {
    const res =await axios.post(`http://192.168.254.17:3000//guardian/${inviteCode}/assign`,{
      userId: id
    })

    if (res.status === 200) {
      Alert.alert('Success', 'Connected successfully!');
      setShowInviteModal(false);
      setGeneratedCode(false);
      setInviteCode('');
      setError(null);
    }
    if (res.status === 404) {
      setError('Invalid code');
    }
    
  };

  return (
    <ScrollView style={styles.container}>
      
      <View style={styles.header}>
        <Text style={styles.title}>Connected Users</Text>
        <View style={styles.actions}>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => {
              setGeneratedCode(true);
              setShowInviteModal(true);
            }}>
            <UserPlus size={24} color="#4A90E2" />
            <Text style={styles.actionButtonText}>Invite</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => {
              setGeneratedCode(false);
              setShowInviteModal(true);
            }}>
            <PlusCircle size={24} color="#4A90E2" />
            <Text style={styles.actionButtonText}>Join</Text>
          </TouchableOpacity>):null
          
        </View>
      </View>

      {error && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      )}

      {/* <View style={styles.connectionsList}>
        {connections.map((connection) => (
          <View key={connection.id} style={styles.connectionCard}>
            <View style={styles.connectionInfo}>
              <Users size={24} color="#4A90E2" />
              <Text style={styles.connectionName}>
                {connection.connected_user.full_name}
              </Text>
            </View>
            <Text style={[
              styles.connectionStatus,
              connection.status === 'accepted' ? styles.statusAccepted : styles.statusPending
            ]}>
              {connection.status}
            </Text>
          </View>
        ))}
      </View> */}

      <Modal
        visible={showInviteModal}
        animationType="slide"
        transparent
        onRequestClose={() => {
          setShowInviteModal(false);
          setGeneratedCode(false);
          setInviteCode('');
          setError(null);
        }}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>
              {generatedCode ? 'Share Invite Code' : 'Enter Invite Code'}
            </Text>

            {generatedCode ? (
              <View style={styles.codeContainer}>
                <Text style={styles.generatedCode}>{id}</Text>
                <Text style={styles.codeHint}>Share this code with someone you want to connect with</Text>
              </View>
            ) : (
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  value={inviteCode}
                  onChangeText={setInviteCode}
                  placeholder="Enter invite code"
                  autoCapitalize="characters"
                />
                <TouchableOpacity
                  style={styles.submitButton}
                  onPress={handleConnect}>
                  <Text style={styles.submitButtonText}>Connect</Text>
                </TouchableOpacity>
              </View>
            )}

            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => {
                setShowInviteModal(false);
                setGeneratedCode(false);
                setInviteCode('');
                setError(null);
              }}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    padding: 20,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F7FF',
    padding: 15,
    borderRadius: 10,
    width: '45%',
    justifyContent: 'center',
  },
  actionButtonText: {
    marginLeft: 8,
    fontSize: 16,
    color: '#4A90E2',
    fontWeight: '500',
  },
  errorContainer: {
    margin: 20,
    padding: 15,
    backgroundColor: '#FFE4E4',
    borderRadius: 10,
  },
  errorText: {
    color: '#D63230',
    fontSize: 16,
  },
  connectionsList: {
    padding: 20,
  },
  connectionCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  connectionInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  connectionName: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  connectionStatus: {
    fontSize: 14,
    fontWeight: '500',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
  },
  statusAccepted: {
    backgroundColor: '#E3F2E6',
    color: '#2F9E44',
  },
  statusPending: {
    backgroundColor: '#FFF3E3',
    color: '#E8A137',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    width: '90%',
    maxWidth: 400,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#F5F5F5',
    padding: 15,
    borderRadius: 10,
    fontSize: 16,
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
  closeButton: {
    padding: 15,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#666',
    fontSize: 16,
  },
  codeContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  generatedCode: {
    fontSize: 32,
    fontWeight: '700',
    color: '#4A90E2',
    letterSpacing: 2,
    marginBottom: 10,
  },
  codeHint: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
});