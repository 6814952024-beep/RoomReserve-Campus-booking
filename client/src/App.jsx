import { useEffect, useState } from "react";
import {
  ArrowRight,
  Building2,
  Bell,
  CalendarDays,
  CalendarClock,
  Check,
  ChevronRight,
  CircleCheck,
  DoorOpen,
  LogOut,
  Mail,
  MapPin,
  Pencil,
  Phone,
  Plus,
  RefreshCw,
  Save,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Trash2,
  UsersRound,
  X,
} from "lucide-react";
import { request } from "./api";

const initialUser = JSON.parse(localStorage.getItem("bookingUser") || "null");

function LandingPage({ onLogin }) {
  return <section className="prelogin relative mx-auto max-w-6xl overflow-hidden rounded-[2rem]" id="home">
    <div className="prelogin-shape prelogin-shape-left" /><div className="prelogin-shape prelogin-shape-right" />
    <nav className="relative z-20 flex items-center justify-between px-6 py-7 sm:px-10"><div className="flex items-center gap-3"><div className="flex h-8 w-8 items-center justify-center rounded-md bg-white text-fern shadow"><DoorOpen size={17} /></div><div><strong className="block font-display text-sm leading-none text-ink">ClassRoom</strong><span className="text-[9px] text-muted">Booking System</span></div></div><div className="hidden items-center gap-5 text-xs font-bold text-ink sm:flex"><a className="rounded bg-coral px-5 py-1.5" href="#home">Home</a><a href="#about">About Us</a><a href="#service">Service</a><a href="#contact">Contact</a></div></nav>
    <div className="relative z-10 grid items-center gap-5 px-6 pb-0 pt-5 lg:grid-cols-[.46fr_.54fr] lg:px-12"><div className="flex justify-center lg:justify-start"><div className="prelogin-phone"><div className="prelogin-screen"><div className="prelogin-classroom"><i /><i /><i /><i /><i /><i /></div><DoorOpen className="mb-2 text-fern" size={30} /><strong className="font-display text-2xl text-fern">RoomReserve</strong><span className="mt-1 text-xs text-ink">Booking System</span></div></div></div><div className="prelogin-card mb-14 lg:mb-0"><h1 className="font-display text-5xl font-bold leading-[.92] text-fern sm:text-7xl">เริ่มจอง<br /><span className="text-ink">วันนี้!</span></h1><button onClick={onLogin} className="button mt-7 rounded-full bg-coral px-7 py-3 text-ink shadow-[0_10px_18px_rgba(89,207,82,.35)]">เข้าสู่ระบบเพื่อจองห้องของคุณ<ArrowRight size={17} /></button></div></div>
  </section>;
}

function ModernLandingPage({ onLogin }) {
  const services = [
    { icon: CalendarClock, title: "จองได้ในไม่กี่คลิก", text: "เลือกห้อง วันที่ และช่วงเวลาที่ต้องการจากหน้าจอเดียว" },
    { icon: Building2, title: "ดูห้องได้ครบ", text: "เช็กอาคาร ความจุ และอุปกรณ์ก่อนตัดสินใจจอง" },
    { icon: ShieldCheck, title: "จัดการอย่างเป็นระบบ", text: "ติดตามสถานะคำขอและรับผลอนุมัติได้อย่างชัดเจน" },
  ];
  return <div className="modern-landing mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-[#f8fbfa] text-ink shadow-[0_28px_70px_rgba(20,57,47,.16)]">
    <header className="flex items-center justify-between px-6 py-5 sm:px-10 lg:px-12"><a href="#home" className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-fern text-white shadow-lg shadow-fern/20"><DoorOpen size={21} /></span><span><strong className="block font-display text-lg leading-none">RoomReserve</strong><small className="text-[10px] font-bold uppercase tracking-[.16em] text-muted">Campus booking</small></span></a><nav className="hidden items-center gap-1 text-sm font-bold md:flex"><a className="rounded-full bg-fern px-4 py-2 text-white" href="#home">Home</a><a className="rounded-full px-4 py-2 transition hover:bg-fern/10" href="#about">About us</a><a className="rounded-full px-4 py-2 transition hover:bg-fern/10" href="#service">Service</a><a className="rounded-full px-4 py-2 transition hover:bg-fern/10" href="#contact">Contact</a></nav><button onClick={onLogin} className="button rounded-full bg-ink px-4 py-2 text-white sm:px-5">Log in <ArrowRight size={16} /></button></header>
    <main>
      <section id="home" className="relative overflow-hidden px-6 pb-16 pt-10 sm:px-10 lg:px-12 lg:pb-24 lg:pt-16"><div className="modern-orb modern-orb-one" /><div className="modern-orb modern-orb-two" /><div className="relative grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]"><div><p className="mb-5 inline-flex items-center gap-2 rounded-full border border-fern/15 bg-white px-3 py-1.5 text-xs font-bold text-fern shadow-sm"><Sparkles size={14} /> THE SMARTER WAY TO BOOK</p><h1 className="max-w-xl font-display text-5xl font-bold leading-[.98] tracking-tight sm:text-7xl">พื้นที่ที่ใช่<br /><span className="text-fern">เริ่มต้นที่นี่</span></h1><p className="mt-6 max-w-lg text-base leading-7 text-muted">ค้นหา จอง และจัดการห้องเรียนของคุณได้อย่างราบรื่น เพื่อให้ทุกไอเดียมีพื้นที่สำหรับเกิดขึ้นจริง</p><div className="mt-8 flex flex-wrap gap-3"><button onClick={onLogin} className="button rounded-full bg-coral px-6 text-ink shadow-[0_12px_24px_rgba(89,207,82,.28)]">เริ่มจองห้อง <ArrowRight size={17} /></button><a href="#service" className="button rounded-full border border-line bg-white px-6 text-ink">ดูบริการ <ChevronRight size={17} /></a></div><div className="mt-10 flex gap-7 border-t border-line/70 pt-6"><span><strong className="block font-display text-2xl">24/7</strong><small className="text-xs text-muted">เข้าถึงข้อมูล</small></span><span><strong className="block font-display text-2xl">ง่าย</strong><small className="text-xs text-muted">เพียงไม่กี่ขั้นตอน</small></span><span><strong className="block font-display text-2xl">ชัดเจน</strong><small className="text-xs text-muted">ทุกสถานะการจอง</small></span></div></div><div className="relative mx-auto w-full max-w-md"><div className="rounded-[2rem] bg-ink p-3 shadow-[0_28px_50px_rgba(23,61,50,.3)]"><div className="overflow-hidden rounded-[1.45rem] bg-[#ecf8f5] p-5"><div className="mb-7 flex items-center justify-between"><span className="font-display font-bold">Your schedule</span><span className="rounded-full bg-coral px-3 py-1 text-[10px] font-bold">TODAY</span></div><div className="rounded-2xl bg-fern p-5 text-white"><p className="text-xs text-white/65">09:00 — 11:00</p><h3 className="mt-2 font-display text-xl font-bold">Creative Workshop</h3><p className="mt-4 flex items-center gap-2 text-xs text-white/75"><MapPin size={13} /> อาคารนวัตกรรม · Room 304</p></div><div className="mt-4 grid grid-cols-2 gap-3"><div className="rounded-xl bg-white p-4"><UsersRound className="text-fern" size={20} /><strong className="mt-4 block font-display text-xl">24</strong><span className="text-xs text-muted">ที่นั่งพร้อมใช้</span></div><div className="rounded-xl bg-white p-4"><CalendarDays className="text-fern" size={20} /><strong className="mt-4 block font-display text-xl">3</strong><span className="text-xs text-muted">คำขอวันนี้</span></div></div></div></div><div className="absolute -bottom-5 -left-7 rounded-2xl bg-white p-4 shadow-xl"><p className="flex items-center gap-2 text-xs font-bold text-fern"><CircleCheck size={16} /> จองสำเร็จแล้ว</p><p className="mt-1 text-[11px] text-muted">ห้องประชุม A · 13:00</p></div></div></div></section>
      <section id="about" className="border-y border-line/70 bg-white px-6 py-16 sm:px-10 lg:px-12"><div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]"><div><p className="eyebrow">ABOUT US</p><h2 className="font-display text-4xl font-bold leading-tight">ทุกการเรียนรู้<br />ต้องมีพื้นที่ที่ดี</h2></div><div><p className="max-w-xl text-lg leading-8 text-muted">RoomReserve ช่วยให้ชุมชนการศึกษาวางแผนการใช้พื้นที่ได้ง่ายขึ้น ลดความซ้ำซ้อนของการจอง และทำให้ทุกห้องพร้อมสำหรับช่วงเวลาสำคัญ</p><div className="mt-8 grid gap-4 sm:grid-cols-2"><div className="rounded-2xl bg-paper p-5"><DoorOpen className="text-fern" /><h3 className="mt-5 font-display text-xl font-bold">Designed for campus</h3><p className="mt-2 text-sm leading-6 text-muted">ออกแบบเพื่อห้องเรียน ห้องประชุม และพื้นที่สร้างสรรค์</p></div><div className="rounded-2xl bg-fern p-5 text-white"><UsersRound className="text-coral" /><h3 className="mt-5 font-display text-xl font-bold">Built for people</h3><p className="mt-2 text-sm leading-6 text-white/70">ทำให้ผู้จองและผู้ดูแลทำงานร่วมกันได้อย่างราบรื่น</p></div></div></div></div></section>
      <section id="service" className="px-6 py-16 sm:px-10 lg:px-12"><div className="flex flex-wrap items-end justify-between gap-5"><div><p className="eyebrow">SERVICE</p><h2 className="font-display text-4xl font-bold">ครบทุกเรื่องของการจอง</h2></div><a href="#contact" className="text-sm font-bold text-fern hover:underline">ต้องการความช่วยเหลือ? →</a></div><div className="mt-9 grid gap-4 md:grid-cols-3">{services.map(({ icon: Icon, title, text }, index) => <article key={title} className="group rounded-2xl border border-line/70 bg-white p-6 transition hover:-translate-y-1 hover:border-fern/30 hover:shadow-xl hover:shadow-fern/10"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-paper text-fern"><Icon size={21} /></span><span className="mt-8 block text-xs font-bold text-muted">0{index + 1}</span><h3 className="mt-2 font-display text-xl font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-muted">{text}</p></article>)}</div></section>
      <section id="contact" className="mx-6 mb-6 overflow-hidden rounded-3xl bg-ink px-6 py-10 text-white sm:mx-10 sm:px-10 lg:mx-12 lg:px-12"><div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]"><div><p className="text-xs font-bold tracking-[.2em] text-coral">CONTACT</p><h2 className="mt-3 font-display text-4xl font-bold">พร้อมเริ่มต้นแล้วหรือยัง?</h2><p className="mt-3 max-w-xl text-sm leading-6 text-white/65">ทีมงานพร้อมช่วยให้การจัดการพื้นที่ของคุณง่ายขึ้น</p></div><div className="flex flex-wrap gap-3"><a className="button rounded-full bg-white px-5 text-ink" href="mailto:booking@campus.local"><Mail size={16} /> Email us</a><a className="button rounded-full border border-white/20 px-5 text-white" href="tel:020000000"><Phone size={16} /> 02 000 0000</a></div></div></section>
    </main>
  </div>;
}

function MarketingPage({ page, onNavigate, onLogin }) {
  const links = [["home", "Home"], ["about", "About us"], ["service", "Service"], ["contact", "Contact"]];
  const navigate = (target) => onNavigate(target);
  const nav = <nav className="hidden items-center gap-1 text-sm font-bold md:flex">{links.map(([target, label]) => <button key={target} onClick={() => navigate(target)} className={`rounded-full px-4 py-2 transition ${page === target ? "bg-fern text-white" : "hover:bg-fern/10"}`}>{label}</button>)}</nav>;
  const home = <section className="relative overflow-hidden px-6 pb-16 pt-10 sm:px-10 lg:px-12 lg:pb-24 lg:pt-16"><div className="modern-orb modern-orb-one" /><div className="modern-orb modern-orb-two" /><div className="relative grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]"><div><p className="mb-5 inline-flex items-center gap-2 rounded-full border border-fern/15 bg-white px-3 py-1.5 text-xs font-bold text-fern shadow-sm"><Sparkles size={14} /> THE SMARTER WAY TO BOOK</p><h1 className="max-w-xl font-display text-5xl font-bold leading-[.98] tracking-tight sm:text-7xl">พื้นที่ที่ใช่<br /><span className="text-fern">เริ่มต้นที่นี่</span></h1><p className="mt-6 max-w-lg text-base leading-7 text-muted">ค้นหา จอง และจัดการห้องเรียนของคุณได้อย่างราบรื่น เพื่อให้ทุกไอเดียมีพื้นที่สำหรับเกิดขึ้นจริง</p><div className="mt-8 flex flex-wrap gap-3"><button onClick={onLogin} className="button rounded-full bg-coral px-6 text-ink shadow-[0_12px_24px_rgba(89,207,82,.28)]">เริ่มจองห้อง <ArrowRight size={17} /></button><button onClick={() => navigate("service")} className="button rounded-full border border-line bg-white px-6 text-ink">ดูบริการ <ChevronRight size={17} /></button></div><div className="mt-10 flex gap-7 border-t border-line/70 pt-6"><span><strong className="block font-display text-2xl">24/7</strong><small className="text-xs text-muted">เข้าถึงข้อมูล</small></span><span><strong className="block font-display text-2xl">ง่าย</strong><small className="text-xs text-muted">เพียงไม่กี่ขั้นตอน</small></span><span><strong className="block font-display text-2xl">ชัดเจน</strong><small className="text-xs text-muted">ทุกสถานะการจอง</small></span></div></div><div className="relative mx-auto w-full max-w-md"><div className="rounded-[2rem] bg-ink p-3 shadow-[0_28px_50px_rgba(23,61,50,.3)]"><div className="overflow-hidden rounded-[1.45rem] bg-[#ecf8f5] p-5"><div className="mb-7 flex items-center justify-between"><span className="font-display font-bold">Your schedule</span><span className="rounded-full bg-coral px-3 py-1 text-[10px] font-bold">TODAY</span></div><div className="rounded-2xl bg-fern p-5 text-white"><p className="text-xs text-white/65">09:00 — 11:00</p><h3 className="mt-2 font-display text-xl font-bold">Creative Workshop</h3><p className="mt-4 flex items-center gap-2 text-xs text-white/75"><MapPin size={13} /> อาคารนวัตกรรม · Room 304</p></div><div className="mt-4 grid grid-cols-2 gap-3"><div className="rounded-xl bg-white p-4"><UsersRound className="text-fern" size={20} /><strong className="mt-4 block font-display text-xl">24</strong><span className="text-xs text-muted">ที่นั่งพร้อมใช้</span></div><div className="rounded-xl bg-white p-4"><CalendarDays className="text-fern" size={20} /><strong className="mt-4 block font-display text-xl">3</strong><span className="text-xs text-muted">คำขอวันนี้</span></div></div></div></div><div className="absolute -bottom-5 -left-7 rounded-2xl bg-white p-4 shadow-xl"><p className="flex items-center gap-2 text-xs font-bold text-fern"><CircleCheck size={16} /> จองสำเร็จแล้ว</p><p className="mt-1 text-[11px] text-muted">ห้องประชุม A · 13:00</p></div></div></div></section>;
  const about = <section className="px-6 py-16 sm:px-10 lg:px-12"><p className="eyebrow">ABOUT US</p><div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr]"><div><h1 className="font-display text-5xl font-bold leading-tight">ทุกการเรียนรู้<br /><span className="text-fern">ต้องมีพื้นที่ที่ดี</span></h1><button onClick={onLogin} className="button mt-8 rounded-full bg-ink text-white">เริ่มใช้งาน <ArrowRight size={17} /></button></div><div><p className="max-w-xl text-lg leading-8 text-muted">RoomReserve ช่วยให้ชุมชนการศึกษาวางแผนการใช้พื้นที่ได้ง่ายขึ้น ลดความซ้ำซ้อนของการจอง และทำให้ทุกห้องพร้อมสำหรับช่วงเวลาสำคัญ</p><div className="mt-9 grid gap-4 sm:grid-cols-2"><article className="rounded-3xl bg-paper p-6"><DoorOpen className="text-fern" /><h2 className="mt-12 font-display text-2xl font-bold">Designed for campus</h2><p className="mt-3 text-sm leading-6 text-muted">ออกแบบเพื่อห้องเรียน ห้องประชุม และพื้นที่สร้างสรรค์ทุกขนาด</p></article><article className="rounded-3xl bg-fern p-6 text-white"><UsersRound className="text-coral" /><h2 className="mt-12 font-display text-2xl font-bold">Built for people</h2><p className="mt-3 text-sm leading-6 text-white/70">ทำให้ผู้จองและผู้ดูแลทำงานร่วมกันได้อย่างราบรื่น</p></article></div></div></div></section>;
  const service = <section className="px-6 py-16 sm:px-10 lg:px-12"><p className="eyebrow">SERVICE</p><h1 className="max-w-xl font-display text-5xl font-bold leading-tight">ครบทุกเรื่อง<br />ของการจองห้อง</h1><div className="mt-10 grid gap-4 md:grid-cols-3">{[[CalendarClock, "จองได้ในไม่กี่คลิก", "เลือกห้อง วันที่ และช่วงเวลาที่ต้องการจากหน้าจอเดียว"], [Building2, "ดูห้องได้ครบ", "เช็กอาคาร ความจุ และอุปกรณ์ก่อนตัดสินใจจอง"], [ShieldCheck, "จัดการอย่างเป็นระบบ", "ติดตามสถานะคำขอและรับผลอนุมัติได้อย่างชัดเจน"]].map(([Icon, title, text], index) => <article key={title} className="rounded-3xl border border-line/70 bg-white p-6 shadow-sm"><span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-paper text-fern"><Icon size={22} /></span><span className="mt-12 block text-xs font-bold text-muted">0{index + 1}</span><h2 className="mt-2 font-display text-2xl font-bold">{title}</h2><p className="mt-3 text-sm leading-6 text-muted">{text}</p></article>)}</div><div className="mt-10 rounded-3xl bg-ink p-7 text-white sm:flex sm:items-center sm:justify-between"><div><h2 className="font-display text-2xl font-bold">พร้อมเริ่มจองห้องแล้วหรือยัง?</h2><p className="mt-2 text-sm text-white/65">สร้างบัญชีเพื่อเริ่มใช้งานได้ทันที</p></div><button onClick={onLogin} className="button mt-5 rounded-full bg-coral text-ink sm:mt-0">เข้าสู่ระบบ <ArrowRight size={17} /></button></div></section>;
  const contact = <section className="px-6 py-16 sm:px-10 lg:px-12"><p className="eyebrow">CONTACT</p><div className="grid gap-12 lg:grid-cols-[1fr_.8fr]"><div><h1 className="font-display text-5xl font-bold leading-tight">เราพร้อม<br /><span className="text-fern">ช่วยเหลือคุณ</span></h1><p className="mt-6 max-w-md text-base leading-7 text-muted">หากมีคำถามเกี่ยวกับการใช้งาน การจองห้อง หรือการจัดการระบบ ติดต่อทีมงานของเราได้เสมอ</p><button onClick={onLogin} className="button mt-8 rounded-full bg-coral text-ink">เข้าสู่ระบบ <ArrowRight size={17} /></button></div><div className="space-y-4"><a className="flex items-center gap-4 rounded-2xl border border-line bg-white p-5 transition hover:border-fern/40" href="mailto:booking@campus.local"><span className="rounded-xl bg-paper p-3 text-fern"><Mail size={21} /></span><span><strong className="block">Email us</strong><small className="text-muted">booking@campus.local</small></span></a><a className="flex items-center gap-4 rounded-2xl border border-line bg-white p-5 transition hover:border-fern/40" href="tel:020000000"><span className="rounded-xl bg-paper p-3 text-fern"><Phone size={21} /></span><span><strong className="block">Call us</strong><small className="text-muted">02 000 0000</small></span></a><div className="flex items-center gap-4 rounded-2xl bg-fern p-5 text-white"><span className="rounded-xl bg-white/10 p-3 text-coral"><MapPin size={21} /></span><span><strong className="block">Campus Operations</strong><small className="text-white/70">อาคารบริการกลาง ชั้น 1</small></span></div></div></div></section>;
  return <div className="modern-landing mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-[#f8fbfa] text-ink shadow-[0_28px_70px_rgba(20,57,47,.16)]"><header className="flex items-center justify-between border-b border-line/70 px-6 py-5 sm:px-10 lg:px-12"><button onClick={() => navigate("home")} className="flex items-center gap-3 text-left"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-fern text-white shadow-lg shadow-fern/20"><DoorOpen size={21} /></span><span><strong className="block font-display text-lg leading-none">RoomReserve</strong><small className="text-[10px] font-bold uppercase tracking-[.16em] text-muted">Campus booking</small></span></button>{nav}<button onClick={onLogin} className="button rounded-full bg-ink px-4 py-2 text-white sm:px-5">Log in <ArrowRight size={16} /></button></header>{page === "home" ? home : page === "about" ? about : page === "service" ? service : contact}<footer className="flex flex-wrap items-center justify-between gap-3 border-t border-line/70 px-6 py-5 text-xs text-muted sm:px-10 lg:px-12"><span>© 2026 RoomReserve</span><div className="flex gap-4">{links.map(([target, label]) => <button onClick={() => navigate(target)} key={target} className="hover:text-fern">{label}</button>)}</div></footer></div>;
}

function AuthPanel({ onAuthenticated, setNotice }) {
  const [mode, setMode] = useState("login");
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [busy, setBusy] = useState(false);

  const submit = async (event) => {
    event.preventDefault();
    setBusy(true);
    try {
      const data = await request(`/auth/${mode}`, {
        method: "POST",
        body: JSON.stringify(form),
      });
      localStorage.setItem("bookingToken", data.token);
      localStorage.setItem("bookingUser", JSON.stringify(data.user));
      onAuthenticated(data);
      setNotice({
        type: "success",
        text: mode === "login" ? "เข้าสู่ระบบสำเร็จ" : "สร้างบัญชีสำเร็จ",
      });
      setForm({ username: "", email: "", password: "" });
    } catch (error) {
      setNotice({ type: "error", text: error.message });
    } finally {
      setBusy(false);
    }
  };

  return (
    <section className="landing-stage mx-auto grid max-w-6xl gap-0 lg:grid-cols-[.46fr_.54fr]">
      <div className="auth-hero relative overflow-hidden text-white">
        <p className="eyebrow text-sun">CAMPUS ACCESS</p>
        <h2 className="max-w-lg font-display text-4xl font-bold leading-[.98] sm:text-6xl">
          พื้นที่ดีๆ
          <br />
          ทำให้วันเรียนดีขึ้น
        </h2>
        <p className="mt-6 max-w-md leading-7 text-white/75">
          จัดการห้องเรียนของคุณในที่เดียว ค้นหาพื้นที่ที่เหมาะกับงาน
          และจองเวลาได้อย่างเป็นระบบ
        </p>
        <div className="mt-12 flex gap-8 text-sm text-white/75">
          <span>
            <DoorOpen className="mb-2 text-sun" size={22} />
            ห้องพร้อมใช้
          </span>
          <span>
            <ShieldCheck className="mb-2 text-sun" size={22} />
            ปลอดภัย
          </span>
        </div>
        <div className="absolute -bottom-12 -right-5 font-display text-[12rem] font-bold leading-none text-white/5">
          01
        </div>
      </div>
      <form className="landing-copy panel" onSubmit={submit}>
        <div className="mb-7 flex gap-6 border-b border-line">
          <button
            type="button"
            onClick={() => setMode("login")}
            className={`pb-3 text-sm font-bold ${mode === "login" ? "border-b-2 border-coral text-ink" : "text-muted"}`}
          >
            เข้าสู่ระบบ
          </button>
          <button
            type="button"
            onClick={() => setMode("register")}
            className={`pb-3 text-sm font-bold ${mode === "register" ? "border-b-2 border-coral text-ink" : "text-muted"}`}
          >
            สมัครสมาชิก
          </button>
        </div>
        <h2 className="font-display text-3xl font-bold">
          {mode === "login" ? "ยินดีต้อนรับกลับ" : "สร้างบัญชีใหม่"}
        </h2>
        <p className="mt-2 text-sm text-muted">
          {mode === "login"
            ? "เข้าสู่ระบบเพื่อจัดการการจองของคุณ"
            : "เริ่มต้นใช้งานระบบจองห้องเรียน"}
        </p>
        {mode === "register" && (
          <label className="field mt-6">
            ชื่อผู้ใช้
            <input
              className="input"
              value={form.username}
              onChange={(event) =>
                setForm({ ...form, username: event.target.value })
              }
              required
            />
          </label>
        )}
        <label className="field mt-5">
          อีเมล
          <input
            className="input"
            type="email"
            value={form.email}
            onChange={(event) =>
              setForm({ ...form, email: event.target.value })
            }
            required
          />
        </label>
        <label className="field mt-5">
          รหัสผ่าน
          <input
            className="input"
            type="password"
            minLength={6}
            value={form.password}
            onChange={(event) =>
              setForm({ ...form, password: event.target.value })
            }
            required
          />
        </label>
        <button
          className="button mt-7 w-full bg-coral text-white"
          disabled={busy}
        >
          {busy
            ? "กำลังดำเนินการ..."
            : mode === "login"
              ? "เข้าสู่ระบบ"
              : "สร้างบัญชี"}
          <ArrowRight size={17} />
        </button>
      </form>
    </section>
  );
}

function RoomCard({ room, onSelect }) {
  const available = room.status === "available";
  return (
    <article className="room-card group">
      <div className="mb-7 flex items-start justify-between">
        <div className="flex h-11 w-11 items-center justify-center bg-paper text-fern">
          <DoorOpen size={22} />
        </div>
        <span
          className={`text-[11px] font-bold uppercase tracking-widest ${available ? "text-fern" : "text-coral"}`}
        >
          {available ? "พร้อมใช้งาน" : "ปิดปรับปรุง"}
        </span>
      </div>
      <h3 className="font-display text-2xl font-bold">{room.roomName}</h3>
      <p className="mt-2 text-sm text-muted">
        {room.building} · รองรับ {room.capacity} คน
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {(room.equipment || []).map((item) => (
          <span key={item} className="bg-paper px-2 py-1 text-xs text-muted">
            {item}
          </span>
        ))}
      </div>
      <button onClick={() => onSelect(room)} className="button mt-6 w-full border border-line bg-white py-2 text-fern">ดูรายละเอียด <ChevronRight size={16} /></button>
    </article>
  );
}

function BookingForm({ rooms, token, refreshBookings, setNotice, selectedRoom }) {
  const availableRooms = rooms.filter((room) => room.status === "available");
  const [form, setForm] = useState({
    room: availableRooms[0]?._id || "",
    date: "",
    startTime: "",
    endTime: "",
    purpose: "",
  });
  const [busy, setBusy] = useState(false);
  useEffect(() => {
    if (!form.room && availableRooms[0])
      setForm((current) => ({ ...current, room: availableRooms[0]._id }));
  }, [rooms]);
  useEffect(() => { if (selectedRoom) setForm((current) => ({ ...current, room: selectedRoom })); }, [selectedRoom]);
  const update = (event) =>
    setForm({ ...form, [event.target.name]: event.target.value });
  const submit = async (event) => {
    event.preventDefault();
    setBusy(true);
    try {
      await request(
        "/bookings",
        { method: "POST", body: JSON.stringify(form) },
        token,
      );
      setNotice({ type: "success", text: "ส่งคำขอจองแล้ว" });
      setForm({ ...form, date: "", startTime: "", endTime: "", purpose: "" });
      await refreshBookings();
    } catch (error) {
      setNotice({ type: "error", text: error.message });
    } finally {
      setBusy(false);
    }
  };
  return (
    <form id="booking-form" className="panel" onSubmit={submit}>
      <p className="eyebrow">RESERVE A ROOM</p>
      <h2 className="font-display text-3xl font-bold">จองห้องเรียน</h2>
      <label className="field mt-6">
        ห้อง
        <select
          className="input"
          name="room"
          value={form.room}
          onChange={update}
          required
        >
          {availableRooms.map((room) => (
            <option key={room._id} value={room._id}>
              {room.roomName} - {room.building}
            </option>
          ))}
        </select>
      </label>
      <label className="field mt-5">
        วันที่
        <input
          className="input"
          type="date"
          name="date"
          min={new Date().toISOString().slice(0, 10)}
          value={form.date}
          onChange={update}
          required
        />
      </label>
      <div className="mt-5 grid grid-cols-2 gap-3">
        <label className="field">
          เริ่ม
          <input
            className="input"
            type="time"
            name="startTime"
            value={form.startTime}
            onChange={update}
            required
          />
        </label>
        <label className="field">
          สิ้นสุด
          <input
            className="input"
            type="time"
            name="endTime"
            value={form.endTime}
            onChange={update}
            required
          />
        </label>
      </div>
      <label className="field mt-5">
        วัตถุประสงค์
        <textarea
          className="input"
          rows="3"
          name="purpose"
          value={form.purpose}
          onChange={update}
          placeholder="เช่น ประชุมกลุ่มวิชา"
        />
      </label>
      <button
        className="button mt-6 w-full bg-coral text-white"
        disabled={busy || !availableRooms.length}
      >
        {busy ? "กำลังส่ง..." : "ส่งคำขอจอง"}
        <CalendarDays size={17} />
      </button>
    </form>
  );
}

function BookingCalendar({ bookings }) {
  const [cursor, setCursor] = useState(() => new Date());
  const year = cursor.getFullYear();
  const month = cursor.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const bookingDates = new Map(bookings.filter((booking) => booking.status !== "cancelled").map((booking) => [new Date(booking.date).toISOString().slice(0, 10), booking]));
  const today = new Date().toISOString().slice(0, 10);
  return <section className="panel mt-8"><div className="flex items-center justify-between"><div><p className="eyebrow">BOOKING CALENDAR</p><h3 className="font-display text-2xl font-bold">ปฏิทินการจอง</h3></div><div className="flex gap-2"><button onClick={() => setCursor(new Date(year, month - 1, 1))} className="button border border-line bg-white p-2" aria-label="เดือนก่อนหน้า">‹</button><button onClick={() => setCursor(new Date(year, month + 1, 1))} className="button border border-line bg-white p-2" aria-label="เดือนถัดไป">›</button></div></div><p className="mt-4 text-sm font-bold text-fern">{cursor.toLocaleDateString("th-TH", { month: "long", year: "numeric" })}</p><div className="mt-4 grid grid-cols-7 gap-1 text-center text-[11px] font-bold text-muted">{["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส"].map((day) => <span key={day} className="py-2">{day}</span>)}{Array.from({ length: firstDay }, (_, index) => <span key={`blank-${index}`} />)}{Array.from({ length: daysInMonth }, (_, index) => { const day = index + 1; const key = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`; const booking = bookingDates.get(key); return <div key={key} className={`relative mx-auto flex h-9 w-9 items-center justify-center rounded-full ${key === today ? "bg-ink text-white" : booking ? "bg-coral text-ink" : ""}`} title={booking ? `${booking.room?.roomName || "ห้องเรียน"} ${booking.startTime}` : ""}>{day}{booking && <i className="absolute bottom-1 h-1 w-1 rounded-full bg-fern" />}</div>; })}</div><p className="mt-5 flex items-center gap-2 text-xs text-muted"><span className="h-2.5 w-2.5 rounded-full bg-coral" /> วันที่มีรายการจอง</p></section>;
}

function RoomDetail({ room, onClose, onBook }) {
  if (!room) return null;
  const available = room.status === "available";
  return <div className="fixed inset-0 z-50 flex items-end bg-ink/45 p-4 backdrop-blur-sm sm:items-center sm:justify-center" role="dialog" aria-modal="true"><div className="modal-enter w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl sm:p-8"><div className="flex items-start justify-between"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-paper text-fern"><DoorOpen size={24} /></div><button onClick={onClose} className="button border border-line bg-white p-2" aria-label="ปิดรายละเอียด"><X size={18} /></button></div><p className="eyebrow mt-7">ROOM DETAIL</p><h2 className="font-display text-4xl font-bold">{room.roomName}</h2><p className="mt-2 text-muted">{room.building} · รองรับ {room.capacity} คน</p><div className="mt-6 rounded-2xl bg-paper p-5"><p className="text-xs font-bold uppercase tracking-wider text-muted">อุปกรณ์ภายในห้อง</p><div className="mt-3 flex flex-wrap gap-2">{(room.equipment || []).length ? room.equipment.map((item) => <span key={item} className="rounded-full bg-white px-3 py-1.5 text-sm text-ink shadow-sm">{item}</span>) : <span className="text-sm text-muted">ไม่ระบุอุปกรณ์</span>}</div></div><div className="mt-6 flex items-center justify-between"><span className={`rounded-full px-3 py-1.5 text-xs font-bold ${available ? "bg-coral/20 text-fern" : "bg-ink/10 text-muted"}`}>{available ? "พร้อมใช้งาน" : "ปิดปรับปรุง"}</span>{available && <button onClick={() => { onBook(room._id); onClose(); }} className="button rounded-full bg-coral text-ink">จองห้องนี้ <ArrowRight size={16} /></button>}</div></div></div>;
}

function MyBookings({ bookings, onCancel }) {
  return (
    <div className="space-y-3">
      {bookings.length ? (
        bookings.map((booking) => (
          <article
            className="flex justify-between gap-4 border-l-4 border-fern bg-cream p-4"
            key={booking._id}
          >
            <div>
              <h3 className="font-display text-lg font-bold">
                {booking.room?.roomName || "ห้องเรียน"}
              </h3>
              <p className="mt-1 text-sm text-muted">
                {new Date(booking.date).toLocaleDateString("th-TH")} ·{" "}
                {booking.startTime} - {booking.endTime}
              </p>
              <p className="mt-1 text-sm text-muted">
                {booking.purpose || "ไม่ระบุวัตถุประสงค์"}
              </p>
            </div>
            <div className="text-right">
              <span className="text-xs font-bold uppercase tracking-wider text-fern">
                {booking.status}
              </span>
              {["pending", "approved"].includes(booking.status) && (
                <button
                  onClick={() => onCancel(booking._id)}
                  className="mt-3 block text-xs font-bold text-coral hover:underline"
                >
                  ยกเลิก
                </button>
              )}
            </div>
          </article>
        ))
      ) : (
        <div className="border border-dashed border-line p-8 text-center text-sm text-muted">
          ยังไม่มีรายการจอง
        </div>
      )}
    </div>
  );
}

export function App() {
  const [token, setToken] = useState(localStorage.getItem("bookingToken"));
  const [user, setUser] = useState(initialUser);
  const [rooms, setRooms] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [notice, setNotice] = useState(null);
  const [loadingRooms, setLoadingRooms] = useState(true);
  const [showAuth, setShowAuth] = useState(false);
  const [landingPage, setLandingPage] = useState(() => {
    const page = window.location.hash.slice(1);
    return ["home", "about", "service", "contact"].includes(page) ? page : "home";
  });

  const loadRooms = async () => {
    setLoadingRooms(true);
    try {
      setRooms(await request("/rooms"));
    } catch (error) {
      setNotice({ type: "error", text: error.message });
    } finally {
      setLoadingRooms(false);
    }
  };
  const loadBookings = async () => {
    if (!token) return;
    try {
      setBookings(
        await request(
          user?.role === "admin" ? "/bookings" : "/bookings/my",
          {},
          token,
        ),
      );
    } catch (error) {
      setNotice({ type: "error", text: error.message });
    }
  };
  useEffect(() => {
    loadRooms();
  }, []);
  useEffect(() => {
    loadBookings();
  }, [token, user?.role]);
  useEffect(() => {
    const syncLandingPage = () => {
      const page = window.location.hash.slice(1);
      setLandingPage(["home", "about", "service", "contact"].includes(page) ? page : "home");
    };
    window.addEventListener("popstate", syncLandingPage);
    return () => window.removeEventListener("popstate", syncLandingPage);
  }, []);
  const navigateLanding = (page) => {
    window.history.pushState(null, "", `#${page}`);
    setLandingPage(page);
  };
  const authenticated = (data) => {
    setToken(data.token);
    setUser(data.user);
  };
  const logout = () => {
    localStorage.clear();
    setToken(null);
    setUser(null);
    setBookings([]);
    setShowAuth(false);
  };
  const cancelBooking = async (id) => {
    try {
      await request(`/bookings/${id}`, { method: "DELETE" }, token);
      setNotice({ type: "success", text: "ยกเลิกการจองแล้ว" });
      await loadBookings();
    } catch (error) {
      setNotice({ type: "error", text: error.message });
    }
  };

  return (
    <div className="app-shell min-h-screen">
      <header className={`mx-auto max-w-7xl items-end justify-between border-b border-line/70 px-5 py-6 sm:px-8 ${!token && !showAuth ? "hidden" : "flex"}`}>
        <div>
          <p className="eyebrow">CAMPUS OPERATIONS</p>
          <h1 className="font-display text-2xl font-bold sm:text-4xl">
            Classroom Booking
          </h1>
        </div>
        {!user && (
          <nav className="hidden items-center gap-2 text-sm font-bold text-ink md:flex">
            <button onClick={() => { setShowAuth(false); navigateLanding("home"); }} className="rounded-lg bg-coral px-5 py-2 text-ink">Home</button>
            <button onClick={() => { setShowAuth(false); navigateLanding("about"); }} className="rounded-lg px-4 py-2 transition hover:bg-white/50">About Us</button>
            <button onClick={() => { setShowAuth(false); navigateLanding("service"); }} className="rounded-lg px-4 py-2 transition hover:bg-white/50">Service</button>
            <button onClick={() => { setShowAuth(false); navigateLanding("contact"); }} className="rounded-lg px-4 py-2 transition hover:bg-white/50">Contact</button>
          </nav>
        )}
        {user && (
          <div className="flex items-center gap-4 text-sm text-muted">
            <span>
              สวัสดี, <strong className="text-ink">{user.username}</strong>
            </span>
            <button
              aria-label="ออกจากระบบ"
              title="ออกจากระบบ"
              onClick={logout}
              className="button border border-line bg-transparent p-2 text-ink"
            >
              <LogOut size={16} />
            </button>
          </div>
        )}
      </header>
      <main id="home" className="mx-auto max-w-7xl px-5 py-8 sm:px-8 sm:py-12">
        {!token && !showAuth && <MarketingPage page={landingPage} onNavigate={navigateLanding} onLogin={() => setShowAuth(true)} />}
        {!token && showAuth && <AuthPanel onAuthenticated={authenticated} setNotice={setNotice} />}
        <section
          className={`hero-panel mt-10 p-7 text-white sm:p-12 ${!token ? "hidden" : ""}`}
        >
          <div className="flex items-center justify-between gap-8">
            <div>
              <p className="eyebrow text-sun">FIND YOUR SPACE</p>
              <h2 className="font-display text-5xl font-bold leading-[.95] sm:text-8xl">
                ห้องที่พร้อม
                <br />
                สำหรับคุณ
              </h2>
              <p className="mt-6 max-w-md leading-7 text-white/75">
                ค้นหาห้องเรียนตามอาคาร ความจุ และอุปกรณ์
                แล้วจองเวลาที่เหมาะกับทีมของคุณ
              </p>
            </div>
            <div className="hidden font-display text-right text-sun sm:block">
              <span className="text-xl">ROOM</span>
              <strong className="block text-[11rem] leading-[.7]">01</strong>
            </div>
          </div>
        </section>
        <section className="mt-14">
          <div className="mb-5 flex items-end justify-between">
            <div>
              <p className="eyebrow">AVAILABLE SPACES</p>
              <h2 className="font-display text-4xl font-bold">
                ห้องเรียนทั้งหมด
              </h2>
            </div>
            <button
              onClick={loadRooms}
              className="button border border-line bg-transparent p-2 text-ink"
              title="รีเฟรชห้องเรียน"
              aria-label="รีเฟรชห้องเรียน"
            >
              <RefreshCw
                size={17}
                className={loadingRooms ? "animate-spin" : ""}
              />
            </button>
          </div>
          {loadingRooms ? (
            <p className="text-sm text-muted">กำลังโหลดห้องเรียน...</p>
          ) : rooms.length ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {rooms.map((room) => (
                <RoomCard room={room} key={room._id} />
              ))}
            </div>
          ) : (
            <p className="text-sm text-muted">ยังไม่มีข้อมูลห้องเรียน</p>
          )}
        </section>
        {token && user?.role !== "admin" && (
          <section className="mt-16 grid gap-8 lg:grid-cols-[minmax(280px,390px)_1fr]">
            <BookingForm
              rooms={rooms}
              token={token}
              refreshBookings={loadBookings}
              setNotice={setNotice}
            />
            <div>
              <div className="mb-5">
                <p className="eyebrow">YOUR SCHEDULE</p>
                <h2 className="font-display text-4xl font-bold">
                  รายการที่ฉันจอง
                </h2>
              </div>
              <MyBookings bookings={bookings} onCancel={cancelBooking} />
            </div>
          </section>
        )}{" "}
        {token && user?.role === "admin" && (
          <AdminDashboard
            rooms={rooms}
            bookings={bookings}
            token={token}
            refreshRooms={loadRooms}
            refreshBookings={loadBookings}
            setNotice={setNotice}
          />
        )}
        {notice && (
          <div
            className={`fixed bottom-5 right-5 flex max-w-sm items-center gap-3 rounded px-4 py-3 text-sm font-bold text-white shadow-2xl ${notice.type === "success" ? "bg-fern" : "bg-coral"}`}
          >
            <Check size={17} />
            {notice.text}
            <button
              onClick={() => setNotice(null)}
              className="ml-2 text-white/70"
            >
              ×
            </button>
          </div>
        )}
      </main>
    </div>
  );
}

function AdminDashboard({
  rooms,
  bookings,
  token,
  refreshRooms,
  refreshBookings,
  setNotice,
}) {
  const emptyRoom = {
    roomName: "",
    building: "",
    capacity: "",
    equipment: "",
    status: "available",
  };
  const [form, setForm] = useState(emptyRoom);
  const [editingId, setEditingId] = useState(null);
  const [busy, setBusy] = useState(false);
  const pending = bookings.filter(
    (booking) => booking.status === "pending",
  ).length;
  const reset = () => {
    setForm(emptyRoom);
    setEditingId(null);
  };
  const edit = (room) => {
    setEditingId(room._id);
    setForm({
      roomName: room.roomName,
      building: room.building,
      capacity: room.capacity,
      equipment: (room.equipment || []).join(", "),
      status: room.status,
    });
  };
  const save = async (event) => {
    event.preventDefault();
    setBusy(true);
    const body = {
      ...form,
      capacity: Number(form.capacity),
      equipment: form.equipment
        .split(",")
        .map((value) => value.trim())
        .filter(Boolean),
    };
    try {
      await request(
        editingId ? `/rooms/${editingId}` : "/rooms",
        { method: editingId ? "PUT" : "POST", body: JSON.stringify(body) },
        token,
      );
      setNotice({
        type: "success",
        text: editingId ? "อัปเดตห้องแล้ว" : "เพิ่มห้องแล้ว",
      });
      reset();
      await refreshRooms();
    } catch (error) {
      setNotice({ type: "error", text: error.message });
    } finally {
      setBusy(false);
    }
  };
  const remove = async (id) => {
    if (!window.confirm("ต้องการลบห้องนี้หรือไม่?")) return;
    try {
      await request(`/rooms/${id}`, { method: "DELETE" }, token);
      setNotice({ type: "success", text: "ลบห้องแล้ว" });
      await refreshRooms();
    } catch (error) {
      setNotice({ type: "error", text: error.message });
    }
  };
  const decide = async (id, status) => {
    try {
      await request(
        `/bookings/${id}/status`,
        { method: "PUT", body: JSON.stringify({ status }) },
        token,
      );
      setNotice({
        type: "success",
        text: status === "approved" ? "อนุมัติการจองแล้ว" : "ปฏิเสธการจองแล้ว",
      });
      await refreshBookings();
    } catch (error) {
      setNotice({ type: "error", text: error.message });
    }
  };
  return (
    <section className="mt-16 border-t border-line pt-12">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="eyebrow">ADMIN CONSOLE</p>
          <h2 className="font-display text-4xl font-bold">แดชบอร์ดผู้ดูแล</h2>
          <p className="mt-2 text-sm text-muted">จัดการห้องเรียนและคำขอจอง</p>
        </div>
        <button
          onClick={() => {
            refreshRooms();
            refreshBookings();
          }}
          className="button border border-line bg-transparent"
        >
          <RefreshCw size={16} />
          รีเฟรช
        </button>
      </div>
      <div className="mb-8 grid gap-4 sm:grid-cols-3">
        <div className="panel">
          <span className="text-sm text-muted">ห้องทั้งหมด</span>
          <strong className="mt-2 block font-display text-4xl">
            {rooms.length}
          </strong>
        </div>
        <div className="panel border-t-4 border-sun">
          <span className="text-sm text-muted">รออนุมัติ</span>
          <strong className="mt-2 block font-display text-4xl">
            {pending}
          </strong>
        </div>
        <div className="panel border-t-4 border-fern">
          <span className="text-sm text-muted">อนุมัติแล้ว</span>
          <strong className="mt-2 block font-display text-4xl">
            {bookings.filter((booking) => booking.status === "approved").length}
          </strong>
        </div>
      </div>
      <div className="grid gap-8 xl:grid-cols-[360px_1fr]">
        <form className="panel h-fit" onSubmit={save}>
          <div className="flex justify-between">
            <div>
              <p className="eyebrow">ROOM MANAGEMENT</p>
              <h3 className="font-display text-2xl font-bold">
                {editingId ? "แก้ไขห้อง" : "เพิ่มห้อง"}
              </h3>
            </div>
            {editingId && (
              <button type="button" onClick={reset}>
                <X size={19} />
              </button>
            )}
          </div>
          <label className="field mt-5">
            ชื่อห้อง
            <input
              className="input"
              value={form.roomName}
              onChange={(event) =>
                setForm({ ...form, roomName: event.target.value })
              }
              required
            />
          </label>
          <label className="field mt-4">
            อาคาร
            <input
              className="input"
              value={form.building}
              onChange={(event) =>
                setForm({ ...form, building: event.target.value })
              }
              required
            />
          </label>
          <label className="field mt-4">
            ความจุ
            <input
              className="input"
              type="number"
              min="1"
              value={form.capacity}
              onChange={(event) =>
                setForm({ ...form, capacity: event.target.value })
              }
              required
            />
          </label>
          <label className="field mt-4">
            อุปกรณ์
            <input
              className="input"
              value={form.equipment}
              onChange={(event) =>
                setForm({ ...form, equipment: event.target.value })
              }
              placeholder="โปรเจคเตอร์, Wi-Fi"
            />
          </label>
          <label className="field mt-4">
            สถานะ
            <select
              className="input"
              value={form.status}
              onChange={(event) =>
                setForm({ ...form, status: event.target.value })
              }
            >
              <option value="available">พร้อมใช้งาน</option>
              <option value="maintenance">ปิดปรับปรุง</option>
            </select>
          </label>
          <button
            className="button mt-6 w-full bg-coral text-white"
            disabled={busy}
          >
            {editingId ? (
              <>
                <Save size={16} />
                บันทึก
              </>
            ) : (
              <>
                <Plus size={16} />
                เพิ่มห้อง
              </>
            )}
          </button>
        </form>
        <div>
          <p className="eyebrow">ROOM LIST</p>
          <h3 className="mb-4 font-display text-2xl font-bold">
            ห้องเรียนทั้งหมด
          </h3>
          <div className="overflow-x-auto border border-line">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-cream text-xs uppercase text-muted">
                <tr>
                  <th className="px-4 py-3">ห้อง</th>
                  <th className="px-4 py-3">ความจุ</th>
                  <th className="px-4 py-3">สถานะ</th>
                  <th className="px-4 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {rooms.map((room) => (
                  <tr key={room._id} className="border-t border-line">
                    <td className="px-4 py-3 font-bold">
                      {room.roomName}
                      <span className="block text-xs font-normal text-muted">
                        {room.building}
                      </span>
                    </td>
                    <td className="px-4 py-3">{room.capacity} คน</td>
                    <td className="px-4 py-3">
                      {room.status === "available" ? "พร้อมใช้" : "ปรับปรุง"}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex justify-end gap-2">
                        <button
                          type="button"
                          onClick={() => edit(room)}
                          className="button border border-line bg-white p-2"
                        >
                          <Pencil size={15} />
                        </button>
                        <button
                          type="button"
                          onClick={() => remove(room._id)}
                          className="button border border-line bg-white p-2 text-coral"
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <p className="eyebrow">BOOKING REQUESTS</p>
        <h3 className="mb-4 font-display text-2xl font-bold">คำขอจองห้อง</h3>
        <div className="overflow-x-auto border border-line">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-cream text-xs uppercase text-muted">
              <tr>
                <th className="px-4 py-3">ผู้จอง</th>
                <th className="px-4 py-3">ห้อง / เวลา</th>
                <th className="px-4 py-3">สถานะ</th>
                <th className="px-4 py-3 text-right">ดำเนินการ</th>
              </tr>
            </thead>
            <tbody>
              {bookings.length ? (
                bookings.map((booking) => (
                  <tr key={booking._id} className="border-t border-line">
                    <td className="px-4 py-3 font-bold">
                      {booking.user?.username}
                      <span className="block text-xs font-normal text-muted">
                        {booking.user?.email}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <strong>{booking.room?.roomName}</strong>
                      <span className="block text-xs text-muted">
                        {new Date(booking.date).toLocaleDateString("th-TH")} ·{" "}
                        {booking.startTime}–{booking.endTime}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      {booking.status === "pending"
                        ? "รออนุมัติ"
                        : booking.status === "approved"
                          ? "อนุมัติแล้ว"
                          : booking.status === "rejected"
                            ? "ปฏิเสธ"
                            : "ยกเลิก"}
                    </td>
                    <td className="px-4 py-3">
                      {booking.status === "pending" && (
                        <div className="flex justify-end gap-2">
                          <button
                            onClick={() => decide(booking._id, "approved")}
                            className="button bg-fern px-3 py-2 text-white"
                          >
                            <Check size={15} />
                            อนุมัติ
                          </button>
                          <button
                            onClick={() => decide(booking._id, "rejected")}
                            className="button border border-coral px-3 py-2 text-coral"
                          >
                            <X size={15} />
                            ปฏิเสธ
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="px-4 py-8 text-center text-muted">
                    ยังไม่มีคำขอจอง
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
