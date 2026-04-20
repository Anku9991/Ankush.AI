// src/screens/PortfolioScreen.js
import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const COLORS = {
  greenDark: '#0d3b1a', greenBright: '#27ae60', yellow: '#f5c518',
  white: '#f0fff4', gray: '#a8d5b5', dark: '#081a0d',
  cardBg: 'rgba(20,80,35,0.6)', border: 'rgba(245,197,24,0.25)',
};

const CATEGORIES = ['All', 'Website', 'Mobile App', 'Hospital', 'WhatsApp Bot', 'Landing Page'];

const PROJECTS = [
  { icon: '🏥', name: 'MediCare HMS', category: 'Hospital', sub: 'Full hospital management for 50-bed clinic', tag: 'Hospital Portal', color: '#e74c3c' },
  { icon: '🛒', name: 'ShopEasy App', category: 'Mobile App', sub: 'Flutter shopping app with payments & inventory', tag: 'Mobile App', color: '#2980b9' },
  { icon: '🤖', name: 'LeadCapture Bot', category: 'WhatsApp Bot', sub: '200+ leads/month for a real estate firm', tag: 'WhatsApp Bot', color: '#25D366' },
  { icon: '🍕', name: 'FoodieBox', category: 'Landing Page', sub: 'Cloud kitchen landing — 40% CTR improvement', tag: 'Landing Page', color: '#e67e22' },
  { icon: '📚', name: 'LearnX Platform', category: 'Website', sub: 'EdTech portal for 5,000+ students', tag: 'Website', color: '#9b59b6' },
  { icon: '💼', name: 'FinPro Advisory', category: 'Website', sub: 'CA firm website with appointment booking', tag: 'Website', color: '#27ae60' },
  { icon: '🏠', name: 'PropStar Realty', category: 'Website', sub: 'Real estate portal with map & lead capture', tag: 'Website', color: '#f39c12' },
  { icon: '💊', name: 'PharmaBot', category: 'WhatsApp Bot', sub: 'Medicine reminder & order bot for pharmacy', tag: 'WhatsApp Bot', color: '#25D366' },
];

export default function PortfolioScreen() {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === filter);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.headerTag}>OUR WORK</Text>
        <Text style={styles.headerTitle}>Recent <Text style={styles.yellow}>Projects</Text></Text>
        <Text style={styles.headerSub}>150+ projects delivered across India</Text>
      </View>

      {/* Filter pills */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filters} contentContainerStyle={{ paddingHorizontal: 16 }}>
        {CATEGORIES.map((cat, i) => (
          <TouchableOpacity
            key={i} style={[styles.filterPill, filter === cat && styles.filterActive]}
            onPress={() => setFilter(cat)}
          >
            <Text style={[styles.filterText, filter === cat && styles.filterTextActive]}>{cat}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.grid}>
        {filtered.map((p, i) => (
          <TouchableOpacity key={i} style={[styles.card, { borderLeftColor: p.color, borderLeftWidth: 3 }]} activeOpacity={0.85}>
            <View style={[styles.iconWrap, { backgroundColor: p.color + '22' }]}>
              <Text style={{ fontSize: 36 }}>{p.icon}</Text>
            </View>
            <View style={[styles.tagBadge, { borderColor: p.color }]}>
              <Text style={[styles.tagText, { color: p.color }]}>{p.tag}</Text>
            </View>
            <Text style={styles.cardName}>{p.name}</Text>
            <Text style={styles.cardSub}>{p.sub}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.footNote}>+ Many more NDA-protected projects 🔒</Text>
      <View style={{ height: 32 }} />
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
  filters: { marginVertical: 16 },
  filterPill: { paddingHorizontal: 16, paddingVertical: 8, borderRadius: 20, borderWidth: 1, borderColor: COLORS.border, marginRight: 8 },
  filterActive: { backgroundColor: COLORS.yellow, borderColor: COLORS.yellow },
  filterText: { color: COLORS.gray, fontSize: 13, fontWeight: '600' },
  filterTextActive: { color: COLORS.dark, fontWeight: '800' },
  grid: { paddingHorizontal: 16, flexDirection: 'row', flexWrap: 'wrap', gap: 12 },
  card: {
    backgroundColor: COLORS.cardBg, borderWidth: 1, borderColor: COLORS.border,
    borderRadius: 16, padding: 18,
    width: (width - 44) / 2,
  },
  iconWrap: { width: 56, height: 56, borderRadius: 14, alignItems: 'center', justifyContent: 'center', marginBottom: 10 },
  tagBadge: { borderWidth: 1, borderRadius: 8, paddingHorizontal: 8, paddingVertical: 3, alignSelf: 'flex-start', marginBottom: 8 },
  tagText: { fontSize: 10, fontWeight: '700' },
  cardName: { color: COLORS.white, fontWeight: '700', fontSize: 15, marginBottom: 4 },
  cardSub: { color: COLORS.gray, fontSize: 12, lineHeight: 17 },
  footNote: { color: COLORS.gray, textAlign: 'center', fontSize: 13, marginTop: 8, padding: 16 },
});
