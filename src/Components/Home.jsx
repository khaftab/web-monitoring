const Home = () => {
  return (
    <div>
      <div className="bg-gray-900 py-7">
        <div className="container mx-auto flex flex-row items-center justify-between">
          <div>
            <p className="font-bold text-white text-4xl">Web Monitoring</p>
          </div>
          <div>
            <h2 className="text-white font-semibold text-2xl">Service Status</h2>
            <p className="text-gray-400">Last updated 1:37:18 AM | Next update in 28 sec.</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-9 py-9 shadow-lg flex items-center">
        <div className="w-5 h-5 rounded-full bg-green-400"></div>
        <h2 className="font-semibold text-2xl ml-3">
          All systems <span className="text-green-500">operational</span>
        </h2>
      </div>
    </div>
  )
}

export default Home