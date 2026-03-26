import finraLogo from "@/assets/Finara-brand.png";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-100 mt-12 py-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <img
              src={finraLogo}
              alt="Finara Logo"
              className="h-10 object-contain mb-4"
            />
            <p className="text-slate-400">
              Kelola keuangan Anda dengan mudah dan aman. Finara membantu kamu
              mengelola keuangan pribadi dengan lebih efisien dan efektif.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-slate-400">Email: support@finara.com</p>
            <p className="text-slate-400">Phone: +62 8123-4567-890</p>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8">
          <p className="text-center text-slate-400">
            &copy; 2026 Finara. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
