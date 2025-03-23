import Icon from '../common/Icon'

const HomePage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-[url('/background/BG_Welcome.png')] bg-cover bg-center gap-2">
      <div className="text-[40px] font-semibold text-white font-poppins">
        We have
      </div>
      <div className="text-[88px] font-semibold text-white font-poppins">
        A Special Deal
      </div>
      <div className="text-[72px] font-normal text-white font-old-standard-tT italic">
        For you
      </div>
      <div className="flex justify-center items-center w-12 h-12 rounded-full border-[1px] text-white">
        <Icon path="/icon/arrow_left.png" size={24} />
      </div>
    </div>
  )
}
export default HomePage
