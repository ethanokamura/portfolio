interface CardProps {
  children: React.ReactNode;
}

export const Card = ({children}: CardProps) => {

  return (
    <div className="z-1000 px-4 py-2 rounded-[10px] w-fit
    bg-surface/70 backdrop-blur-[20px] backdrop-saturate-180
     shadow-[0_4px_30px_rgba(0,0,0,0.1)] flex flex-col justify-center items-center
     ring-2 hover:ring-4 ring-accent/50 transition-all ease-linear duration-100 hover:scale-[105%]">
      {children}
    </div>
  );
}