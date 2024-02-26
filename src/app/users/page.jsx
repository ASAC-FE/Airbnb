import Image from "next/image";
import image from "../users/image/카카오.png";

export default function Login() {
  return (
    <div className="bg-white text-black flex flex-col items-center min-h-screen sm:justify-center sm:pt-0">
      <div className="relative mt-12 w-full max-w-lg sm:mt-10">
        <div className="divide-y divide-gray-300 mx-5 border rounded-lg text-center lg:rounded-xl">
          <div className="p-2 text-base font-semibold">
            <button className="pl-3 text-left">X</button>
            <span className="p-3">로그인 또는 회원 가입</span>
          </div>
          <div className="p-6">
            <h3 className="pb-2 text-xl font-semibold text-left">
              에어비앤비에 오신 것을 환영합니다.
            </h3>
            <form>
              <div className="relative rounded-lg border-2 border-gray-200 px-2 pb-2.5 pt-2.5 my-3.5 focus-within:ring focus-within:ring-black">
                <input
                  type="text"
                  name="이메일"
                  placeholder="이메일"
                  autocomplete="off"
                  className="block w-full bg-transparent p-0 text-sm file:my-1 file:rounded-full file:border-0 file:bg-accent file:px-4 file:py-2 file:font-medium placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 sm:leading-7 text-foreground"
                />
              </div>
              <button
                className="font-semibold w-full transition duration-300 items-center justify-center rounded-md text-sm disabled:pointer-events-none disabled:opacity-50 bg-rose-500 text-white h-10"
                type="submit"
              >
                계속
              </button>
            </form>
            <div class="inline-flex items-center justify-center w-full">
              <hr className="w-full h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
              <span className="absolute px-3 font-medium text-gray-900 bg-white ">
                또는
              </span>
            </div>
            <button
              className="flex font-semibold w-full border border-black rounded-md text-sm bg-white text-black h-10"
              type="submit"
            >
              <Image src={image} alt="" className="size-4" />
              카카오로 로그인하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
