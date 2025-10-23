export const AnimatedBackgroundAlt = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating shapes */}
      <div 
        className="absolute top-10 right-20 w-64 h-64 bg-primary/10 rounded-full blur-2xl"
        style={{ 
          animation: "float 8s ease-in-out infinite"
        }}
      />
      <div 
        className="absolute bottom-32 left-20 w-72 h-72 bg-foreground/5 rounded-full blur-2xl"
        style={{ 
          animation: "float 10s ease-in-out infinite reverse",
          animationDelay: "2s"
        }}
      />
      <div 
        className="absolute top-1/3 left-1/4 w-48 h-48 bg-primary/8 rounded-full blur-2xl"
        style={{ 
          animation: "float 12s ease-in-out infinite",
          animationDelay: "4s"
        }}
      />
      
      {/* Diagonal lines pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            hsl(var(--foreground)) 0px,
            hsl(var(--foreground)) 1px,
            transparent 1px,
            transparent 60px
          )`
        }}
      />
      
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
      `}</style>
    </div>
  );
};
