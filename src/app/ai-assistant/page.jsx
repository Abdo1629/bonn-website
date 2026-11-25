"use client";

import { useMemo, useState } from "react";
import {
  Activity, ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, BadgeCheck,
  BarChart3, Beaker, Bot, Check, ChevronDown, ChevronRight, CircleHelp,
  ClipboardList, Clock3, FileCheck2, FlaskConical, Globe2, Layers3, Leaf,
  Menu, MessageCircle, Package, Plus, Search, Send, Settings2, ShieldCheck,
  Sparkles, Sprout, UploadCloud, Users, WandSparkles, X
} from "lucide-react";

const copy = {
  en: {
    eyebrow: "BONN INTELLIGENCE", title: "A better way to discover Bonn.",
    subtitle: "A guided product discovery experience, powered by verified product knowledge.",
    start: "Start product discovery", explore: "Explore the experience",
    assistant: "AI Assistant", overview: "Overview", knowledge: "Product knowledge",
    conversations: "Conversations", insights: "Insights", settings: "Workspace settings",
    workspace: "WORKSPACE", online: "Preview environment", model: "Gemini 3.5 Flash-Lite",
    welcome: "Hello! I'm Bonn AI.", welcomeBody: "I can help you explore product categories, understand verified product information, and find the right place to start.",
    choose: "What would you like help with?", skin: "Skin care", hair: "Hair care",
    body: "Body care", wellness: "Health & wellness", business: "Manufacturing services",
    profileTitle: "Let's make this personal.", profileBody: "A few details help us guide your product discovery. You can skip anything you're not comfortable sharing.",
    profileStep: "YOUR DISCOVERY PROFILE", concern: "What are you looking for?",
    skinType: "Skin type", hairType: "Hair type", preferences: "Preferences",
    sensitivity: "Any known ingredient sensitivities?", optional: "Optional",
    continue: "Continue to Bonn AI", back: "Back", skip: "Skip for now",
    chatPlaceholder: "Ask about a product, ingredient or category…", send: "Send",
    demo: "Prototype preview", demoNote: "Product suggestions shown here are illustrative until Bonn's verified product catalogue is connected.",
    productMatch: "PRODUCT DISCOVERY", matchTitle: "Your shortlist will appear here",
    matchBody: "Once the approved Bonn catalogue is connected, recommendations will include product details, ingredients, usage guidance and source references.",
    compare: "Compare products", ingredient: "Ingredient guide", routine: "Build a routine",
    catalogTitle: "Product knowledge", catalogSub: "A structured home for Bonn's approved product information.",
    totalProducts: "Products in catalogue", verified: "Verified records", pending: "Pending review",
    categories: "Categories", dataReadiness: "Data readiness", noDb: "Database not connected yet",
    noDbBody: "This is the interface and workflow preview. The next phase will connect the product database, images, documents and review states.",
    upload: "Prepare catalogue import", addProduct: "Add product", searchProducts: "Search products…",
    name: "Product name", category: "Category", status: "Review status", updated: "Last updated",
    review: "Needs review", approved: "Approved", draft: "Draft",
    insightsTitle: "Customer insights", insightsSub: "Understand what customers ask for and where discovery gets stuck.",
    questions: "Top questions", interests: "Category interest", unanswered: "Unanswered searches",
    inquiries: "Business inquiries", trend: "Discovery activity", last30: "Last 30 days",
    conversationsTitle: "Conversation workspace", conversationsSub: "A preview of the support and handoff workflow.",
    all: "All", consumer: "Consumer", b2b: "Business",
    response: "Bonn AI is ready to help.", unavailable: "I don't have Bonn's verified product catalogue connected yet, so I won't guess product names or suitability. I can still help you clarify what information to look for. Once the approved catalogue is connected, I'll match your needs against its verified product records.",
    prompt: "I'm looking for a serum for dry hair.", profileSaved: "Your discovery preferences are ready.",
    chooseType: "Choose one", normal: "Normal", dry: "Dry", oily: "Oily", combination: "Combination", sensitive: "Sensitive",
    straight: "Straight", wavy: "Wavy", curly: "Curly", coily: "Coily",
    hydration: "Hydration", frizz: "Frizz control", daily: "Daily care", scalp: "Scalp care",
    noClaims: "Bonn AI shares approved product information. It does not diagnose or replace professional medical advice.",
    brandLine: "Saudi roots. Global standards.", country: "RIYADH, SAUDI ARABIA",
    b2bTitle: "Building a brand of your own?", b2bBody: "Explore Bonn's manufacturing capabilities and start a structured business inquiry.",
    inquiry: "Start a business inquiry", overviewTitle: "Your product discovery, reimagined.",
    overviewBody: "One intelligent experience connecting customer needs with Bonn's verified product knowledge.",
    feature1: "Guided discovery", feature1b: "A short profile helps shape a more relevant conversation.",
    feature2: "Evidence-led answers", feature2b: "Product details are grounded in approved records, not model guesses.",
    feature3: "Visual conversations", feature3b: "Product cards, comparisons and clear next steps — not walls of text.",
    feature4: "One factory platform", feature4b: "Consumer discovery and B2B manufacturing inquiries in one system.",
  },
  ar: {
    eyebrow: "ذكاء بون", title: "اكتشف منتجات بون بطريقة أذكى.",
    subtitle: "تجربة تفاعلية لاكتشاف المنتجات، مبنية على معلومات موثوقة ومعتمدة.",
    start: "ابدأ اكتشاف المنتجات", explore: "استكشف التجربة",
    assistant: "مساعد الذكاء الاصطناعي", overview: "نظرة عامة", knowledge: "قاعدة معرفة المنتجات",
    conversations: "المحادثات", insights: "رؤى العملاء", settings: "إعدادات مساحة العمل",
    workspace: "مساحة العمل", online: "بيئة تجريبية", model: "Gemini 3.5 Flash-Lite",
    welcome: "أهلًا بك! أنا Bonn AI.", welcomeBody: "أقدر أساعدك تستكشف فئات المنتجات، وتفهم المعلومات المعتمدة، وتحدد أنسب نقطة تبدأ منها.",
    choose: "تحب أساعدك في إيه؟", skin: "العناية بالبشرة", hair: "العناية بالشعر",
    body: "العناية بالجسم", wellness: "الصحة والعافية", business: "خدمات التصنيع",
    profileTitle: "خلينا نحدد احتياجك.", profileBody: "شوية معلومات بسيطة هتساعدنا نوجّهك بشكل أفضل. تقدر تتخطى أي سؤال مش حابب تجاوب عليه.",
    profileStep: "ملف اكتشاف المنتجات", concern: "إيه اللي بتدور عليه؟",
    skinType: "نوع البشرة", hairType: "نوع الشعر", preferences: "التفضيلات",
    sensitivity: "هل عندك حساسية معروفة من مكونات معينة؟", optional: "اختياري",
    continue: "ابدأ المحادثة", back: "رجوع", skip: "تخطي حاليًا",
    chatPlaceholder: "اسأل عن منتج أو مكون أو فئة…", send: "إرسال",
    demo: "نسخة تجريبية", demoNote: "الترشيحات المعروضة توضيحية فقط لحين ربط كتالوج بون المعتمد.",
    productMatch: "اكتشاف المنتجات", matchTitle: "اختياراتك هتظهر هنا",
    matchBody: "بعد ربط كتالوج بون المعتمد، هتظهر الترشيحات مع تفاصيل المنتج والمكونات وطريقة الاستخدام ومصادر المعلومات.",
    compare: "قارن المنتجات", ingredient: "دليل المكونات", routine: "خطوات العناية",
    catalogTitle: "قاعدة معرفة المنتجات", catalogSub: "مكان موحد ومنظم لمعلومات منتجات بون المعتمدة.",
    totalProducts: "منتجات الكتالوج", verified: "بيانات معتمدة", pending: "بانتظار المراجعة",
    categories: "الفئات", dataReadiness: "جاهزية البيانات", noDb: "قاعدة البيانات لم يتم ربطها بعد",
    noDbBody: "دي معاينة للواجهات وسير العمل. المرحلة التالية هتربط قاعدة بيانات المنتجات والصور والمستندات وحالات المراجعة.",
    upload: "تجهيز استيراد الكتالوج", addProduct: "إضافة منتج", searchProducts: "ابحث عن منتج…",
    name: "اسم المنتج", category: "الفئة", status: "حالة المراجعة", updated: "آخر تحديث",
    review: "يحتاج مراجعة", approved: "معتمد", draft: "مسودة",
    insightsTitle: "رؤى العملاء", insightsSub: "افهم أسئلة العملاء والمواضع اللي بتتعطل فيها رحلة اكتشاف المنتجات.",
    questions: "أكثر الأسئلة", interests: "اهتمام الفئات", unanswered: "عمليات بحث بلا نتائج",
    inquiries: "استفسارات الأعمال", trend: "نشاط الاكتشاف", last30: "آخر 30 يوم",
    conversationsTitle: "مساحة المحادثات", conversationsSub: "معاينة لإدارة المحادثات وتحويل الاستفسارات لفريق العمل.",
    all: "الكل", consumer: "مستهلك", b2b: "أعمال",
    response: "Bonn AI جاهز للمساعدة.", unavailable: "كتالوج منتجات بون المعتمد مش مربوط عندي لسه، وعشان كده مش هخمن أسماء منتجات أو مدى مناسبتها. أقدر أساعدك تحدد المعلومات اللي محتاج تدور عليها. بعد ربط الكتالوج، هقدر أطابق احتياجك مع بيانات المنتجات المعتمدة.",
    prompt: "بدور على سيروم للشعر الجاف.", profileSaved: "تم تجهيز تفضيلاتك.",
    chooseType: "اختر واحدًا", normal: "عادية", dry: "جافة", oily: "دهنية", combination: "مختلطة", sensitive: "حساسة",
    straight: "مفرود", wavy: "مموج", curly: "كيرلي", coily: "ملتف",
    hydration: "ترطيب", frizz: "تقليل الهيشان", daily: "عناية يومية", scalp: "العناية بالفروة",
    noClaims: "Bonn AI يعرض معلومات المنتجات المعتمدة، ولا يشخّص الحالات أو يحل محل استشارة المختص.",
    brandLine: "جذور سعودية. معايير عالمية.", country: "الرياض، المملكة العربية السعودية",
    b2bTitle: "بتخطط تطلق علامتك التجارية؟", b2bBody: "اكتشف إمكانيات بون في التصنيع وابدأ استفسارًا تجاريًا منظمًا.",
    inquiry: "ابدأ استفسار أعمال", overviewTitle: "تجربة جديدة لاكتشاف المنتجات.",
    overviewBody: "تجربة ذكية تربط احتياجات العملاء بقاعدة معلومات منتجات بون المعتمدة.",
    feature1: "اكتشاف موجّه", feature1b: "ملف قصير يساعد في تخصيص المحادثة.",
    feature2: "إجابات موثوقة", feature2b: "المعلومات مستندة إلى سجلات معتمدة، مش تخمينات الموديل.",
    feature3: "محادثات تفاعلية", feature3b: "بطاقات منتجات ومقارنات وخطوات واضحة بدل الكلام الطويل.",
    feature4: "منصة للمصنع كله", feature4b: "اكتشاف للمستهلك واستفسارات تصنيع B2B في نظام واحد.",
  }
};

const products = [
  { name: "Product record 001", category: "Skin care", status: "approved", id: "BN-001" },
  { name: "Product record 002", category: "Hair care", status: "review", id: "BN-002" },
  { name: "Product record 003", category: "Body care", status: "draft", id: "BN-003" },
  { name: "Product record 004", category: "Wellness", status: "review", id: "BN-004" },
];

export default function BonnAIPage() {
  const [lang, setLang] = useState("en");
  const [section, setSection] = useState("assistant");
  const [step, setStep] = useState("intro");
  const [category, setCategory] = useState("skin");
  const [skin, setSkin] = useState("combination");
  const [hair, setHair] = useState("wavy");
  const [needs, setNeeds] = useState(["hydration"]);
  const [sensitivity, setSensitivity] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const [query, setQuery] = useState("");
  const t = copy[lang];
  const rtl = lang === "ar";
  const profile = useMemo(() => ({ category, skin, hair, needs, sensitivity }), [category, skin, hair, needs, sensitivity]);

  const toggleNeed = (value) => setNeeds((current) => current.includes(value) ? current.filter((x) => x !== value) : [...current, value]);

  async function sendMessage(text = message) {
    const clean = text.trim();
    if (!clean || loading) return;
    const next = [...messages, { role: "user", text: clean }];
    setMessages(next);
    setMessage("");
    setLoading(true);
    try {
      const response = await fetch("/api/ai-assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: clean, history: next.slice(-8), profile, language: lang }),
      });
      const data = await response.json();
      setMessages((current) => [...current, { role: "assistant", text: data.reply || t.unavailable }]);
    } catch {
      setMessages((current) => [...current, { role: "assistant", text: t.unavailable }]);
    } finally {
      setLoading(false);
    }
  }

  function beginChat() {
    setStep("chat");
    setMessages([{ role: "assistant", text: t.welcomeBody + " " + t.noClaims }]);
  }

  const navItems = [
    { id: "overview", icon: Layers3, label: t.overview },
    { id: "assistant", icon: Bot, label: t.assistant },
    { id: "knowledge", icon: Package, label: t.knowledge },
    { id: "conversations", icon: MessageCircle, label: t.conversations },
    { id: "insights", icon: BarChart3, label: t.insights },
  ];

  return (
    <main dir={rtl ? "rtl" : "ltr"} className="min-h-screen bg-[#f5f8fc] text-[#102b4e]">
      <aside className={`fixed inset-y-0 z-40 w-[264px] bg-[#082c59] text-white transition-transform duration-300 ${rtl ? "right-0" : "left-0"} ${mobileNav ? "translate-x-0" : rtl ? "translate-x-full lg:translate-x-0" : "-translate-x-full lg:translate-x-0"}`}>
        <div className="flex h-full flex-col px-5 py-6">
          <a href="/" className="mb-10 flex items-center gap-3 px-2">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#0056d2] text-xl font-black tracking-tight">B</div>
            <div><div className="text-[21px] font-extrabold tracking-[.16em]">BONN</div><div className="text-[9px] tracking-[.2em] text-blue-200">MEDICAL INDUSTRY</div></div>
          </a>
          <div className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[.2em] text-blue-200/70">{t.workspace}</div>
          <nav className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return <button key={item.id} onClick={() => { setSection(item.id); setMobileNav(false); }} className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm transition ${section === item.id ? "bg-white text-[#0759bd] shadow-lg shadow-black/10" : "text-blue-100/80 hover:bg-white/10 hover:text-white"}`}>
                <Icon size={18}/><span className="font-semibold">{item.label}</span>{section === item.id && <ChevronRight className={`ms-auto ${rtl ? "rotate-180" : ""}`} size={16}/>}
              </button>;
            })}
          </nav>
          <div className="mt-auto rounded-2xl border border-white/10 bg-white/[.06] p-4">
            <div className="mb-2 flex items-center gap-2 text-xs font-semibold text-blue-100"><ShieldCheck size={15}/> {t.brandLine}</div>
            <p className="text-[10px] leading-5 text-blue-100/65">{t.country}</p>
            <div className="mt-4 flex items-center gap-2 text-[10px] text-blue-100/60"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400"/>{t.online}</div>
          </div>
        </div>
      </aside>

      <div className={`min-h-screen transition-[margin] duration-300 ${rtl ? "lg:mr-[264px]" : "lg:ml-[264px]"}`}>
        <header className="sticky top-0 z-30 flex h-[76px] items-center justify-between border-b border-[#e5ebf3] bg-white/90 px-5 backdrop-blur-xl md:px-9">
          <div className="flex items-center gap-3">
            <button onClick={() => setMobileNav(!mobileNav)} className="rounded-lg p-2 text-[#0b376a] hover:bg-blue-50 lg:hidden"><Menu size={20}/></button>
            <div><div className="text-xs font-semibold text-[#7a8da6]">BONN MEDICAL INDUSTRY <span className="mx-1">/</span> {navItems.find(n => n.id === section)?.label}</div><div className="mt-1 text-sm font-bold text-[#0b2d55]">{t.country}</div></div>
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <div className="hidden items-center gap-2 rounded-full border border-[#e4ebf4] bg-[#f8fafd] px-3 py-2 text-[11px] font-semibold text-[#55708f] sm:flex"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500"/>{t.model}</div>
            <button onClick={() => setLang(rtl ? "en" : "ar")} className="flex items-center gap-2 rounded-full border border-[#dce6f2] px-3 py-2 text-xs font-bold text-[#315477] hover:bg-blue-50"><Globe2 size={15}/>{rtl ? "EN" : "عربي"}</button>
            <div className="hidden h-9 w-9 items-center justify-center rounded-full bg-[#e8f1fc] text-xs font-extrabold text-[#0759bd] sm:flex">BM</div>
          </div>
        </header>

        <div className="mx-auto max-w-[1500px] px-4 py-6 md:px-9 md:py-9">
          {section === "assistant" && (
            <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">
              <div className="min-w-0">
                <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
                  <div><div className="mb-2 flex items-center gap-2 text-[10px] font-extrabold tracking-[.2em] text-[#2877ce]"><Sparkles size={14}/>{t.eyebrow}</div><h1 className="text-3xl font-extrabold tracking-tight text-[#0b2d55] md:text-[38px]">{t.title}</h1><p className="mt-2 max-w-2xl text-sm leading-6 text-[#71849c]">{t.subtitle}</p></div>
                  <span className="rounded-full border border-[#dce8f6] bg-white px-3 py-2 text-[10px] font-bold text-[#5d7899]">{t.demo}</span>
                </div>
                <div className="overflow-hidden rounded-[26px] border border-[#e2eaf4] bg-white shadow-[0_18px_55px_-38px_rgba(15,54,98,.28)]">
                  <div className="flex items-center justify-between border-b border-[#edf1f6] bg-white px-5 py-4 md:px-7">
                    <div className="flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#eaf3ff] text-[#0759bd]"><Bot size={21}/></div><div><div className="text-sm font-extrabold text-[#102f55]">Bonn AI <span className="ms-1 rounded bg-[#eaf5ef] px-1.5 py-1 text-[9px] font-bold text-[#248451]">PREVIEW</span></div><div className="mt-1 text-[10px] text-[#8b9bb0]">Product discovery assistant</div></div></div>
                    <div className="hidden items-center gap-2 text-[10px] text-[#8b9bb0] sm:flex"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500"/>Secure experience</div>
                  </div>
                  {step === "intro" && (
                    <div className="grid min-h-[580px] lg:grid-cols-[1.05fr_.95fr]">
                      <div className="flex flex-col justify-center px-6 py-10 md:px-10">
                        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-[20px] bg-[#edf5ff] text-[#0759bd]"><WandSparkles size={27}/></div>
                        <h2 className="max-w-lg text-3xl font-extrabold leading-tight tracking-tight text-[#0b2d55]">{t.welcome}</h2>
                        <p className="mt-3 max-w-lg text-sm leading-7 text-[#6f8299]">{t.welcomeBody}</p>
                        <div className="mt-8 text-xs font-bold text-[#284a70]">{t.choose}</div>
                        <div className="mt-4 grid grid-cols-2 gap-3">
                          {[
                            ["skin", t.skin, Sprout], ["hair", t.hair, Leaf], ["body", t.body, Activity], ["wellness", t.wellness, ShieldCheck], ["business", t.business, Layers3],
                          ].map(([id, label, Icon]) => <button key={id} onClick={() => { setCategory(id); setStep(id === "business" ? "chat" : "profile"); if (id === "business") setMessages([{role:"assistant",text:t.b2bBody}]); }} className={`group flex items-center gap-3 rounded-2xl border border-[#e5edf6] p-4 text-start transition hover:-translate-y-0.5 hover:border-[#9cc6f4] hover:bg-[#f7fbff] hover:shadow-md ${id === category ? "border-[#9cc6f4] bg-[#f7fbff]" : "bg-white"}`}><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#edf5ff] text-[#176ac4]"><Icon size={18}/></span><span className="text-xs font-bold text-[#244669]">{label}</span><ChevronRight className="ms-auto text-[#a5b5c8]" size={15}/></button>)}
                        </div>
                        <div className="mt-8 flex flex-wrap items-center gap-3"><button onClick={() => setStep("profile")} className="inline-flex items-center gap-2 rounded-xl bg-[#0759bd] px-5 py-3 text-xs font-bold text-white shadow-lg shadow-blue-900/15 transition hover:bg-[#064b9e]">{t.start}<ArrowRight size={15}/></button><span className="text-[10px] text-[#9aabba]">{t.noClaims}</span></div>
                      </div>
                      <div className="relative hidden overflow-hidden bg-[#082e5d] p-10 text-white lg:flex lg:flex-col lg:justify-between">
                        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full border border-white/10"/><div className="absolute -right-10 -top-10 h-52 w-52 rounded-full border border-white/10"/><div className="absolute bottom-[-100px] left-[-60px] h-72 w-72 rounded-full bg-[#0e5eb2]/30 blur-3xl"/>
                        <div className="relative"><div className="text-[10px] font-bold tracking-[.24em] text-blue-200">DISCOVER WITH CONFIDENCE</div><h3 className="mt-5 max-w-sm text-3xl font-bold leading-tight">{t.overviewTitle}</h3><p className="mt-4 max-w-sm text-sm leading-7 text-blue-100/70">{t.overviewBody}</p></div>
                        <div className="relative space-y-3">
                          {[[BadgeCheck,t.feature1,t.feature1b],[FileCheck2,t.feature2,t.feature2b],[MessageCircle,t.feature3,t.feature3b]].map(([Icon,title,desc])=><div key={title} className="flex gap-3 rounded-2xl border border-white/10 bg-white/[.07] p-4 backdrop-blur"><Icon className="mt-0.5 shrink-0 text-[#8dc3ff]" size={19}/><div><div className="text-xs font-bold">{title}</div><div className="mt-1 text-[10px] leading-5 text-blue-100/65">{desc}</div></div></div>)}
                        </div>
                        <div className="relative flex items-center gap-2 text-[10px] tracking-[.15em] text-blue-200/60"><Globe2 size={13}/> {t.country}</div>
                      </div>
                    </div>
                  )}
                  {step === "profile" && (
                    <div className="mx-auto max-w-2xl px-5 py-8 md:px-10">
                      <button onClick={() => setStep("intro")} className="mb-7 flex items-center gap-2 text-xs font-bold text-[#66809c] hover:text-[#0759bd]"><ArrowLeft size={15}/>{t.back}</button>
                      <div className="mb-2 text-[10px] font-extrabold tracking-[.2em] text-[#2877ce]">{t.profileStep}</div>
                      <h2 className="text-3xl font-extrabold text-[#0b2d55]">{t.profileTitle}</h2><p className="mt-2 text-sm leading-6 text-[#7a8da4]">{t.profileBody}</p>
                      <div className="mt-8 space-y-7">
                        <div><div className="mb-3 text-xs font-bold text-[#234669]">{t.skinType}</div><div className="flex flex-wrap gap-2">{["normal","dry","oily","combination","sensitive"].map(x=><button key={x} onClick={()=>setSkin(x)} className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${skin===x?"border-[#0759bd] bg-[#edf5ff] text-[#0759bd]":"border-[#e1e9f2] text-[#70839a] hover:border-[#a8c9ee]"}`}>{t[x]}</button>)}</div></div>
                        <div><div className="mb-3 text-xs font-bold text-[#234669]">{t.hairType}</div><div className="flex flex-wrap gap-2">{["straight","wavy","curly","coily"].map(x=><button key={x} onClick={()=>setHair(x)} className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${hair===x?"border-[#0759bd] bg-[#edf5ff] text-[#0759bd]":"border-[#e1e9f2] text-[#70839a] hover:border-[#a8c9ee]"}`}>{t[x]}</button>)}</div></div>
                        <div><div className="mb-3 text-xs font-bold text-[#234669]">{t.concern}</div><div className="flex flex-wrap gap-2">{["hydration","frizz","daily","scalp"].map(x=><button key={x} onClick={()=>toggleNeed(x)} className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${needs.includes(x)?"border-[#0759bd] bg-[#edf5ff] text-[#0759bd]":"border-[#e1e9f2] text-[#70839a] hover:border-[#a8c9ee]"}`}>{t[x]}</button>)}</div></div>
                        <div><div className="mb-2 flex items-center justify-between"><label className="text-xs font-bold text-[#234669]">{t.sensitivity}</label><span className="text-[10px] text-[#9aabba]">{t.optional}</span></div><input value={sensitivity} onChange={e=>setSensitivity(e.target.value)} placeholder={t.optional} className="w-full rounded-xl border border-[#e1e9f2] bg-[#fbfdff] px-4 py-3 text-sm outline-none transition placeholder:text-[#b0bdcc] focus:border-[#6ca8e8]"/></div>
                      </div>
                      <div className="mt-9 flex flex-wrap items-center gap-3"><button onClick={beginChat} className="rounded-xl bg-[#0759bd] px-6 py-3 text-xs font-bold text-white shadow-lg shadow-blue-900/15 hover:bg-[#064b9e]">{t.continue}<ArrowRight className="ms-2 inline" size={15}/></button><button onClick={beginChat} className="px-3 py-3 text-xs font-semibold text-[#8294a9]">{t.skip}</button></div>
                    </div>
                  )}
                  {step === "chat" && (
                    <div className="grid min-h-[600px] lg:grid-cols-[minmax(0,1fr)_270px]">
                      <div className="flex min-h-[600px] flex-col">
                        <div className="flex-1 space-y-5 overflow-y-auto bg-[#fbfdff] px-4 py-6 md:px-7">
                          <div className="mx-auto max-w-2xl space-y-5">
                            {messages.map((m,i)=><div key={i} className={`flex gap-3 ${m.role==="user"?"justify-end":""}`}>{m.role==="assistant"&&<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#eaf3ff] text-[#0759bd]"><Bot size={17}/></div>}<div className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-7 ${m.role==="user"?"rounded-ee-sm bg-[#0759bd] text-white":"rounded-es-sm border border-[#e7edf5] bg-white text-[#526a84] shadow-sm"}`}>{m.text}</div></div>)}
                            {loading&&<div className="flex items-center gap-3 text-xs text-[#8194aa]"><div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#eaf3ff] text-[#0759bd]"><Bot size={17}/></div><span className="animate-pulse">Bonn AI is thinking…</span></div>}
                            {messages.length===1&&<div className="ms-11 flex flex-wrap gap-2">{[t.prompt,t.compare,t.ingredient].map((x,i)=><button key={i} onClick={()=>sendMessage(x)} className="rounded-full border border-[#dce8f6] bg-white px-3 py-2 text-[10px] font-semibold text-[#52708f] hover:border-[#83b5ed] hover:text-[#0759bd]">{x}</button>)}</div>}
                          </div>
                        </div>
                        <div className="border-t border-[#edf1f6] bg-white p-4 md:p-5"><form onSubmit={e=>{e.preventDefault();sendMessage();}} className="mx-auto flex max-w-2xl items-center gap-2 rounded-2xl border border-[#dfe8f2] bg-[#fbfdff] p-2 focus-within:border-[#8bb9e9]"><input value={message} onChange={e=>setMessage(e.target.value)} placeholder={t.chatPlaceholder} className="min-w-0 flex-1 bg-transparent px-3 py-2 text-sm outline-none placeholder:text-[#a8b5c5]"/><button disabled={!message.trim()||loading} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0759bd] text-white transition hover:bg-[#064b9e] disabled:opacity-40"><Send size={16}/></button></form><div className="mx-auto mt-2 max-w-2xl text-center text-[9px] leading-5 text-[#a0adbc]">{t.noClaims}</div></div>
                      </div>
                      <aside className="border-t border-[#edf1f6] bg-white p-5 lg:border-s lg:border-t-0">
                        <div className="text-[10px] font-extrabold tracking-[.18em] text-[#2877ce]">{t.productMatch}</div><h3 className="mt-2 text-lg font-extrabold text-[#15385f]">{t.matchTitle}</h3><p className="mt-2 text-xs leading-6 text-[#8293a7]">{t.matchBody}</p>
                        <div className="mt-6 rounded-2xl border border-dashed border-[#cbd9e9] bg-[#f8fbff] p-5 text-center"><div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eaf3ff] text-[#0759bd]"><Package size={22}/></div><div className="mt-3 text-xs font-bold text-[#345575]">{t.noDb}</div><p className="mt-2 text-[10px] leading-5 text-[#91a1b3]">{t.demoNote}</p></div>
                        <div className="mt-6 space-y-2"><button onClick={()=>sendMessage(t.compare)} className="flex w-full items-center gap-2 rounded-xl border border-[#e4ebf4] px-3 py-3 text-start text-xs font-semibold text-[#426180] hover:bg-[#f7faff]"><ClipboardList size={16} className="text-[#2877ce]"/>{t.compare}<ChevronRight className="ms-auto" size={14}/></button><button onClick={()=>sendMessage(t.ingredient)} className="flex w-full items-center gap-2 rounded-xl border border-[#e4ebf4] px-3 py-3 text-start text-xs font-semibold text-[#426180] hover:bg-[#f7faff]"><FlaskConical size={16} className="text-[#2877ce]"/>{t.ingredient}<ChevronRight className="ms-auto" size={14}/></button></div>
                      </aside>
                    </div>
                  )}
                </div>
                <p className="mt-3 text-center text-[10px] text-[#9aabba]">{t.demoNote}</p>
              </div>
              <aside className="space-y-4">
                <div className="rounded-3xl bg-[#082e5d] p-6 text-white"><div className="flex items-center gap-2 text-[10px] font-bold tracking-[.18em] text-blue-200"><Sparkles size={14}/> BONN FOR BUSINESS</div><h3 className="mt-4 text-xl font-extrabold leading-snug">{t.b2bTitle}</h3><p className="mt-2 text-xs leading-6 text-blue-100/70">{t.b2bBody}</p><button onClick={()=>{setCategory("business");setStep("chat");setMessages([{role:"assistant",text:t.b2bBody}]);}} className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-xs font-bold text-[#0759bd] hover:bg-blue-50">{t.inquiry}<ArrowUpRight size={15}/></button></div>
                <div className="rounded-3xl border border-[#e2eaf4] bg-white p-5"><div className="flex items-center gap-2 text-xs font-bold text-[#25496d]"><ShieldCheck size={16} className="text-[#2478ca]"/> Trust by design</div><p className="mt-2 text-[11px] leading-6 text-[#8293a7]">Only approved product records should power suitability claims. Every recommendation will be traceable to its source after catalogue integration.</p><div className="mt-4 flex items-center gap-2 text-[10px] font-semibold text-[#31865c]"><Check size={14}/> Evidence-first architecture</div></div>
                <div className="rounded-3xl border border-[#e2eaf4] bg-white p-5"><div className="text-xs font-bold text-[#25496d]">Experience modules</div><div className="mt-4 space-y-3">{[[Beaker,t.ingredient],[ClipboardList,t.compare],[Sprout,t.routine]].map(([Icon,label])=><div key={label} className="flex items-center gap-3 text-xs text-[#6e829a]"><div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#edf5ff] text-[#2877ce]"><Icon size={16}/></div>{label}<span className="ms-auto text-[9px] text-[#9aabba]">Preview</span></div>)}</div></div>
              </aside>
            </div>
          )}

          {section === "overview" && <div><div className="mb-7"><div className="mb-2 text-[10px] font-extrabold tracking-[.2em] text-[#2877ce]">{t.eyebrow}</div><h1 className="text-3xl font-extrabold text-[#0b2d55]">{t.overviewTitle}</h1><p className="mt-2 text-sm text-[#7a8da4]">{t.overviewBody}</p></div><div className="grid gap-4 md:grid-cols-2">{[[Sparkles,t.feature1,t.feature1b],[ShieldCheck,t.feature2,t.feature2b],[MessageCircle,t.feature3,t.feature3b],[Globe2,t.feature4,t.feature4b]].map(([Icon,title,desc],i)=><div key={title} className="rounded-3xl border border-[#e2eaf4] bg-white p-7"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#edf5ff] text-[#0759bd]"><Icon size={22}/></div><h3 className="mt-5 text-lg font-extrabold text-[#16395f]">{title}</h3><p className="mt-2 text-sm leading-7 text-[#7c8fa5]">{desc}</p></div>)}</div><button onClick={()=>setSection("assistant")} className="mt-7 rounded-xl bg-[#0759bd] px-5 py-3 text-xs font-bold text-white">{t.explore}<ArrowRight className="ms-2 inline" size={15}/></button></div>}

          {section === "knowledge" && <div><div className="mb-7 flex flex-wrap items-end justify-between gap-4"><div><div className="mb-2 text-[10px] font-extrabold tracking-[.2em] text-[#2877ce]">{t.eyebrow}</div><h1 className="text-3xl font-extrabold text-[#0b2d55]">{t.catalogTitle}</h1><p className="mt-2 text-sm text-[#7a8da4]">{t.catalogSub}</p></div><button className="flex items-center gap-2 rounded-xl bg-[#0759bd] px-4 py-3 text-xs font-bold text-white"><Plus size={15}/>{t.addProduct}</button></div><div className="grid gap-4 sm:grid-cols-3">{[[Package,"250+",t.totalProducts],[BadgeCheck,"0",t.verified],[Clock3,"0",t.pending]].map(([Icon,value,label])=><div key={label} className="rounded-2xl border border-[#e2eaf4] bg-white p-5"><div className="flex items-center justify-between text-[#6d829b]"><span className="text-xs font-semibold">{label}</span><Icon size={18} className="text-[#2877ce]"/></div><div className="mt-4 text-3xl font-extrabold text-[#12365f]">{value}</div></div>)}</div><div className="mt-6 rounded-3xl border border-[#e2eaf4] bg-white p-6"><div className="flex flex-wrap items-center justify-between gap-3"><div><h3 className="font-extrabold text-[#15385f]">{t.dataReadiness}</h3><p className="mt-1 text-xs text-[#8a9aaf]">{t.noDbBody}</p></div><span className="rounded-full bg-amber-50 px-3 py-2 text-[10px] font-bold text-amber-700">{t.noDb}</span></div><div className="mt-6 grid gap-3 md:grid-cols-3">{["Product records","Images & media","Documents & sources"].map((x,i)=><div key={x} className="rounded-2xl border border-dashed border-[#d5e0ec] bg-[#fafcff] p-5"><div className="text-xs font-bold text-[#365879]">{x}</div><div className="mt-2 text-[10px] text-[#9aa9ba]">{i===0?"Structured attributes":i===1?"Optimized product assets":"Verified supporting files"}</div><div className="mt-4 h-1.5 rounded-full bg-[#e9eff6]"><div className="h-full w-0 rounded-full bg-[#2877ce]"/></div><div className="mt-2 text-[9px] text-[#9aa9ba]">Awaiting database phase</div></div>)}</div><button className="mt-6 flex items-center gap-2 rounded-xl border border-[#dce7f3] px-4 py-3 text-xs font-bold text-[#37618a]"><UploadCloud size={16}/>{t.upload}</button></div><div className="mt-6 overflow-hidden rounded-3xl border border-[#e2eaf4] bg-white"><div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#edf1f6] p-5"><h3 className="font-extrabold text-[#15385f]">Catalogue preview</h3><div className="flex items-center gap-2 rounded-xl border border-[#e4ebf4] px-3 py-2 text-xs text-[#93a2b4]"><Search size={14}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder={t.searchProducts} className="w-36 outline-none"/></div></div><div className="overflow-x-auto"><table className="w-full min-w-[620px] text-start text-xs"><thead className="bg-[#f8fafd] text-[10px] font-bold uppercase tracking-wider text-[#8b9bb0]"><tr>{[t.name,t.category,t.status,t.updated].map(x=><th key={x} className="px-5 py-4 text-start">{x}</th>)}</tr></thead><tbody>{products.filter(p=>p.name.toLowerCase().includes(query.toLowerCase())).map(p=><tr key={p.id} className="border-t border-[#f0f3f7]"><td className="px-5 py-4 font-bold text-[#345575]">{p.name}<div className="mt-1 text-[9px] font-normal text-[#9aa9ba]">{p.id}</div></td><td className="px-5 py-4 text-[#71869d]">{p.category}</td><td className="px-5 py-4"><span className={`rounded-full px-2.5 py-1 text-[9px] font-bold ${p.status==="approved"?"bg-emerald-50 text-emerald-700":p.status==="review"?"bg-amber-50 text-amber-700":"bg-slate-100 text-slate-600"}`}>{p.status==="approved"?t.approved:p.status==="review"?t.review:t.draft}</span></td><td className="px-5 py-4 text-[#9aa9ba]">—</td></tr>)}</tbody></table></div></div></div>}

          {section === "conversations" && <div><div className="mb-7"><div className="mb-2 text-[10px] font-extrabold tracking-[.2em] text-[#2877ce]">{t.eyebrow}</div><h1 className="text-3xl font-extrabold text-[#0b2d55]">{t.conversationsTitle}</h1><p className="mt-2 text-sm text-[#7a8da4]">{t.conversationsSub}</p></div><div className="rounded-3xl border border-[#e2eaf4] bg-white p-6"><div className="flex flex-wrap gap-2">{[t.all,t.consumer,t.b2b].map((x,i)=><button key={x} className={`rounded-full px-4 py-2 text-xs font-bold ${i===0?"bg-[#0759bd] text-white":"border border-[#e2eaf4] text-[#70849b]"}`}>{x}</button>)}</div><div className="mt-6 space-y-3">{["Product discovery session","Hair care information request","Private label manufacturing inquiry"].map((x,i)=><div key={x} className="flex flex-wrap items-center gap-4 rounded-2xl border border-[#edf1f6] p-4"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#edf5ff] text-[#2877ce]">{i===2?<Layers3 size={18}/>:<MessageCircle size={18}/>}</div><div className="min-w-0 flex-1"><div className="text-xs font-bold text-[#345575]">{x}</div><div className="mt-1 text-[10px] text-[#9aabba]">{i===2?"Business inquiry":"Consumer discovery"} · Preview record</div></div><span className="rounded-full bg-slate-100 px-3 py-1.5 text-[9px] font-bold text-slate-500">Demo</span><ChevronRight size={16} className="text-[#a8b5c4]"/></div>)}</div></div></div>}

          {section === "insights" && <div><div className="mb-7"><div className="mb-2 text-[10px] font-extrabold tracking-[.2em] text-[#2877ce]">{t.eyebrow}</div><h1 className="text-3xl font-extrabold text-[#0b2d55]">{t.insightsTitle}</h1><p className="mt-2 text-sm text-[#7a8da4]">{t.insightsSub}</p></div><div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{[[Activity,"1,284",t.trend],[MessageCircle,"386",t.questions],[Search,"42",t.unanswered],[Users,"18",t.inquiries]].map(([Icon,value,label])=><div key={label} className="rounded-2xl border border-[#e2eaf4] bg-white p-5"><div className="flex items-center justify-between text-xs font-semibold text-[#72869e]"><span>{label}</span><Icon size={18} className="text-[#2877ce]"/></div><div className="mt-5 text-3xl font-extrabold text-[#12365f]">{value}</div><div className="mt-1 text-[9px] text-[#a2afbd]">{t.last30} · illustrative data</div></div>)}</div><div className="mt-6 grid gap-5 xl:grid-cols-2"><div className="rounded-3xl border border-[#e2eaf4] bg-white p-6"><h3 className="font-extrabold text-[#15385f]">{t.interests}</h3><div className="mt-6 space-y-5">{[["Skin care",82],["Hair care",68],["Body care",44],["Wellness",29]].map(([x,n])=><div key={x}><div className="mb-2 flex justify-between text-xs"><span className="font-semibold text-[#58728e]">{x}</span><span className="text-[#8b9bb0]">{n}%</span></div><div className="h-2 rounded-full bg-[#edf2f8]"><div className="h-full rounded-full bg-[#2d80d2]" style={{width:n+"%"}}/></div></div>)}</div></div><div className="rounded-3xl border border-[#e2eaf4] bg-white p-6"><h3 className="font-extrabold text-[#15385f]">{t.questions}</h3><div className="mt-5 space-y-4">{["Which product fits my skin type?","What are the key ingredients?","How do I compare two products?","How can I start a private label brand?"].map((x,i)=><div key={x} className="flex items-center gap-3 border-b border-[#f0f3f7] pb-3 text-xs text-[#5f7893]"><span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#edf5ff] text-[10px] font-bold text-[#2877ce]">0{i+1}</span>{x}<ArrowUpRight className="ms-auto text-[#a4b4c6]" size={14}/></div>)}</div></div></div><p className="mt-4 text-[10px] text-[#a2afbd]">All metrics and examples on this screen are illustrative placeholders, not live customer analytics.</p></div>}
        </div>
        <footer className="border-t border-[#e5ebf3] px-6 py-5 text-center text-[10px] text-[#9aa9ba]">BONN MEDICAL INDUSTRY · {t.country} · AI EXPERIENCE PREVIEW</footer>
      </div>
      {mobileNav&&<button aria-label="Close navigation" onClick={()=>setMobileNav(false)} className="fixed inset-0 z-30 bg-[#041a34]/35 lg:hidden"/>}
    </main>
  );
}
