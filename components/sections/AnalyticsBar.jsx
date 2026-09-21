"use client";

export default function AnalyticsBar({ className = "" }) {
  return (
    <div className={`w-full max-w-[1920px] mx-auto ${className}`}>
      <div className="flex flex-col md:flex-row items-center justify-between gap-5 lg:gap-6 w-full">
        {/* Card 1 */}
        <div
          className="w-full max-w-[270px] border border-white/10 rounded-none p-6 lg:p-8 flex flex-col items-center justify-center text-center transition-transform duration-300 hover:-translate-y-1"
          style={{
            background:
              "linear-gradient(179.96deg, #1F0F8C -187.5%, #080426 99.97%)",
            boxShadow: "8px 10px 16px 0px #00000040",
          }}
        >
          <span className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            +318
          </span>
          <span className="mt-2 text-base lg:text-lg font-medium text-slate-200">
            سائق نشط
          </span>
        </div>

        {/* Card 2 */}
        <div
          className="w-full max-w-[270px] border border-white/10 rounded-none p-6 lg:p-8 flex flex-col items-center justify-center text-center transition-transform duration-300 hover:-translate-y-1"
          style={{
            background:
              "linear-gradient(179.96deg, #1F0F8C -187.5%, #080426 99.97%)",
            boxShadow: "8px 10px 16px 0px #00000040",
          }}
        >
          <span className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            +12,000
          </span>
          <span className="mt-2 text-base lg:text-lg font-medium text-slate-200">
            مستخدم مسجَّل
          </span>
        </div>

        {/* Card 3 */}
        <div
          className="w-full max-w-[270px] border border-white/10 rounded-none p-6 lg:p-8 flex flex-col items-center justify-center text-center transition-transform duration-300 hover:-translate-y-1"
          style={{
            background:
              "linear-gradient(179.96deg, #1F0F8C -187.5%, #080426 99.97%)",
            boxShadow: "8px 10px 16px 0px #00000040",
          }}
        >
          <span className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            12 د
          </span>
          <span className="mt-2 text-base lg:text-lg font-medium text-slate-200">
            متوسط وقت الوصول
          </span>
        </div>
      </div>
    </div>
  );
}
