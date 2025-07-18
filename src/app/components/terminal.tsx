
export default function Terminal({ children }: { children: React.ReactNode }) {
   return (
        <main className="flex h-screen w-screen justify-center items-center flex-col">
          <div className="w-[1000px] h-[600px]
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