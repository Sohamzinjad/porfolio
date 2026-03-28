export function HandshakeIllustration() {
  const fingerOffsets = [0, 1, 2, 3];

  return (
    <div className="relative mx-auto h-[11.5rem] w-full max-w-[40rem] sm:h-[14rem] lg:h-[16rem]">
      <div className="absolute inset-x-[10%] bottom-[9%] h-[14%] rounded-full bg-ink/[0.06] blur-2xl" />

      <div className="absolute left-[-2%] top-[18%] h-[22%] w-[42%] -rotate-[16deg] rounded-r-[5rem] border-[4px] border-ink bg-white" />
      <div className="absolute right-[-2%] top-[18%] h-[22%] w-[42%] rotate-[16deg] rounded-l-[5rem] border-[4px] border-ink bg-ink" />

      <div className="absolute left-[26%] top-[35%] h-[28%] w-[11%] -rotate-[16deg] rounded-[1.5rem] border-[4px] border-ink bg-white" />
      <div className="absolute right-[26%] top-[35%] h-[28%] w-[11%] rotate-[16deg] rounded-[1.5rem] border-[4px] border-ink bg-white" />

      <div className="absolute left-[36%] top-[38%] h-[24%] w-[18%] -rotate-[16deg] rounded-[2.2rem] border-[4px] border-ink bg-white" />
      <div className="absolute right-[36%] top-[38%] h-[24%] w-[18%] rotate-[16deg] rounded-[2.2rem] border-[4px] border-ink bg-white" />

      <div className="absolute left-1/2 top-[46%] h-[18%] w-[18%] -translate-x-1/2 rounded-[2rem] border-[4px] border-ink bg-white" />
      <div className="absolute left-[43%] top-[57%] h-[18%] w-[7%] rotate-[18deg] rounded-full border-[4px] border-ink bg-white" />
      <div className="absolute right-[43%] top-[57%] h-[18%] w-[7%] -rotate-[18deg] rounded-full border-[4px] border-ink bg-white" />

      {fingerOffsets.map((offset) => (
        <div
          key={`left-${offset}`}
          className="absolute h-[11%] w-[5.5%] rounded-full border-[4px] border-ink bg-white"
          style={{
            left: `${43.5 + offset * 2.8}%`,
            top: `${65 + offset * 1.3}%`
          }}
        />
      ))}

      {fingerOffsets.map((offset) => (
        <div
          key={`right-${offset}`}
          className="absolute h-[11%] w-[5.5%] rounded-full border-[4px] border-ink bg-white"
          style={{
            right: `${43.5 + offset * 2.8}%`,
            top: `${65 + offset * 1.3}%`
          }}
        />
      ))}
    </div>
  );
}
