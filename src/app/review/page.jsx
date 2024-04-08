import Header from "@component_rooms/header/ui_header";
import { DynamicSVGComponent } from "@component_rooms/_common/defineSVG";
import Clean from "/public/review/clean.svg"
import Check from "/public/review/check.svg"
import CheckIn from "/public/review/checkIn.svg"
import Communication from "/public/review/communication.svg"
import Location from "/public/review/location.svg"
import Satisfaction from "/public/review/satisfaction.svg"
import Search from '/public/home/search.svg'
import UserReview from '@/app/components/review/UserReview'
export default function Review() {
    return (
        <>
            <Header />
            <div className="flex mr-80">
                <div className="flex flex-col">
                    <div className="flex ml-80 my-12">
                        <DynamicSVGComponent componentName={"Star"} className={"w-12 h-12"} />
                        <span className="text-4xl p-1">4.89</span>
                    </div>
                    <div className="w-[400px] ml-80 mr-20 my-4">
                        <div className="w-full flex justify-between items-center py-4 border-b">
                            <Clean width="28" height="28" />
                            <span className="text-xl flex-grow ml-4">청결도</span>
                            <span className="px-4">4.7</span> 
                        </div>
                        <div className="flex justify-between items-center py-4 border-b">
                            <Check width="28" height="28" />
                            <span className="text-xl flex-grow ml-4">정확도</span>
                            <span className="px-4">4.9</span>
                        </div>
                        <div className="flex justify-between items-center py-4 border-b">
                            <CheckIn width="28" height="28" />
                            <span className="text-xl flex-grow ml-4">체크인</span>
                            <span className="px-4">4.9</span>
                        </div>
                        <div className="flex justify-between items-center py-4 border-b">
                            <Communication width="28" height="28" />
                            <span className="text-xl flex-grow ml-4">의사소통</span>
                            <span className="px-4">4.9</span>
                        </div>
                        <div className="flex justify-between items-center py-4 border-b">
                            <Location width="28" height="28" />
                            <span className="text-xl flex-grow ml-4">위치</span>
                            <span className="px-4">4.9</span>
                        </div>
                        <div className="flex justify-between items-center py-4 border-b">
                            <Satisfaction width="28" height="28" />
                            <span className="text-xl flex-grow ml-4">가격 대비 만족도</span>
                            <span className="px-4">4.9</span>
                        </div>
                    </div>
                </div>
                <div className="w-[600px] my-12">
                    <div className="flex justify-between items-center mb-8">
                        <span className="w-auto text-3xl">후기 2개</span>
                        <button className="w-20 h-8 border border-gray-300 rounded-full text-sm">최신순</button>
                    </div>
                    <div className="flex w-auto h-auto p-2 m-4 border border-gray-500 rounded-full">
                        <Search width="24" height="24" color={'black'} />
                        <input type="text" className="w-full mx-2 focus:outline-none" placeholder="후기 검색" />
                    </div>
                    <UserReview />
                </div>        
            </div>

        </>
    )
}