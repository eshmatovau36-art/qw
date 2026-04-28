/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Library, 
  BookOpen, 
  ExternalLink, 
  Youtube, 
  X,
  ChevronRight,
  Sparkles,
  SearchCode,
  GraduationCap
} from 'lucide-react';

// Book interface
interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  category: string;
  coverColor: string;
  youtubeUrl: string;
  googleUrl: string;
}

// Initial book database
const BOOKS: Book[] = [
  {
    id: '1',
    title: 'Anor',
    author: 'Choʻlpon',
    description: 'Uzbek adabiyotining durdonalaridan biri. Murakkab taqdirlar va insoniy tuygʻular tasviri.',
    category: 'Badiiy',
    coverColor: 'bg-red-500',
    youtubeUrl: 'https://www.youtube.com/results?search_query=Anor+asari+haqida',
    googleUrl: 'https://www.google.com/search?q=Anor+asari+Choʻlpon'
  },
  {
    id: '2',
    title: 'Matematika',
    author: 'Oʻquv qoʻllanma',
    description: 'Mantiqiy fikrlashni rivojlantiruvchi va asosiy matematik qonuniyatlarni oʻrgatuvchi kitob.',
    category: 'Ilmiy',
    coverColor: 'bg-blue-600',
    youtubeUrl: 'https://www.youtube.com/results?search_query=Matematika+darslari+uzbekcha',
    googleUrl: 'https://www.google.com/search?q=Matematika+fanining+asoslari'
  },
  {
    id: '3',
    title: 'Ingliz tili',
    author: 'Oxford / Cambridge',
    description: 'Global muloqot tili boʻlgan ingliz tilini oson va qulay oʻrganish uchun qoʻllanma.',
    category: 'Tillar',
    coverColor: 'bg-indigo-700',
    youtubeUrl: 'https://www.youtube.com/results?search_query=Ingliz+tilini+o%CA%BBrganish',
    googleUrl: 'https://www.google.com/search?q=Ingliz+tili+grammatikasi'
  },
  {
    id: '4',
    title: 'Shahmat',
    author: 'Grossmeysterlar',
    description: 'Strategik fikrlash sanʼati. Shahmat sirlari va eng mashhur partiyalar tahlili.',
    category: 'Sport',
    coverColor: 'bg-slate-800',
    youtubeUrl: 'https://www.youtube.com/results?search_query=Shahmat+sirlari',
    googleUrl: 'https://www.google.com/search?q=Shahmat+strateqiyalari'
  },
  {
    id: '5',
    title: 'Kambagʻal ota va Boy ota',
    author: 'Robert Kiyosaki',
    description: 'Moliyaviy savodxonlik haqida dunyodagi eng mashhur kitoblardan biri.',
    category: 'Moliya',
    coverColor: 'bg-emerald-600',
    youtubeUrl: 'https://www.youtube.com/results?search_query=Kambag%CA%BBal+ota+va+Boy+ota+xulosa',
    googleUrl: 'https://www.google.com/search?q=Rich+Dad+Poor+Dad+book+summary'
  },
  {
    id: '6',
    title: 'Sariq devni minib',
    author: 'Xudoyberdi Toʻxtaboyev',
    description: 'Bolalar adabiyotining eng yorqin namunasi. Sarguzashtlarga boy va qiziqarli asar.',
    category: 'Sarguzasht',
    coverColor: 'bg-yellow-500',
    youtubeUrl: 'https://www.youtube.com/results?search_query=Sariq+devni+minib+audio+kitob',
    googleUrl: 'https://www.google.com/search?q=Sariq+devni+minib+asari+tahlili'
  },
  {
    id: '7',
    title: 'Dunyo ishlari',
    author: 'Oʻtkir Hoshimov',
    description: 'Insoniy qadriyatlar, mehr-oqibat va hayotiy hikoyalarni oʻz ichiga olgan asar.',
    category: 'Badiiy',
    coverColor: 'bg-amber-700',
    youtubeUrl: 'https://www.youtube.com/results?search_query=Dunyo+ishlari+O%CA%BBrkir+Hoshimov',
    googleUrl: 'https://www.google.com/search?q=Dunyo+ishlari+asari+haqida'
  }
];

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const filteredBooks = useMemo(() => {
    return BOOKS.filter(book => 
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <div id="najot-talim-library" className="min-h-screen relative overflow-hidden text-slate-100 font-sans selection:bg-emerald-500/30">
      {/* Background Decor */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px] animate-float pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-emerald-600/10 rounded-full blur-[120px] animate-float-delayed pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30%] h-[30%] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/5 backdrop-blur-lg border-b border-white/10 px-6 py-5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="bg-emerald-500 p-2.5 rounded-xl shadow-lg shadow-emerald-500/20">
              <Library className="text-white w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-white leading-none">
                Najot Ta'lim <span className="text-emerald-400">Kutubxonasi</span>
              </h1>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] mt-1.5 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-emerald-400" /> Kelajak uchun ta'lim
              </p>
            </div>
          </div>

          <div className="relative group flex-1 max-w-xl">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-emerald-400 transition-colors">
              <Search className="w-5 h-5" />
            </div>
            <input 
              type="text"
              placeholder="Kitoblar dunyosidan qidiring..."
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-emerald-500/20 focus:bg-white/10 focus:border-white/20 transition-all outline-none text-sm shadow-inner"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="hidden lg:flex items-center gap-2">
             <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-slate-300">Bosh sahifa</div>
             <div className="px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-semibold">Kitoblar</div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Left Column: Books Grid */}
          <div className="lg:col-span-3">
             <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  Yangi qo'shilganlar
                </h2>
                <div className="h-1 w-12 bg-emerald-500 rounded-full mt-1.5" />
              </div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                Natijalar: {filteredBooks.length}
              </div>
            </div>

            <motion.div 
              layout
              className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {filteredBooks.map((book) => (
                  <motion.div
                    key={book.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    whileHover={{ scale: 1.02 }}
                    className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-5 flex flex-col gap-4 hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer relative overflow-hidden"
                    onClick={() => setSelectedBook(book)}
                  >
                    <div className={`aspect-[3/4] w-full ${book.coverColor.replace('bg-', 'bg-')}/40 rounded-2xl flex items-center justify-center border border-white/5 text-5xl shadow-2xl relative group-hover:scale-[1.03] transition-transform`}>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
                        <span className="relative z-10 filter drop-shadow-lg">
                           {book.title === 'Anor' ? '🍎' : 
                            book.title === 'Matematika' ? '📐' :
                            book.title === 'Ingliz tili' ? '🇬🇧' :
                            book.title === 'Shahmat' ? '♟️' :
                            book.title === 'Kambagʻal ota va Boy ota' ? '💰' :
                            book.title === 'Sariq devni minib' ? '👹' : '🌍'}
                        </span>
                    </div>
                    
                    <div className="flex flex-col flex-1">
                      <h3 className="font-bold text-white group-hover:text-emerald-400 transition-colors line-clamp-1">{book.title}</h3>
                      <p className="text-[11px] text-slate-400 font-medium mb-4">{book.author}</p>
                      
                      <button className="mt-auto w-full py-2.5 bg-emerald-500 hover:bg-emerald-600 rounded-xl text-xs font-bold text-white transition-all shadow-lg shadow-emerald-500/20 active:scale-95">
                        O'qish
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {filteredBooks.length === 0 && (
              <div className="py-20 text-center bg-white/5 rounded-3xl border border-white/10 backdrop-blur-md">
                <div className="bg-white/5 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SearchCode className="text-slate-500 w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-white">Kitob topilmadi</h3>
                <p className="text-slate-400 text-sm">Boshqa kalit soʻzlar bilan qidirib koʻring.</p>
              </div>
            )}
          </div>

          {/* Right Column: Sidebar Tools */}
          <aside className="lg:col-span-1 flex flex-col gap-6">
            {/* Google Search Tool */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 flex flex-col gap-5">
              <div className="flex items-center gap-2">
                <span className="text-blue-400 font-black text-2xl">G</span>
                <span className="text-red-400 font-black text-2xl">o</span>
                <span className="text-yellow-400 font-black text-2xl">o</span>
                <span className="text-blue-400 font-black text-2xl">g</span>
                <span className="text-green-400 font-black text-2xl">l</span>
                <span className="text-red-400 font-black text-2xl">e</span>
              </div>
              <p className="text-xs text-slate-400 font-medium leading-relaxed">
                Qo'shimcha ma'lumotlar va tadqiqotlar uchun dunyodagi eng katta qidiruv tizimidan foydalaning.
              </p>
              <a 
                href="https://google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 border border-white/10 p-4 rounded-2xl flex items-center justify-between hover:bg-white/20 transition-all group"
              >
                <span className="text-slate-400 text-sm group-hover:text-white">Qidiruv boshlash...</span>
                <Search className="w-5 h-5 text-slate-500 group-hover:text-emerald-400" />
              </a>
            </div>

            {/* YouTube Tool */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 flex flex-col gap-5">
              <div className="flex items-center gap-2 text-red-500 font-black italic tracking-tighter text-xl">
                 <Youtube className="w-8 h-8 fill-current" />
                 <span>YouTube</span>
              </div>
              <p className="text-xs text-slate-400 font-medium">
                Video darslar va interaktiv qo'llanmalar orqali bilimingizni boyiting.
              </p>
              <div className="relative aspect-video rounded-2xl overflow-hidden group cursor-pointer border border-white/10">
                 <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
                 <img 
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" 
                    alt="YouTube thumbnail"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                 />
                 <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center shadow-2xl shadow-red-600/50 group-hover:scale-110 transition-transform">
                       <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent ml-1" />
                    </div>
                 </div>
              </div>
              <p className="text-[10px] text-slate-500 text-center uppercase tracking-[0.3em] font-bold mt-2">
                Darslarni tomosha qiling
              </p>
            </div>

            {/* Quote of the Day */}
            <div className="bg-gradient-to-br from-emerald-500/20 to-blue-500/20 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-8">
              <p className="text-emerald-300 text-xs font-bold uppercase tracking-widest mb-4">Kun hikmati</p>
              <p className="text-lg font-medium italic text-slate-200 leading-relaxed">
                "O'qishdan to'xtagan odam fikrlashdan ham to'xtaydi."
              </p>
              <p className="text-xs text-slate-500 mt-4 font-bold">— Deni Didro</p>
            </div>
          </aside>
        </div>
      </main>

      {/* Book Modal */}
      <AnimatePresence>
        {selectedBook && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedBook(null)}
              className="absolute inset-0 bg-[#0f172a]/80 backdrop-blur-md"
            />
            
            <motion.div 
              layoutId={selectedBook.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-xl bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[3rem] shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedBook(null)}
                className="absolute top-6 right-6 z-10 p-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-colors border border-white/10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className={`p-10 ${selectedBook.coverColor.replace('bg-', 'bg-')}/30 flex items-center justify-center border-r border-white/10 min-h-[300px]`}>
                   <div className="relative group">
                     <div className="absolute -inset-4 bg-white/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                     <span className="text-9xl relative z-10 filter drop-shadow-2xl">
                        {selectedBook.title === 'Anor' ? '🍎' : 
                         selectedBook.title === 'Matematika' ? '📐' :
                         selectedBook.title === 'Ingliz tili' ? '🇬🇧' :
                         selectedBook.title === 'Shahmat' ? '♟️' :
                         selectedBook.title === 'Kambagʻal ota va Boy ota' ? '💰' :
                         selectedBook.title === 'Sariq devni minib' ? '👹' : '🌍'}
                     </span>
                   </div>
                </div>

                <div className="p-10 flex flex-col">
                  <div className="mb-8">
                    <span className="px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-[10px] font-bold text-emerald-400 uppercase tracking-widest">
                      {selectedBook.category}
                    </span>
                    <h3 className="text-3xl font-black text-white mt-4 leading-tight">{selectedBook.title}</h3>
                    <p className="text-slate-400 font-bold text-sm mt-2">{selectedBook.author}</p>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed mb-10 flex-1">
                    {selectedBook.description}
                  </p>

                  <div className="flex flex-col gap-4">
                    <div className="grid grid-cols-2 gap-3">
                      <a 
                        href={selectedBook.googleUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 py-3 px-4 bg-white/5 border border-white/10 rounded-2xl text-xs font-bold text-white hover:bg-white/10 transition-all group"
                      >
                         <svg className="w-4 h-4" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                        Google
                      </a>
                      <a 
                        href={selectedBook.youtubeUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 py-3 px-4 bg-white/5 border border-white/10 rounded-2xl text-xs font-bold text-white hover:bg-white/10 transition-all group"
                      >
                        <Youtube className="w-4 h-4 text-red-500 fill-current" />
                        YouTube
                      </a>
                    </div>
                    <button 
                      onClick={() => setSelectedBook(null)}
                      className="w-full py-4 bg-emerald-500 rounded-2xl text-sm font-black text-white shadow-xl shadow-emerald-500/20 hover:bg-emerald-600 transition-all"
                    >
                      Bosh sahifaga qaytish
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-12 flex flex-col items-center gap-6 border-t border-white/10">
        <div className="flex items-center gap-3 opacity-60">
          <div className="bg-white/10 p-2 rounded-xl border border-white/10">
            <Library className="text-white w-5 h-5" />
          </div>
          <span className="font-bold text-white tracking-tight">Najot Ta'lim</span>
        </div>
        <p className="text-[10px] text-slate-500 uppercase tracking-[0.4em] font-black text-center">
          © 2026 Najot Ta'lim - Kuch - bilim va tafakkurda
        </p>
      </footer>
    </div>
  );
}

function focusedBooksCount(count: number) {
  return count === 1 ? '1 ta kitob' : `${count} ta kitob`;
}
