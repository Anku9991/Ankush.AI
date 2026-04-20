// src/screens/ContactScreen.js
import React, { useState } from 'react';
import {
  View, Text, ScrollView, TextInput, TouchableOpacity,
  StyleSheet, Linking, Alert, ActivityIndicator, Keyboard
} from 'react-native';

const COLORS = {
  greenDark: '#0d3b1a', greenBright: '#27ae60', greenLight: '#2ecc71',
  yellow: '#f5c518', yellowBright: '#ffe234', white: '#f0fff4',
  gray: '#a8d5b5', dark: '#081a0d', cardBg: 'rgba(20,80,35,0.55)',
  border: 'rgba(245,197,24,0.25)',
};

const SERVICES = [
  'Website Development (₹5,000+)',
  'Landing Page (₹2,000–₹8,000)',
  'Mobile App Flutter (₹15,000–₹50,000+)',
  'Hospital Portal (₹25,000–₹1,00,000+)',
  'WhatsApp Bot (₹3,000–₹20,000)',
  'Custom Project',
];

const API_URL = 'http://10.0.2.2:3001/api/contact'; // Android emulator → localhost
// For real device: replace with your server IP/URL e.g. 'https://api.ankush.ai/api/contact'

export default function ContactScreen() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  const update = (field, value) => setForm(f => ({ ...f, [field]: value }));

  const validate = () => {
    if (!form.name.trim()) { Alert.alert('Missing', 'Please enter your name'); return false; }
    if (!form.phone.trim()) { Alert.alert('Missing', 'Please enter your WhatsApp number'); return false; }
    if (!form.service) { Alert.alert('Missing', 'Please select a service'); return false; }
    return true;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    Keyboard.dismiss();
    setLoading(true);

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else throw new Error(data.message);
    } catch {
      // Fallback: open WhatsApp
      const msg = `Hi Ankush! I'm ${form.name} (${form.phone}). I need: ${form.service}. ${form.message}`;
      Linking.openURL(`https://wa.me/917307852235?text=${encodeURIComponent(msg)}`);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <View style={styles.successWrap}>
        <Text style={styles.successIcon}>✅</Text>
        <Text style={styles.successTitle}>Message Sent!</Text>
        <Text style={styles.successSub}>We'll reply within 2 hours via WhatsApp.</Text>
        <TouchableOpacity style={styles.btnWA} onPress={() => Linking.openURL('https://wa.me/917307852235')}>
          <Text style={styles.btnWAText}>💬 Open WhatsApp</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnRetry} onPress={() => { setSubmitted(false); setForm({ name: '', phone: '', email: '', service: '', message: '' }); }}>
          <Text style={styles.btnRetryText}>Send Another Message</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.headerTag}>GET IN TOUCH</Text>
        <Text style={styles.headerTitle}>Start Your <Text style={styles.yellow}>Project</Text></Text>
        <Text style={styles.headerSub}>Fill the form or tap WhatsApp below.</Text>
      </View>

      {/* Quick WhatsApp */}
      <TouchableOpacity style={styles.quickWA} onPress={() => Linking.openURL('https://wa.me/917307852235')}>
        <Text style={styles.quickWAIcon}>💬</Text>
        <View>
          <Text style={styles.quickWATitle}>Quick Chat on WhatsApp</Text>
          <Text style={styles.quickWASub}>+91 73078 52235 · Replies in 2 hours</Text>
        </View>
      </TouchableOpacity>

      {/* Form */}
      <View style={styles.form}>
        <Text style={styles.dividerText}>— or fill in the form —</Text>

        <Text style={styles.label}>YOUR NAME *</Text>
        <TextInput style={styles.input} placeholder="e.g. Rahul Sharma" placeholderTextColor={COLORS.gray + '80'}
          value={form.name} onChangeText={v => update('name', v)} />

        <Text style={styles.label}>WHATSAPP NUMBER *</Text>
        <TextInput style={styles.input} placeholder="+91 98765 43210" placeholderTextColor={COLORS.gray + '80'}
          value={form.phone} onChangeText={v => update('phone', v)} keyboardType="phone-pad" />

        <Text style={styles.label}>EMAIL (Optional)</Text>
        <TextInput style={styles.input} placeholder="you@email.com" placeholderTextColor={COLORS.gray + '80'}
          value={form.email} onChangeText={v => update('email', v)} keyboardType="email-address" autoCapitalize="none" />

        <Text style={styles.label}>SERVICE NEEDED *</Text>
        <TouchableOpacity style={[styles.input, styles.picker]} onPress={() => setServiceOpen(!serviceOpen)}>
          <Text style={form.service ? styles.pickerSelected : styles.pickerPlaceholder}>
            {form.service || 'Choose a service...'}
          </Text>
          <Text style={{ color: COLORS.yellow }}>▾</Text>
        </TouchableOpacity>

        {serviceOpen && (
          <View style={styles.dropdown}>
            {SERVICES.map((s, i) => (
              <TouchableOpacity key={i} style={styles.dropdownItem} onPress={() => { update('service', s); setServiceOpen(false); }}>
                <Text style={[styles.dropdownText, form.service === s && { color: COLORS.yellow }]}>{s}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        <Text style={styles.label}>PROJECT DETAILS</Text>
        <TextInput
          style={[styles.input, styles.textarea]}
          placeholder="Tell me about your project, timeline, and budget..."
          placeholderTextColor={COLORS.gray + '80'}
          value={form.message} onChangeText={v => update('message', v)}
          multiline numberOfLines={4} textAlignVertical="top"
        />

        <TouchableOpacity style={[styles.submitBtn, loading && { opacity: 0.7 }]} onPress={handleSubmit} disabled={loading}>
          {loading ? (
            <ActivityIndicator color={COLORS.dark} />
          ) : (
            <Text style={styles.submitBtnText}>🚀 Send & Get Free Quote</Text>
          )}
        </TouchableOpacity>
      </View>

      {/* Contact methods */}
      <View style={styles.methods}>
        <TouchableOpacity style={styles.method} onPress={() => Linking.openURL('https://wa.me/917307852235')}>
          <Text style={styles.methodIcon}>💬</Text>
          <View><Text style={styles.methodLabel}>WhatsApp</Text><Text style={styles.methodValue}>+91 73078 52235</Text></View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.method} onPress={() => Linking.openURL('mailto:ankush@ankush.ai')}>
          <Text style={styles.methodIcon}>📧</Text>
          <View><Text style={styles.methodLabel}>Email</Text><Text style={styles.methodValue}>ankush@ankush.ai</Text></View>
        </TouchableOpacity>
        <View style={styles.method}>
          <Text style={styles.methodIcon}>📍</Text>
          <View><Text style={styles.methodLabel}>Location</Text><Text style={styles.methodValue}>Lucknow, UP 🇮🇳</Text></View>
        </View>
      </View>

      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.dark },
  header: { padding: 24, paddingTop: 32, backgroundColor: COLORS.greenDark },
  headerTag: { color: COLORS.yellow, fontSize: 11, fontWeight: '700', letterSpacing: 2, marginBottom: 6 },
  headerTitle: { fontSize: 30, fontWeight: '800', color: COLORS.white, marginBottom: 8 },
  headerSub: { color: COLORS.gray, fontSize: 14 },
  yellow: { color: COLORS.yellow },
  quickWA: {
    flexDirection: 'row', alignItems: 'center', gap: 16,
    backgroundColor: '#075E54', margin: 16, borderRadius: 18, padding: 18,
    shadowColor: '#25D366', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.4, shadowRadius: 12, elevation: 6,
  },
  quickWAIcon: { fontSize: 36 },
  quickWATitle: { color: '#fff', fontWeight: '800', fontSize: 16 },
  quickWASub: { color: 'rgba(255,255,255,0.7)', fontSize: 13, marginTop: 2 },
  form: { paddingHorizontal: 16 },
  dividerText: { color: COLORS.gray, textAlign: 'center', fontSize: 13, marginBottom: 20 },
  label: { color: COLORS.gray, fontSize: 12, fontWeight: '700', letterSpacing: 1, marginBottom: 8 },
  input: {
    backgroundColor: 'rgba(255,255,255,0.06)', borderWidth: 1, borderColor: COLORS.border,
    borderRadius: 12, padding: 14, color: COLORS.white, fontSize: 15, marginBottom: 16,
  },
  textarea: { minHeight: 100 },
  picker: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  pickerSelected: { color: COLORS.white, fontSize: 15 },
  pickerPlaceholder: { color: COLORS.gray + '80', fontSize: 15 },
  dropdown: {
    backgroundColor: COLORS.greenDark, borderWidth: 1, borderColor: COLORS.border,
    borderRadius: 12, marginBottom: 16, overflow: 'hidden',
  },
  dropdownItem: { padding: 14, borderBottomWidth: 1, borderBottomColor: COLORS.border },
  dropdownText: { color: COLORS.white, fontSize: 14 },
  submitBtn: {
    backgroundColor: COLORS.greenBright, borderRadius: 14, padding: 18,
    alignItems: 'center', marginBottom: 32,
  },
  submitBtnText: { color: COLORS.dark, fontWeight: '800', fontSize: 16 },
  methods: { paddingHorizontal: 16 },
  method: {
    flexDirection: 'row', alignItems: 'center', gap: 16,
    backgroundColor: COLORS.cardBg, borderWidth: 1, borderColor: COLORS.border,
    borderRadius: 14, padding: 16, marginBottom: 12,
  },
  methodIcon: { fontSize: 28 },
  methodLabel: { color: COLORS.gray, fontSize: 12 },
  methodValue: { color: COLORS.white, fontWeight: '700', fontSize: 15, marginTop: 2 },
  successWrap: { flex: 1, backgroundColor: COLORS.dark, alignItems: 'center', justifyContent: 'center', padding: 32 },
  successIcon: { fontSize: 72, marginBottom: 20 },
  successTitle: { fontSize: 28, fontWeight: '800', color: COLORS.white, marginBottom: 12 },
  successSub: { color: COLORS.gray, fontSize: 16, textAlign: 'center', marginBottom: 32 },
  btnWA: { backgroundColor: '#25D366', paddingVertical: 16, paddingHorizontal: 32, borderRadius: 50, marginBottom: 16 },
  btnWAText: { color: '#000', fontWeight: '800', fontSize: 16 },
  btnRetry: { padding: 12 },
  btnRetryText: { color: COLORS.gray, fontSize: 14 },
});
