import Pf from "@/app/users/img/tourist-8081644_1280.png";
import Image from "next/image";
import Check from "@/public/checkauth.svg";
import Introduce1 from "@/public/introduce1.svg";
import Introduce2 from "@/public/introduce2.svg";

export default async function Profile({ params: num }) {
  const obj = num;
  const id = parseInt(obj.id, 10);
  const response = await fetch(`http://localhost:3000/api/profile/${id}`);
  const jsonData = await response.json();
  const profileData = jsonData.data;

  return (
    <>
      <div className="w-[1359.2px] h-[652.8px] justify-center py-16 px-20">
        <div className="relative w-[1162px] flex py-16 space-x-20 mx-[98.6px]">
          <div className="sticky top-0 flex flex-col items-center justify-center w-[342px] h-[526.7px]">
            <div className="mb-8 w-[342px] h-[239.1px] border-hidden flex items-center justify-center shadow-[0px_10px_10px_10px_rgba(0,0,0,0.1)] rounded-3xl">
              <div className="w-[292.4px] h-[173.5px] flex space-x-6">
                <div className=" w-[172.4px] h-[173.5px] flex flex-col items-center justify-center">
                  <button className="relative w-[104px] h-[104px]  rounded-full overflow-hidden">
                    <Image
                      src={Pf}
                      alt="프로필사진"
                      className="absolute"
                      layout="fill"
                    />
                  </button>
                  <p className="text-[32px] mt-2 font-semibold">
                    {profileData.userName}
                  </p>
                  <p className="text-[14px] -mt-0.5 font-semibold">게스트</p>
                </div>
                <div className="flex flex-col w-[96px] h-[122.8px] mt-[25px] tracking-tight">
                  <p className="text-[22px] font-black">
                    {profileData.reviewNumber}
                  </p>
                  <p className="text-[10px] pb-3 font-semibold">후기</p>
                  <hr />
                  <p className="text-[22px] pt-3 font-black">
                    {profileData.years}
                  </p>
                  <p className="text-[10px] font-semibold">
                    에어비앤비 가입 기간(년)
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[342px] h-[255.6px] rounded-3xl border-[0.8px] border-gray-300 ">
              <div className="w-[292.4px] h-[190px] px-6 py-8">
                <div className="h-[26px] mb-6">
                  <p className="text-[22px] font-black">
                    {profileData.userName} 님의 인증 정보
                  </p>
                </div>
                <div className="h-[140px] flex flex-col gap-y-3">
                  <div className="flex gap-x-3">
                    <Check className="w-6 h-6" />
                    <p>신분증</p>
                  </div>
                  <div className="flex gap-x-3">
                    <Check className="w-6 h-6" />
                    <p>이메일 주소</p>
                  </div>
                  <div className="flex gap-x-3">
                    <Check className="w-6 h-6" />
                    <p>전화번호</p>
                  </div>
                  <strong className="text-sm underline">
                    본인 인증 절차 자세히 알아보기
                  </strong>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[740px] h-[652.8px] flex-col tracking-tighter">
            <div className="h-[157.6px] flex-col gap-y-10">
              <p className="text-[32px] font-black">
                {profileData.userName} 님 소개
              </p>
              <button className="w-[131px] h-[32px] font-bold px-2 text-[14px]  border-[0.8px] border-solid border-black rounded-lg mt-6">
                프로필 수정하기
              </button>
            </div>
            <div className="h-6 flex gap-x-4">
              <div className="w-[358px] flex gap-x-3">
                <Introduce1 className="w-6 h-6" />
                <p>취미: {profileData.hobby}</p>
              </div>
              <div className="w-[358px] flex gap-x-3">
                <Introduce2 className="w-6 h-6" />
                <p>거주지: {profileData.country}</p>
              </div>
            </div>
            <div className="w-[740px] h-[495.2px]">
              <hr className="my-8" />
              <div className="h-[353.6px] flex-col">
                <p className="text-[22px] font-bold mb-8">
                  {profileData.userName} 님에 대한 호스트의 후기
                </p>
                <div className="flex space-x-2">
                  <div className="w-[366px] h-[224px] border-[0.8px] border-gray-300 rounded-2xl">
                    <p className="p-5">{profileData.firstReview}</p>
                  </div>
                  <div className="w-[366px] h-[224px] border-[0.8px] border-gray-300 rounded-2xl">
                    <p className="p-5">{profileData.secondReview}</p>
                  </div>
                </div>
                <button className="w-[146px] h-[46px] border font-bold rounded-lg border-black mt-6">
                  후기 표시하기
                </button>
              </div>
              <hr className="mt-10 mb-6" />
              <strong className="underline">내가 작성한 후기</strong>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
