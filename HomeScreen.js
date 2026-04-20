// src/screens/HomeScreen.js
import React, { useEffect, useRef } from 'react';
import {
  View, Text, ScrollView, TouchableOpacity, StyleSheet,
  Animated, Linking, ImageBackground, Dimensions
} from 'react-native';

const { width } = Dimensions.get('window');

const COLORS = {
  greenDark: '#0d3b1a', greenMid: '#1a6b2a', greenBright: '#27ae60',
  greenLight: '#2ecc71', yellow: '#f5c518', yellowBright: '#ffe234',
  white: '#f0fff4', gray: '#a8d5b5', dark: '#081a0d',
  cardBg: 'rgba(20,80,35,0.6)', border: 'rgba(245,197,24,0.25)',
};

const SERVICES = [
  { num: '01', icon: '🌐', name: 'Website Development', price: '₹5,000 se shuru', tag: '⚡ 7-Day Delivery' },
  { num: '02', icon: '📄', name: 'Landing Page', price: '₹2,000 – ₹8,000', tag: '🎯 Conversion-Focused' },
  { num: '03', icon: '📱', name: 'Mobile App (Flutter)', price: '₹15,000 – ₹50,000+', tag: '📱 iOS + Android' },
  { num: '04', icon: '🏥', name: 'Hospital Portal', price: '₹25,000 – ₹1,00,000+', tag: '🏥 Healthcare Grade' },
  { num: '05', icon: '🤖', name: 'WhatsApp Bot', price: '₹3,000 – ₹20,000', tag: '🤖 24/7 Automated' },
];

const STATS = [
  { num: '150+', label: 'Projects Done' },
  { num: '98%', label: 'Satisfaction' },
  { num: '5+', label: 'Years Exp' },
  { num: '24/7', label: 'Support' },
];

export default function HomeScreen({ navigation }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(40)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, { toValue: 1, duration: 800, useNativeDriver: true }),
      Animated.timing(slideAnim, { toValue: 0, duration: 800, useNativeDriver: true }),
    ]).start();
  }, []);

  const openWhatsApp = (msg = '') => {
    const text = msg || 'Hi Ankush! I found your app and want to know more about your services.';
    Linking.openURL(`https://wa.me/917307852235?text=${encodeURIComponent(text)}`);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* ─── HERO ─── */}
      <View style={styles.hero}>
        <Animated.View style={{ opacity: fadeAnim, transform: [{ translateY: slideAnim }] }}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>⚡ YOUR DIGITAL CREATOR</Text>
          </View>
          <Text style={styles.heroTitle}>Upgrade Your{'\n'}
            <Text style={styles.heroTitleGreen}>Business!</Text>
          </Text>
          <Text style={styles.heroSub}>
            Websites, mobile apps, WhatsApp bots — smart solutions built affordable & fast.
          </Text>
          <View style={styles.heroBtns}>
            <TouchableOpacity style={styles.btnPrimary} onPress={() => navigation.navigate('Services')}>
              <Text style={styles.btnPrimaryText}>🚀 View Services</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnSecondary} onPress={() => openWhatsApp()}>
              <Text style={styles.btnSecondaryText}>💬 WhatsApp</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </View>

      {/* ─── STATS ─── */}
      <View style={styles.statsRow}>
        {STATS.map((s, i) => (
          <View key={i} style={styles.statItem}>
            <Text style={styles.statNum}>{s.num}</Text>
            <Text style={styles.statLabel}>{s.label}</Text>
          </View>
        ))}
      </View>

      {/* ─── QUICK SERVICES ─── */}
      <View style={styles.section}>
        <Text style={styles.sectionTag}>CHOOSE YOUR SERVICE</Text>
        <Text style={styles.sectionTitle}>What We <Text style={styles.yellow}>Build</Text></Text>

        {SERVICES.map((s, i) => (
          <TouchableOpacity
            key={i}
            style={styles.serviceRow}
            onPress={() => openWhatsApp(`Hi! I need: ${s.name} (${s.price})`)}
            activeOpacity={0.8}
          >
            <View style={styles.serviceIcon}>
              <Text style={{ fontSize: 26 }}>{s.icon}</Text>
            </View>
            <View style={styles.serviceInfo}>
              <Text style={styles.serviceName}>{s.name}</Text>
              <Text style={styles.servicePrice}>{s.price}</Text>
              <Text style={styles.serviceTag}>{s.tag}</Text>
            </View>
            <Text style={styles.serviceArrow}>›</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* ─── WHATSAPP CTA ─── */}
      <TouchableOpacity style={styles.waCta} onPress={() => openWhatsApp()}>
        <Text style={styles.waCtaText}>💬 Chat on WhatsApp Now</Text>
        <Text style={styles.waCtaSub}>+91 73078 52235 · Replies in 2 hours</Text>
      </TouchableOpacity>

      <View style={{ height: 32 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.dark },
  hero: {
    backgroundColor: COLORS.greenDark, padding: 28, paddingTop: 48,
    borderBottomLeftRadius: 32, borderBottomRightRadius: 32,
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(245,197,24,0.12)', borderWidth: 1,
    borderColor: COLORS.border, borderRadius: 20,
    paddingHorizontal: 14, paddingVertical: 5, marginBottom: 20,
  },
  badgeText: { color: COLORS.yellow, fontSize: 11, fontWeight: '700', letterSpacing: 1.5 },
  heroTitle: { fontSize: 42, fontWeight: '800', color: COLORS.white, lineHeight: 50 },
  heroTitleGreen: {
    color: COLORS.yellow,
  },
  heroSub: { color: COLORS.gray, fontSize: 16, lineHeight: 24, marginTop: 12, marginBottom: 28 },
  heroBtns: { flexDirection: 'row', gap: 12 },
  btnPrimary: {
    backgroundColor: COLORS.greenBright, paddingVertical: 14, paddingHorizontal: 24,
    borderRadius: 50, flex: 1, alignItems: 'center',
  },
  btnPrimaryText: { color: COLORS.dark, fontWeight: '800', fontSize: 15 },
  btnSecondary: {
    borderWidth: 2, borderColor: COLORS.border, paddingVertical: 14, paddingHorizontal: 24,
    borderRadius: 50, flex: 1, alignItems: 'center',
  },
  btnSecondaryText: { color: COLORS.white, fontWeight: '700', fontSize: 15 },
  statsRow: {
    flexDirection: 'row', justifyContent: 'space-around',
    backgroundColor: 'rgba(13,59,26,0.8)',
    paddingVertical: 20, marginHorizontal: 20, marginTop: -16,
    borderRadius: 16, borderWidth: 1, borderColor: COLORS.border,
  },
  statItem: { alignItems: 'center' },
  statNum: { fontSize: 22, fontWeight: '800', color: COLORS.yellowBright },
  statLabel: { fontSize: 11, color: COLORS.gray, marginTop: 2 },
  section: { padding: 24 },
  sectionTag: { color: COLORS.yellow, fontSize: 11, fontWeight: '700', letterSpacing: 2, marginBottom: 6 },
  sectionTitle: { fontSize: 28, fontWeight: '800', color: COLORS.white, marginBottom: 24 },
  yellow: { color: COLORS.yellow },
  serviceRow: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: COLORS.cardBg, borderWidth: 1, borderColor: COLORS.border,
    borderRadius: 16, padding: 16, marginBottom: 12,
  },
  serviceIcon: {
    width: 52, height: 52, borderRadius: 14,
    backgroundColor: 'rgba(39,174,96,0.15)',
    alignItems: 'center', justifyContent: 'center', marginRight: 14,
  },
  serviceInfo: { flex: 1 },
  serviceName: { color: COLORS.white, fontWeight: '700', fontSize: 16 },
  servicePrice: { color: COLORS.yellowBright, fontWeight: '800', fontSize: 15, marginTop: 2 },
  serviceTag: { color: COLORS.greenLight, fontSize: 12, marginTop: 4 },
  serviceArrow: { color: COLORS.yellow, fontSize: 28, fontWeight: '300' },
  waCta: {
    backgroundColor: '#075E54', marginHorizontal: 24, borderRadius: 20,
    padding: 20, alignItems: 'center',
    shadowColor: '#25D366', shadowOffset: { width: 0, height: 6 }, shadowOpacity: 0.4, shadowRadius: 16, elevation: 8,
  },
  waCtaText: { color: '#fff', fontWeight: '800', fontSize: 18 },
  waCtaSub: { color: 'rgba(255,255,255,0.7)', fontSize: 13, marginTop: 4 },
});
