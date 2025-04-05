
const TrustedBy = () => {
  return (
    <section className="py-12 bg-gray-50 dark:bg-crypto-gray/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-gray-500 dark:text-gray-400 text-sm uppercase font-medium tracking-wider">
            ILS NOUS FONT CONFIANCE
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <div className="h-12 w-32 bg-gray-200 dark:bg-crypto-gray rounded-md flex items-center justify-center">
                <span className="font-semibold text-gray-500 dark:text-gray-400">ENTREPRISE {i+1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
