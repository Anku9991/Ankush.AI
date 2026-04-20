// src/screens/ServicesScreen.js
import React, { useState } from 'react';
import {
  View, Text, ScrollView, TouchableOpacity, StyleSheet, Linking, Modal, Pressable
} from 'react-native';

const COLORS = {
  greenDark: '#0d3b1a', greenBright: '#27ae60', greenLight: '#2ecc71',
  yellow: '#f5c518', yellowBright: '#ffe234', white: '#f0fff4',
  gray: '#a8d5b5', dark: '#081a0d', cardBg: 'rgba(20,80,35,0.6)',
  border: 'rgba(245,197,24,0.25)',
};

const SERVICES = [
  {
    num: '1', icon: '🌐', name: 'Website Development',
    price: '₹5,000 se shuru', tag: '⚡ 7-Day Delivery',
    desc: 'Responsive, SEO-optimised websites. Portfolio, business, e-commerce — all built with modern tech.',
    features: ['Responsive Design', 'SEO Optimised', 'Fast Loading', 'CMS Integration', '1 Year Support', 'Free Domain Setup'],
    color: '#27ae60',
  },
  {
    num: '2', icon: '📄', name: 'Landing Page',
    price: '₹2,000 – ₹8,000', tag: '🎯 Conversion-Focused',
    desc: 'High-converting landing pages for ads, products, events, and lead capture campaigns.',
    features: ['Lead Form', 'Analytics Setup', 'A/B Testing Ready', 'Mobile First', 'Fast Delivery', 'WhatsApp CTA'],
    color: '#e67e22',
  },
  {
    num: '3', icon: '📱', name: 'Mobile App (Flutter)',
    price: '₹15,000 – ₹50,000+', tag: '📱 iOS + Android',
    desc: 'Cross-platform Flutter apps for iOS & Android with smooth animations and great performance.',
    features: ['iOS + Android', 'Push Notifications', 'Payment Gateway', 'Admin Dashboard', 'API Integration', 'Play Store Upload'],
    color: '#2980b9',
  },
  {
    num: '4', icon: '🏥', name: 'Hospital Portal',
    price: '₹25,000 – ₹1,00,000+', tag: '🏥 Healthcare Grade',
    desc: 'Complete HMS for clinics — appointments, patient records, billing, pharmacy, and staff management.',
    features: ['Appointment Booking', 'Patient Records', 'Billing System', 'Pharmacy Module', 'WhatsApp Reports', 'Multi-Doctor'],
    color: '#e74c3c',
  },
  {
    num: '5', icon: '🤖', name: 'WhatsApp Bot',
    price: '₹3,000 – ₹20,000', tag: '🤖 24/7 Automated',
    desc: 'Automated WhatsApp Business bots for customer support, lead capture, and order management.',
    features: ['Automated Replies', 'Lead Capture', 'Order Tracking', 'Broadcast Msgs', 'CRM Integration', '24/7 Running'],
    color: '#25D366',
  },
];

export default function ServicesScreen() {
  const [selected, setSelected] = useState(null);

  const openWhatsApp = (service) => {
    const msg = `Hi Ankush! I'm interested in: ${service.name} (${service.price}). Can we discuss?`;
    Linking.openURL(`https://wa.me/917307852235?text=${encodeURIComponent(msg)}`);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.headerTag}>CHOOSE YOUR SERVICE</Text>
        <Text style={styles.headerTitle}>Smart <Text style={styles.yellow}>Solutions</Text></Text>
        <Text style={styles.headerSub}>Transparent pricing. Zero hidden costs.</Text>
      </View>

      {SERVICES.map((s, i) => (
        <TouchableOpacity
          key={i} style={[styles.card, { borderLeftColor: s.color, borderLeftWidth: 4 }]}
          onPress={() => setSelected(s)} activeOpacity={0.9}
        >
          <View style={styles.cardTop}>
            <View style={[styles.iconWrap, { backgroundColor: s.color + '22' }]}>
              <Text style={{ fontSize: 28 }}>{s.icon}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.cardNum}>0{s.num}</Text>
              <Text style={styles.cardName}>{s.name}</Text>
            </View>
            <Text style={{ color: COLORS.yellow, fontSize: 22 }}>›</Text>
          </View>
          <Text style={styles.cardPrice}>{s.price}</Text>
          <View style={styles.cardTagWrap}>
            <Text style={[styles.cardTag, { color: s.color }]}>{s.tag}</Text>
          </View>
        </TouchableOpacity>
      ))}

      {/* Custom Project */}
      <TouchableOpacity
        style={[styles.card, styles.customCard]}
        onPress={() => Linking.openURL('https://wa.me/917307852235?text=Hi! I have a custom project idea for you.')}
      >
        <Text style={{ fontSize: 36, marginBottom: 12 }}>✨</Text>
        <Text style={styles.cardName}>Custom Project?</Text>
        <Text style={styles.headerSub}>Tell us your idea — we'll build it!</Text>
        <View style={[styles.cardTagWrap, { marginTop: 12 }]}>
          <Text style={[styles.cardTag, { color: COLORS.yellow }]}>💬 Tap to WhatsApp</Text>
        </View>
      </TouchableOpacity>

      <View style={{ height: 32 }} />

      {/* ─── SERVICE DETAIL MODAL ─── */}
      <Modal visible={!!selected} transparent animationType="slide" onRequestClose={() => setSelected(null)}>
        <Pressable style={styles.modalOverlay} onPress={() => setSelected(null)}>
          <Pressable style={styles.modalSheet} onPress={e => e.stopPropagation()}>
            <View style={styles.modalHandle} />
            {selected && (
              <>
                <Text style={{ fontSize: 48, marginBottom: 8 }}>{selected.icon}</Text>
                <Text style={styles.modalTitle}>{selected.name}</Text>
                <Text style={styles.modalPrice}>{selected.price}</Text>
                <Text style={styles.modalDesc}>{selected.desc}</Text>
                <Text style={styles.featuresTitle}>What's Included:</Text>
                <View style={styles.featuresList}>
                  {selected.features.map((f, i) => (
                    <View key={i} style={styles.featureItem}>
                      <Text style={styles.featureCheck}>✓</Text>
                      <Text style={styles.featureText}>{f}</Text>
                    </View>
                  ))}
                </View>
                <TouchableOpacity style={styles.modalBtn} onPress={() => { setSelected(null); openWhatsApp(selected); }}>
                  <Text style={styles.modalBtnText}>💬 Get This Service</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.modalClose} onPress={() => setSelected(null)}>
                  <Text style={styles.modalCloseText}>Close</Text>
                </TouchableOpacity>
              </>
            )}
          </Pressable>
        </Pressable>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.dark },
  header: { padding: 24, paddingTop: 32, backgroundColor: COLORS.greenDark },
  headerTag: { color: COLORS.yellow, fontSize: 11, fontWeight: '700', letterSpacing: 2, marginBottom: 6 },
  headerTitle: { fontSize: 32, fontWeight: '800', color: COLORS.white, marginBottom: 8 },
  headerSub: { color: COLORS.gray, fontSize: 14 },
  yellow: { color: COLORS.yellow },
  card: {
    backgroundColor: COLORS.cardBg, borderWidth: 1, borderColor: COLORS.border,
    marginHorizontal: 16, marginTop: 16, borderRadius: 18, padding: 20,
  },
  customCard: { alignItems: 'center', borderColor: COLORS.yellow, borderWidth: 1.5 },
  cardTop: { flexDirection: 'row', alignItems: 'center', gap: 14, marginBottom: 10 },
  iconWrap: { width: 54, height: 54, borderRadius: 14, alignItems: 'center', justifyContent: 'center' },
  cardNum: { color: COLORS.gray, fontSize: 11, fontWeight: '700', letterSpacing: 1.5 },
  cardName: { color: COLORS.white, fontSize: 18, fontWeight: '700', marginTop: 2 },
  cardPrice: { color: COLORS.yellowBright, fontSize: 20, fontWeight: '800', marginBottom: 8 },
  cardTagWrap: { flexDirection: 'row' },
  cardTag: { fontSize: 13, fontWeight: '700', backgroundColor: 'rgba(255,255,255,0.07)', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 10 },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.7)', justifyContent: 'flex-end' },
  modalSheet: {
    backgroundColor: COLORS.greenDark, borderTopLeftRadius: 28, borderTopRightRadius: 28,
    padding: 28, paddingBottom: 40, borderWidth: 1, borderColor: COLORS.border,
  },
  modalHandle: { width: 40, height: 4, backgroundColor: COLORS.border, borderRadius: 2, alignSelf: 'center', marginBottom: 20 },
  modalTitle: { color: COLORS.white, fontSize: 24, fontWeight: '800', marginBottom: 4 },
  modalPrice: { color: COLORS.yellowBright, fontSize: 22, fontWeight: '800', marginBottom: 14 },
  modalDesc: { color: COLORS.gray, fontSize: 15, lineHeight: 22, marginBottom: 20 },
  featuresTitle: { color: COLORS.yellow, fontWeight: '700', fontSize: 13, letterSpacing: 1, marginBottom: 12 },
  featuresList: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: 24 },
  featureItem: { flexDirection: 'row', alignItems: 'center', gap: 6, backgroundColor: 'rgba(39,174,96,0.1)', borderRadius: 10, paddingHorizontal: 12, paddingVertical: 6 },
  featureCheck: { color: COLORS.greenLight, fontWeight: '800' },
  featureText: { color: COLORS.white, fontSize: 13 },
  modalBtn: { backgroundColor: COLORS.greenBright, padding: 16, borderRadius: 14, alignItems: 'center', marginBottom: 12 },
  modalBtnText: { color: COLORS.dark, fontWeight: '800', fontSize: 16 },
  modalClose: { alignItems: 'center', padding: 10 },
  modalCloseText: { color: COLORS.gray, fontSize: 14 },
});
