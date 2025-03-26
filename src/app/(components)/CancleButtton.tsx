import Link from 'next/link'

const CancleButton = () => {
  return (
    <button className="flex justify-center items-center w-[124px] h-12  text-grey-sertis-800 border-grey-sertis-800 gap-2.5 font-semibold text-lg">
      <Link href="/register/review">
        <span className="hover:text-primary-500">Cancle</span>
      </Link>
    </button>
  )
}
export default CancleButton
