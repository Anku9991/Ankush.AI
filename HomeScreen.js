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
  white: '#f0fff4', gray: '#a8d5b5', dark: '#050a06',
  cardBg: 'rgba(15, 25, 20, 0.75)', border: 'rgba(0, 255, 127, 0.15)',
  accent: '#00d2ff',
};

const SERVICES = [
  { num: '01', icon: '🌐', name: 'Website Development', price: '₹5,000 se shuru', tag: '⚡ 7-Day Delivery', desc: 'Premium SEO-optimized sites.' },
  { num: '02', icon: '📄', name: 'Landing Page', price: '₹2,000 – ₹8,000', tag: '🎯 Conversion-Focused', desc: 'Turn visitors into customers.' },
  { num: '03', icon: '📱', name: 'Mobile App (Flutter)', price: '₹15,000+', tag: '📱 iOS + Android', desc: 'Native performance, hybrid cost.' },
  { num: '04', icon: '🏥', name: 'Hospital Portal', price: '₹25,000+', tag: '🏥 Healthcare Grade', desc: 'Paperless clinic management.' },
  { num: '05', icon: '🤖', name: 'WhatsApp Bot', price: '₹3,000 – ₹20,000', tag: '🤖 24/7 Automated', desc: 'Automate sales & support.' },
];

const STATS = [
  { num: '50+', label: 'Projects' },
  { num: '98%', label: 'Happy' },
  { num: '5+', label: 'Years' },
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
    const text = msg || 'Hi PIHNEXA! I found your app and want to know more about your services.';
    Linking.openURL(`https://wa.me/917992203671?text=${encodeURIComponent(text)}`);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <StatusBar barStyle="light-content" />

      {/* ─── HERO ─── */}
      <View style={styles.hero}>
        <Animated.View style={{ opacity: fadeAnim, transform: [{ translateY: slideAnim }] }}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>⚡ YOUR DIGITAL CREATOR</Text>
          </View>
          <Text style={styles.heroTitle}>Upgrade Your{'\n'}
            <Text style={styles.heroTitleGold}>Business!</Text>
          </Text>
          <Text style={styles.heroSub}>
            Websites, mobile apps, WhatsApp bots — smart solutions built affordable & fast.
          </Text>
          <View style={styles.heroBtns}>
            <TouchableOpacity
              style={styles.btnPrimary}
              onPress={() => navigation.navigate('Services')}
              activeOpacity={0.8}
            >
              <Text style={styles.btnPrimaryText}>🚀 View Services</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnSecondary}
              onPress={() => openWhatsApp()}
              activeOpacity={0.8}
            >
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
            activeOpacity={0.9}
          >
            <View style={styles.serviceIcon}>
              <Text style={{ fontSize: 26 }}>{s.icon}</Text>
            </View>
            <View style={styles.serviceInfo}>
              <Text style={styles.serviceName}>{s.name}</Text>
              <Text style={styles.serviceDescText}>{s.desc}</Text>
              <View style={styles.priceTagRow}>
                <Text style={styles.servicePrice}>{s.price}</Text>
                <Text style={styles.serviceTagText}>{s.tag}</Text>
              </View>
            </View>
            <Text style={styles.serviceArrow}>›</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* ─── WHATSAPP CTA ─── */}
      <TouchableOpacity
        style={styles.waCta}
        onPress={() => openWhatsApp()}
        activeOpacity={0.8}
      >
        <Text style={styles.waCtaText}>💬 Chat on WhatsApp Now</Text>
        <Text style={styles.waCtaSub}>+91 73078 52235 · Fast Response</Text>
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
    borderBottomWidth: 1, borderBottomColor: COLORS.border,
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(0, 255, 127, 0.1)', borderWidth: 1,
    borderColor: COLORS.border, borderRadius: 20,
    paddingHorizontal: 14, paddingVertical: 5, marginBottom: 20,
  },
  badgeText: { color: COLORS.greenLight, fontSize: 10, fontWeight: '800', letterSpacing: 1.5 },
  heroTitle: { fontSize: 42, fontWeight: '800', color: COLORS.white, lineHeight: 50 },
  heroTitleGold: {
    color: COLORS.yellow,
  },
  heroSub: { color: COLORS.gray, fontSize: 16, lineHeight: 24, marginTop: 12, marginBottom: 28 },
  heroBtns: { flexDirection: 'row', gap: 12 },
  btnPrimary: {
    backgroundColor: COLORS.greenBright, paddingVertical: 15, paddingHorizontal: 20,
    borderRadius: 16, flex: 1.2, alignItems: 'center',
    shadowColor: COLORS.greenBright, shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 8, elevation: 5,
  },
  btnPrimaryText: { color: COLORS.dark, fontWeight: '800', fontSize: 15 },
  btnSecondary: {
    borderWidth: 1.5, borderColor: COLORS.border, paddingVertical: 15, paddingHorizontal: 20,
    borderRadius: 16, flex: 1, alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.05)',
  },
  btnSecondaryText: { color: COLORS.white, fontWeight: '700', fontSize: 15 },
  statsRow: {
    flexDirection: 'row', justifyContent: 'space-around',
    backgroundColor: 'rgba(13, 59, 26, 0.9)',
    paddingVertical: 22, marginHorizontal: 20, marginTop: -20,
    borderRadius: 20, borderWidth: 1, borderColor: COLORS.border,
    shadowColor: '#000', shadowOffset: { width: 0, height: 10 }, shadowOpacity: 0.3, shadowRadius: 20, elevation: 10,
  },
  statItem: { alignItems: 'center' },
  statNum: { fontSize: 24, fontWeight: '800', color: COLORS.yellowBright },
  statLabel: { fontSize: 10, color: COLORS.gray, marginTop: 4, textTransform: 'uppercase', letterSpacing: 1 },
  section: { padding: 24 },
  sectionTag: { color: COLORS.yellow, fontSize: 11, fontWeight: '800', letterSpacing: 2, marginBottom: 8 },
  sectionTitle: { fontSize: 32, fontWeight: '800', color: COLORS.white, marginBottom: 24 },
  yellow: { color: COLORS.yellow },
  serviceRow: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: COLORS.cardBg, borderWidth: 1, borderColor: COLORS.border,
    borderRadius: 20, padding: 18, marginBottom: 14,
  },
  serviceIcon: {
    width: 56, height: 56, borderRadius: 16,
    backgroundColor: 'rgba(0, 255, 127, 0.1)',
    alignItems: 'center', justifyContent: 'center', marginRight: 16,
  },
  serviceInfo: { flex: 1 },
  serviceName: { color: COLORS.white, fontWeight: '800', fontSize: 17 },
  serviceDescText: { color: COLORS.gray, fontSize: 13, marginTop: 4, marginBottom: 8 },
  priceTagRow: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  servicePrice: { color: COLORS.yellow, fontWeight: '800', fontSize: 14 },
  serviceTagText: { color: COLORS.greenLight, fontSize: 11, fontWeight: '600' },
  serviceArrow: { color: COLORS.yellow, fontSize: 32, fontWeight: '200', marginLeft: 8 },
  waCta: {
    backgroundColor: '#075E54', marginHorizontal: 24, borderRadius: 24,
    padding: 24, alignItems: 'center',
    shadowColor: '#25D366', shadowOffset: { width: 0, height: 10 }, shadowOpacity: 0.4, shadowRadius: 20, elevation: 10,
    borderWidth: 1, borderColor: 'rgba(37, 211, 102, 0.3)',
  },
  waCtaText: { color: '#fff', fontWeight: '800', fontSize: 19 },
  waCtaSub: { color: 'rgba(255,255,255,0.7)', fontSize: 13, marginTop: 6 },
});
