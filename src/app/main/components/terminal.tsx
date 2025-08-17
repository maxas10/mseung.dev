
export default function Terminal({ children }: { children: React.ReactNode }) {
   return (
        <main className="flex h-screen w-screen justify-center items-center flex-col">
          <div className="lg:w-[1000px] lg:h-[600px] md:w-[700px] md:h-[400px] sm:w-[600px] sm:h-[400px] w-screen h-screen
          bg-black
            rounded-md 
            shadow-2xl 
            p-5
          border-gray-400
            border-[1px] 
            overflow-y-scroll 

            [&::-webkit-scrollbar]:w-2
          [&::-webkit-scrollbar-track]:bg-gray-100
          [&::-webkit-scrollbar-thumb]:bg-gray-300
          dark:[&::-webkit-scrollbar-track]:bg-black
          dark:[&::-webkit-scrollbar-thumb]:bg-gray-400"
          >
            {children}
          </div>
        </main>
  );
}