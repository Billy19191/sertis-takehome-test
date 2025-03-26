const SaveGreyButton = ({ text }: { text: string }) => {
  return (
    <button className="flex justify-center items-center w-[94px] h-12 border text-grey-sertis-400 border-grey-sertis-400 rounded-full text-grey-sertis-8 gap-2.5 font-semibold text-lg">
      <span>{text}</span>
    </button>
  )
}
export default SaveGreyButton
