function Progress({ name, value }) {
    return (
      <div className="mb-6">
        <div className="flex items-center justify-between mb-1">
          <h2 className="text-lg font-bold">{name}</h2>
        </div>
  
        {/* Progress Bar */}
        <div className="relative w-full h-4 bg-gray-200 rounded-full">
          <div
            className="absolute top-0 left-0 h-full rounded-full"
            style={{
              width: `${value}%`,
              background: 'linear-gradient(to right, #fb923c, #fed7aa)',
            }}
          ></div>
        </div>
      </div>
    );
  }
  
  export default Progress;