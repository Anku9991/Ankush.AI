// src/screens/AboutScreen.js
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Linking } from 'react-native';

const COLORS = {
  greenDark: '#0d3b1a', greenBright: '#27ae60', greenLight: '#2ecc71',
  yellow: '#f5c518', yellowBright: '#ffe234', white: '#f0fff4',
  gray: '#a8d5b5', dark: '#081a0d', cardBg: 'rgba(20,80,35,0.6)',
  border: 'rgba(245,197,24,0.25)',
};

const SKILLS = [
  { name: 'Web Development', level: 95 }, { name: 'Flutter / Mobile', level: 90 },
  { name: 'WhatsApp Automation', level: 85 }, { name: 'UI / UX Design', level: 88 },
  { name: 'Node.js / Backend', level: 82 }, { name: 'Database Design', level: 80 },
];

const HIGHLIGHTS = [
  { icon: '⚡', title: 'Fast Delivery', sub: 'Most projects in 3-7 days' },
  { icon: '💰', title: 'Affordable', sub: 'Competitive Indian pricing' },
  { icon: '🔒', title: 'Reliable', sub: '1 year free support' },
  { icon: '🇮🇳', title: 'Made in India', sub: 'Hindi + English support' },
];

const TESTIMONIALS = [
  { name: 'Dr. Ramesh Gupta', role: 'CareFirst Hospital', text: '"Built our HMS in 3 weeks! Quality is exceptional."', rating: 5, color: '#27ae60' },
  { name: 'Priya Sharma', role: 'PropStar Realty', text: '"WhatsApp bot saves 2 staff salaries. Leads up 3x!"', rating: 5, color: '#ae2780' },
  { name: 'Arjun Kapoor', role: 'TastyRun Foods', text: '"Full Flutter app in 2 weeks, fraction of agency price!"', rating: 5, color: '#80ae27' },
];

function SkillBar({ name, level }) {
  return (
    <View style={styles.skillItem}>
      <View style={styles.skillHeader}>
        <Text style={styles.skillName}>{name}</Text>
        <Text style={styles.skillLevel}>{level}%</Text>
      </View>
      <View style={styles.skillTrack}>
        <View style={[styles.skillFill, { width: level + '%' }]} />
      </View>
    </View>
  );
}

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* ─── PROFILE ─── */}
      <View style={styles.profile}>
        <View style={styles.avatarWrap}>
          <Text style={styles.avatarEmoji}>👨‍💻</Text>
        </View>
        <Text style={styles.name}>Ankush</Text>
        <Text style={styles.title}>Your Digital Creator 🚀</Text>
        <Text style={styles.location}>📍 Lucknow, Uttar Pradesh, India</Text>
        <View style={styles.profileBtns}>
          <TouchableOpacity style={styles.waBtnSmall} onPress={() => Linking.openURL('https://wa.me/917307852235')}>
            <Text style={styles.waBtnSmallText}>💬 WhatsApp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mailBtnSmall} onPress={() => Linking.openURL('mailto:Ankush.AI2026@gmail.com')}>
            <Ionicons name="mail" size={20} color={COLORS.yellow} />
          </TouchableOpacity>
        </View>
      </View>

      {/* ─── BIO ─── */}
      <View style={styles.section}>
        <Text style={styles.sectionTag}>ABOUT ME</Text>
        <Text style={styles.bio}>
          I'm a full-stack developer with 5+ years of experience building real-world digital solutions for Indian businesses. From solo startups to hospital chains — I've delivered 150+ projects that actually work.{'\n\n'}
          I specialize in fast, affordable, high-quality solutions: websites, Flutter apps, hospital portals, and WhatsApp automation.
        </Text>
      </View>

      {/* ─── STATS ─── */}
      <View style={styles.statsGrid}>
        {[['150+', 'Projects'], ['98%', 'Satisfaction'], ['5+', 'Years'], ['24/7', 'Support']].map(([n, l], i) => (
          <View key={i} style={styles.statBox}>
            <Text style={styles.statNum}>{n}</Text>
            <Text style={styles.statLabel}>{l}</Text>
          </View>
        ))}
      </View>

      {/* ─── SKILLS ─── */}
      <View style={styles.section}>
        <Text style={styles.sectionTag}>EXPERTISE</Text>
        <Text style={styles.sectionTitle}>Technical <Text style={styles.yellow}>Skills</Text></Text>
        {SKILLS.map((s, i) => <SkillBar key={i} {...s} />)}
      </View>

      {/* ─── HIGHLIGHTS ─── */}
      <View style={styles.section}>
        <Text style={styles.sectionTag}>WHY CHOOSE ME</Text>
        <View style={styles.highlightsGrid}>
          {HIGHLIGHTS.map((h, i) => (
            <View key={i} style={styles.highlightCard}>
              <Text style={{ fontSize: 28, marginBottom: 8 }}>{h.icon}</Text>
              <Text style={styles.highlightTitle}>{h.title}</Text>
              <Text style={styles.highlightSub}>{h.sub}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* ─── TESTIMONIALS ─── */}
      <View style={styles.section}>
        <Text style={styles.sectionTag}>CLIENT REVIEWS</Text>
        <Text style={styles.sectionTitle}>What They <Text style={styles.yellow}>Say</Text></Text>
        {TESTIMONIALS.map((t, i) => (
          <View key={i} style={styles.testimonialCard}>
            <Text style={styles.stars}>{'★'.repeat(t.rating)}</Text>
            <Text style={styles.testimonialText}>{t.text}</Text>
            <View style={styles.testimonialAuthor}>
              <View style={[styles.authorAvatar, { backgroundColor: t.color }]}>
                <Text style={styles.authorInitial}>{t.name[0]}</Text>
              </View>
              <View>
                <Text style={styles.authorName}>{t.name}</Text>
                <Text style={styles.authorRole}>{t.role}</Text>
              </View>
            </View>
          </View>
        ))}
      </View>

      {/* ─── FOOTER CTA ─── */}
      <TouchableOpacity style={styles.cta} onPress={() => Linking.openURL('https://wa.me/917307852235')}>
        <Text style={styles.ctaTitle}>Ready to Build? 🚀</Text>
        <Text style={styles.ctaSub}>Tap to WhatsApp Ankush now</Text>
      </TouchableOpacity>

      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.dark },
  profile: { backgroundColor: COLORS.greenDark, alignItems: 'center', padding: 32, paddingTop: 40 },
  avatarWrap: {
    width: 110, height: 110, borderRadius: 55,
    backgroundColor: COLORS.greenBright,
    alignItems: 'center', justifyContent: 'center',
    borderWidth: 3, borderColor: COLORS.yellow,
    marginBottom: 16,
  },
  avatarEmoji: { fontSize: 56 },
  name: { fontSize: 28, fontWeight: '800', color: COLORS.white },
  title: { color: COLORS.yellow, fontSize: 14, fontWeight: '600', marginTop: 4 },
  location: { color: COLORS.gray, fontSize: 13, marginTop: 6, marginBottom: 20 },
  profileBtns: { flexDirection: 'row', gap: 12 },
  waBtnSmall: { backgroundColor: '#25D366', paddingVertical: 10, paddingHorizontal: 22, borderRadius: 50 },
  waBtnSmallText: { color: '#000', fontWeight: '700' },
  mailBtnSmall: { borderWidth: 1, borderColor: COLORS.border, paddingVertical: 10, paddingHorizontal: 22, borderRadius: 50 },
  mailBtnSmallText: { color: COLORS.white, fontWeight: '700' },
  statsGrid: {
    flexDirection: 'row', justifyContent: 'space-around',
    backgroundColor: 'rgba(13,59,26,0.8)', paddingVertical: 20,
    marginHorizontal: 16, marginTop: -12, borderRadius: 16,
    borderWidth: 1, borderColor: COLORS.border,
  },
  statBox: { alignItems: 'center' },
  statNum: { fontSize: 22, fontWeight: '800', color: COLORS.yellowBright },
  statLabel: { fontSize: 11, color: COLORS.gray, marginTop: 2 },
  section: { padding: 24 },
  sectionTag: { color: COLORS.yellow, fontSize: 11, fontWeight: '700', letterSpacing: 2, marginBottom: 6 },
  sectionTitle: { fontSize: 24, fontWeight: '800', color: COLORS.white, marginBottom: 20 },
  yellow: { color: COLORS.yellow },
  bio: { color: COLORS.gray, fontSize: 15, lineHeight: 24 },
  skillItem: { marginBottom: 16 },
  skillHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 },
  skillName: { color: COLORS.white, fontWeight: '600', fontSize: 14 },
  skillLevel: { color: COLORS.yellow, fontWeight: '700', fontSize: 14 },
  skillTrack: { height: 6, backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: 4, overflow: 'hidden' },
  skillFill: { height: '100%', backgroundColor: COLORS.greenBright, borderRadius: 4 },
  highlightsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },
  highlightCard: {
    backgroundColor: COLORS.cardBg, borderWidth: 1, borderColor: COLORS.border,
    borderRadius: 16, padding: 18, width: '47%',
  },
  highlightTitle: { color: COLORS.white, fontWeight: '700', fontSize: 15, marginBottom: 4 },
  highlightSub: { color: COLORS.gray, fontSize: 12 },
  testimonialCard: {
    backgroundColor: COLORS.cardBg, borderWidth: 1, borderColor: COLORS.border,
    borderRadius: 18, padding: 20, marginBottom: 16,
  },
  stars: { color: COLORS.yellow, fontSize: 18, marginBottom: 10 },
  testimonialText: { color: COLORS.gray, fontSize: 15, fontStyle: 'italic', lineHeight: 22, marginBottom: 16 },
  testimonialAuthor: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  authorAvatar: { width: 40, height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center' },
  authorInitial: { color: '#fff', fontWeight: '800', fontSize: 16 },
  authorName: { color: COLORS.white, fontWeight: '700' },
  authorRole: { color: COLORS.gray, fontSize: 12 },
  cta: {
    backgroundColor: COLORS.greenBright, margin: 16, borderRadius: 20,
    padding: 24, alignItems: 'center',
  },
  ctaTitle: { color: COLORS.dark, fontWeight: '800', fontSize: 22 },
  ctaSub: { color: COLORS.dark, opacity: 0.8, marginTop: 6 },
});
