import Icon from '@/common/Icon'

const NextGreyButton = ({ text }: { text: string }) => {
  return (
    <button className="flex justify-center items-center w-[124px] h-12 border text-grey-sertis-400 border-grey-sertis-400 rounded-full text-grey-sertis-8 gap-2.5 font-semibold text-lg">
      <span>{text}</span>
      <Icon path="/icon/next_grey.svg" size={16.97} />
    </button>
  )
}
export default NextGreyButton
