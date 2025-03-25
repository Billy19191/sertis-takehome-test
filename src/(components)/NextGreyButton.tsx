import Icon from '@/common/Icon'

const NextGreyButton = () => {
  return (
    <button className="flex justify-center items-center w-[124px] h-12 border border-grey-sertis-800 rounded-full text-grey-sertis-8 gap-2.5 font-semibold text-lg">
      <span>Next</span>
      <Icon path="/icon/next_black.svg" size={16.97} />
    </button>
  )
}
export default NextGreyButton
